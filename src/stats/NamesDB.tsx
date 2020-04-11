import {Markup} from "./Markup";
import * as React from "react";

// export class NamesDB
// {
//   private namesDict: Set<WordInfo> = new Set();
// }

export class WordInfo
{
  protected _word: string;
  protected _count: number;
  protected _dates: Date[] = []; //set can't identify duplicate dates

  constructor(word: string, count: number, date?: Date)
  {
    this._word = word;
    this._count = count;
    if (date !== undefined)
    {
      this.addDate(date);
    }
  }

  public get word(): string
  {
    return this._word;
  }

  public set word(value: string)
  {
    this._word = value;
  }

  public get count(): number
  {
    return this._count;
  }

  public set count(value: number)
  {
    this._count = value;
  }

  public get dates(): Date[]
  {
    return this._dates;
  }

//TODO: the set isn't keeping the dates unique
  public addDate(newDate: Date): void
  {
    //TODO: very inefficient
    let found: boolean = false;
    this._dates.forEach((date: Date) => {
      if (date.getTime() === newDate.getTime())
      {
        found = true; //already here, nothing to do
      }
    });
    if (!found)
    {
      this._dates.push(newDate);
    }
  }

  public clearDates(): void
  {
    this._dates = [];
  }

  private getSortedDates(): Date[]
  {
    const sortedArray = Array.from(this._dates).sort((a: Date, b: Date) => {
      return a.getTime() - b.getTime();
    });
    return sortedArray;
  }

  public getFirstDate(): Date
  {
    return this.getSortedDates()[0];
  }

  public getLastDate(): Date
  {
    const sortedDates: Date[] = this.getSortedDates();
    return sortedDates[sortedDates.length - 1];
  }

  public makeHtmlElememt(): JSX.Element | null
  {
    console.error("Not implemented");
    return null;
  }
}

//word is firstName_lastName
export class NameInfo extends WordInfo
{
  constructor(markup: Markup, count: number, date?: Date)
  {
    super(markup.getKey(), count, date);
    this._markup = markup;
    this.displayNames.add(markup.displayName);
  }

  public displayNames: Set<String> = new Set();
  private _markup: Markup;

  public set word(value: string)
  {
    if (!Markup.isMarkup(value))
    {
      throw Error("Must be valid markup to be a NameInfo");
    }
    this._word = Markup.create(value).getKey();
  }

  public get word(): string
  {
    return this.markup.displayName; //TODO:
  }

  public get markup(): Markup
  {
    return this._markup;
  }

  public addDisplayName(displayName: string): void
  {
    this.displayNames.add(displayName);
  }

  //display name doesn't matter - only first and last name pair is unique
  public static equals(a: NameInfo, b: NameInfo): boolean
  {
    return a.markup.firstName === b.markup.firstName
        && a.markup.lastName === b.markup.lastName;
  }

  //key is used as the map key to group unique first/last name pairs regardless
  //of display names
  public getKey(): string
  {
    return this.markup.getKey();
  }

  private makeTooltip(): JSX.Element
  {
    const markup: Markup = this.markup;

    return <div>
      <div>
        {"Display Names: "}
        {
          Array.from(this.displayNames).map((displayName: String) => {
            return <span key={this.getKey() + displayName}>
              {displayName},&nbsp;
            </span>;
          })
        }
      </div>
      <div>
        Unique Days:
      </div>
      <div>
        Average usages per day:
      </div>
      <div>

      </div>
    </div>;
  }

  public makeHtmlElememt(): JSX.Element | null
  {
    const markup: Markup = this.markup;
    if (markup == null || markup.firstName == null || markup.lastName == null || markup.displayName == null)
    {
      return null;
    }

    //TODO: show multiple display names
    return <span className="rendered-markup-display-name">
      {markup.firstName + " " + markup.lastName}
      <span className="tooltip">
        {this.makeTooltip()}
      </span>
    </span>;
  }
}

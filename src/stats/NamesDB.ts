import {Markup} from "./Markup";

// export class NamesDB
// {
//   private namesDict: Set<WordInfo> = new Set();
// }

export class WordInfo
{
  protected _word: string;
  protected _count: number;
  protected _dates: Set<Date> = new Set();

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

  public get dates(): Set<Date>
  {
    return this._dates;
  }

  public addDate(date: Date): void
  {
    this._dates.add(date);
  }

  public clearDates(): void
  {
    this._dates.clear();
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
}

//word is firstName_lastName
export class NameInfo extends WordInfo
{
  constructor(markup: Markup, count: number, date?: Date)
  {
    super(markup.getKey(), count, date);
    this._markup = markup;
    this.displayNames = [markup.displayName];
  }

  public displayNames: string[];
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
    // return Markup.create(this._word)
    return this._markup;
  }

  public addDisplayName(displayName: string): void
  {

  }

  //display name doesn't matter - only first and last name pair is unique
  public static equals(a: NameInfo, b: NameInfo)
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
}

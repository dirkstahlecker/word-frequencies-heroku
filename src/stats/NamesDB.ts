import {Markup} from "./Markup";

// export class NamesDB
// {
//   private namesDict: Set<WordInfo> = new Set();
// }

export class WordInfo
{
  protected _word: string;
  protected _count: number;

  constructor(word: string, count: number)
  {
    this._word = word;
    this._count = count;
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
}

export class NameInfo extends WordInfo
{
  constructor(word: string, count: number)
  {
    if (!Markup.isMarkup(word))
    {
      throw Error("Must be valid markup to be a NameInfo");
    }
    super(word, count);
  }

  public set word(value: string)
  {
    if (!Markup.isMarkup(value))
    {
      throw Error("Must be valid markup to be a NameInfo");
    }
    this._word = value;
  }

  public get word(): string
  {
    //we know it's markup since it's checked in the setter
    return Markup.create(this._word).displayName;
  }

  public get markup(): Markup
  {
    return Markup.create(this._word)
  }
}

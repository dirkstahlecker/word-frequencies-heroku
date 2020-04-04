import * as React from "react";

//stores a markup object
export class Markup
{
  //eslint-disable-next-line no-useless-escape
	public static MARKUP_REGEX = /\[!!([^\|]+)\|([^_]+)_([^!]+)!!\]/;

  private _displayName: string;
  private _firstName: string;
  private _lastName: string;

  public static getMarkupPieces(markup: string): RegExpExecArray | null
  {
    return Markup.MARKUP_REGEX.exec(markup);
  }

  public static isMarkup(rawString: string): boolean
  {
    return Markup.MARKUP_REGEX.test(rawString);
  }

  private constructor(displayName: string, firstName: string, lastName: string)
  {
    this._firstName = firstName;
    this._lastName = lastName;
    this._displayName = displayName;
  }

	private static cleanMarkupPiece(piece: string): string
	{
		return piece.replace(/\s/g, "");
	}

  public static create(rawString: string): Markup
  {
    const pieces: RegExpExecArray | null = Markup.getMarkupPieces(rawString);
    if (pieces == null || pieces.length !== 4)
    {
      throw Error("Invalid markup");
    }

    const markupClass: Markup = new Markup(
			Markup.cleanMarkupPiece(pieces[1]),
			Markup.cleanMarkupPiece(pieces[2]),
			Markup.cleanMarkupPiece(pieces[3]));
    return markupClass;
  }

  public get firstName(): string
  {
    return this._firstName;
  }

  public get lastName(): string
  {
    return this._lastName;
  }

  public get displayName(): string
  {
    return this._displayName;
  }

	public static getHtmlForMarkup(markup: Markup): JSX.Element | null
	{
		if (markup == null || markup.firstName == null || markup.lastName == null || markup.displayName == null)
		{
			return null;
		}

		//TODO: show multiple display names
		return <span className="rendered-markup-display-name">
			{markup.firstName + " " + markup.lastName}
			<span className="tooltip">
				{markup.displayName}
			</span>
		</span>;
	}
}

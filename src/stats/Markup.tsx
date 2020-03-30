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

  public static create(rawString: string): Markup
  {
    const pieces: RegExpExecArray | null = Markup.getMarkupPieces(rawString);
    if (pieces == null || pieces.length !== 4)
    {
      throw Error("Invalid markup");
    }

    const markupClass: Markup = new Markup(pieces[1], pieces[2], pieces[3]);
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

		return <span className="rendered-markup-display-name">
			{markup.displayName}
			<span className="tooltip">
				{markup.firstName}&nbsp;{markup.lastName}
			</span>
		</span>;
	}
}

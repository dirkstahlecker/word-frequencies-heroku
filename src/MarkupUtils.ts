// import * as React from 'react';

export class MarkupUtils
{
  //eslint-disable-next-line no-useless-escape
	public  static MARKUP_REGEX = /\[!!([^\|]+)\|([^_]+)_([^!]+)!!\]/;
  
  public static makeMarkup(firstName: string, lastName: string, displayName: string = ""): string
  {
      return "[!!" + (displayName === "" ? firstName : displayName) + "|" + firstName + "_" + lastName + "!!]";
  }

  private static getMarkupPieces(markup: string): RegExpExecArray | null
  {
  	return MarkupUtils.MARKUP_REGEX.exec(markup);
  }

  public static getFullMarkupFromString(rawText: string): string | null
  {
  	const pieces: RegExpExecArray | null = MarkupUtils.getMarkupPieces(rawText);
  	if (pieces == null)
  	{
  		return null
  	}
  	return pieces[0];
  }

  public static getDisplayNameFromMarkup(markup: string): string | null
  {
  	const pieces: RegExpExecArray | null = MarkupUtils.getMarkupPieces(markup);
  	if (pieces == null)
  	{
  		return null
  	}
  	return pieces[1];
  }

  public static getFirstNameFromMarkup(markup: string): string | null
  {
  	const pieces: RegExpExecArray | null = MarkupUtils.getMarkupPieces(markup);
  	if (pieces == null)
  	{
  		return null
  	}
  	return pieces[2];
  }

  public static getLastNameFromMarkup(markup: string): string | null
  {
  	const pieces: RegExpExecArray | null = MarkupUtils.getMarkupPieces(markup);
  	if (pieces == null)
  	{
  		return null
  	}
  	return pieces[3];
  }
}

export default MarkupUtils;
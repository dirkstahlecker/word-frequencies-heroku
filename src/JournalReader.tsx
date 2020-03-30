import * as React from "react";
// import {NameReference} from "./NameReference";
import {observable, action} from "mobx";
import {observer} from "mobx-react";
import {MarkupUtils} from "./MarkupUtils";
import {Markup} from "./stats/Markup";
import "./JournalReader.css";

export interface JournalReaderProps
{
	machine: JournalReaderMachine;
}

export class JournalReaderMachine
{
	private static DATE_REGEX = /\d{1,2}-\d{1,2}-\d{1,2}:/;

	@observable public rawText: string = "";

	@action
	public updateRawText(value: string): void
	{
		this.rawText = value; // = this.replaceMarkupWithDisplayName(value);
	}

	public static splitOnMarkupPieces(text: string): string[]
	{
		//eslint-disable-next-line no-useless-escape
		const pieces: string[] = text.split(/(\[!![^\|]+\|[^_]+_[^!]+!!\])|(\d{1,2}-\d{1,2}-\d{1,2}:)/); //split on markup and dates
		return pieces;
	}

	public renderJournal(): JSX.Element | null
	{
		const pieces: string[] = JournalReaderMachine.splitOnMarkupPieces(this.rawText);

		return <div>
			{
				pieces.map((piece: string) => {
					if (piece === undefined)
					{
						return "";
					}
					if (piece.match(Markup.MARKUP_REGEX))
					{
						return Markup.getHtmlForMarkup(piece);
					}
					else if (piece.match(JournalReaderMachine.DATE_REGEX))
					{
						return <>
							<br/><br/>
							{piece}
						</>;
					}
					else
					{
						return piece;
					}
				})
			}
		</div>;
	}

	// private replaceMarkupWithDisplayName(rawText: string): string
	// {
	// 	while (true)
	// 	{
	// 		let markup: Markup | null = Markup.create(rawText);
	// 		if (markup == null)
	// 		{
	// 			break;
	// 		}
	//
	// 		const displayName: string | null = markup.displayName;
	// 		if (displayName == null)
	// 		{
	// 			console.error("Invalid markup was received from getFullMarkupFromString");
	// 			return "TODO"; //TODO
	// 		}
	// 		rawText = rawText.replace(markup, displayName);
	// 	}
	// 	return rawText;
	// }
}

@observer
export class JournalReader extends React.Component<JournalReaderProps>
{
	private get machine(): JournalReaderMachine
	{
		return this.props.machine;
	}

//<textarea disabled={true} value={this.machine.rawText} style={{width: "750px", height: "300px"}}/>
	render()
	{
		return <div>
			<input type="text" onChange={(e) => this.machine.updateRawText(e.currentTarget.value)}/>
			<br/>
			<br/>

			{this.machine.renderJournal()}
		</div>;
	}
}

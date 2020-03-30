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

	public renderJournal(): JSX.Element | null
	{
		//eslint-disable-next-line no-useless-escape
		const pieces: string[] = this.rawText.split(/(\[!![^\|]+\|[^_]+_[^!]+!!\])|(\d{1,2}-\d{1,2}-\d{1,2}:)/); //split on markup and dates

		return <div>
			{
				pieces.map((piece: string) => {
					if (piece === undefined)
					{
						return "";
					}
					if (piece.match(Markup.MARKUP_REGEX))
					{
						return this.getHtmlForMarkup(piece);
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

	private getHtmlForMarkup(rawMarkup: string): JSX.Element | null
	{
		const markup: Markup | null = Markup.create(rawMarkup);
		// const firstName: string | null = MarkupUtils.getFirstNameFromMarkup(markup);
		// const lastName: string | null = MarkupUtils.getLastNameFromMarkup(markup);
		// const displayName: string | null = MarkupUtils.getDisplayNameFromMarkup(markup);

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

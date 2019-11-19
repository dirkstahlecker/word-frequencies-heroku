import * as React from "react";
// import {NameReference} from "./NameReference";
import {observable, action} from "mobx";
import {observer} from "mobx-react";
import {MarkupUtils} from "./MarkupUtils";

export interface JournalReaderProps
{
	machine: JournalReaderMachine;
}

export class JournalReaderMachine
{
	@observable public rawText: string = "";

	@action
	public updateRawText(value: string): void
	{
		this.rawText = this.replaceMarkupWithDisplayName(value);
	}

	private replaceMarkupWithDisplayName(rawText: string): string
	{
		while (true)
		{
			let markup: string | null = MarkupUtils.getFullMarkupFromString(rawText);
			if (markup == null)
			{
				break;
			}

			const displayName: string | null = MarkupUtils.getDisplayNameFromMarkup(markup);
			if (displayName == null)
			{
				console.error("Invalid markup was received from getFullMarkupFromString");
				return "TODO";
			}
			rawText = rawText.replace(markup, displayName);
		}
		return rawText;
	}
}

@observer
export class JournalReader extends React.Component<JournalReaderProps>
{
	private get machine(): JournalReaderMachine
	{
		return this.props.machine;
	}

	render()
	{
		return <div>
			<input type="text" onChange={(e) => this.machine.updateRawText(e.currentTarget.value)}/>
			<br/>
			<br/>
			<textarea disabled={true} value={this.machine.rawText} style={{width: "750px", height: "300px"}}/>
		</div>;
	}
}

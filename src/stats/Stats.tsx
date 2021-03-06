import * as React from "react";
import {observable, runInAction, action} from "mobx";
import {observer} from "mobx-react";
import {JournalReaderMachine} from "../JournalReader";
import {NameInfo} from "./NamesDB";
import {Markup} from "./Markup";
import {NameCounts} from "./NameCounts";
import {Utils} from "../Utils";

export interface StatsProps
{
  machine: StatsMachine;
}

export class StatsMachine
{
  @observable
  private journal: string = "";

  // private namesDB: NamesDB = new NamesDB();
  @observable
  public namesDict: Map<string, NameInfo> = new Map();

  @observable
  public dataFreshness: number = 0;

  constructor(journal: string)
  {
    // this.journal = journal; //TODO
    // this.journal = "1-1-20: Test journal [!!Colin|Colin_Poler!!] and " +
    //   "[!!Phil|Phil_Seo!!].\n\n1-2-20: And [!!Colin|Colin_Poler!!].";
    // this.makeStats();
  }

  @action
  public onJournalInputChange = (e: any) => {
    this.journal = e.currentTarget.value;
  };

  //remove null and empty pieces
  private cleansePieces(pieces: string[]): string[]
  {
    const ret: string[] = []
    pieces.forEach((piece: string) => {
      if (piece == null || pieces === undefined)
      {
        return;
      }
      if (piece === "")
      {
        return;
      }
      ret.push(piece.trim());
    });
    return ret;
  }

  @action
  private makeNamesDict(pieces: string[]): void
  {
    let currentDate: string | null = null;
    pieces.forEach((piece: string) => {
      if (JournalReaderMachine.isDate(piece))
      {
        currentDate = piece;
      }
      else if (currentDate == null)
      {
        return; //can't do anything if we haven't seen a date yet
      }
      else if (Markup.isMarkup(piece))
      {
        const markup: Markup = Markup.create(piece);
        const key: string = markup.getKey();
        const nameInfo: NameInfo | undefined = this.namesDict.get(key);

        if (nameInfo === undefined)
        {
          const valueToSet: NameInfo = new NameInfo(markup, 1, Utils.makeDate(currentDate));
          this.namesDict.set(key, valueToSet);
        }
        else
        {
          nameInfo.count = nameInfo.count + 1;
          nameInfo.addDisplayName(markup.displayName); //TODO: what's the right way to do this?
          nameInfo.addDate(Utils.makeDate(currentDate));
          this.namesDict.set(key, nameInfo);
        }
      }
    });
    // this.namesDB

    this.dataFreshness++;
  }

  public makeStats(): void
  {
    // const journal = document.getElementById("journalInputBox").value();

    let pieces: string[] = JournalReaderMachine.splitOnMarkupPiecesAndDates(this.journal);
    pieces = this.cleansePieces(pieces);
    this.makeNamesDict(pieces);
  }
}

//TODO: unique days and total days are the same... why???

@observer
export class Stats extends React.Component<StatsProps>
{
  private get machine(): StatsMachine
  {
    return this.props.machine as StatsMachine;
  }

  render()
  {
    const x = this.machine.dataFreshness; //ignore

    return <div>
      <input type="text" id="journalInputBox" onChange={this.machine.onJournalInputChange}/>
      <button onClick={() => this.machine.makeStats()}>Submit</button>

      <NameCounts namesDict={this.machine.namesDict}/>
    </div>;
  }
}

import * as React from "react";
import {observable, runInAction} from "mobx";
import {observer} from "mobx-react";
import {JournalReaderMachine} from "../JournalReader";
import {WordInfo, NameInfo} from "./NamesDB";
import {Markup} from "./Markup";

export interface StatsProps
{
  machine: StatsMachine;
}

export class StatsMachine
{
  private journal: string = ""; //not observable - changing the journal needs a new stats object

  // private namesDB: NamesDB = new NamesDB();
  public namesDict: Map<string, WordInfo> = new Map();

  constructor(journal: string)
  {
    // this.journal = journal; //TODO
    this.journal = "1-1-20: Test journal [!!Colin|Colin_Poler!!] and " +
      "[!!Phil|Phil_Seo!!].\n\n1-2-20: And [!!Colin|Colin_Poler!!].";
    this.makeStats();
  }

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
      ret.push(piece);
    });
    return ret;
  }

  private makeNamesDict(pieces: string[]): void
  {
    pieces.forEach((piece: string) => {
      if (Markup.isMarkup(piece))
      {
        const wordInfo: WordInfo | undefined = this.namesDict.get(piece);
        if (wordInfo === undefined)
        {
          this.namesDict.set(piece,  new NameInfo(piece, 1));
        }
        else
        {
          wordInfo.count = wordInfo.count + 1;
          this.namesDict.set(piece, wordInfo);
        }
      }
    });
    // this.namesDB
  }

  private makeStats(): void
  {
    let pieces: string[] = JournalReaderMachine.splitOnMarkupPieces(this.journal);
    pieces = this.cleansePieces(pieces);
    this.makeNamesDict(pieces);
  }
}

@observer
export class Stats extends React.Component<StatsProps>
{
  private get machine(): StatsMachine
  {
    return this.props.machine as StatsMachine;
  }

  render()
  {
    let nameInfo: JSX.Element = <div/>;
    this.machine.namesDict.forEach((wordInfo: WordInfo) => {
      nameInfo = <>
        {nameInfo}
        <div>Name: {wordInfo.word}</div>
        <div>Count: {wordInfo.count}</div>
      </>
    });

    return <>
      {
        nameInfo
      }
    </>;
  }
}

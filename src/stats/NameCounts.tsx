import * as React from "react";
import {observable, runInAction, action} from "mobx";
import {observer} from "mobx-react";
import {WordInfo} from "./NamesDB";

export interface NameCountsProps
{
  machine?: NameCountsMachine;
  namesDict: Map<string, WordInfo>;
}

export class NameCountsMachine
{

}

@observer
export class NameCounts extends React.Component<NameCountsProps>
{
  private sortMap(map: Map<string, WordInfo>): Map<string, WordInfo>
  {
    const mapSort = new Map([...map.entries()].sort((a: [string, WordInfo], b: [string, WordInfo]) => {
      return b[1].count - a[1].count;
    }));
    return mapSort;
  }

  private get machine(): NameCountsMachine
  {
    return this.props.machine as NameCountsMachine;
  }

  render()
  {
    let nameInfo: JSX.Element = <div/>;
    const map = this.sortMap(this.props.namesDict)

    map.forEach((wordInfo: WordInfo) => {
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

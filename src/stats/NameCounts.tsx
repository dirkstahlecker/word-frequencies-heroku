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
  private get machine(): NameCountsMachine
  {
    return this.props.machine as NameCountsMachine;
  }

  render()
  {
    let nameInfo: JSX.Element = <div/>;
    this.props.namesDict.forEach((wordInfo: WordInfo) => {
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

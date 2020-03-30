import * as React from "react";
import {observable, runInAction, action} from "mobx";
import {observer} from "mobx-react";
import {WordInfo, NameInfo} from "./NamesDB";
import {Markup} from "./Markup";

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
      let wordElement: JSX.Element | null = <>{wordInfo.word}</>;
      if (wordInfo instanceof NameInfo)
      {
        wordElement = Markup.getHtmlForMarkup((wordInfo as NameInfo).markup);
      }

      nameInfo = <>
        {nameInfo}
        <div>{wordInfo.count}: {wordElement}</div>
      </>
    });

    return <div className="column-layout-wrapper">
      <div className="column-layout-column">
        {
          nameInfo
        }
      </div>
      <div className="column-layout-column">
        Total Unique People: {map.size}
      </div>
      <div className="column-layout-column">
        Column 3
      </div>
    </div>;
  }
}

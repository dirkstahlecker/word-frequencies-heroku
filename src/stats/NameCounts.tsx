import * as React from "react";
import {observable, runInAction, action} from "mobx";
import {observer} from "mobx-react";
import {WordInfo, NameInfo} from "./NamesDB";
import {Markup} from "./Markup";
import {NamesPerDay} from "./NamesPerDay";
import {Utils} from "../Utils";

export interface NameCountsProps
{
  machine?: NameCountsMachine;
  namesDict: Map<string, NameInfo>;
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

  //TODO: display only unique first/last names, regardless of display names

  render()
  {
    let nameInfo: JSX.Element = <div/>;
    const map = this.sortMap(this.props.namesDict)

    map.forEach((wordInfo: WordInfo) => {
      let wordElement: JSX.Element | null = <>{wordInfo.word}</>;
      if (wordInfo instanceof NameInfo)
      {
        wordElement = (wordInfo as NameInfo).makeHtmlElememt();
      }

      nameInfo = <>
        {nameInfo}
        <div className="colunm-layout-wrapper">
          <div className="column-layout-column">
            {wordInfo.count}: {wordElement}
          </div>
          <div className="column-layout-column">
            Unique days: {wordInfo.dates.size}
          </div>
          <div className="column-layout-column">
            First appeared: {Utils.printDate(wordInfo.getFirstDate())}
          </div>
          <div className="column-layout-column">
            Last appeared: {Utils.printDate(wordInfo.getLastDate())}
          </div>
        </div>
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

    </div>;
  }
}


// <div className="column-layout-column">
//   <NamesPerDay namesMap={map}/>
// </div>

import * as React from "react";
import {observable, runInAction, action} from "mobx";
import {observer} from "mobx-react";
import {WordInfo} from "./NamesDB";

export interface NamesPerDayProps
{
  namesMap: Map<string, WordInfo>;
}

@observer
export class NamesPerDay extends React.Component<NamesPerDayProps>
{
  render()
  {
    return null;
  }
}

import * as React from "react";
import {observable, runInAction, action} from "mobx";
import {observer} from "mobx-react";

export interface GraphPlaceProps
{
  // machine: GraphPlaceMachine;
}

export class GraphPlaceMachine
{

}

@observer
export class GraphPlace extends React.Component<GraphPlaceProps>
{
  // private get machine(): GraphPlaceMachine
  // {
  //   return this.props.machine as GraphPlaceMachine;
  // }

  render()
  {
    return null;
  }
}

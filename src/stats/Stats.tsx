import * as React from "react";
import {observable, runInAction} from "mobx";
import {observer} from "mobx-react";

export interface StatsProps
{
  machine: StatsMachine;
}

export class StatsMachine
{
  private journal: string = ""; //not observable - changing the journal needs a new stats object

  constructor(journal: string)
  {
    // this.journal = journal; //TODO
    this.journal = "Test journal";
    this.makeStats();
  }

  private makeStats(): void
  {
    
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
    return <>Stats test</>;
  }
}

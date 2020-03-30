import * as React from "react";
import {observable, runInAction, action} from "mobx";
import {observer} from "mobx-react";

export interface TemplateProps
{
  machine: TemplateMachine;
}

export class TemplateMachine
{

}

@observer
export class Template extends React.Component<TemplateProps>
{
  private get machine(): TemplateMachine
  {
    return this.props.machine as TemplateMachine;
  }

  render()
  {
    return null;
  }
}

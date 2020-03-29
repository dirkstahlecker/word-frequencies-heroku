import * as React from "react";
import {observable, runInAction} from "mobx";
import {observer} from "mobx-react";
import {JournalReader, JournalReaderMachine} from "./JournalReader";
import {JournalWriter, JournalWriterMachine} from "./JournalWriter";
// import * as Modal from "react-modal";
import Modal from "react-modal";
// import {Editor, EditorState} from 'draft-js';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


// const { Client } = require('pg');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });



Modal.setAppElement(document.getElementById('root')!!);

interface PersonSchema
{
  firstName: String,
  lastName: String,
  displayName: String
}

export class AppMachine
{

  @observable
  public newJournalEntry: boolean = true;

  @observable
  public showDisplayJournalPlace: boolean = false;

  public journalReaderMachine: JournalReaderMachine = new JournalReaderMachine();

  public journalWriterMachine: JournalWriterMachine = new JournalWriterMachine();

    //TODO: this hasn't been tested without jquery
  public handleEasyMarkupGeneratorSubmit = (): void => {
    // document.getElementById("firstName");
    // let firstName: string | null = (document.getElementById("firstName") as HTMLElement);
    // let lastName: string = document.getElementById("lastName").value as string;
    // let displayName: string = document.getElementById("displayName").value as string;

    // this.currentMarkupHack = MarkupUtils.makeMarkup(firstName, lastName, displayName);
    // document.getElementById("placeToSelectText").value = this.currentMarkupHack;

    // var copyText = document.getElementById("displayCopyArea") as HTMLElement;
    // this.selectElementContents(copyText);
    // document.execCommand("copy");

    // document.getElementById("firstName").value = "";
    // document.getElementById("firstName").focus();
    // document.getElementById("lastName").value = "";
    // document.getElementById("displayName").value = "";
  };

  // private legalLetters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  // "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", "'", "\""];
}

export interface AppProps
{
  machine: AppMachine;
}

@observer
export class App extends React.Component<AppProps>
{
  @observable currentMarkupHack: string = "";

  private selectElementContents(el: any) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    if (sel == null)
    {
      return;
    }
    sel.removeAllRanges();
    sel.addRange(range);
  }

  private makeRequest()
  {
    axios.request<PersonSchema>({
      url: 'localhost:8765'
      // transformResponse: (r: PersonSchema) => r.data
    }).then((response: any) => {
      // `response` is of type `AxiosResponse<ServerData>`
      // const { data } = response
      // `data` is of type ServerData, correctly inferred
      console.log(response.firstName);
    })
  }

  public render()
  {
    return (
      <span style={{width: "100%", height: "100%", display: "inline-block", verticalAlign: "top"}}
            tabIndex={0}
            id="mainApp"
      >
        <Tabs>
          <Tab>
            Write
          </Tab>
          <Tab>
            Read
          </Tab>
          <Tab>
            Add Markup
          </Tab>
          <Tab>
            Stats
          </Tab>

          <TabPanel>
            <JournalWriter machine={this.props.machine.journalWriterMachine}/>
          </TabPanel>
          <TabPanel>
            <JournalReader machine={this.props.machine.journalReaderMachine}/>
          </TabPanel>
          <TabPanel>
            <div onKeyDown={(e: any) => {
              if (e.key === "Enter")
              {
                e.preventDefault();
                this.props.machine.handleEasyMarkupGeneratorSubmit();
              }
            }}>
              First Name: <input type="text" id="firstName" autoFocus={true}/>
              <br />
              Last Name: <input type="text" id="lastName" />
              <br />
              Display Name: <input type="text" id="displayName" />
              <br />
              <button onClick={this.props.machine.handleEasyMarkupGeneratorSubmit}>Submit</button>
              <br />
              <br />
              <div id="displayCopyArea">
                <input id="placeToSelectText" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>

          </TabPanel>
        </Tabs>

      </span>
    );
  }
}

interface EditorProps
{

}

// @observer
// class MyEditor extends React.Component<EditorProps>
// {
//   @observable editorState = EditorState.createEmpty();

//   constructor(props: EditorProps)
//   {
//     super(props);
//     // this.state = {editorState: EditorState.createEmpty()};
//     // this.onChange = (editorState) => this.setState({editorState});
//   }

//   @action
//   private onChange = (editorState: any): void => {
//     this.editorState = editorState;
//   }

//   public render()
//   {
//     return (
//         <Editor editorState={this.editorState} onChange={this.onChange} />
//     );
//   }
// }

export default App;


/*
BUGS
-have to write in chonological order - can't jump around with names, since they only add to end
-need to have a story for name picker cancel
-case sensitive (name popup only when name is capitalized) - or maybe only for particular names that are also common words (will)


FEATURES
-
*/

import * as React from "react";
import {NameReference} from "./NameReference";
import {observable, action, runInAction, computed} from "mobx";
import {observer} from "mobx-react";
import {MarkupUtils} from "./MarkupUtils";
import {JournalReader, JournalReaderMachine} from "./JournalReader";
// import * as Modal from "react-modal";
import Modal from "react-modal";
import {NamePickerModal, NamePickerModalMachine} from "./NamePickerModal";
import {AddMarkupMachine} from "./AddMarkupToExistingEntry";
// import {Editor, EditorState} from 'draft-js';
import axios from 'axios';



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
  public journalText: string = "";

  @observable
  public currentName: string | null = null;

  @observable
  public finalText: string = "";

  @observable
  private dateStr: string = "";

  @observable
  public newJournalEntry: boolean = true;

  @observable
  public showDisplayJournalPlace: boolean = false;

  public modalObj: NamePickerModal | null = null;

  public addMarkupMachine: AddMarkupMachine = new AddMarkupMachine();

  public journalReaderMachine: JournalReaderMachine = new JournalReaderMachine();

  @action
  public setCurrentName(value: string | null): void
  {
    this.currentName = value;
  }

  @computed
  public get showModal(): boolean
  {
    return this.currentName != null;
  }

  @action
  public updateDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.dateStr = e.currentTarget.value;
  };

  public namePickerModalMachine: NamePickerModalMachine = new NamePickerModalMachine();

  @action
  public createFinalText(): void
  {
    this.finalText = this.dateStr + ": " + this.journalText;
  }

  @action
  public updateJournalText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.journalText = e.currentTarget.value;

    let text: string = this.journalText;
    let lastWord: string;
    let lastCharacter: string = text.substring(text.length - 1, text.length);
    if (lastCharacter === " ")
    {
      text = text.substring(0, text.length - 1); //remove trailing space
      lastWord = text.substring(Math.max(text.lastIndexOf(" "), text.lastIndexOf("\n")), text.length);
      lastWord = lastWord + " "; //add space back in for the rest of the logic to work properly
    }
    else
    {
      lastWord = text.substring(Math.max(text.lastIndexOf(" "), text.lastIndexOf("\n")), text.length);
    }
    
    //names must be preceeded by a space or newline and followed by a word split character
    if (AddMarkupMachine.wordSplitCharacters.indexOf(lastWord.substring(lastWord.length - 1, lastWord.length)) > -1) //last character is a word split character
    {
      lastWord = NameReference.cleanWord(lastWord.substring(0, lastWord.length - 1)); //remove the final character to get just the name
      if (NameReference.isName(lastWord))
      {
        this.currentName = lastWord;
      }
    }
  };

  public handleModalCloseRequest(commit: boolean): void
  {
    if (!commit) //close without adding markup
    {
      this.currentName = null;
      return;
    }
    if (this.currentName == null)
    {
      throw Error("name shouldn't be null");
    }
    //take the last name given by the user and insert the proper markup into the box itself
    let realFirstName: string | null = this.namePickerModalMachine.realFirstName;
    const markup: string = MarkupUtils.makeMarkup(realFirstName != null ? realFirstName : this.currentName, this.namePickerModalMachine.lastName, this.currentName);
    const textLen: number = this.journalText.length;
    const previousJournalText: string = this.journalText;
    //add the markup in place of the name
    this.journalText = previousJournalText.substring(0, textLen - this.currentName.length - 1) + markup +  previousJournalText.substring(textLen - 1, textLen);

    //clean up
    this.currentName = null; //close the modal
    this.namePickerModalMachine.lastName = ""; //reset
    this.namePickerModalMachine.realFirstName = null;
  }

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

  //TODO: this hasn't been tested without jquery
  public handleEasyMarkupGeneratorSubmit = (): void => {
    //TODO: re-enable
    // let firstName: string = document.getElementById("firstName").value as string;
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
        <NamePickerModal 
          machine={this.props.machine.namePickerModalMachine}
          onRequestClose={(commit: boolean) => this.props.machine.handleModalCloseRequest(commit)}
          isOpen={this.props.machine.showModal}
          currentName={this.props.machine.currentName == null ? "" : this.props.machine.currentName}
          ref={(x) => this.props.machine.modalObj = x}
        />
        <button onClick={() => this.makeRequest()}>TEST</button>
        <button onClick={() => runInAction(() => this.props.machine.newJournalEntry = !this.props.machine.newJournalEntry)}>
          {this.props.machine.newJournalEntry ? "Add markup to existing entry" : "Create new journal entry"}
        </button>
        <button onClick={() => runInAction(() => this.props.machine.showDisplayJournalPlace = !this.props.machine.showDisplayJournalPlace)}>
          Read journal
        </button>
        <br />
        <br />
        <div style={{width: "50%", display: "inline-block", verticalAlign: "top"}}>
          {
            this.props.machine.newJournalEntry && 
            !this.props.machine.showDisplayJournalPlace &&
            <>
              <label htmlFor="dateEntry">Date: </label>
              <br />
              <input type="text" id="dateEntry" onChange={this.props.machine.updateDate} />
              <br />
              <br />
              <label htmlFor="journalEntry">Entry: </label>
              <br />
              <textarea id="journalEntry" 
                        value={this.props.machine.journalText} 
                        onChange={(e) => this.props.machine.updateJournalText(e)}
                        style={{width: "90%", height: "200px"}}
              />
              {/*<MyEditor />*/}
              <br />
              <button onClick={(e) => this.props.machine.createFinalText()}>Submit</button>
            </>
          }
          {
            !this.props.machine.newJournalEntry && //           {/*<AddMarkupToExistingEntry machine={this.props.machine.addMarkupMachine} />*/}
            !this.props.machine.showDisplayJournalPlace &&
            <div onKeyDown={(e: any) => {
              if (e.key === "Enter")
              {
                e.preventDefault();
                this.handleEasyMarkupGeneratorSubmit();
              }
            }}>
              First Name: <input type="text" id="firstName" autoFocus={true}/>
              <br />
              Last Name: <input type="text" id="lastName" />
              <br />
              Display Name: <input type="text" id="displayName" />
              <br />
              <button onClick={this.handleEasyMarkupGeneratorSubmit}>Submit</button>
              <br />
              <br />
              <div id="displayCopyArea">
                <input id="placeToSelectText" />
              </div>
            </div>
          }
          {
            this.props.machine.showDisplayJournalPlace &&
            <JournalReader machine={this.props.machine.journalReaderMachine}/>
          }

        </div>
        <div style={{width: "50%", display: "inline-block", verticalAlign: "top", whiteSpace: "pre-wrap"}}>
          {this.props.machine.finalText}
        </div>
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

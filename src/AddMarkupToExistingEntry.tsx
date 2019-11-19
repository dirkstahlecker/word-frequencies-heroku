import * as React from "react";
import {observable, action} from "mobx";
import {observer} from "mobx-react";
import {NameReference} from "./NameReference";
import {NamePickerModal, NamePickerModalMachine} from "./NamePickerModal";
import {MarkupUtils} from "./MarkupUtils";
// import ReactModal from "react-modal";

export class AddMarkupMachine
{
  public static get wordSplitCharacters(): string[]
  {
    return [".", ",", "!", " ", "?", ":", ";", "\n", "'"];
  }

  public namePickerModalMachine: NamePickerModalMachine = new NamePickerModalMachine();

  @observable
  public modalResponse: string | null = null;

  @observable
  public currentName: string | null = null

  @observable
  public oldEntryText: string = "";

  @action
  public updateOldEntryText = (e: React.FormEvent<HTMLTextAreaElement>): void => {
    this.oldEntryText = e.currentTarget.value as string;
  }

  private stripWord(inp: string): string
  {
    let outputStr: string = "";
    for (let i: number = 0; i < inp.length; i++)
    {
      let c: string = inp[i];
      if (AddMarkupMachine.wordSplitCharacters.indexOf(c) > -1)
      {
        continue
      }
      outputStr += c;
    }
    return outputStr;
  }

  private checkerFunction = (): boolean => {
    if (this.namePickerModalMachine.submitClicked)
    {
      
    }
    return false;
  }

  @action.bound
  public async startNameSearch(outputText_in: string = ""): Promise<void>
  {
    // let words: string[] = this.oldEntryText.split(/\s|\.|,|:/);
    // console.log(words);
    let outputText: string = outputText_in;
    let currentWord: string = "";

    for (let i: number = 0; i < this.oldEntryText.length; i++)
    {
      let c: string = this.oldEntryText[i];
      if (AddMarkupMachine.wordSplitCharacters.indexOf(c) > -1) //boundary
      {
        //check if it's a name
        let word: string = this.stripWord(currentWord);
        if (NameReference.isName(word))
        {
          //show modal
          this.modalResponse = null;
          this.currentName = word; //shows modal

          const modalPromise: Promise<void> = new Promise(res => setTimeout(this.checkerFunction, 100));
          

          // const modalPromise = new Promise((resolve, reject) => this.modalResponse != null)
          // await modalPromise;

          // this.promiseModal().then(() => console.log("After modal"));

          outputText += this.modalResponse;
          console.log(outputText);
          // return this.startNameSearch(outputText);

          return modalPromise;
        }
        else
        {
          outputText += currentWord;
        }
        currentWord = "";
      }
      else //regular letter
      {
        currentWord += c;
      }
    }
  }

  @action
  public handleModalCloseRequest = async(): Promise<void> => {
    if (this.currentName == null)
    {
      throw Error("name shouldn't be null");
    }
    //take the last name given by the user and insert the proper markup into the box itself
    const markup: string = MarkupUtils.makeMarkup(this.currentName, this.namePickerModalMachine.lastName, this.currentName);
    //add the markup in place of the name

    //TODO: something here
    //TODO: need to make modal into a promise we can wait on here

    //clean up
    this.currentName = null; //close the modal

    this.modalResponse = markup; //triggers the user has submitted the last name
    return Promise.resolve();
  };

  // private promiseModal(): Promise<boolean>
  // {
  //   return new Promise((resolve, reject) => {
  //     <Modal 
  //       isOpen={true}
  //       onRequestClose={() => resolve(true)}
  //       contentLabel="Example Modal"
  //     >
  //       TEST
  //     </Modal>
  //   });
  // }
}

export interface AddMarkupProps
{
  machine: AddMarkupMachine
}

@observer
export class AddMarkupToExistingEntry extends React.Component<AddMarkupProps>
{


  render()
  {
    return <div>
      <NamePickerModal 
        machine={this.props.machine.namePickerModalMachine}
        onRequestClose={() => this.props.machine.handleModalCloseRequest()}
        isOpen={this.props.machine.currentName != null}
        currentName={this.props.machine.currentName == null ? "" : this.props.machine.currentName}
      />
      Paste old entry here:<br />
      <textarea id="oldEntry" 
                value={this.props.machine.oldEntryText} 
                onChange={(e) => this.props.machine.updateOldEntryText(e)}
                style={{width: "90%", height: "100px"}}
      />
      <br />
      <button onClick={() => this.props.machine.startNameSearch()}>Submit</button>
      <br />

    </div>
    ;
  }
}

export default AddMarkupToExistingEntry;

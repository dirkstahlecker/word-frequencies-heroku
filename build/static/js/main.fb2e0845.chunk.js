(this["webpackJsonpword-frequencies-heroku"]=this["webpackJsonpword-frequencies-heroku"]||[]).push([[0],{33:function(e,t,a){e.exports=a(67)},38:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),l=a.n(i),o=(a(38),a(10)),c=a(8),u=a(15),s=a(9),m=a(3),h=a(4),p=a(5),d=a(2),b=(a(14),function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,null,[{key:"isName",value:function(t){return t=t.toLowerCase(),e.listOfNames.indexOf(t)>-1}},{key:"cleanWord",value:function(e){return e.replace(/\s/g,"")}}]),e}());b.listOfNames=["miranda","damon","liz","lee","mckenzie","jareth","woodie","jim","jesse","cody","rob","june","federico","kristina","ariel","stanley","peyton","pedro","wynnm","kelly","kendra","eleni","jackie","jacky","elise","kort","julia","austin","jens","janelle","madison","stefan","sean","ryan","derek","tess","remington","les","dakota","brittney","jacob","mia","brin","sara","sharaya","zach","nate","steffanie","zachary","gabrielle","lando","landon","siegenfield","tenessa","gabe","hao","tchelet","dournashkin","edgar","anya","sheldon","clio","brittany","elizabeth","eliza","jeremy","manting","thomas","ginny","patty","joanna","trevor","bart","gabby","hobbes","trent","ari","melody","chrisantha","ahmed","madiha","angela","cali","andy","jaffe","jo","dalia","dion","priscilla","mira","emily","priya","rin","flora","ostin","brayden","joel","alio","phillip","camille","roosevelt","erwin","judy","luke","kendall","morgan","natasha","dennis","kam","orlando","clint","brian","forest","chase","becky","sabina","malena","abigail","amin","susan","claire","amit","lindsay","pelletti","faruh","jacqui","scott","cole","veena","warren","felicia","brett","nori","christie","christi","alli","tyler","isaac","kaytlyn","dan","panov","ruby","bridger","badger","jennifer","zack","ahaan","ck","sira","tory","torri","alisa","madeline","yi-shiuan","bernie","raku","danielle","lealia","alex","darcy","james","mun-ngha","ruifan","augustine","kristine","ted","juanita","chuck","corinn","alec","tiffany","bennett","bradley","rex","quincy","robert","george","hayden","elisa","alyssa","daniel","jessica","jessie","melissa","jackson","heather","molly","mae","fred","jaz","jill","eitan","taibo","nisha","dirk","keith","cait","peinan","david","adrian","sherry","ashton","kailyn","marco","burhan","vivian","neil","gabriel","andie","rachel","steve","anastasiya","jesus","niki","varun","maria","shavey","marcel","tamara","joy","steveni","stephanie","ani","ian","john","jamie","albert","alan","jordan","grace","geran","nathan","mickey","tommy","virginia","tom","micheala","greg","kody","greta","megan","ashley","dani","ellena","ana","chloe","caleb","fiona","fjiona","carson","zeke","mal","carter","allen","beckett","kevin","zoe","sherri","malte","brandon","becca","linda","aofei","lexie","tevin","kai","julian","mandy","jorge","maddy","julianna","brent","dina","victoria","scarlett","cory","jason","kat","beth","sally","michelle","ria","aisha","phil","christianna","tamiko","reed","kristen","ethan","frances","raja","lizy","charles","bonnie","mikayla","carlee","gates","evaristo","randi","duncan","kade","randy","sierra","caroline","monica","tricia","dj","carly","alicia","coty","cristhian","ben","felipe","vincent","amanda","harrison","kim","kitanna","dillon","hammer","jacque","ken","eunice","tamra","felisha","jonathan","joe","jj","jonah","gwyn","jon","quantum","colton","piper","peter","kate","jay","miso","annie","sasha","rebekah","elliot","jeff","jaya","sammi","jayd","tony","mady","jyotishka","nicole","carla","sam","anton","anurag","karla","mikey","jess","heman","hemantha","mike","eduardo","ariane","andrew","anthony","lily","stephen","dave","gal","andrea","kathryn","will","max","garth","yuliya","victor","ceri","kaytlyn","obasi","dominic","robyn","robin","ishaan","veronica","richard","nika","rich","carlson","tevis","audrey","despina","ivy","piotr","grant","eric","dakotah","paula","everett","kip","jaclyn","westin","dylan","ashley","lucas","charlie","kyle","crisantha","joseff","spencer","nessa","carrie","gavin","sheenan","lauren","hayley","hal","nick","nikki","josh","rosa","ada","ross","cheryl","shelby","jake","menno","chalese","saroja","mattea","mateo","monique","rebecca","emilio","maddie","dencil","suma","kolton","clarissa","christina","michael","christine","emma","kinney","arden","jory","patience","joey","brad","drew","patrick","mirim","michaela","howell","dean","yulia","igor","donald","seigenfeld","huynh","lorraine","garret","conner","hugh","wendy","anna","aaron","wesley","kristin","francis","iris","prabhav","justin","coral","stuart","dwight","carolyn","chris","ky-ahn","steven","tadd","horkley","katie","akshay","lexi","shae","shane","caitlin","melanie","lydia","predrag","junior","neerja","waffles","eddie","cearston","taylor","jenny","krista","johnny","feyza","erin","grammie","andreea","graham","jenna","cassie","tim","holly","kira","neha","dale","yen","colin","tenye","matt","barry","sue","lucia","chun-lok","gray","william","talia","evan","kory","stan","lane","maegan","angie","jade","natalie","martina","tanner","corey","elaine","adam","margaret","denny","paige","mirim","shinjini","laura","sarah","justine","mollie","adri","katherine","lin","kathleen"];var y=a(1),f=a(11),k=function(){function e(){Object(h.a)(this,e)}return Object(p.a)(e,null,[{key:"makeMarkup",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return"[!!"+(""===a?e:a)+"|"+e+"_"+t+"!!]"}},{key:"getMarkupPieces",value:function(t){return e.MARKUP_REGEX.exec(t)}},{key:"getFullMarkupFromString",value:function(t){var a=e.getMarkupPieces(t);return null==a?null:a[0]}},{key:"getDisplayNameFromMarkup",value:function(t){var a=e.getMarkupPieces(t);return null==a?null:a[1]}},{key:"getFirstNameFromMarkup",value:function(t){var a=e.getMarkupPieces(t);return null==a?null:a[2]}},{key:"getLastNameFromMarkup",value:function(t){var a=e.getMarkupPieces(t);return null==a?null:a[3]}}]),e}();k.MARKUP_REGEX=/\[!!([^\|]+)\|([^_]+)_([^!]+)!!\]/;var j,g,v,w,O,E,x,N,M,T,C,F,R,P,z,D,S,q,J,I,A,K,W,L,G,_,B=(j=function(){function e(){Object(h.a)(this,e),Object(m.a)(this,"rawText",g,this)}return Object(p.a)(e,[{key:"updateRawText",value:function(e){this.rawText=this.replaceMarkupWithDisplayName(e)}},{key:"replaceMarkupWithDisplayName",value:function(e){for(;;){var t=k.getFullMarkupFromString(e);if(null==t)break;var a=k.getDisplayNameFromMarkup(t);if(null==a)return console.error("Invalid markup was received from getFullMarkupFromString"),"TODO";e=e.replace(t,a)}return e}}]),e}(),g=Object(d.a)(j.prototype,"rawText",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(d.a)(j.prototype,"updateRawText",[y.d],Object.getOwnPropertyDescriptor(j.prototype,"updateRawText"),j.prototype),j),H=Object(f.a)(v=function(e){function t(){return Object(h.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement("input",{type:"text",onChange:function(t){return e.machine.updateRawText(t.currentTarget.value)}}),n.createElement("br",null),n.createElement("br",null),n.createElement("textarea",{disabled:!0,value:this.machine.rawText,style:{width:"750px",height:"300px"}}))}},{key:"machine",get:function(){return this.props.machine}}]),t}(n.Component))||v,U=a(16),X=a.n(U),$=a(7),Q=a.n($),V=(w=function(){function e(){var t=this;Object(h.a)(this,e),Object(m.a)(this,"lastName",O,this),Object(m.a)(this,"realFirstName",E,this),Object(m.a)(this,"submitClicked",x,this),this.setSubmitClicked=function(e){t.submitClicked=e},this.lastNameTxtInput=void 0,this.realFirstNameTxtInput=void 0}return Object(p.a)(e,[{key:"updateLastName",value:function(){this.lastName=Q()("#lastNameTxt").val()}},{key:"updateRealFirstName",value:function(){this.realFirstName=Q()("#realFirstNameTxt").val()}}]),e}(),O=Object(d.a)(w.prototype,"lastName",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),E=Object(d.a)(w.prototype,"realFirstName",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=Object(d.a)(w.prototype,"submitClicked",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),w),Y=Object(f.a)(N=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).onModalKeyDown=function(e){"Enter"===e.key&&(e.preventDefault(),a.props.machine.setSubmitClicked(!0),a.props.onRequestClose(!0)),"Escape"===e.key&&a.props.onRequestClose(!1)},a}return Object(s.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return n.createElement(X.a,{isOpen:this.props.isOpen},n.createElement("div",null,"Current name:\xa0",this.props.currentName,n.createElement("br",null),n.createElement("br",null),void 0!==this.props.context&&n.createElement(n.Fragment,null,n.createElement("div",null,"this.props.context"),n.createElement("br",null),n.createElement("br",null)),"Last name:\xa0",n.createElement("input",{type:"text",onChange:function(){return e.props.machine.updateLastName()},id:"lastNameTxt",onKeyDown:this.onModalKeyDown,ref:function(t){e.props.machine.lastNameTxtInput=t,null!=t&&e.props.machine.lastNameTxtInput.focus()}}),n.createElement("br",null),n.createElement("br",null),"Real First Name:\xa0",n.createElement("input",{type:"text",onChange:function(){return e.props.machine.updateRealFirstName()},id:"realFirstNameTxt",onKeyDown:this.onModalKeyDown,ref:function(t){e.props.machine.realFirstNameTxtInput=t}}),n.createElement("br",null),n.createElement("br",null),n.createElement("button",{onClick:function(){e.props.machine.setSubmitClicked(!0),e.props.onRequestClose(!0)}},"Submit")))}}]),t}(n.Component))||N,Z=a(13),ee=a.n(Z),te=a(18),ae=(M=y.d.bound,T=function(){function e(){var t=this;Object(h.a)(this,e),this.namePickerModalMachine=new V,Object(m.a)(this,"modalResponse",C,this),Object(m.a)(this,"currentName",F,this),Object(m.a)(this,"oldEntryText",R,this),Object(m.a)(this,"updateOldEntryText",P,this),this.checkerFunction=function(){return t.namePickerModalMachine.submitClicked,!1},Object(m.a)(this,"handleModalCloseRequest",z,this)}return Object(p.a)(e,[{key:"stripWord",value:function(t){for(var a="",n=0;n<t.length;n++){var r=t[n];e.wordSplitCharacters.indexOf(r)>-1||(a+=r)}return a}},{key:"startNameSearch",value:function(){var t=Object(te.a)(ee.a.mark((function t(){var a,n,r,i,l,o,c,u=this,s=arguments;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=s.length>0&&void 0!==s[0]?s[0]:"",n=a,r="",i=0;case 4:if(!(i<this.oldEntryText.length)){t.next=25;break}if(l=this.oldEntryText[i],!(e.wordSplitCharacters.indexOf(l)>-1)){t.next=21;break}if(o=this.stripWord(r),!b.isName(o)){t.next=17;break}return this.modalResponse=null,this.currentName=o,c=new Promise((function(e){return setTimeout(u.checkerFunction,100)})),n+=this.modalResponse,console.log(n),t.abrupt("return",c);case 17:n+=r;case 18:r="",t.next=22;break;case 21:r+=l;case 22:i++,t.next=4;break;case 25:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}],[{key:"wordSplitCharacters",get:function(){return[".",",","!"," ","?",":",";","\n","'"]}}]),e}(),C=Object(d.a)(T.prototype,"modalResponse",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=Object(d.a)(T.prototype,"currentName",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=Object(d.a)(T.prototype,"oldEntryText",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),P=Object(d.a)(T.prototype,"updateOldEntryText",[y.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.oldEntryText=t.currentTarget.value}}}),Object(d.a)(T.prototype,"startNameSearch",[M],Object.getOwnPropertyDescriptor(T.prototype,"startNameSearch"),T.prototype),z=Object(d.a)(T.prototype,"handleModalCloseRequest",[y.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(te.a)(ee.a.mark((function t(){var a;return ee.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e.currentName){t.next=2;break}throw Error("name shouldn't be null");case 2:return a=k.makeMarkup(e.currentName,e.namePickerModalMachine.lastName,e.currentName),e.currentName=null,e.modalResponse=a,t.abrupt("return",Promise.resolve());case 6:case"end":return t.stop()}}),t)})))}}),T),ne=(Object(f.a)(D=function(e){function t(){return Object(h.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return n.createElement("div",null,n.createElement(Y,{machine:this.props.machine.namePickerModalMachine,onRequestClose:function(){return e.props.machine.handleModalCloseRequest()},isOpen:null!=this.props.machine.currentName,currentName:null==this.props.machine.currentName?"":this.props.machine.currentName}),"Paste old entry here:",n.createElement("br",null),n.createElement("textarea",{id:"oldEntry",value:this.props.machine.oldEntryText,onChange:function(t){return e.props.machine.updateOldEntryText(t)},style:{width:"90%",height:"100px"}}),n.createElement("br",null),n.createElement("button",{onClick:function(){return e.props.machine.startNameSearch()}},"Submit"),n.createElement("br",null))}}]),t}(n.Component)),a(32)),re=a.n(ne);X.a.setAppElement(document.getElementById("root"));var ie=(S=function(){function e(){Object(h.a)(this,e),Object(m.a)(this,"journalText",q,this),Object(m.a)(this,"currentName",J,this),Object(m.a)(this,"finalText",I,this),Object(m.a)(this,"newJournalEntry",A,this),Object(m.a)(this,"showDisplayJournalPlace",K,this),this.modalObj=null,this.addMarkupMachine=new ae,this.journalReaderMachine=new B,this.namePickerModalMachine=new V,Object(m.a)(this,"updateJournalText",W,this)}return Object(p.a)(e,[{key:"setCurrentName",value:function(e){this.currentName=e}},{key:"createFinalText",value:function(e){var t=e.currentTarget.value;this.finalText=t+": "+this.journalText}},{key:"handleModalCloseRequest",value:function(e){if(e){if(null==this.currentName)throw Error("name shouldn't be null");var t=this.namePickerModalMachine.realFirstName,a=k.makeMarkup(null!=t?t:this.currentName,this.namePickerModalMachine.lastName,this.currentName),n=this.journalText.length,r=this.journalText;this.journalText=r.substring(0,n-this.currentName.length-1)+a+r.substring(n-1,n),this.currentName=null,this.namePickerModalMachine.lastName="",this.namePickerModalMachine.realFirstName=null}else this.currentName=null}},{key:"showModal",get:function(){return null!=this.currentName}}]),e}(),q=Object(d.a)(S.prototype,"journalText",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),J=Object(d.a)(S.prototype,"currentName",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=Object(d.a)(S.prototype,"finalText",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),A=Object(d.a)(S.prototype,"newJournalEntry",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),K=Object(d.a)(S.prototype,"showDisplayJournalPlace",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(d.a)(S.prototype,"setCurrentName",[y.d],Object.getOwnPropertyDescriptor(S.prototype,"setCurrentName"),S.prototype),Object(d.a)(S.prototype,"showModal",[y.e],Object.getOwnPropertyDescriptor(S.prototype,"showModal"),S.prototype),Object(d.a)(S.prototype,"createFinalText",[y.d],Object.getOwnPropertyDescriptor(S.prototype,"createFinalText"),S.prototype),W=Object(d.a)(S.prototype,"updateJournalText",[y.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.journalText=t.currentTarget.value;var a,n=e.journalText;" "===n.substring(n.length-1,n.length)?(a=(n=n.substring(0,n.length-1)).substring(Math.max(n.lastIndexOf(" "),n.lastIndexOf("\n")),n.length),a+=" "):a=n.substring(Math.max(n.lastIndexOf(" "),n.lastIndexOf("\n")),n.length),ae.wordSplitCharacters.indexOf(a.substring(a.length-1,a.length))>-1&&(a=b.cleanWord(a.substring(0,a.length-1)),b.isName(a)&&(e.currentName=a))}}}),S),le=Object(f.a)((G=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r))),Object(m.a)(a,"currentMarkupHack",_,Object(u.a)(a)),a.handleEasyMarkupGeneratorSubmit=function(){var e=Q()("#firstName").val(),t=Q()("#lastName").val(),n=Q()("#displayName").val();a.currentMarkupHack=k.makeMarkup(e,t,n),Q()("#placeToSelectText").val(a.currentMarkupHack);var r=document.getElementById("displayCopyArea");a.selectElementContents(r),document.execCommand("copy"),Q()("#firstName").val("").focus(),Q()("#lastName").val(""),Q()("#displayName").val("")},a}return Object(s.a)(t,e),Object(p.a)(t,[{key:"selectElementContents",value:function(e){var t=document.createRange();t.selectNodeContents(e);var a=window.getSelection();null!=a&&(a.removeAllRanges(),a.addRange(t))}},{key:"makeRequest",value:function(){re.a.request({url:"localhost:8765"}).then((function(e){console.log(e.firstName)}))}},{key:"render",value:function(){var e=this;return n.createElement("span",{style:{width:"100%",height:"100%",display:"inline-block",verticalAlign:"top"},tabIndex:0,id:"mainApp"},n.createElement(Y,{machine:this.props.machine.namePickerModalMachine,onRequestClose:function(t){return e.props.machine.handleModalCloseRequest(t)},isOpen:this.props.machine.showModal,currentName:null==this.props.machine.currentName?"":this.props.machine.currentName,ref:function(t){return e.props.machine.modalObj=t}}),n.createElement("button",{onClick:function(){return e.makeRequest()}},"TEST"),n.createElement("button",{onClick:function(){return Object(y.m)((function(){return e.props.machine.newJournalEntry=!e.props.machine.newJournalEntry}))}},this.props.machine.newJournalEntry?"Add markup to existing entry":"Create new journal entry"),n.createElement("button",{onClick:function(){return Object(y.m)((function(){return e.props.machine.showDisplayJournalPlace=!e.props.machine.showDisplayJournalPlace}))}},"Read journal"),n.createElement("br",null),n.createElement("br",null),n.createElement("div",{style:{width:"50%",display:"inline-block",verticalAlign:"top"}},this.props.machine.newJournalEntry&&!this.props.machine.showDisplayJournalPlace&&n.createElement(n.Fragment,null,n.createElement("label",{htmlFor:"dateEntry"},"Date: "),n.createElement("br",null),n.createElement("input",{type:"text",id:"dateEntry"}),n.createElement("br",null),n.createElement("br",null),n.createElement("label",{htmlFor:"journalEntry"},"Entry: "),n.createElement("br",null),n.createElement("textarea",{id:"journalEntry",value:this.props.machine.journalText,onChange:function(t){return e.props.machine.updateJournalText(t)},style:{width:"90%",height:"200px"}}),n.createElement("br",null),n.createElement("button",{onClick:function(t){return e.props.machine.createFinalText(t)}},"Submit")),!this.props.machine.newJournalEntry&&!this.props.machine.showDisplayJournalPlace&&n.createElement("div",{onKeyDown:function(t){"Enter"===t.key&&(t.preventDefault(),e.handleEasyMarkupGeneratorSubmit())}},"First Name: ",n.createElement("input",{type:"text",id:"firstName",autoFocus:!0}),n.createElement("br",null),"Last Name: ",n.createElement("input",{type:"text",id:"lastName"}),n.createElement("br",null),"Display Name: ",n.createElement("input",{type:"text",id:"displayName"}),n.createElement("br",null),n.createElement("button",{onClick:this.handleEasyMarkupGeneratorSubmit},"Submit"),n.createElement("br",null),n.createElement("br",null),n.createElement("div",{id:"displayCopyArea"},n.createElement("input",{id:"placeToSelectText"}))),this.props.machine.showDisplayJournalPlace&&n.createElement(H,{machine:this.props.machine.journalReaderMachine})),n.createElement("div",{style:{width:"50%",display:"inline-block",verticalAlign:"top",whiteSpace:"pre-wrap"}},this.props.machine.finalText))}}]),t}(n.Component),_=Object(d.a)(G.prototype,"currentMarkupHack",[y.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),L=G))||L;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(le,{machine:new ie}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.fb2e0845.chunk.js.map
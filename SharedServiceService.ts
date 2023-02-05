
import {Injectable } from '@angular/core';
@Injectable({
providedIn: 'root'
})
export class SharedServiceService {
sec Transfer=0;
min Transfer!:number; timerStart:number=0;
correctAnswer!:number;
incorrectAnswer!:number;
totalAnswer!: number;
totalQues!:number;
setSec1Transfer!:number;
correctAnsArray:any=[]; incorrectAnsArray: any=[];
skippedQuesArr:any=[];
constructor(){}
setSeconds(sec: any)
{ this.secTransfer=sec;
localStorage.setItem(sec,JSON.stringify(this.secTransfer));
}
getSeconds(){
return this.secTransfer;
}

setMin(min:number)
{ this.minTransfer=min;
}
getMin(){ return this.minTransfer;
}
setTimerStart(timerNum: number){ this.timerStart=timerNum;
}
getTimerStart(){ return this.timerStart;
}
setCorrectAnswer(crtAns:number){
this.correctAnswer=crtAns;
}
getCorrectAnswer(){
return this.correctAnswer;
setIncorrectAnswer(incrtAns:number){ this.incorrectAnswer=incrtAns;
}
getincorrectAnswer(){
return this.incorrectAnswer;
}
setTotalAns(totalAns:number){ this.totalAnswer=totalAns;
}
getTotalAnswer(){ return this.totalAnswer;
}

setTotalQues (tQues:number){
this.totalQues=tQues;
}
getTotalQues(){ return this.totalQues;
}
setCorrectAnsArray(crtAnsArr:any=[]){ this.correctAnsArray=crtAnsArr;
console.log("setter"+this.correctAnsArray);
}
getCorrectAnsArray(){ return this.correctAnsArray;
}
setIncorrectAnsArray(incrtAnsArr:any=[]){ this.incorrectAnsArray=incrtAnsArr;
}
getIncorrectAnsArray(){
return this.incorrectAnsArray;
}
setSkippedQuesArr(skpQA:any=[]){ this.skippedQuesArr=skpQA;
}
getSkippedQuesArr(){ return this.skippedQuesArr;
}
}

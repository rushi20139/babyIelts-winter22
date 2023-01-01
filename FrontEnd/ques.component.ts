
import { Component, On Init} from '@angular/core';
import { interval} from 'rxjs';
import { QuestionServiceService} from '../question- service. service';
import {SharedServiceService} from 'src/shared/shared- service.service';
import { Router} from '@angular/router';
@Component ({
selector: 'app-ques',
templateUrl: './ques.component.html',
styleUrls: ['./ques.component.css']
})
export class QuesComponent implements OnInit {
title = 'minilelts ';
public questionList: any = [];
public correctAns: any=[];
public incorrectAns : any=[]:
public currentQuestion: number=0;
public flag: number=0
correctAnswer : number=0;
incorrectAnswer: number=0;
public mainCounter : number=2; //Primary Counter Minutes
public quesCounter : number=0; //Secondary Counter minutes
public quesSec : number=0; // Secondary Counter seconds
questionInterval$! :any;
answerInterval$! :any; //questionInterval$ counter-part for quesCounter
public seconds ! : number; //Primary Counter seconds
public secTransfer : number=0;
public minTransfer! :number;
public totalAnswer: number=0;
public totalQues! :number;
iscorrectAnswer :boolean;
skippedQues: number=0
skippedQuesArr: any=[];
constructor (private shared: SharedserviceService,
private quesService : QuestionServiceService, public router: Router) {
this.iscorrectAnswer=false;
}
secondsy=0;
getAllQues () {

this.quesService.getQuesJson ( )
.subscribe(res => {
this.questionList=res.questions;
});
}
answer (question : { isAttempted: boolean; }, options : any[],
option: { correct: any; isSelected : boolean; }){
question.isAttempted=true;
options.forEach( (element: { isselected : boolean; }) => {
element. isSelected=false;
});
this.iscorrectAnswer=true;
option.isSelected=true;
}
nextQuestion (){
this.currentQuestion++;
}
previousQuestion () {
this.currentQuestion--;
}
submitQuiz (){
for (let i=0;i<this.questionList. length; i++) {
if (this. question List[i].isAttempted) {
this.totalAnswer++;
for (let j=0;j<4;j++){
if((this.questionList[i].options [j].isSelected==true) &&
(this.questionList[i].options [j].correct==true)) {
this.correctAnswer++;
this.correctAns.push(i+1);
this.shared.setCorrectAnsArray(this.correctAns);
//console. log("getter"+this.shared.getCorrectAnsArray ());
}
else if (this.questionList[i].options [j].isSelected==true) {
this.incorrectAnswer++;
this.incorrectAns.push(i+1);
// console. log (this.incorrectAns);
this.shared.setIncorrectAnsArray(this.incorrectAns);
}

}
}
else if(! (this.questionList[i].isAttempted) ){
this.skippedQues++;
this.skippedQuesArr.push(i+1);
this.shared.setSkippedQuesArr(this.skippedQuesArr);
}
this.shared.setCorrectAnswer (this.correctAnswer);
this.shared.setIncorrectAnswer (this.incorrectAnswer);
this.shared.setTotalAns (this.totalAnswer);
}
this.secTransfer=this.seconds;
this.minTransfer=this.mainCounter;
this.totalQues=this.questionList.length;
this.shared.setseconds(this.secTransfer);
this.shared.setMin(this.minTransfer);
this.shared.setTotalQues (this.totalQues);
console. log("Seconds set : "+ this. secTransfer);
this.flag=1;
}
updateCount Down (){
this.seconds =60;
this.questionInterval$=interval (1000). subscribe(counter=>{
this.seconds--;
if(this. seconds==0){
this.maincounter- -;
this.seconds=59;
}
if(this.mainCounter==0 && this.seconds==1 && this.flag==0){
alert("Time is over");
this.router. navigate(['/result ']);
this.submitQuiz ();
}
})
}
updatecountUp ( ) {
this.quesSec=0;
this.answerInterval$=interval (100). subscribe(counter=>{

this.quesSec++;
if(this.quesSec==60){
this.quesCounter++;
this.quesSec=0;
}
})
}
ngOnInit() : void {
this.getAllQues ();
this.updateCountDown () ;
}
}

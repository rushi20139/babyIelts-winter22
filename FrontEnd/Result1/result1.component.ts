
import { Component, Onlnit } from '@angular/core';
import { SharedServiceService } from 'src/shared/shared-service.service';
/*This is the code for Displaying Result Table 
<!-- This is the code for Displaying Result Table */
export interface PeriodicElement {
name: string;
position: number;
weight: number;
symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
{position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
{position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
{position: 5, name: 'Boron', weight: 10.811, symbol:' B'},
{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
{position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
selector: 'app-result',
templateUrl: './result1.component.html',
styleUrls: ['./result1.component.css]
})
export class Result1Component implements Onlnit {
secondsy!:number;
min!:number;
totalMin:number=2; // Change this as per Total Minutes f test
totalSec:number=60;
correctAns!:number;
incorrectAns!:number;
totalAnswer!: number;
points!:number;
notAttemptedQues!:number;
totalQues!:numbeer;
accuracy!:number;
attempt!:number;
percentage!:number;

incrtPercentage!:number;
notAttemptedPercentage!:number;
crtPercentage!:number;
totalPoints!:number;
crtAnsArr:any=[];
incrtAnsArr:any=[];
skippedQuesArr:any=[];
constructor(private shared : SharedServiceService){}
ngOnlnit(): void {
this.secondsy=((this.totalSec)-this.shared.getSeconds());
this.min=((this.totalMin)-this.shared.getMin());
this.correctAns=this.shared.getCorrectAnswer();
this.incorrectAns=this.shared.getlncorrectAnswer();
this.totalAnswer=this.shared.getTotalAnswer();
this.points=(((this.correctAns)*3)-(this.incorrectAns);
console.log(this.shared.getTotalQues ());
this.notAttemptedQues=
((this.shared.getTotalQues())-(this.shared.getTotalAnswer()));
this.accuracy=Math.round(((this.shared.
getCorrectAnswer())/(this.shared.getTotalAnswer()))*10000)/100;
this.attempt=Math.round(((this.shared.getTotalAnswer())/this.shared.getTotalQues())*10000)/10
0;
this.percentage=Math.round((this.points)/((this.shared.getTotalQues ())*3)*10000)/100;
this.totalQues=this.shared.getTotalQues();
this.crtPercentage=((this.correctAns)/(this.shared.getTotalQues())*100);
this.totalPoints=this.totalQues*3;
this.incrtPercentage=(((this.incorrectAns)/(this.totalQues))*100);
this.notAttemptedPercentage=(((this.notAttemptedQues)/(this.totalQues))*100);
this.crtAnsArr=this.shared.getCorrectAnsArray();
this.incrtAnsArr=this.shared.getlncorrectAnsArray();
this.skippedQuesArr=this.shared.getSkippedQuesArr();
}

<!--This is the code for Displaying Result Table-->
displayedColumns: string[] = ['position', 'name' , 'weight', 'symbol'];
dataSource = ELEMENT_DATA;
}

import { Component, OnInit,Input } from '@angular/core';
import { DifficultyService } from '../difficulty.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questionsArray: any;
  index =0;
  answer: any;
  answerArray: any;
  correctanswerArray: any=[];
  selectedwrong:boolean=false
  selectedright:boolean=false;
  wrong:any;
  

  constructor(private easyservice: DifficultyService) { }

  ngOnInit() {
    this.getdifficulData();
  }

   getdifficulData() {
     const difficulty = sessionStorage.getItem('difficulty')
     console.log(difficulty);
     let questions = `https://opentdb.com/api.php?amount=10&category=18&difficulty=${difficulty}&type=multiple`
     this.easyservice.easy(questions).subscribe((data: any) => {
      console.log(data);
       this.questionsArray = data &&data.results
       this.answerArray = [this.questionsArray[this.index].correct_answer,...this.questionsArray[this.index].incorrect_answers]
     
      })
 
   }

   getanswer(val){
     this.answer = val
     console.log(val);
     
   }
   getactiveclass(){
     return this.answer;
   }

   nextItem() {
    
   if(this.index<(this.questionsArray.length-1)){
    this.index = this.index+1; 
    this.answerArray = [this.questionsArray[this.index].correct_answer,...this.questionsArray[this.index].incorrect_answers]
    this.selectedwrong=false;
    this.selectedright=false
   }
 
}

correctanswer(result,newval){
   const resultobject = this.questionsArray[this.index].incorrect_answers.find((data:any) =>{
     return result===data
   })
   if (!resultobject){
    let newobject = this.correctanswerArray.push(true);
    // this.correctanswerArray.length
   this.selectedright=true;
   this.selectedwrong=false;

    
   }
   else{
     this.selectedwrong=true;
     this.selectedright=false;
     this.wrong=newval;
   }
}
}

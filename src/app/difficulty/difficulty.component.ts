import { Component, OnInit ,EventEmitter , Output} from '@angular/core';
import { DifficultyService } from '../difficulty.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.css']
})
export class DifficultyComponent implements OnInit {
  difficulty: any;
  difficultscreen: boolean =true;
  startscreen: boolean =false;
  @Output() difficultydata = new EventEmitter();

  constructor(private easyservice: DifficultyService, router: Router) { }

  ngOnInit() {

    // this.easyservice.easy().subscribe((data: any[])=>{
    //   console.log(data);
    //   // this.easy = data;
    // })  
  }

  selectdifficulty(value) {
    this.difficultscreen = false
    this.startscreen = true
    if (value === 'easy') {
      this.difficulty = value;

    }
    else if (value === 'medium') {
      this.difficulty = value;
    }
    else if (value === 'difficult') {
      this.difficulty = 'hard';

    }

    // let questions = `https://opentdb.com/api.php?amount=10&category=18&difficulty=${this.difficulty}&type=multiple`
    // this.easyservice.easy(questions).subscribe((data: any[]) => {
    //   console.log(data);
    //   this.difficultydata.emit(data);
    // })


  }

  buttonroutestart () {
    this.difficultscreen = false
    this.startscreen = false
    sessionStorage.setItem('difficulty',this.difficulty);
  }

}

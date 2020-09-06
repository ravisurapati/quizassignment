import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { DifficultyComponent } from './difficulty/difficulty.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path: '',
   component: DifficultyComponent},
  { path: 'questions', component: QuestionsComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{DifficultyService} from './difficulty.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DifficultyComponent } from './difficulty/difficulty.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    DifficultyComponent,
    QuestionsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DifficultyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

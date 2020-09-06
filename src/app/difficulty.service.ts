import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DifficultyService {

  private REST_API_SERVER = "https://opentdb.com/api.php?amount=10";

  constructor(private http: HttpClient) { }


  public easy(restapi){
    return this.http.get(restapi);
  }

  // public easy(){
  //   //   return this.http.get(this.REST_API_SERVER);
  //   // }
}

import {QuizInput} from "./quiz-input.model";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx'; // observable 3rd party library angular 2 uses
import {Observable} from "rxjs";
import {Injectable, EventEmitter} from "@angular/core";

@Injectable() // needed for http service
export class QuizInputService {

  constructor(private http: Http) {
  }
  getQuiz(data: FormData) {
    return this.http.get('https://opentdb.com/api.php?amount=10')
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }
}

import {QuizInput} from "./quiz-input.model";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'; // observable 3rd party library angular 2 uses
import {Injectable} from "@angular/core";

@Injectable() // needed for http service
export class QuizInputService {

  constructor(private http: Http) {
  }

  getQuiz(data: any) {
    let apiQuery = [];
    let questionNum = 0;
    let category = "";
    let type = "";
    let difficulty = "";
    let apiUrl = 'https://opentdb.com/api.php?amount=';

    // add values from JSON
    for (let key in data) {

      let keyVal = JSON.stringify(data[key]);

      if (keyVal.includes('questionLimit')) {
        let value = keyVal.substring(32, keyVal.length - 2);
        apiQuery.push(+value);
      }
      else if (keyVal.includes('category')) {
        let value = keyVal.substring(27, keyVal.length - 2);
        apiQuery.push(value);
      }
      else if (keyVal.includes('difficulty')) {
        let value = keyVal.substring(29, keyVal.length - 2);
        apiQuery.push(value);
      }
      else if (keyVal.includes('type')) {
        let value = keyVal.substring(23, keyVal.length - 2);
        apiQuery.push(value);
      }
    }

    // check each entry in the API query, adds to URL if relevant
    for (let i = 0; i < 4; i++) {

      if (apiQuery[i] != "") {

        if (typeof apiQuery[i] == "number") {
          questionNum = apiQuery[i];
        }

        else if (apiQuery[i] == "Hard" || apiQuery[i] == "Medium" || apiQuery[i] == "Easy") {
          difficulty = "&difficulty=" + apiQuery[i].toLowerCase();
        }

        // else if (apiQuery[i] == "category"){  WILL VISIT LATER
        //   type = "&category=" + apiQuery[i].toLowerCase();
        // }

        else if (apiQuery[i] == "Multiple Choice" || apiQuery[i] == "True/False") {
          if (apiQuery[i] == "Multiple Choice") {
            type = "&type=" + "multiple";
          }
          else {
            type = "&type=" + "boolean"
          }
        }
      }
    }

    return this.http.get(apiUrl + +questionNum + difficulty + type)
      .map((response: Response) => response.json())
  }
}

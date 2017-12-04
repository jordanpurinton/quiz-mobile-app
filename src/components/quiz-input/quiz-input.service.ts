import {QuizInput} from "./quiz-input.model";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx'; // observable 3rd party library angular 2 uses
import {Injectable} from "@angular/core";

@Injectable() // needed for http service
export class QuizInputService {

  constructor(public http: Http) {
  }

  getQuiz(data: any) {
    let apiQuery = [];
    let questionNum = 0;
    let category = "";
    let type = "";
    let difficulty = "";
    const APIURL = 'https://opentdb.com/api.php?amount=';

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

        // number of questions
        if (typeof apiQuery[i] == "number") {
          questionNum = apiQuery[i];
        }

        // question category
        else if (apiQuery[i] == "Any Category"){
        }

        else if (apiQuery[i] == "General Knowledge"){
          category = "&category=9";
        }

        else if (apiQuery[i] == "Music"){
          category = "&category=12";
        }

        else if (apiQuery[i] == "Television"){
          category = "&category=14";
        }

        else if (apiQuery[i] == "Science & Nature"){
          category = "&category=17";
        }

        else if (apiQuery[i] == "Sports"){
          category = "&category=21";
        }

        else if (apiQuery[i] == "History"){
          category = "&category=23";
        }

        else if (apiQuery[i] == "Politics"){
          category = "&category=24";
        }

        else if (apiQuery[i] == "Art"){
          category = "&category=25";
        }

        else if (apiQuery[i] == "Celebrities"){
          category = "&category=26";
        }

        else if (apiQuery[i] == "Vehicles"){
          category = "&category=28";
        }

        // question difficulty
        else if (apiQuery[i] == "Hard" || apiQuery[i] == "Medium" || apiQuery[i] == "Easy") {
          difficulty = "&difficulty=" + apiQuery[i].toLowerCase();
        }

        // question type
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

    return this.http.get(APIURL + questionNum + category + difficulty + type)
      .map((response: Response) => response.json())
  }
}

export class Question {

  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string [];
  question_text: string;
  type: string;

  constructor(category: string, correct_answer: string, difficulty: string,
  incorrect_answers: string [], question_text: string, type: string) {
    this.category = category;
    this.correct_answer = correct_answer;
    this.difficulty = difficulty;
    this.incorrect_answers = incorrect_answers;
    this.question_text = question_text;
    this.type = type;
  }
}


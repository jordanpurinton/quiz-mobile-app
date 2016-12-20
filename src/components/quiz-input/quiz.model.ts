export class Quiz {
  questionLimit: number;
  category: string;
  difficulty: string;
  type: string;

  constructor(questionLimit: number,
              category: string,
              difficulty: string,
              type: string,
              ) {
    this.questionLimit = questionLimit;
    this.category = category;
    this.difficulty = difficulty;
    this.type = type;
  }
}

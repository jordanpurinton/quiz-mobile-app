export class Quiz {
  questionLimit: number;
  category: string;
  difficulty: string;
  type: string;
  encoding: string;

  constructor(questionLimit: number,
              category: string,
              difficulty: string,
              type: string,
              encoding: string) {
    this.questionLimit = questionLimit;
    this.category = category;
    this.difficulty = difficulty;
    this.type = type;
    this.encoding = encoding
  }
}

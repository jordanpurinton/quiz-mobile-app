import { NgModule } from '@angular/core';
import { QuestionComponent } from './question/question';
import { QuestionCardComponent } from './question-card/question-card';
import { QuizInputComponent } from './quiz-input/quiz-input';
@NgModule({
	declarations: [QuestionComponent,
    QuestionCardComponent,
    QuizInputComponent],
	imports: [],
  exports: [QuestionComponent,
    QuestionCardComponent,
    QuizInputComponent]
})
export class ComponentsModule {}

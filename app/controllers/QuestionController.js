import { questionService } from "../services/QuestionService.js"
import { AppState } from "../AppState.js";

function _drawQuestion() {
  console.log('i can draw')
  const triviaQuestions = AppState.questions
  let content = ''
  triviaQuestions.forEach(question => content += question.QuestionCard)
  document.getElementById('trivia-cards').innerHTML = content
}

export class QuestionController {
  constructor() {
    AppState.on('questions', _drawQuestion)
    console.log('The Q Controller has loaded')
    this.getQuestions()
  }

  getQuestions(){
    console.log('lets get some questions')
    questionService.getQuestions()
  }

}

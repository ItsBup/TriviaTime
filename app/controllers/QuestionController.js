import { questionService } from "../services/QuestionService.js"

export class QuestionController {
  constructor() {
    console.log('The Q Controller has loaded')
    this.getQuestions()
  }

  getQuestions(){
    console.log('lets get some questions')
    questionService.getQuestions()
  }

}

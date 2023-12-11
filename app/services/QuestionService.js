import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

class QuestionService {
  async getQuestions(){
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=hard&type=boolean')
    console.log('huh', response);
    let body = await response.json()
    console.log('yay',body)
    let newQuestions = body.results.map(questionData => new Question(questionData))
    console.log('cool',newQuestions)
    AppState.questions = newQuestions
  }
}

export const questionService = new QuestionService()
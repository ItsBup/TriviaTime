class QuestionService {
  async getQuestions(){
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=20&difficulty=hard')
    console.log('huh', response);
  }
}

export const questionService = new QuestionService()
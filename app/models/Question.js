export class Question {
  constructor(data) {
      this.difficulty = data.difficulty
      this.type = data.type
      this.category = data.category
      this.question = data.question
      this.correct_answer = data.correct_answer
      this.incorrect_answer = data.incorrect_answer

  }

  get QuestionCard(){
    return `
      <div class="col-6 mb-2">
        <div class="card">
          <h4>${this.question}</h4>
          <button class="btn btn-success">${this.correct_answer}</button>
          <button class="btn btn-success">${this.incorrect_answer}</button>
        </div>
      </div>
    `
  }
}
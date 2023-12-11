export class Question {
  constructor(data) {
      this.difficulty = data.difficulty
      this.type = data.type
      this.category = data.category
      this.number = data.number
  }

  get QuestionCard(){
    return `
      <div class="col-4 mb-2">
        <div class="card">
          <h4>Question stuff</h4>
        </div>
      </div>
    `
  }
}
export class Question {
  constructor(data) {
      this.difficulty = data.difficulty
      this.type = data.type
      this.category = data.category
      this.number = data.number
  }

  get QuestionCard(){
    return `
    
    `
  }
}
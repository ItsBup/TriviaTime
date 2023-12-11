import { QuestionController } from "./controllers/QuestionController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [QuestionController],
    view: 'app/views/HomeView.html'
  },
])
import questions from './questions';

export default class QuestionService {
    static getQuestions() {
        return questions ? questions : [];
    }
}
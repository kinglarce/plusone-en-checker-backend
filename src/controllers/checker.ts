import { validateWords } from "../services/word_checker";
interface CheckerResponse {
  message: string;
}

export default class CheckerController {
  public async getResponse(word: string): Promise<CheckerResponse> {
    validateWords(word);
    return {
      message: "Test",
    };
  }
}

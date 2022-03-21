import { getInvalidWords } from "../services/word_checker";
interface CheckerResponse {
  message: string;
}

// Test: // Do you likee cats adn dogs?
export default class CheckerController {
  public async getResponse(word: string): Promise<CheckerResponse> {
    getInvalidWords(word);
    return {
      message: "Test",
    };
  }
}

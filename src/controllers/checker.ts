import { getInvalidWords } from "../services/word_checker";

interface ICheckerPayload {
  sentence: string;
}

export default class CheckerController {
  public async check({ sentence }: ICheckerPayload): Promise<string[]> {
    if (!sentence) throw new Error("Invalid payload.");
    return getInvalidWords(sentence);
  }
}

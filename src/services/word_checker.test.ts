import { getInvalidWords } from "./word_checker";

describe("WordChecker", () => {
  describe("getInvalidWords", () => {
    it("should return 'likee' and 'adn' as invalid words", async () => {
      const sentence = "Do you likee cats adn dogs?";
      const invalidWords = await getInvalidWords(sentence);
      expect(invalidWords).toEqual(["likee", "adn"]);
    });
    it("should return empty when input is empty", async () => {
      const sentence = "";
      const invalidWords = await getInvalidWords(sentence);
      expect(invalidWords).toEqual([]);
    });
    it("should return empty because it ignores special characters", async () => {
      const sentence = "@#$%";
      const invalidWords = await getInvalidWords(sentence);
      expect(invalidWords).toEqual([]);
    });
    it("should return empty for valid sentence", async () => {
      const sentence = "The quick brown fox jumps over the lazy dog";
      const invalidWords = await getInvalidWords(sentence);
      expect(invalidWords).toEqual([]);
    });
    it("should return all because all words are invalid", async () => {
      const sentence = "TShe wpqpw UUUU?";
      const invalidWords = await getInvalidWords(sentence);
      expect(invalidWords).toEqual(["TShe", "wpqpw", "UUUU"]);
    });
  });
});

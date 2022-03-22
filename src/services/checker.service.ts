import fs from "fs";
import readline from "readline";

interface ICache {
  [key: string]: string;
}

let cache: ICache = {};
const WORD_LIST_FILE = "./public/master.txt";
const SPACES_REGEXP = /\r?\n|\r/g;
const ALPHANUM_REGEXP = /[^a-zA-Z0-9\-_\s]/g;

const getKey = (word: string) => word.replace(SPACES_REGEXP, "").toLowerCase();

const generateCache = async (): Promise<ICache> => {
  return new Promise<ICache>((resolve) => {
    const fileStream = fs.createReadStream(WORD_LIST_FILE);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    rl.on("line", (line: string) => {
      const word = getKey(line);
      cache[word] = line;
    });
    fileStream.on("end", () => {
      fileStream.close();
      resolve(cache);
    });
    fileStream.on("close", () => {
      fileStream.destroy();
    });
  });
};

const isWordExists = async (word: string): Promise<boolean> => {
  const key = getKey(word);
  cache = Object.keys(cache).length === 0 ? await generateCache() : cache;
  return cache[key] ? true : false;
};

const getInvalidWords = async (sentence: string): Promise<string[]> => {
  const words = sentence
    .replace(ALPHANUM_REGEXP, "")
    .split(" ")
    .filter(Boolean);
  const wordsValidity = await Promise.all(words.map(isWordExists));
  return words.filter((_, index) => !wordsValidity[index]);
};

export { getInvalidWords };

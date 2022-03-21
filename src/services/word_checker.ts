import fs from "fs";
import readline from "readline";

interface Cache {
  [key: string]: string;
}

const cache: Cache = {};
const WORD_LIST_FILE = "./public/master.txt";

const getKey = (word: string) => word.replace(/\r?\n|\r/g, "").toLowerCase();

const generate = async () => {
  return new Promise<Cache>((resolve) => {
    const fileStream = fs.createReadStream(WORD_LIST_FILE);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    rl.on("line", (line: string) => {
      const word = getKey(line);
      console.log("the word : ", word);
      cache[word] = line;
    });
    fileStream.on("end", () => {
      resolve(cache);
    });
  });
};

const validateWords = async (word: string) => {
  // const word_cache: Cache | unknown = !cache ? await generate() : cache;
  // cache = !cache ? await generate() : cache;
  const key = getKey(word);
  // console.log("cache : ", cache);
  if (Object.keys(cache).length === 0) {
    generate().then(() => {
      console.log("Sample search : ", cache[key]);
    });
    return;
  }
  console.log("Sample search2 : ", cache[key]);
  return;
};

export { validateWords };

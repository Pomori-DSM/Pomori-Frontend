import { phrase } from "../constant/phrase";

export const useRandomPhrase = () => {
  const arr = new Array(5).fill(null);
  const randomNumArr = arr.map((_, i) => {
    if (i - 1 !== i) return Math.floor(Math.random() * phrase.length);
  });

  const phraseArr = randomNumArr.map((num) => {
    return phrase[num!];
  });
  return phraseArr;
};

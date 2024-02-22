export const getRandomChar = (min: number, max: number) => {
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
};
export const getRandomSymbols = () => {
  const symbolsArr = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  return symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
};
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
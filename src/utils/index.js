export const getIndexOfWhitespace = (str, number) => {
  let res = 0;
  for (let i = 0; i < number; i++) {
    res = str.indexOf(" ", res + 1);
    if (res == -1) {
      return str.length;
    }
  }
  return res;
};

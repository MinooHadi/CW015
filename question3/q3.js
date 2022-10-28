let str = "hellow i am student and search my problem in google";

function replace1(str) {
  let result = str
    .replace(/a/g, "@")
    .replace(/e/g, "3")
    .replace(/g/g, "&")
    .replace(/i/g, "!")
    .replace(/o/g, "0");

  return result;
}
console.log(replace1(str));

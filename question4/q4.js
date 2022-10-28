let obj = {
  name: "nasi",
  family: "shaf",
  age: 26,
};
let array1 = [];
let array2 = [];
let str = "";
function objToStr(obj) {
  for (key of Object.keys(obj)) {
    array1.push(key);
  }
  for (value of Object.values(obj)) {
    array2.push(value);
  }
  for (let i = 0; i < array1.length; i++) {
    str += `${array1[i]}@@${array2[i]}&&`;
  }
  return str.slice(0, str.length - 2);
}
console.log(objToStr(obj));
let str2 = "name@@nasi&&family@@shaf&&age@@26";
function strToObj(str) {
  let temp = str.split("&&");
  let array = [];
  for (let t of temp) {
    let temp2 = t.split("@@");
    array.push(temp2);
  }
  return Object.fromEntries(array);
}
console.log(strToObj(str2));

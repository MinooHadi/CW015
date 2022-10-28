let array = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [];

for (let i = 0; i < array.length; i++) {
  array[i] += 10;
}
console.log(array);

for (let i = 0; i < array.length; i++) {
  arr2.push(array[i] + 10);
}
console.log(array);
console.log(arr2);

let find = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === 4) {
    find = array[i];
    console.log(find);
    break;
  }
}

// function myforEach(callback){
// for(let i=0; i<this.length;i++){
//     callback(this[i])
// }
// }
// let obj={
//    array:[1,2,3,4,5,6,7],
//    myforEach(callback){
//     for(let i=0; i<this.array.length;i++){
//         callback(this.array[i])

//     }
//     },

// }
// obj.myforEach((item)=>console.log(item));
// console.log(obj.array);

// for (let i = 0; i < arr1.length; i++) {

//     let sum=arr1[i]+6;
//     arr2.push(sum)
// }
// console.log(arr2);

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);
// function myFunction(item) {
// sum += item;
// return sum
// }
// console.log(sum);

// let arr3=[1,2,3,4,5,6,7];
// function check(){

// }

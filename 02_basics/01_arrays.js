//Array

const myArray =[0,1,2,3,4,5,"sejal",true,8]
const colors=["red","blue","yellow"]

const arr2 = new Array(1,2,3,4)

console.log(myArray[1]);
console.log(myArray.length)

//*******Array Methods**** */

//myArray.push(6)
//myArray.unshift(10)
//console.log(myArray.indexOf(true));

const newarr=myArray.join()
console.log(myArray)

console.log(newarr);

//Slice & Spice

console.log("A" ,myArray);

const myn1=myArray.slice(1,3)
console.log(myn1);
console.log("B", myArray);

//Differnce between slice and splice is in slice original array remains same, whereas in splice, original array changes.
const myn2 = myArray.splice(1,5)
console.log("C", myArray)
console.log(myn2)
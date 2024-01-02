const name="Sejal"
const repocount = 50

// console.log(name + repocount +"value")

console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

//other way to define string
const gameName = new String('Sejal-game-asnani')

console.log(gameName[0]);
console.log(gameName.__proto__);

//some objects

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,5)
console.log(newString)

const newStr ="         sejal      "
console.log(newStr)
console.log(newStr.trimStart())



const url="https:///sejal.com/sejal%20asnani"


console.log(url.replace('%20', '-'))
console.log(url.includes('sejall'))

console.log(gameName.split('-'))

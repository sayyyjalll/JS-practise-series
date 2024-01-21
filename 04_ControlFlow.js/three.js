//for of

//[" "," "," "]
const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

//Map       

const map= new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")




for (const [key,value] of map) {
    
    
}


//objects are not iterable

// const myObject ={
//     'Game1' : 'NFS',
//     'Game2' : 'Spiderman'
// }

// for (const [key , value] of myObject) {
//     console.log(key, ':-', value);   //Not iterable
    
// }


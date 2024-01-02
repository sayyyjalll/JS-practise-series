const colors= ["red","yellow","green"]

const fruits=["orange","apple","grapes"]

//Push : Array inside array
colors.push(fruits)
console.log(colors);
console.log(colors.length)

//Concat same as push
colors.concat(fruits)
console.log(colors)

const allColors = colors.concat(fruits)
console.log(allColors)


console.log(Array.isArray("Sejal"))
console.log(Array.from("Sejal"))
console.log(Array.from({name: "sejal"}))

///Convert variables into arrays
let s1=20
let s2=10
let s3=100

console.log(Array.of(s1,s2,s3))

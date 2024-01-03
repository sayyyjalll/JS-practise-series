//Singleton

//object litrerals
//Object.create

const mysym = Symbol("key1")


const Jsuser = {
    name: "Sejal",
    age: 22,
    [mysym]: "mykey1",
    "full name": "Sejal Asnani",
    email: "sejal@gmail.com",
    isLoggedin: false,
    lastLoginDays:["mon","tues"]

}
// first way to access object
console.log(Jsuser.age)

//second way
console.log(Jsuser["email"])

console.log(Jsuser["full name"])
console.log(Jsuser[mysym])


Jsuser.email="Sejal@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email="Asnani@chatgpt.com"
console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS User");
}



Jsuser.greeting1 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

Jsuser.greeting();
Jsuser.greeting1();





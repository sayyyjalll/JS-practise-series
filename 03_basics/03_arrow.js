const user={
    username:"Sejal",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} ,Welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="seju"
// user.welcomeMessage()

console.log(this);


// function chai(){
//     

//chai()


// const chai = function(){
//     let username="sejal"
//      console.log(this.username);
// }

const chai = () => {
    let username="sejal"
     console.log(this);
}

//chai()


// const addTwo= (num1,num2) => {
//     return num1+num2
// }


//const addTwo= (num1,num2) => num1+num2

//const addTwo= (num1,num2) => (num1+num2)


const addTwo= (num1,num2) => ({username: "sejal"})


console.log(addTwo(3,4))

const myArray =[2,3,4,5,6]

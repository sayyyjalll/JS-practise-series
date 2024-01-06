// Function declaration
/*
function sayMyName () {
    console.log("S");
    console.log("E");
    console.log("J");
    console.log("A");
    console.log("L");
}

sayMyName()
*/

// function addTwoNumbers(num1,num2){   //Parameters
//    console.log( num1+num2);
// }

function addTwoNumbers(num1,num2){   //Parameters
    
    // // let result = num1+num2
    // // return result
    // //After return function doesnot execute
    // console.log("Sejal"); //will never print

    return num1+num2
 }
 

const result= addTwoNumbers(3,4)       //Arguments

//console.log("Result" ,result);


function loginUserMessage (username="Seju"){
    //if(!username)
    if(username===undefined){
        console.log("Please enter an username");
        return

    }
        return `${username} just loggedin`
}

//console.log(loginUserMessage("Deshraj"))
console.log(loginUserMessage())


function calculateCartPrice(...num1){
              return num1
}

console.log(calculateCartPrice(200,400,500))



const user ={
    username:"sejal",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}


//handleObject(user)

handleObject({
      username: "seju",
      price:399
}
)


const myNewArray =[20,400,600,800]

function returnSecondValue(getArray){
    return getArray[3]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,2000,300,400]));
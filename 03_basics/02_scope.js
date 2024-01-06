

//This curly braces is called scope
// { }

let a= 300; 

if(true){
    let a = 10
    const b=20
    //console.log("inner" ,a);  //gives 10 value. because in scope (called block scope)
    
}



//console.log(a);  //gives 300 (global scope)
//console.log(b);


//Nestedd scope

function one(){
    const username = "Sejal"

    function two(){
    const website= " youtube"
    console.log(username);
    }

    //console.log(website);

    two()
}

//one()


if(true)
{
    const username="Sejal"

    if(username==="Sejal"){
        const website = "youtube"
        //console.log(username +website);
    }

   //console.log(website);
}

//console.log(username);

//+++++++++++= interesting +++++++++++


//This is a normal function

console.log(addone(5))
function addone(num){
    return num + 1

}




//This is also function sometimes called expression
//hoisting concept
addTwo(5)
const addTwo = function(num){
    return num + 2
}


//Immediately Invoked Function expression



//Named iife
(function chai()
{
    console.log(`DB connected`)
})();


//Unnamed iife
(() => {
    console.log(`DB connected 2`)
}) ();


//Parameters in iife
((name) => {
    console.log(`DB connected 2 ${name}`)
}) ('Sejal')
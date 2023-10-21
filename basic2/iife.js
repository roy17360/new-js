// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); /// we have to remind always like we have to use colon when we using consecutive iif fnc

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
/*//var c = 300//it can acces from outside the block that why we use let//global scope
let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a); // block scope
    
}
*/



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()//run in sequence 

}

 one()
 /*

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))//it can use before initialization

function addone(num){
    return num + 1
}



addTwo(5)// but in this method of execution we have to initialize first
const addTwo = function(num){
    return num + 2
}
*/
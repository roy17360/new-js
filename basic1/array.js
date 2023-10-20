//ARRAY
const myArr=[0,1,2,3]
console.log(myArr);

//Array method

myArr.push(6)
console.log(myArr);
myArr.pop(2)
console.log(myArr);


//unshift  , shift
myArr.unshift(9)
myArr.shift()

//join  it converts into string
const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);
 

/*
//includes  //indexof
console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

//slics splice
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //splice manipulate the value
console.log("C ", myArr);
console.log(myn2);
*/
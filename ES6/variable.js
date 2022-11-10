var a=10;
a=20; //reassigning the varaible
console.log(a) // a=20
let b=10;
b=30;//reassigning the varaible
console.log(b);// b=30;
const c=10;
// c=30;
console.log(c);// error=> we cant assign new value to the variable c

//const with object
const person ={
    name:"rahul",
    age:27
    }
person.gender="Male";// it will allow the changes
console.log(person)
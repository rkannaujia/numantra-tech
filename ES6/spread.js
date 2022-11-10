let a=[1,2,3,4,5,6];
let b=[10,20,30];
let c=[...a,"i am a string",...b];
console.log(c);
c.push(100);
console.log(c);

const obj1={
    fName:"Rahul",
    lName:"Kannaujia"
}
const obj2={
    ...obj1,
    fName:"Yash",
    isLogIn:true
}
console.log("obj1 =>"+ obj1.fName+obj1.lName); //obj1 will not be modified
console.log("obj2 =>"+obj2.fName+obj2.lName);
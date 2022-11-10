let printDetails = function(){
    console.log(this.name); 
}
let userDetails={
    name:"Rahul",
    age:"28",
    role:"software engineer",
}
printDetails.call(userDetails); // function borrowing
let userDetails1={
    name:"Suresh",
    age:"27",
    role:"Team Leader"
}
printDetails.call(userDetails1); 

//apply
let print = function(contact,address){
    console.log(this.name+" "+contact+" "+address); 
}
let Employee={
    name:"Rahul",
    age:26,
    designation:"Full stack dev"
}
print.call(Employee,8000,"sion"); // function borrowing
print.apply(Employee,[224232,"UP"]);//It takes array as an argument
let data=print.bind(Employee); //it return a binded function
data(12345,"Thane");
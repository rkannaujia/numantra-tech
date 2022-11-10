const objData=[{
  id:1,
  name:"Rahul Kannaujia",
  age:27,
  address:{
    city:"Ayodhya",
    pinCode:400022
  },
  marks:80,
},
{
  id:2,
  name:"Santosh Singh",
  age:28,
  address:{
    city:"Jaunpur",
    pinCode:400022
  },
  marks:70,
},
{
  id:3,
  name:"Jayhind Gupta",
  age:26,
  address:{
    city:"Bhadohi",
    pinCode:400022
  },
  marks:85,
}];
const jsonData=JSON.stringify(objData);
//convert the object in the JSON format
console.log(jsonData);
//convert the json in the Object format
const obj=JSON.parse(jsonData);
console.log(obj);

//map the name and city from the object 
const mapData = obj.map((data,index)=>{
  return `${index} ${data.name} ${data.address.city}`;
})
console.log(mapData);


//sort the marks greater than 80;
const sortedMarks=obj.filter((data)=>data.marks>80);
console.log(sortedMarks);
const persons = [{
    id: 1,
    name: "Rahul Kannaujia",
    age: 27,
    address: "Sion"
},
{
    id: 2,
    name: "Santosh singh",
    age: 28,
    address: "bhandup"
},
{
    id: 3,
    name: "Jayhind gupta",
    age: 26,
    address: "Ghatkopar"
}];
// for of loop=> iterates over the elements
for(let person of persons){
    console.log(person.name);
}
//  for in loop iterates over the index
for(let person in persons){
    console.log(persons[person].id);
}
//map creates new array
const newArr=persons.map((item,index)=>{
   return  console.log(` from map function=> ${index} ${item.name}`);
})
console.log(newArr);

// forEach loop=> it doexs not create a new array
let forEachArr=[];
persons.forEach((person)=>{
    return forEachArr.push(person.name);
})
console.log("forEach loop =>" + forEachArr);
// filter
//map creates new array
const filterAge=persons.filter((item)=>{
    return console.log(` from filter function=>  ${item.age>26}`);
})
console.log(filterAge);
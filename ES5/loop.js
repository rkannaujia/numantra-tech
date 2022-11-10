var persons = [{
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
    id:3,
    name: "Jayhind gupta",
    age: 26,
    address: "Ghatkopar"
}];
//for loop
for(var i=0; i<persons.length;i++){
    console.log(persons[i].name+" "+persons[i].address);
}
//while loop
var len=persons.length;
var i=0;
while(i<len){
    console.log(persons[i].name+" "+persons[i].age);
    i++;
}

//do while loop
var len1=persons.length;
var j=0;
do{
    console.log(persons[j].id+" "+persons[j].age);  
    j++;
}while(j<len1);
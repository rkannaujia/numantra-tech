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
let [rahul,santosh,jayhind]=persons;
console.log(rahul);
console.log(jayhind.age);

// Destructuring nested object
const obj={
    id: 1,
    name: "Rahul Kannaujia",
    age: 27,
    address: {
        country:"India",
        state:"Mhaharashtra",
        city:"Mumbai",
        Pincode:400022
    },
    gender:"male"
}

const {address:{state,city},name}=obj;
console.log(`${name} ${city} ${state}`);
var _ = require('underscore');
colors=["red","green","yellow","black","white","blue"];
console.log("give me first color : "+ _.first(colors));
console.log("give me first three color : "+ _.first(colors,3));
console.log("give me first color : "+ _.head(colors));
/** 
//each function
_.each(colors,(color,index)=>{
    console.log(index+" "+color);
});
//with object
const obj=[{
    id:1,
    name:"prateek",
    age:270,
    addres:{
        city:"Mumbai",
        "pin":400022
    },
    designation:"s/w engineer"
},
{
    id:2,
    name:"rahul",
    age:27,
    addres:{
        city:"pune",
        "pin":400024
    },
    designation:"s/w engineer"
}]
_.each(obj,(newObj)=>{
    console.log(newObj.addres);
});

let arr=[1,2,3,4,5,6,7,8,9];
let newArr=[];
_.each(arr,(el)=>{
    newArr.push(el*5);
});
console.log(newArr);
*/

//------map function 
/** */
let arr=[1,2,3,4,5,6,7,8,9];
// _.map(arr,(el,index)=>{
//     console.log(index+" => "+el*1000);
// });

// _.filter(arr,(el)=>{
//     console.log(el>5);
// });
//find=> it will return first even number present in the list
//filter=>it will return all even number present in the list
// let even = _.find(arr, (num)=> num % 2 === 0);
// console.log(even);
// let evens = _.filter(arr, (num)=> num % 2 === 0);
// console.log(evens);

//compact=>it will remove all falsy value present in the list
//falsy value=>false,0,null,undefined,NaN,""
const items=[100,true,false,0,null,undefined,NaN,"","i am not a empty string"];
console.log(_.compact(items));//100
//_.flatten()=>it will return nested array to single array
const item2=[[1,2,3],[["one","two"],["three","four"]],[10,9,8]];
console.log(_.flatten(item2));
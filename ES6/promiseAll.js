

let p1=new Promise((resolve,reject)=>{
    console.log("promise is pending");
    if(10>5){
        resolve("promise one is successfuly resolve")
    }else{
        reject("promise is rejected");
    }
});
let p2=new Promise((resolve,reject)=>{
    console.log("promise is pending");
    if(12>5){
        resolve("promise two is successfuly resolve")
    }else{
        reject("promise is rejected");
    }
});
Promise.all([p1,p2]).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})
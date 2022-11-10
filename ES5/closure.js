//an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.
function outer(){
    let a=20;
    function inner(){
        let b=30;
        console.log(a+b); //a is accessible in inner function
    }
   return  inner();
}
outer();
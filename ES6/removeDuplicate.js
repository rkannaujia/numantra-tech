let arr = [5, 2, 1,5, 2, 1];
let uniqueEl=arr.filter((item,index) => {
    // console.log(item+" "+index+" "+arr.indexOf(item));
    return arr.indexOf(item) === index }
)
console.log(uniqueEl);


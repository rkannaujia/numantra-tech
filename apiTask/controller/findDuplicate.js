export const findDuplicate = (req, res) => {
    if (Object.keys(req.body).length <= 0)
        return res.status(200).json("body is empty");
    const arr = req.body.arr;
    const sortedArr = arr.slice().sort();
    let dupEl = [];
   for(let i=0;i<sortedArr.length;i++){
    if(sortedArr[i+1]===sortedArr[i]){
        dupEl.push(sortedArr[i]);
    }if(dupEl.length<=0) {
       return res.status(400).json("Duplicate elements are not available ")
    }
    if(i==sortedArr.length-1){
        res.status(200).json(dupEl);
    }
   }
}
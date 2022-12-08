export const removeDuplicate= (req,res)=>{
    if (Object.keys(req.body).length <= 0)
        return res.status(200).json("body is empty");
    let arr=req.body.data;
    // console.log(arr);
    if(arr.length<0){
     return res.status(500).json("array length is less than 0");  
    }else{
        let uniqueEl=arr.filter((item,index) => {
            // console.log(item+" "+index+" "+arr.indexOf(item));
            return arr.indexOf(item) === index}
        )
        return res.status(200).json(uniqueEl);
    }
}
const findMaxVersion = (v1, v2) => {
    let num1 = v1.replace(/\./g, '');
    let num2 = v2.replace(/\./g, '');
    // console.log(num1,num2)
    if (num1.length > num2.length) {
        let difference = num1.length - num2.length;
        num2 = num2 * (10 ** difference)
    } else if (num1.length < num2.length) {
        let difference = num2.length - num1.length;
        num1 = num1 * (10 ** difference)
    }
    // console.log(num1,num2)
    let highestValue = Math.max(num1, num2);
    console.log(highestValue)
    if (num1 == highestValue) return v1;
    return v2;
}
export const getHighestValue = (req, res) => {
    if (Object.keys(req.body).length <= 0)
        return res.status(200).json("body is empty");
    let a = req.body.a;
    let b = req.body.b;
    if (a.length <= 0 || b.length <= 0) {
       return res.status(400).json("Invalid Input");
    }
    let max = findMaxVersion(a, b);
    res.status(200).json(max);
}
export const getError = (req, res) => {
    if (Object.keys(req.body).length <= 0)
        return res.status(200).json("body is empty");
    let results = req.body.Result;
    if (results.length < 0) {
        return res.status(400).json("empty array of object")
    } else {
        for (let result of results) {
            result["ErrCode"] = 400;
        }
        return res.status(200).json(results)
    }
}
export const uploadFile = (req, res) => {
    console.log(req.file);
    if (!req.file) return res.status(400).json("error while uploading the file");
    return res.status(200).send("File uploaded")
}
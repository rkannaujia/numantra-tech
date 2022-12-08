export const getAverage = (req, res) => {
    if (Object.keys(req.body).length <= 0)
        return res.status(200).json("body is empty");
    const objData = req.body.Input;
    if (objData.length <= 0) {
        return res.status(400).json("Provide an array of Object")
    } else {
        const marks = objData.map(item => item.marks);
        let sum = 0, avg;
        for (let mark of marks) {
            sum += mark;
        }
        avg = sum / marks.length;
        console.log(avg);
        return res.status(200).json("avg=:"+avg)
    }
}
export const getKeys = (req, res) => {
    const arrObj = req.body;
    let arrKeys = Object.keys(arrObj);
    if (arrKeys.length <=0) {
        return res.status(400).json("body is empty");
    } else {
            return res.status(200).json(arrKeys)    
    }
}

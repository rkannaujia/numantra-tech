import { db } from "../connect.js";

export const getUser=(req,res)=>{
const q="SELECT * FROM users WHERE email = ?";



db.query(q,[req.body.email],(err,data)=>{
    if(err) return res.status(500).json(err);
    if(data.length === 0) return res.status(404).json("User not found");
    return res.status(200).json(data[0]);
});
}
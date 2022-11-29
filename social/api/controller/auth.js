import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
   
    let username = req.body.username;
    // console.log(username);
    db.query(`SELECT * FROM users WHERE username = "${username}"`, (err, data) => {
        if (data.length) {

            console.log(data[0].username);
            return res.status(409).json("User already exists!");
            // return res.send("user already there")
        }
        if(err){
            return res.status(500).json(err);
        }
        else {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);
            // now instead of "req.body.password" we will use "hashedPassword "
            const qUser = "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";
            const values = [
                req.body.username,
                req.body.email,
                hashedPassword,
                req.body.name
            ];

            db.query(qUser, [values], (err, data) => {
                console.log(req.body);
                if (err) return res.status(500).json(err);
                return res.status(200).json("User has been created");
            });
        }
    });
}
export const login = (req, res) => {
    const username = req.body.username;
    //   console.log(username);
    db.query(`SELECT * FROM users WHERE username = "${username}"`,  (err, data) => {
        // console.log(data[0]);
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found");
        //first check the enered passowrd =>compare with existing password
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password);
        // console.log(checkPassword);
        if (!checkPassword) return res.status(400).json("wrong password or username!");
        //create a token using jwt(jsonwebtoken) and check the id of the user is equal or not
        const token = jwt.sign({ id: data[0].id }, "secretkey");

        //create a cookie =>cookieName= accessToken
        //we dont want to show the password to the use so we will do the array destructuring
        const { password, ...othersInfo } = data[0]
        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json("login Successfull"); //.json(othersInfo)
    });
}

export const logout = (req, res) => {
    //we will clear the cookie
    res.clearCookie("accessToken", {
        secure: true, //for security purpose
        sameSite: "none" //react(frontend) and node(backend) will run on  different port so it will block the accessToken for that we are using "sameSite"
    }).status(200).json("User has been logged out");
}
import express from "express";
import { db } from "./connect.js";
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js'
import cors from 'cors';
import cookieParser from "cookie-parser";
import axios from 'axios';

const app = express();
//global level middileware It is use to accept all the json data from the body
app.use(express.json())
app.use(cors());
app.use(cookieParser())
//router level api
app.use('/api/users/', userRoutes);
app.use('/api/auth/', authRoutes);
app.post('/convert/', async (req, res) => {
  let amount = req.body.amount
  let to = req.body.cur1
  let from = req.body.cur2
  console.log(amount, to, from);
  let rate = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`).then((response) => {
    console.log(response.data.rates);
    return response.data.rates
  })
  // console.log(rate[to]);
  // console.log(rate[from]);
  console.log(rate);
  let toRate = rate[to];
  let fromRate = rate[from]
 let finalValue = ((fromRate / toRate) * amount).toFixed(2);
  res.json({ message: `Currency exchange value country ${to} and ${from} `, output: finalValue, status: 200 })
});
app.get('/users', async(req,res)=>{
  let users=await axios('https://jsonplaceholder.typicode.com/users').then(res=>{
    return res.data;
  });
  console.log(users);
})

// to check wheather connection is done properly or not
db.connect((err) => {
  if (!err) return console.log("connected to mysql db");
  return console.log(err);
});
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT http://localhost:${PORT}/`);
});
import express from 'express';
import cors from  'cors';
const app= express();

app.use(cors())
app.use(express.json());

app.post('/calculate',(req,res)=>{
  console.log(req.body);
    let num1 = parseFloat(req.body.num1);
    let operator = req.body.operator;
  let num2 = parseFloat(req.body.num2);
  
  let result;
  switch (operator) {
    case '+': result=num1+num2;
    break;
    case '-': result=num1-num2;
    break;
    case '*': result=num1*num2;
    break;
    case '/': result=num1/num2;
    break;
    case '%': result=num1%num2;
    break;
  
    default: result="Invalid Input";
      break;
  }
  let finalResult=`${num1} ${operator} ${num2} = ${result}`;
  res.status(200).send(finalResult)
});

const PORT=8700;
app.listen(PORT,()=>{
    console.log(`app is listening on port http://localhost:${PORT}/`);
})
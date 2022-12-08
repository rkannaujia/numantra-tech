import express from 'express';
import allRoutes from './routes/allRoutes.js';


const app=express();

//global level middileware It is use to accept all the json data from the body
app.use(express.json())

//router level middileware
app.use('/api/',allRoutes);



const PORT=8100;
app.listen(PORT,()=>{
    console.log(`app is listening on port http://localhost:${PORT}/`);
})
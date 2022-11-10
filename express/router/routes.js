const express = require('express');
const router=express.Router();
const User =require('../model/user.js')

//fetch the user from the db => for retrive data we use get method
router.get('/', async(req,res)=>{
    try {
       const user = await User.find();
       res.status(200).send(user);

    } catch (error) {
        res.status(400).send('Error' +error)
    }
});

// fetch the username by id
router.get('/:id', async(req,res)=>{
    try {
       const user = await User.findById(req.params.id);
       res.status(200).send(user);

    } catch (error) {
        res.status(400).send('Error' +error)
    }
});

//create a new user => for sending the data to user we use Post method
router.post('/user', async(req,res)=>{
    console.log(req.body);
    const newUser= new User({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    });

    try {
     const jsondata= await newUser.save(); 
     res.status(200).send(jsondata);
    } catch (error) {
      res.status(400).send('Error'+error);
    }
})

// for update we use put and patch method
router.patch('/update/:id', async(req,res)=>{
    console.log(req.body);
    try {
       const updateUser = await User.findById(req.params.id);
       updateUser.tech=req.body.tech
       const jsondata= await updateUser.save(); 
        res.status(200).send(jsondata);

    } catch (error) {
        res.status(400).send('Error' +error);
    }
});

//for delete the user we use delete method
router.delete('/delete/:id', async(req,res)=>{
    console.log(req.params.id);
        try {
          await User.findByIdAndDelete(
            req.params.id,
          );
          res.status(200).json("User has been deleted");
        } catch (err) {
            res.status(400).send('Error' +err)
        }
})

module.exports= router;
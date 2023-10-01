const express = require('express');
const { getData, getUserById, createUser, updateUserById, deleteUserById } = require('../controller/user.js');
const router=express.Router();
const User =require('../model/user.js')

//fetch the user from the db => for retrive data we use get method
router.get('/', getData);

// fetch the username by id
router.get('/:id',getUserById);

//create a new user => for sending the data to user we use Post method
router.post('/user', createUser )

// for update we use put and patch method
router.patch('/update/:id', updateUserById);

//for delete the user we use delete method
router.delete('/delete/:id', deleteUserById)

module.exports= router;
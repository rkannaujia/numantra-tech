const axios = require('axios');

let getDataFn = async (url) => {
  try {
    let res = await axios.get(url)
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

getDataFn('http://localhost:9026/api/books-i/getAllBooks')

/*
const url = 'https://jsonplaceholder.typicode.com/todos/';

fetch(url)
  .then(response => response.json())
  .then(jsonData => console.log(jsonData))
  */
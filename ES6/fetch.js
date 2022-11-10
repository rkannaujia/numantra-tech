fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    let name =data[0].name;
    console.log(name);
  });
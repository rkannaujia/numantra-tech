const axios = require("axios");
const express = require("express");
const redis = require("redis");
const util = require("util");

//making redis connection
const redisUrl = "redis://127.0.0.1:6380";
const client = redis.createClient({
    redisUrl,
    legacyMode: true,
});
client.connect();

client.set = util.promisify(client.set);
client.get = util.promisify(client.get);

const app = express();
app.use(express.json());

//storing data using key and value 
/** 
app.post("/setData", async (req, res) => {
 console.log(req.body);
 const { key, value } = req.body;
 const response = await client.set(key, value);
 res.json(response);
});

//getting data using key
app.get("/getData", async (req, res) => {
 console.log(req.body);
 const { key } = req.body;
 const data = await client.get(key);
 res.json(data);
});
*/
//making request to third party api and implemented caching.
app.get("/getPost/:id", async (req, res) => {
 const { id } = req.params;

 const cachedata = await client.get(`post-${id}`);
 if (cachedata) {
  return res.json(JSON.parse(cachedata));
 }
 const response = await axios.get(
  `https://jsonplaceholder.typicode.com/posts/${id}`
 );
 client.set(`post-${id}`, JSON.stringify(response.data));

 return res.json(response.data);
});
app.get("/test", async (req, res) => {
 try {
   const reply = await client.get("countries");
  if (reply) {
   return res.json(JSON.parse(reply));
  }
   const response = await axios.get("https://restcountries.com/v3.1/all");
  await client.set("countries", JSON.stringify(response.data)); 
  return res.json(response.data);
   } catch (err) {
   res.send(err.message);
   }
  });

const PORT=8800;

app.listen(PORT, () => {
 console.log(`Server listening on PORT http://localhost:${PORT}/`);
});


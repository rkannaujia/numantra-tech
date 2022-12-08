import axios from "axios";

  export const getData = async(req, res) => {
    try {
        const result= await axios.get('http://jsonplaceholder.typicode.com/posts');
        const posts=result.data;
        const filteredData=posts.filter((post)=>{
            return post.userId==3;
        })
        // console.log(filteredData);
        return res.status(200).json(filteredData)
    } catch (error) {
       res.status(400).json(error.message) 
    }

}

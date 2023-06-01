import { useState } from 'react'
import axios from "axios";
 
const Form = () => {


 const [c, setC] = useState({
    description:""
 });

const handleChange = (e) =>{
    setC(prev=>({...prev, [e.target.name]: e.target.value}));
}

const handleClick = async e =>{
    e.preventDefault();
    try{
        await axios.post("http://localhost:6001/comments", c)
        window.location.reload(false);

    }
    catch(err){
console.log(err)
    }
}

console.log(c);

    return (
        <div>
            <form action="/" method="post">
        <textarea placeholder='Comment here..' onChange={handleChange} name = "description"></textarea>
        <br></br>
        <button onClick={handleClick}>Send</button>
    </form>
        </div>
    )
}
 
export default Form;
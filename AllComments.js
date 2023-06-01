import { useState, useEffect } from 'react';
import axios from "axios";
import Form from "./form";
const CommentList = () => {
    const [comments, setComments] = useState([]);
 
    useEffect(() => {
        getComments();
    }, []);
 
    const getComments = async () => {
        const response = await axios.get('http://localhost:6001/comments');
        setComments(response.data);
    }
 
    return (
        <div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>&nbsp;&nbsp;&nbsp;No</th>
                        <th>&nbsp;&nbsp;&nbsp;Description</th>
                    </tr>
                </thead>
                <tbody>
                    { comments.map((comment, index) => (
                        <tr key={comment.id}>
                            <td>&nbsp;&nbsp;&nbsp;{index + 1}</td>
                            <td>&nbsp;&nbsp;&nbsp;{ comment.description }</td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
            <br></br>
            <Form/>
        </div>
    )
}
 
export default CommentList;
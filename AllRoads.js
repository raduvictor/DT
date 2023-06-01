import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const RoadList = () => {
    const [roads, setRoads] = useState([]);
 
    useEffect(() => {
        getRoads();
    }, []);
 
    const getRoads = async () => {
        const response = await axios.get('http://localhost:5000/roads');
        setRoads(response.data);
    }
 
    return (
        <div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>&nbsp;&nbsp;&nbsp;No</th>
                        <th>&nbsp;&nbsp;&nbsp;Street Name</th>
                    </tr>
                </thead>
                <tbody>
                    { roads.map((road, index) => (
                        <tr key={ road.ID }>
                            <td>&nbsp;&nbsp;&nbsp;{ index + 1 }</td>
                            <td>&nbsp;&nbsp;&nbsp;{ road.nume }</td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default RoadList;
import { useEffect, useState } from "react"
import axios from 'axios'

export default function College() {

    const [collegeList, setCollegeList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:8080/api/v1/colleges")
            if(response.status === 200) {
                setCollegeList(response.data)
            }
        }

        fetchData()
    }, [])

    return (
        <div>

            {collegeList.map(data => 
                <div>
                    {data.id}
                    {data.name}
                    {data.pincode}
                    {data.country}
                    {data.createdAt}
                    {data.events.map(event => (
                        <div>
                            <div>Event: {event.name}</div>
                            <div>Event: {event.seats}</div>
                            <div>Event: {event.dateOfEvent}</div>
                            <br></br>
                        </div>
                    ))}
                    <br></br>
                </div>
                
            )}

        </div>
    )
}

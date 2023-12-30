import { useEffect, useState } from "react"
import AppHeader from "../Header"
import EventsService from "../../Service/EventsService"
import EventTab from "../EventTab"
import './style.css'

export default function Event() {

    const [eventList, setEventList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await EventsService.getEventList()
            if(response.status === 200) {
                setEventList(response.data)
            }
        }

        fetchData()
    }, [])

    return (
        <div>

            <AppHeader />

            <div className="event-container">
                {eventList.map(event => 
                    <EventTab key={event.id} event={event} />
                )}
            </div>

        </div>
    )
}

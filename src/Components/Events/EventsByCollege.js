import { useEffect, useState } from "react"
import AppHeader from "../Header"
import EventsService from "../../Service/EventsService"
import EventTab from "../EventTab"
import { useLocation } from 'react-router-dom'
import './style.css'

export default function EventsByCollege() {

    const [eventList, setEventList] = useState([])
    const location = useLocation()

    useEffect(() => {
        async function fetchData() {

            const collegeId = location.pathname.split('/')[3]
            const pagination = location.search

            const response = await EventsService.getEventsByCollege(collegeId, pagination)
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
                    <EventTab key={event.id} event={event} moreEventsEnabled={false} />
                )}
            </div>

        </div>
    )
}

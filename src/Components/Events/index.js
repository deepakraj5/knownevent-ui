import { useEffect, useState } from "react"
import AppHeader from "../Header"
import EventsService from "../../Service/EventsService"
import EventTab from "../EventTab"
import Pagination from '@mui/material/Pagination';
import { useLocation, useNavigate } from 'react-router-dom'
import './style.css'

export default function Event() {

    const [eventList, setEventList] = useState([])
    const [page, setPage] = useState(1)
    const [totalEvent, setTotalEvent] = useState(1)

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {

        async function fetchData() {

            const pagination = `?pageNumber=${page - 1}`

            const response = await EventsService.getEventList(pagination)
            if(response.status === 200) {
                setEventList(response.data)
            }

            const totalEventResponse = await EventsService.getTotalEventsCount()
            if(totalEventResponse.status === 200) {
                setTotalEvent(Math.ceil(totalEventResponse.data / 9))
            }

        }

        fetchData()
    }, [page])

    useEffect(() => {
        const queryPageNumber = parseInt(location.search.split('pageNumber=')[1])
        queryPageNumber ? setPage(queryPageNumber + 1) : setPage(1)
    }, [])

    const handleOnPageChange = (value) => {
        navigate(`/?pageNumber=${value - 1}`)
        setPage(value)
    }

    return (
        <div>

            <AppHeader />

            <div className="pagination">
                <Pagination count={totalEvent} page={page} onChange={(e, value) => handleOnPageChange(value)} />
            </div>


            <div className="event-container">
                {eventList.map(event => 
                    <EventTab key={event.id} event={event} moreEventsEnabled={true} />
                )}
            </div>

        </div>
    )
}

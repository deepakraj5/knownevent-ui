import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_KNOWN_EVENT_BASE_URL}/api/v1`

class EventService {

    getEventList(pagination) {
        try {
            return axios.get(`${BASE_URL}/events${pagination}`)
        } catch (error) {
            console.log(error)
            return error
        }
    }

    createNewEvent(body, collegeId) {
        try {
            return axios.post(`${BASE_URL}/events/college/${collegeId}`, body)
        } catch (error) {
            console.log(error)
            return error
        }
    }

    getEventsByCollege(collegeId, pagination) {
        try {
            return axios.get(`${BASE_URL}/events/college/${collegeId}${pagination}`)
        } catch (error) {
            console.log(error)
            return error
        }
    }

    getTotalEventsCount() {
        try {
            return axios.get(`${BASE_URL}/events/total`)
        } catch (error) {
            console.log(error)
            return error
        }
    }

}

export default new EventService()

import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/v1'

class EventService {

    getEventList() {
        try {
            return axios.get(`${BASE_URL}/events`)
        } catch (error) {
            console.log(error)
            return error
        }
    }

}

export default new EventService()

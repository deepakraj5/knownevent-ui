import axios from 'axios'

const BASE_URL = `${process.env.REACT_APP_KNOWN_EVENT_BASE_URL}/api/v1`

class CollegeService {

    getCollegeList() {
        try {
            return axios.get(`${BASE_URL}/colleges`)
        } catch (error) {
            console.log(error)
            return error
        }
    }

    getCollegeNameList() {
        try {
            return axios.get(`${BASE_URL}/colleges/list`)
        } catch (error) {
            console.log(error)
            return error
        }
    }

}

export default new CollegeService()

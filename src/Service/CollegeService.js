import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/v1'

class CollegeService {

    getCollegeList() {
        try {
            return axios.get(`${BASE_URL}/colleges`)
        } catch (error) {
            console.log(error)
            return error
        }
    }

}

export default new CollegeService()

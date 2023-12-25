import { useEffect, useState } from "react"
import CollegeService from "../../Service/CollegeService"
import CollegeTab from "../CollegeTab"
import AppHeader from "../Header"

export default function College() {

    const [collegeList, setCollegeList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await CollegeService.getCollegeList()
            if(response.status === 200) {
                setCollegeList(response.data)
            }
        }

        fetchData()
    }, [])

    return (
        <div>

            <AppHeader />

            {collegeList.map(college => 
                <CollegeTab key={college.id} college={college} />
            )}

        </div>
    )
}

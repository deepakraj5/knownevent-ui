import { useEffect, useState } from "react"
import CollegeService from "../../Service/CollegeService"
import AppHeader from "../Header"
import Table, { TableProps } from '@mui/joy/Table';
import Chip from '@mui/joy/Chip'

import './style.css'
import { LocationCity, LocationDisabled, LocationOff, LocationOn } from "@mui/icons-material";

export default function College() {

    const [collegeList, setCollegeList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await CollegeService.getCollegeList()
            if (response.status === 200) {
                setCollegeList(response.data)
            }
        }

        fetchData()
    }, [])

    return (
        <div>

            <AppHeader />

            <div className="college-container">

                <Table aria-label="table sizes" size='sm'>
                    <thead>
                        <tr>
                            <th style={{ width: '40%' }}>College Name</th>
                            <th>No. Of Events</th>
                            <th>District</th>
                            <th>State</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collegeList.map(college =>
                            <tr key={college.id}>
                                <td>{college.name}</td>
                                <td>
                                    <Chip onClick={() => null}>{college.events.length}</Chip>
                                </td>
                                <td>{college.district}</td>
                                <td>{college.state}</td>
                                <td>
                                    <Chip variant="soft" size="sm"
                                        color="primary" onClick={() => college.mapLocation}
                                        startDecorator={<LocationOn />}
                                    />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>


            </div>


        </div>
    )
}

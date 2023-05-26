import './style.css'
import { get } from '../../service/apiClient'
import { useEffect, useState } from 'react'

function LogsPage() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        async function getCourseInfo() {
            const courseInfo = await get('courses');
            setCourses(courseInfo.data)
        }
        getCourseInfo();
    }, [])

    console.log(courses)

    return (
        <p>logs</p>
    )
}

export default LogsPage
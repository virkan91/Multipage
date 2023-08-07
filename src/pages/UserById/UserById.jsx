import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const UserById = () => {
    const parsms = useParams()

    return (
        <div>UserById {parsms.id}</div>
    )
}

export default UserById
import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext'

function InboxNav() {
    const { user } = useContext(AuthContext)

    return (
        <div className='h-14 border-b border-b-ig-elevated-separator flex items-center justify-center'>
            <div className=' text-center'>
                <h3 className='font-bold'> {user.username} </h3>
            </div>
        </div>
    )
}

export default InboxNav
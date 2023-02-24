import React from 'react'
import Header from '../../components/Header/Header'
import Suggestions from '../../components/Suggestion/Suggestions'

function ExplorePeople() {
    return (
        <div>
            <Header />
            <div className='my-10 px-[300px]'>
                <h2 className='text-xl mb-8'>Suggested</h2>
                <Suggestions />
            </div>
        </div>
    )
}

export default ExplorePeople
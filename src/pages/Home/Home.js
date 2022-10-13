import React from 'react'
import MiniProfile from '../../components/MiniProfile/MiniProfile'
import Suggestion from '../../components/Suggestion/Suggestion'

function Home() {
  return (
    <React.Fragment>


      <section className='w-80 mt-14 ml-10'>
        <MiniProfile />
        <Suggestion />
      </section>
    </React.Fragment>
  )
}

export default Home
import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MiniProfile from '../../components/MiniProfile/MiniProfile'
import Posts from '../../components/Posts/Posts'
import Suggestion from '../../components/Suggestion/Suggestion'

function Home() {
  return (
    <>
      <Header />
      <main className='max-w-[820px] flex justify-center my-0 mx-auto'>
        <section className='lg:w-3/4 max-w-[470px]'>
          <Posts />
        </section>

        <section className='hidden lg:block w-96 ml-10'>
          <MiniProfile />
          <Suggestion />
          <Footer />
        </section>
      </main>
    </>

  )
}

export default Home
import React from 'react'
import BoxChat from '../../components/BoxChat/BoxChat'
import Header from '../../components/Header/Header'
import InboxSideBar from '../../components/InboxSideBar/InboxSideBar'

function Inbox() {
  return (
    <>
      <Header />
      <div className='container flex justify-center m-auto mt-10'>
        <div className='flex border border-gray-300 lg:mx-auto w-[96%] bg-white h-[84vh]'>
          <InboxSideBar />
          <BoxChat />
        </div>
      </div>
    </>
  )
}

export default Inbox
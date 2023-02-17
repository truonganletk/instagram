import React from 'react'
import BoxDirect from './BoxDirect'
import InboxNav from './InboxNav'
// import InboxSearch from './InboxSearch'

function InboxSideBar() {
  return (
    <div className="border-r border-r-gray-300 basis-4/12 hidden md:block overflow-hidden">
      <InboxNav/>
      {/* <InboxSearch/> */}
      <BoxDirect/>
    </div>
  )
}

export default InboxSideBar
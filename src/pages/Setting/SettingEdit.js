import React from 'react'
import SettingSidebar from '../../components/SettingBox/SettingSidebar'
import Header from '../../components/Header/Header'
import EditProfile from '../../components/SettingBox/EditProfile'

function SettingEdit() {
  return (
    <React.Fragment>
      <Header />
      <div className='px-3'>
        <div className='flex border border-gray-300 lg:mx-auto h-[700px] lg:w-11/12 w-full'>
          <SettingSidebar />
          <EditProfile />
        </div>
      </div>
    </React.Fragment>
  )
}

export default SettingEdit
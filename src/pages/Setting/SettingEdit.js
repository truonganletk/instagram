import React from 'react'
import SettingSidebar from '../../components/SettingBox/SettingSidebar'
import Header from '../../components/Header/Header'
import EditProfile from '../../components/SettingBox/EditProfile'

function SettingEdit() {
  return (
    <React.Fragment>
      <Header />
      <div className='container flex justify-center m-auto mt-10'>
        <div className='flex border border-gray-300 lg:mx-auto w-[96%] bg-white min-h-max'>
          <SettingSidebar />
          <EditProfile />
        </div>
      </div>
    </React.Fragment>
  )
}

export default SettingEdit
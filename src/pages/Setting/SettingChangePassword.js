import React from 'react'
import Header from '../../components/Header/Header'
import ChangePassword from '../../components/SettingBox/ChangePassword'
import SettingSidebar from '../../components/SettingBox/SettingSidebar'

function SettingChangePassword() {
  return (
    <React.Fragment>
      <Header />
      <div className='container flex justify-center m-auto mt-10'>
        <div className='flex border border-gray-300 lg:mx-auto h-[700px] w-[96%] bg-white'>
          <SettingSidebar />
          <ChangePassword />
        </div>
      </div>
    </React.Fragment>
  )
}

export default SettingChangePassword
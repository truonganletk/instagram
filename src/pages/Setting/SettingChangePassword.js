import React from 'react'
import Header from '../../components/Header/Header'
import ChangePassword from '../../components/SettingBox/ChangePassword'
import SettingSidebar from '../../components/SettingBox/SettingSidebar'

function SettingChangePassword() {
  return (
    <React.Fragment>
      <Header />
      <div className='px-3'>
        <div className='flex border border-gray-300 lg:mx-auto h-[700px] lg:w-11/12 w-full'>
          <SettingSidebar />
          <ChangePassword />
        </div>
      </div>
    </React.Fragment>
  )
}

export default SettingChangePassword
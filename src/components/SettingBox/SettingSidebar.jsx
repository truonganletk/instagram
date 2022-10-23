import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SettingSidebar extends Component {
  render() {
    return (
      <ul className='border-r border-r-gray-300 basis-3/12 hidden md:block'>
        <li className='active hover:bg-gray-100'>
          <Link to={"/accounts/edit"}>
            <div className='px-5 py-4'>
              Edit Profile
            </div>
          </Link>
        </li>
        <li className='active hover:bg-gray-100'>
          <Link to={"/accounts/changepass"}>
            <div className='px-5 py-4'>
              Change Password
            </div>
          </Link>
        </li>
      </ul>
    )
  }
}

export default SettingSidebar
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from "../../asset/image/logo.png"
export class Logo extends Component {
  render() {
    return (
      <div className='basis-1/3'>
        <Link to="/#">
          <img className='logo' src={logo} alt="" height={100} />
        </Link>
      </div>
    )
  }
}

export default Logo
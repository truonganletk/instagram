import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import Seach from '../Search/Seach'

export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='flex justify-around items-center m-2 flex-row container mx-auto'>
                    <Logo />
                    <Seach />
                    <Navbar />
                </div>
            </React.Fragment>
        )
    }
}

export default Header
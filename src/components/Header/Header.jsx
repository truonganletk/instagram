import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import Seach from '../Search/Seach'

export class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className='bg-white'>
                    <div className='flex justify-around items-center flex-row container mx-auto py-2'>
                        <Logo />
                        <Seach />
                        <Navbar />
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header
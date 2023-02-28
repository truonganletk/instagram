import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import SpinLoader from '../components/SpinLoader/SpinLoader'

function PageWithHeader() {
    return (
        <div className='bg-ig-secondary-background dark:bg-black dark:text-white min-h-screen'>
            <Header />
            <Suspense fallback={<SpinLoader />} >
                <Outlet />
            </Suspense>
        </div>
    )
}

export default PageWithHeader
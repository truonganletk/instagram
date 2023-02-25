import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import SpinLoader from '../components/SpinLoader/SpinLoader'

function PageWithHeader() {
    return (
        <>
            <Header />
            <Suspense fallback={<SpinLoader />} >
                <Outlet />
            </Suspense>
        </>
    )
}

export default PageWithHeader
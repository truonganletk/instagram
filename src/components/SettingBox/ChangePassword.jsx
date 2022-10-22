import React, { Component } from 'react'

export class ChangePassword extends Component {
    render() {
        return (

            <form className='p-10 basis-full md:basis-9/12'>
                <h2 className='mb-6'>Username</h2>
                <div className="mb-6 flex w-full items-center">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 basis-3/12 mr-2">Old password</label>
                    <input type="password" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                </div>
                <div className="mb-6 flex w-full items-center">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 basis-3/12 mr-2">New password</label>
                    <input type="password" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                </div>
                <div className="mb-6 flex w-full items-center">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 basis-3/12 mr-2">Confirm new password</label>
                    <input type="password" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                </div>
                <button type="submit" className="mb-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-auto px-5 py-2.5 text-center">Submit</button>
                <div className="flex items-start mb-6">
                    <label className="ml-2 text-sm font-medium text-sky-500">
                        Forgot Password?
                    </label>
                </div>
            </form>


        )
    }
}

export default ChangePassword
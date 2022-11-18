import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { bio: '' };
        this.biohandleChange = this.biohandleChange.bind(this);
    }
    biohandleChange(event) {
        this.setState({ bio: event.target.value });
    }
    render() {
        return (
            <form className='p-10 basis-full md:basis-9/12'>
                <div className="mb-6 flex w-full items-center">
                    <div className="flex text-sm font-medium text-gray-900 basis-2/12 mr-5 justify-end ">
                        <img className="w-10 h-10 rounded-full p-2" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt />
                    </div>
                    <div className="focus:ring-blue-500 focus:border-blue-500 block w-full basis-10/12">
                        <h2>Username</h2>
                        <h2 className='text-sky-500'>Change profile photo</h2>
                    </div>
                </div>
                <div className="mb-5 flex w-full items-center">
                    <label htmlFor="name" className="text-right block text-sm font-medium text-gray-900 basis-2/12 mr-5 py-3"><strong>Name</strong></label>
                    <div className='basis-10/12'>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                    </div>
                </div>
                <div className="mb-6 flex w-full items-start">
                    <div className="basis-2/12 mr-5"></div>
                    <div className='basis-10/12'>
                        <p className='text-xs text-gray-500'>
                            Help people discover your account by using the name you&apos;re known by: either your full name, nickname, or business name.
                            <div className='mb-3'></div>
                            You can only change your name twice within 14 days.
                        </p>
                    </div>
                </div>
                <div className="mb-5 flex w-full items-center">
                    <label htmlFor="name" className="text-right block text-sm font-medium text-gray-900 basis-2/12 mr-5 py-3"><strong>Username</strong></label>
                    <div className='basis-10/12'>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                    </div>
                </div>
                <div className="mb-6 flex w-full items-start">
                    <div className="basis-2/12 mr-5"></div>
                    <div className='basis-10/12'>
                        <p className='text-xs text-gray-500'>
                            In most cases, you&apos;ll be able to change your username back to anle16.8 for another 14 days.
                            <span className='text-sky-500 hover:underline'><Link to={"/#"}>Learn more</Link></span>
                        </p>
                    </div>
                </div>
                <div className="mb-5 flex w-full items-center">
                    <label htmlFor="name" className="text-right block text-sm font-medium text-gray-900 basis-2/12 mr-5 py-3"><strong>Website</strong></label>
                    <div className='basis-10/12'>
                        <input type="text" id="name" disabled className="bg-gray-200 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Website" required />
                    </div>
                </div>
                <div className="mb-6 flex w-full items-start">
                    <div className="basis-2/12 mr-5"></div>
                    <div className='basis-10/12'>
                        <p className='text-xs text-gray-500'>
                            Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.
                        </p>
                    </div>
                </div>
                <div className="mb-1 flex w-full items-center">
                    <label htmlFor="name" className="text-right block text-sm font-medium text-gray-900 basis-2/12 mr-5 py-3"><strong>Bio</strong></label>
                    <div className='basis-10/12'>
                        <textarea type="text" id="name" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2" value={this.state.bio} onChange={this.biohandleChange} />
                    </div>
                </div>
                <div className="mb-6 flex w-full items-start">
                    <div className="basis-2/12 mr-5"></div>
                    <div className='basis-10/12'>
                        <p className='text-xs text-gray-500'>
                            {this.state.bio.length}/150
                        </p>
                    </div>
                </div>
                <div className="mb-1 flex w-full items-start">
                    <div className="basis-2/12 mr-5"></div>
                    <div className='basis-10/12'>
                    <p className='text-xs text-gray-500 mb-1 font-bold'>
                            Personal information
                        </p>
                        <p className='text-xs text-gray-500 mb-5'>
                            Provide your personal information, even if the account is used for a business, a pet or something else. This won&apos;t be a part of your public profile.
                        </p>
                    </div>
                </div>
                <div className="mb-5 flex w-full items-center">
                    <label htmlFor="name" className="text-right block text-sm font-medium text-gray-900 basis-2/12 mr-5 py-3"><strong>Email</strong></label>
                    <div className='basis-10/12'>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="" required />
                    </div>
                </div>
                <div className="mb-6 flex w-full items-center">
                    <label htmlFor="name" className="text-right block text-sm font-medium text-gray-900 basis-2/12 mr-5 py-3"><strong>Phone number</strong></label>
                    <div className='basis-10/12'>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                    </div>
                </div>
                <div className="mb-6 flex w-full items-center">
                    <label htmlFor="name" className="text-right block text-sm font-medium text-gray-900 basis-2/12 mr-5 py-3"><strong>Gender</strong></label>
                    <div className='basis-10/12'>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
                    </div>
                </div>
                <div className="mb-6 flex w-full items-center">
                    <label htmlFor="name" className="text-right block text-sm font-medium text-gray-900 basis-2/12 mr-5 py-3"><strong>Similar account suggestions</strong></label>
                    <div className='basis-10/12 flex'>
                        <input type="checkbox" className="p-2.5 mr-3" />
                        <p className='text-xs'>Include your account when recommending similar accounts people might want to follow.[?]</p>
                    </div>
                </div>
                <div className="mb-6 flex w-full items-center">
                    <div htmlFor="name" className="basis-2/12 mr-5 py-3"></div>
                    <div className='basis-10/12 flex'>
                        <button type="submit" className="mb-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  w-auto px-5 py-2.5 text-center">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default EditProfile
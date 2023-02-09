import React, { Component } from 'react'

export class NotificationItem extends Component {
    render() {
        return (
            <a href='/home'>
                <div className="flex justify-center">
                    <div className="flex flex-row bg-white shadow-lg items-center ">
                        <div className='basis-2/12 flex justify-center'>
                            <img className="w-16 h-16 rounded-full p-2 " src="https://picsum.photos/200" alt="" />
                        </div>
                        <div className=" py-5 flex flex-col justify-center items-center basis-8/12">
                            <p className="text-gray-700 text-xs">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                <span className="text-gray-600 text-xs">Last updated 3 mins ago</span>
                            </p>
                        </div>
                        <div className='basis-2/12 flex justify-center'>
                            <img className="h-16 w-16 p-2" src="https://picsum.photos/200" alt="" />
                        </div>
                    </div>
                </div>

            </a>
        )
    }
}

export default NotificationItem
import React, { Component } from 'react'

export class Seach extends Component {
    render() {
        return (
            <div className="hidden bg-gray-100 sm:flex p-2 rounded-md max-w-xs sm:basis-1/3">
                <button className="btn btn-square ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <input type="text" placeholder="Search…" className="input input-bordered bg-transparent flex-auto focus:outline-none" />
            </div>
        )
    }
}

export default Seach
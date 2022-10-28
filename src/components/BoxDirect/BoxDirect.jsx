import React, { Component } from 'react'
import InboxCard from '../InboxCard/InboxCard'

export class BoxDirect extends Component {
    render() {
        return (
            <div className='border-r border-r-gray-300 basis-4/12 hidden md:block overflow-hidden'>
                <div className='text-center py-4 border-b border-b-gray-300 font-bold mb-1'>
                    <h3>Direct</h3>
                </div>
                <div className='overflow-scroll h-[92%]'>
                    <InboxCard name = "Client 1" text="1 minute ago" active="true"/>
                    <InboxCard name = "Client 2" text="215 minute ago"/>
                    <InboxCard name = "Client 4" text="215 minute ago"/>
                    <InboxCard name = "Client 5" text="215 minute ago"/>
                    <InboxCard name = "Client 61" text="215 minute ago"/>
                    <InboxCard name = "Client 8" text="215 minute ago"/>
                    <InboxCard name = "Client 6" text="215 minute ago"/>
                    <InboxCard name = "Client 10" text="215 minute ago"/>
                    <InboxCard name = "Client 616" text="215 minute ago"/>
                    <InboxCard name = "Client 3" text="51 minute ago"/>
                </div>
            </div>
        )
    }
}

export default BoxDirect
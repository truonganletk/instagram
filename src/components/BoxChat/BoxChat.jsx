import Input from './Input'
import Messages from './Messages'
import React, { useContext } from 'react'
import { ChatContext } from '../../context/chatContext/ChatContext';
import ChatTitle from './ChatTitle';

function BoxChat() {

    const { data } = useContext(ChatContext);
    // console.log(data);

    return (
        <>
            {data.chatId!=null ?
                <div className='flex-row basis-full md:basis-8/12 relative'>
                    <ChatTitle/>
                    <Messages />
                    <Input />
                </div> :
                <div className='flex flex-col items-center justify-center basis-full md:basis-8/12'>
                    <div className='rounded-full border border-black w-20 h-20 mb-2 flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </div>
                    <h2>Tin nhắn của bạn</h2>
                    <p className='text-gray-500 text-sm mb-4'>Gửi ảnh và tin nhắn riêng tư cho bạn bè hoặc nhóm.</p>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm  w-auto px-3 py-1 text-center">Gửi tin nhắn</button>

                </div>
            }
        </>
    )
}

export default BoxChat
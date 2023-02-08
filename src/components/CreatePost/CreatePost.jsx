import React, { useContext } from 'react'
import { ModalContext } from '../../context/modalContext/ModalContext';

function CreatePost() {
    const { data } = useContext(ModalContext);
    console.log(data);
    return (
        <div className='flex items-center'>
            <div className='w-1/2'>
                <img src={data?.file} alt="" />
            </div>
            <div className='w-1/2 p-3'>
                <div className='flex items-center justify-between mb-[10px]'>
                    <img
                        className="w-16 h-16 rounded-full p-[2px] mr-3"
                        src="https://picsum.photos/200"
                        alt="profile-avatar"
                    />
                    <div className="mr-auto">
                        <p className="text-ig-primary-background">Tuan Rider</p>
                    </div>
                </div>
                <div>
                    <textarea className='bg-transparent text-ig-primary-background w-full' type='text' placeholder='Post...' />
                </div>
                <div className='text-right'>
                <button className='text-white bg-blue-500 font-bold py-1 px-2 mt-3'>
                    Share
                </button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost
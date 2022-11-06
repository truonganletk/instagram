import React from 'react'

function signup() {
    return (
        <>
            <div className='pt-9'>
                <div className="bg-white border border-solid rounded border-ig-elevated-separator w-[350px] flex flex-col items-center mb-3 mx-auto">
                    <div className='mt-5 mb-3 w-[175px] h-[51px]'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="" />
                    </div>
                    <form className='flex flex-col w-full'>
                        <div className='flex flex-col'>
                            <div className='mx-10 mb-2 text-center text-ig-secondary-text font-semibold text-lg'>
                                <p>Sign up to see photos and videos from your friends.</p>
                            </div>
                            <div className='mx-10 mb-2 text-center cursor-pointer box-border text-sm font-semibold py-[5px] px-[9px] bg-ig-primary-button rounded text-white'>
                                <a href="#">Log in with facebook</a>
                            </div>
                            <div className='flex items-center mx-10 mt-2 mb-4 justify-between'>
                                <div className='w-24 h-[1px] bg-ig-elevated-separator'></div>
                                <div>OR</div>
                                <div className='w-24 h-[1px] bg-ig-elevated-separator'></div>
                            </div>
                            <div className='mx-10 mb-2'>
                                <input className='box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none' type="email" placeholder='Mobile number or email' />
                            </div>
                            <div className='mx-10 mb-2'>
                                <input className='box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none' type="password" placeholder='Fullname' />
                            </div>
                            <div className='mx-10 mb-2'>
                                <input className='box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none' type="text" placeholder='username' />
                            </div>
                            <div className='mx-10 mb-2'>
                                <input className='box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none' type="password" placeholder='Password' />
                            </div>
                            <div className='mx-10 my-4'>
                                <p className='text-xs text-center text-ig-secondary-text'>People who use our service may have uploaded your contact information to Instagram. <a className='font-semibold' href="">Learn More</a></p>
                                <p className='text-xs text-center text-ig-secondary-text'>By signing up, you agree to our <a className='font-semibold' href="">Terms , Privacy Policy and Cookies Policy .</a></p>
                            </div>
                            <div className='mx-10 my-5'>
                                <button className='w-full cursor-pointer box-border text-sm font-semibold py-[5px] px-[9px] bg-ig-primary-button rounded text-white' type="submit">Sign up</button>
                            </div>

                        </div>

                    </form>
                </div>
                <div className="bg-white border border-solid rounded border-ig-elevated-separator w-[350px] flex flex-col items-center py-4 mx-auto">
                    <p className='text-ig-primary-text text-sm'>Have an account? <a className='text-ig-primary-button font-semibold' href="/">Log in</a></p>
                </div>
            </div>
        </>
    )
}

export default signup
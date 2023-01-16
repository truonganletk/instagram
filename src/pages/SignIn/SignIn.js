
import React, { useContext, useState } from 'react';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { signIn } from '../../context/authContext/service';
import { AuthContext } from '../../context/authContext/AuthContext';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { dispatch } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // const authentication = getAuth();
        // console.log(email, password);
        // signInWithEmailAndPassword(authentication, email, password)
        //     .then((response) => {
        //         console.log(response);
        //     })

        signIn(dispatch, email, password)
    }
    return (
        <>
            <div className='pt-9'>
                <div className="bg-white border border-solid rounded border-ig-elevated-separator w-[350px] flex flex-col items-center mb-3 mx-auto">
                    <div className='mt-5 mb-3 w-[175px] h-[51px]'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="" />
                    </div>
                    <form className='flex flex-col w-full'>
                        <div className='mt-6 flex flex-col'>
                            <div className='mx-10 mb-2'>
                                <input className='box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none' value={email}
                                    onChange={(e) => { setEmail(e.target.value); }} type="text" placeholder='Phone, username or email' />
                            </div>
                            <div className='mx-10 mb-2'>
                                <input className='box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none' value={password}
                                    onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder='Password' />
                            </div>
                            <div className='mx-10 my-2'>
                                <button onClick={handleSubmit} className='w-full cursor-pointer box-border text-sm font-semibold py-[5px] px-[9px] bg-ig-primary-button rounded text-white' type="submit">Log in</button>
                            </div>
                            <div className='flex items-center mx-10 mt-2 mb-4 justify-between'>
                                <div className='w-24 h-[1px] bg-ig-elevated-separator'></div>
                                <div>OR</div>
                                <div className='w-24 h-[1px] bg-ig-elevated-separator'></div>
                            </div>
                            <div className='text-center mx-10 mb-2 text-[#385185] text-sm font-semibold cursor-pointer'>
                                <a href="#">Login with facebook</a>
                            </div>
                        </div>
                        <div className='my-5 cursor-pointer text-xs text-center' >
                            <a href="#">Forgot Password</a>
                        </div>
                    </form>
                </div>
                <div className="bg-white border border-solid rounded border-ig-elevated-separator w-[350px] flex flex-col items-center py-4 mx-auto">
                    <p className='text-ig-primary-text text-sm'>Don&#39;t have an account? <a className='text-ig-primary-button font-semibold' href="/signup">Sign up</a></p>
                </div>
            </div>
        </>
    );
}

export default SignIn


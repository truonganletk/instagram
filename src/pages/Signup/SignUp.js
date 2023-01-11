import React, { useContext } from 'react';
// import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import FirebaseContext from '../../context/firebase';
import { collection, addDoc } from "firebase/firestore"; //getDocs

import { Formik } from 'formik';

function SignUp() {
    // const [state, setState] = useState({
    //     email: '',
    //     password: '',
    //     username: '',
    //     confirmPassword: ''
    // })

    const { firestore } = useContext(FirebaseContext)

    // const handleChange = (e) => {
    //     const { name, value } = e.target;

    //     setState({
    //         ...state,
    //         [name]: value,
    //     })

    //     // console.log(state);
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // const querySnapshot = await getDocs(collection(firestore, "user"));
    //     // querySnapshot.forEach((doc) => {
    //     //     console.log(`${doc.id} => ${doc.data().name}`);
    //     //     console.log(doc);
    //     //   });


    //     const authentication = getAuth();
    //     createUserWithEmailAndPassword(authentication, state.email, state.password)
    //         .then(async () => {
    //             // sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
    //             await addDoc(collection(firestore, "users"), {
    //                 email: state.email,
    //                 username: state.username,
    //                 fullname: state.username,
    //                 avatar: 'default',
    //                 number_of_posts: 0,
    //                 number_of_followers: 0,
    //                 number_of_following: 0,
    //             });
    //         })

    // }
    return (
        <>
            <div className='pt-9'>
                <div className="bg-white border border-solid rounded border-ig-elevated-separator w-[350px] flex flex-col items-center mb-3 mx-auto">
                    <div className='mt-5 mb-3 w-[175px] h-[51px]'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="" />
                    </div>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            username: '',
                            confirmPassword: ''
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                // alert(JSON.stringify(values, null, 2));
                                // console.log(values);
                                const authentication = getAuth();
                                createUserWithEmailAndPassword(authentication, values.email, values.password)
                                    .then(async () => {
                                        // sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
                                        await addDoc(collection(firestore, "users"), {
                                            email: values.email,
                                            username: values.username,
                                            fullname: values.username,
                                            avatar: 'default',
                                            number_of_posts: 0,
                                            number_of_followers: 0,
                                            number_of_following: 0,
                                        });
                                    })
                                setSubmitting(false);
                            }, 400);
                        }}>
                        {({
                            // values,
                            // errors,
                            // touched,
                            handleChange,
                            // handleBlur,
                            handleSubmit,
                            // isSubmitting,
                            /* and other goodies */
                        }) => (
                            // <form onSubmit={handleSubmit}>
                            //     <input
                            //         type="email"
                            //         name="email"
                            //         onChange={handleChange}
                            //         onBlur={handleBlur}
                            //         value={values.email}
                            //     />
                            //     {errors.email && touched.email && errors.email}
                            //     <input
                            //         type="password"
                            //         name="password"
                            //         onChange={handleChange}
                            //         onBlur={handleBlur}
                            //         value={values.password}
                            //     />
                            //     {errors.password && touched.password && errors.password}
                            //     <button type="submit" disabled={isSubmitting}>
                            //         Submit
                            //     </button>
                            // </form>
                            <form onSubmit={handleSubmit} className='flex flex-col w-full'>
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
                                        <input className='box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none'
                                            onChange={handleChange} name='email' type="email" placeholder='Mobile number or email' />
                                    </div>
                                    <div className='mx-10 mb-2'>
                                        <input className='box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none'
                                            onChange={handleChange} name='password' type="password" placeholder='Fullname' />
                                    </div>
                                    <div className='mx-10 mb-2'>
                                        <input className='box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none'
                                            onChange={handleChange} name='username' type="text" placeholder='username' />
                                    </div>
                                    <div className='mx-10 mb-2'>
                                        <input className='box-border text-base w-full bg-ig-secondary-background pt-[9px] pb-[7px] pl-2 text-ig-primary-text border border-solid rounded border-ig-stroke outline-none'
                                            onChange={handleChange} name='confirmPassword' type="password" placeholder='Confirm Password' />
                                    </div>
                                    <div className='mx-10 my-4'>
                                        <p className='text-xs text-center text-ig-secondary-text'>People who use our service may have uploaded your contact information to Instagram. <a className='font-semibold' href="">Learn More</a></p>
                                        <p className='text-xs text-center text-ig-secondary-text'>By signing up, you agree to our <a className='font-semibold' href="">Terms , Privacy Policy and Cookies Policy .</a></p>
                                    </div>
                                    <div className='mx-10 my-5'>
                                        <button type="submit" className='w-full cursor-pointer box-border text-sm font-semibold py-[5px] px-[9px] bg-ig-primary-button rounded text-white'>Sign up</button>
                                    </div>

                                </div>

                            </form>
                        )}
                    </Formik>

                </div>
                <div className="bg-white border border-solid rounded border-ig-elevated-separator w-[350px] flex flex-col items-center py-4 mx-auto">
                    <p className='text-ig-primary-text text-sm'>Have an account? <a className='text-ig-primary-button font-semibold' href="/">Log in</a></p>
                </div>
            </div>
        </>
    )
}

export default SignUp
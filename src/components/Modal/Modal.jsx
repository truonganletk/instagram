import React, { useContext } from 'react'
// import { showModal } from '../../context/modalContext/ModalActions';
import { ModalContext } from '../../context/modalContext/ModalContext';
import { hideModal } from '../../context/modalContext/ModalActions';

function Modal() {
    const { show, title, modal, dispatch } = useContext(ModalContext);

    // useEffect(() => {
    //     dispatch(showModal());
    // }, [])
    // console.log(title);
    return (
        show ? <div>
            <div className="fixed top-0 left-0 right-0 z-50  w-full mx-auto overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="flex mx-auto h-full w-full">
                    <div className="relative w-[70%] mx-auto my-auto bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="relative flex items-start justify-center p-3 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                                {title}
                            </h3>
                            <button onClick={() => {
                                dispatch(hideModal())
                            }} type="button" 
                            className="text-gray-400 right-3 absolute bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                            >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className='h-96 w-full'>
                        {modal}
                        </div>
                    </div>
                </div>
            </div>
        </div> : <></>


    )
}


export default Modal
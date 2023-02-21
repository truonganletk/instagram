import React, { useContext, useRef } from "react";
// import { showModal } from '../../context/modalContext/ModalActions';
import { ModalContext } from "../../context/modalContext/ModalContext";
import { hideModal } from "../../context/modalContext/ModalActions";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
// import CloseBtn from './CloseBtn';

function Modal() {
  const { show, title, modal, dispatch } = useContext(ModalContext);
  const ref = useRef();
  useOnClickOutside(ref, () => {
    dispatch(hideModal());
    document.body.classList.remove("overflow-y-hidden");
  });
  return show ? (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 mx-auto overflow-x-hidden overflow-y-auto md:inset-0 bg-black bg-opacity-40 h-modal md:h-full">
        <div className="flex mx-auto h-full w-full">
          <div
            ref={ref}
            className="relative mx-auto my-auto bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <div
              className={`${
                title.length == 0 && "hidden"
              } relative flex items-start justify-center p-3 border-b rounded-t dark:border-gray-600`}
            >
              <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              {/* <div className='right-3 absolute'>
                                <CloseBtn/>
                            </div> */}
            </div>
            <div className="max-w-min max-h-min">{modal}</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Modal;

// <div>
//             <div className="fixed top-0 left-0 right-0 z-50  w-full mx-auto overflow-x-hidden overflow-y-auto md:inset-0 bg-black bg-opacity-40 h-modal md:h-full">
//                 <div className="flex mx-auto h-full w-full">
//                     <div ref={ref} className="relative w-[70%] mx-auto my-auto bg-white rounded-lg shadow dark:bg-gray-700">
//                         <div className="relative flex items-start justify-center p-3 border-b rounded-t dark:border-gray-600">
//                             <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
//                                 {title}
//                             </h3>
//                             {/* <div className='right-3 absolute'>
//                                 <CloseBtn/>
//                             </div> */}
//                         </div>
//                         <div className='h-96 w-full'>
//                         {modal}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

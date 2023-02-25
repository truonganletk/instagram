import React, { useContext, useRef } from "react";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { hideModal } from "../../context/modalContext/ModalActions";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function Modal() {
  const { show, title, modal, dispatch } = useContext(ModalContext);
  const ref = useRef();
  useOnClickOutside(ref, () => {
    dispatch(hideModal());
    document.body.classList.remove("overflow-y-hidden");
  });
  return show ? (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 mx-auto overflow-x-hidden overflow-y-auto md:inset-0 bg-black bg-opacity-40 h-modal md:h-full">
        <div className="flex mx-auto h-full w-full">
          <div
            ref={ref}
            className="relative mx-auto my-auto bg-white text-black dark:text-white rounded-lg shadow dark:bg-black"
          >
            <div
              className={`${
                title.length == 0 && "hidden"
              } relative flex items-start justify-center p-3 border-b rounded-t dark:border-gray-600`}
            >
              <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
            </div>
            <div className="max-w-min max-h-min">{modal}</div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}

export default Modal;

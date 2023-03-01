import React, { useContext, useRef } from "react";
import { ModalContext } from "../../context/modalContext/ModalContext";
import { hideModal } from "../../context/modalContext/modalActions";
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
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 mx-auto overflow-x-hidden overflow-y-auto md:inset-0 bg-opacity-40 h-modal md:h-full bg-black">
        <div className="flex mx-auto h-full w-full">
          <div
            ref={ref}
            className="relative mx-auto my-auto bg-white text-black dark:text-white rounded-lg shadow dark:bg-ig-dark-secondary-background"
          >
            <div
              className={`${
                title.length == 0 && "hidden"
              } relative flex items-start justify-center p-3 border-b rounded-t dark:border-ig-dark-elevated-separator`}
            >
              <h3 className="text-xl text-center font-semibold text-gray-900 dark:bg-ig-dark-secondary-background dark:text-white">
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

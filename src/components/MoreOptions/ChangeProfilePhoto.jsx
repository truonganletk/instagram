import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { removePhotoProfile, updatePhotoProfile } from "../../context/authContext/services";
import { hideModal } from "../../context/modalContext/modalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";


function ChangeProfilePhoto() {
    const { dispatch } = useContext(ModalContext);
    const { dispatch: authDispatch } = useContext(AuthContext);

    return (
        <ul className=" bg-ig-primary-background dark:bg-black dark:text-white w-[400px] z-100 rounded-xl">
            <li className="text-base text-center text-red-500 bg-transparent  px-2 py-3 rounded-t-xl border-0 dark:hover:bg-ig-primary-text hover:bg-gray-100 cursor-pointer dark:border-ig-primary-text">
                <button onClick={() => {
                    removePhotoProfile(authDispatch);
                    dispatch(hideModal())
                }} className="w-full">Remove Current Photo</button>
            </li>
            <li className="text-sm text-center text-sky-500 bg-transparent  px-2 py-3  border-0 dark:hover:bg-ig-primary-text hover:bg-gray-100 border-t border-ig-elevated-separator cursor-pointer dark:border-ig-primary-text">
                <input
                    className="hidden"
                    type="file"
                    id="file"
                    onChange={(e) => {
                        updatePhotoProfile(authDispatch, e.target.files[0]);
                        dispatch(hideModal())
                    }}
                />
                <label htmlFor="file" className="cursor-pointer">
                    <p className="w-full">
                        Upload Photo
                    </p>
                </label>

            </li>
            <li className="text-sm text-center text-ig-primary-text bg-transparent  px-2 py-3 rounded-b-xl border-0 dark:hover:bg-ig-primary-text dark:text-white hover:bg-gray-100 border-t border-ig-elevated-separator dark:border-ig-primary-text cursor-pointer">
                <button className="w-full" onClick={() => dispatch(hideModal())}>
                    Cancel
                </button>
            </li>
        </ul>
    );
}

export default ChangeProfilePhoto;

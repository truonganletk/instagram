import React, { useContext } from "react";
import { Icon } from "../../asset/icons";
// import img from "../../asset/image/image_icon.png";
import { showModal, updateData } from "../../context/modalContext/ModalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import CreatePost from "../CreatePost/CreatePost";

function Upload() {
  const { dispatch } = useContext(ModalContext);

  const handleChange = async (event) => {
    await dispatch(updateData({ file: event.target.files[0] }));
    dispatch(showModal(<CreatePost />, "Create Post"));
  };
  return (
    <>
      <div className="flex justify-center items-center h-[600px] w-[860px]">
        <div className=" text-center flex-row justify-center items-center">
          {/* <img loading="lazy" className="max-h-24 m-auto" src={img} alt="" /> */}
          <div className="h-24 w-24 m-auto text-center">{Icon('image')}</div>
          <h2 className="text-dark dark:text-white my-5">Drag photos and videos here</h2>
          <input
            title=""
            className="custom-file-input"
            type="file"
            onChange={handleChange}
            accept="/image/*"
          />
        </div>
      </div>
    </>
  );
}

export default Upload;

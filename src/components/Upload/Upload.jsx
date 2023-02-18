// import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useContext } from "react";
// import { storage } from '../../firebase-config';
import img from "../../asset/image/image_icon.png";
import { showModal, updateData } from "../../context/modalContext/ModalActions";
import { ModalContext } from "../../context/modalContext/ModalContext";
import CreatePost from "../CreatePost/CreatePost";

function Upload() {
  // const [file, setFile] = useState("");
  const { dispatch } = useContext(ModalContext);

  // progress
  // const [percent, setPercent] = useState(0);

  // Handle file upload event and update state

  const handleChange = async (event) => {
    // setFile(event.target.files[0]);
    // console.log(file);
    await dispatch(updateData({ file: event.target.files[0] }));
    dispatch(showModal(<CreatePost />, "Create Post"));
  };

  // const handleUpload = () => {
  //     if (!file) {
  //         alert("Please upload an image first!");
  //     }

  //     const storageRef = ref(storage, `/files/${file.name}`);

  //     // progress can be paused and resumed. It also exposes progress updates.
  //     // Receives the storage reference and the file to upload.
  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //             const percent = Math.round(
  //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //             );

  //             // update progress
  //             setPercent(percent);
  //         },
  //         (err) => console.log(err),
  //         () => {
  //             // download url
  //             getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //                 console.log(url);
  //             });
  //         }
  //     );
  // };
  return (
    <div className="flex justify-center items-center h-[600px] w-[860px]">
      <div className=" text-center flex-row justify-center items-center">
        <img className="max-h-24 m-auto" src={img} alt="" />
        <h2 className="text-white my-5">Drag photos and videos here</h2>
        <input
          className="custom-file-input"
          type="file"
          onChange={handleChange}
          accept="/image/*"
        />
        {/* <button onClick={handleUpload}>Upload to Firebase</button> */}
        {/* <p>{percent} % done</p> */}
      </div>
    </div>
  );
}

export default Upload;

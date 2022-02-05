import React,{useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from "react-redux";
import { setCameraImage } from "./features/cameraSlice";
import { useHistory } from "react-router-dom";
import "./WebcamCapture.css";
import firebase from "firebase"

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
};

function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();


    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push("/preview");
      }, [webcamRef]);
// console.log(dispatch);
    return (
         <div className="WebcamCapture">
        <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
          />  

          <RadioButtonUncheckedIcon
          className='webcamCapture_button'
          onClick={capture}
          fontSize="large"
          />
          </div>             
    );
}

export default WebcamCapture;

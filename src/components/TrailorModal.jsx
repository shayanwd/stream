import React, { useState, useRef } from 'react';

import { useCallback } from "react";

import Trail from '../assets/images/trailor.mp4'
import ShareModal from './ShareModal';

const TrailorModal = ({ closeModal }) => {

    const [isPlaying, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const [shareModal, setShareModal] = useState(false);


    const onCloseShareModal = useCallback(() => {
        setShareModal(false);
    }, [shareModal]);

    

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setPlaying(!isPlaying);
        }
    };
    return (
        <div className="main-modal-container">
            <div onClick={() => { closeModal(); setShareModal(false); }} className="modal-outer"></div>

            <div className="modal-content-box">
                <button onClick={() => { closeModal(); setShareModal(false); }} type="button" className="modal-close mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.49101 0.245437L5 3.75428L8.49081 0.263617C8.56791 0.181548 8.6608 0.115896 8.7639 0.0705969C8.867 0.025298 8.97818 0.00128568 9.09079 0C9.33189 0 9.56311 0.095772 9.73359 0.266247C9.90408 0.436723 9.99985 0.667937 9.99985 0.909026C10.002 1.02047 9.98129 1.13118 9.93909 1.23435C9.89688 1.33752 9.83403 1.43097 9.7544 1.50898L6.21815 4.99964L9.7544 8.53575C9.90423 8.68232 9.99209 8.88081 9.99985 9.09026C9.99985 9.33134 9.90408 9.56256 9.73359 9.73303C9.56311 9.90351 9.33189 9.99928 9.09079 9.99928C8.97493 10.0041 8.85934 9.98475 8.75136 9.9425C8.64338 9.90025 8.54536 9.836 8.46353 9.75384L5 6.24501L1.5001 9.74475C1.42329 9.82409 1.33153 9.88742 1.23011 9.93111C1.1287 9.97479 1.01963 9.99796 0.909212 9.99928C0.668113 9.99928 0.436889 9.90351 0.266407 9.73303C0.095924 9.56256 0.000147911 9.33134 0.000147911 9.09026C-0.00197157 8.97881 0.0187068 8.8681 0.0609142 8.76493C0.103122 8.66176 0.165968 8.56831 0.245595 8.4903L3.78185 4.99964L0.245595 1.46353C0.0957678 1.31696 0.00791097 1.11848 0.000147911 0.909026C0.000147911 0.667937 0.095924 0.436723 0.266407 0.266247C0.436889 0.095772 0.668113 0 0.909212 0C1.12739 0.00272708 1.33647 0.0909025 1.49101 0.245437Z" fill="#00BDFF" />
                    </svg>
                </button>

                <div className="trail-vid-box">
                    <video width="640" height="360" ref={videoRef}>
                        <source src={Trail} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className='play' onClick={handlePlayPause}>
                        {isPlaying ? '' : <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0002 37.7992C25.4558 37.7992 29.729 36.0292 32.8796 32.8786C36.0302 29.728 37.8002 25.4549 37.8002 20.9992C37.8002 16.5436 36.0302 12.2704 32.8796 9.11982C29.729 5.96921 25.4558 4.19922 21.0002 4.19922C16.5446 4.19922 12.2714 5.96921 9.1208 9.11982C5.97019 12.2704 4.2002 16.5436 4.2002 20.9992C4.2002 25.4549 5.97019 29.728 9.1208 32.8786C12.2714 36.0292 16.5446 37.7992 21.0002 37.7992ZM20.0657 15.052C19.7494 14.841 19.3818 14.7198 19.0021 14.7014C18.6223 14.6829 18.2447 14.7679 17.9095 14.9473C17.5743 15.1266 17.294 15.3936 17.0987 15.7198C16.9033 16.046 16.8001 16.419 16.8002 16.7992V25.1992C16.8001 25.5794 16.9033 25.9525 17.0987 26.2786C17.294 26.6048 17.5743 26.8718 17.9095 27.0512C18.2447 27.2305 18.6223 27.3155 19.0021 27.2971C19.3818 27.2786 19.7494 27.1574 20.0657 26.9464L26.3657 22.7464C26.6533 22.5546 26.8891 22.2948 27.0522 21.99C27.2153 21.6852 27.3007 21.3449 27.3007 20.9992C27.3007 20.6535 27.2153 20.3132 27.0522 20.0084C26.8891 19.7036 26.6533 19.4438 26.3657 19.252L20.0657 15.052Z" fill="white" />
                        </svg>}
                    </button>
                </div>

                <div className="text-center">
                    <button  type="button" class="site-btn going-btn mx-auto mt-6 mb-6  text-center w-fit"><span>I’m Going to Watch This</span></button>
                </div>
            </div>

            {/* <div className={`share-options-modal ${shareModal ? 'bring' : ''}`}>
                <ShareModal closeModal={onCloseShareModal} />
            </div> */}
        </div>
    )
}

export default TrailorModal

import React from 'react'
import { NavLink } from 'react-router-dom'

const MoodModal = ({ closeModal }) => {
    return (
        <div className="main-modal-container">
            <div onClick={closeModal} className="modal-outer"></div>
            <div className="modal-content-box">
                <button onClick={closeModal} type="button" className="modal-close mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.49101 0.245437L5 3.75428L8.49081 0.263617C8.56791 0.181548 8.6608 0.115896 8.7639 0.0705969C8.867 0.025298 8.97818 0.00128568 9.09079 0C9.33189 0 9.56311 0.095772 9.73359 0.266247C9.90408 0.436723 9.99985 0.667937 9.99985 0.909026C10.002 1.02047 9.98129 1.13118 9.93909 1.23435C9.89688 1.33752 9.83403 1.43097 9.7544 1.50898L6.21815 4.99964L9.7544 8.53575C9.90423 8.68232 9.99209 8.88081 9.99985 9.09026C9.99985 9.33134 9.90408 9.56256 9.73359 9.73303C9.56311 9.90351 9.33189 9.99928 9.09079 9.99928C8.97493 10.0041 8.85934 9.98475 8.75136 9.9425C8.64338 9.90025 8.54536 9.836 8.46353 9.75384L5 6.24501L1.5001 9.74475C1.42329 9.82409 1.33153 9.88742 1.23011 9.93111C1.1287 9.97479 1.01963 9.99796 0.909212 9.99928C0.668113 9.99928 0.436889 9.90351 0.266407 9.73303C0.095924 9.56256 0.000147911 9.33134 0.000147911 9.09026C-0.00197157 8.97881 0.0187068 8.8681 0.0609142 8.76493C0.103122 8.66176 0.165968 8.56831 0.245595 8.4903L3.78185 4.99964L0.245595 1.46353C0.0957678 1.31696 0.00791097 1.11848 0.000147911 0.909026C0.000147911 0.667937 0.095924 0.436723 0.266407 0.266247C0.436889 0.095772 0.668113 0 0.909212 0C1.12739 0.00272708 1.33647 0.0909025 1.49101 0.245437Z" fill="#00BDFF" />
                    </svg>
                </button>
             
                <div className="flex flex-col gap-4">
                    <NavLink className='w-full text-center' to="/step1">
                <button type="button" class="site-btn going-btn mx-auto  min-w-[210px] text-center w-fit"><span>Edit My Mood</span></button>
                </NavLink>
                    <button type="button" class="site-btn going-btn mx-auto min-w-[210px]   text-center w-fit"><span>Generate New Results</span></button>

                </div>
            </div>
        </div>
    )
}

export default MoodModal

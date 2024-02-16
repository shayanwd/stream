import React from 'react'
import Dislike from '../assets/images/result-react-ico1.svg'
import Like from '../assets/images/result-react-ico2.svg'
import ReactIcon from '../assets/images/result-react-ico3.svg'
import TrailorModal from './TrailorModal'


import DislikeAct from '../assets/images/dislike-act.svg'
import LikeAct from '../assets/images/like-act.svg'
import ReactIconAct from '../assets/images/skip-act.svg'
import { useState } from 'react'
import { useCallback } from "react";

const ResultCard = ({ ResultImg, ResultTitle, WhereToWhatch, About }) => {




    const [like, setlike] = useState(false)
    const [dislike, setdislike] = useState(false)
    const [skip, setskip] = useState(false)

    const [trailModal, setTrailModal] = useState(false);
    const onClosetrailModal = useCallback(() => {
        setTrailModal(false);
    }, [trailModal]);






    return (
        <>

            <div className={`modal-bring ${trailModal ? 'bring' : 'hidden'}`}>
                <TrailorModal closeModal={onClosetrailModal} />
            </div>
           
            <div className="result-card">
                <div className=" flex lg:gap-10 md:gap-10 lg:gap-5 gap-3">
                    <div className="flex rounded-md min-w-[140px] max-w-[140px] md:max-w-[200px] md:min-w-[150px] h-fit w-[100px] md:w-full flex-col p-3 items-center border border-[#5A5A5A] gap-2">
                        <img className='w-full object-cover md:h-[260px] h-[180px]' src={ResultImg} alt='' />
                        <h4 className='text-[#C8C8C8] text-[15px] font-semibold text-center' >{ResultTitle}</h4>
                    </div>
                    <div className="block w-full md:max-w-full max-w-[300px]">
                        <div className=" block show-d">
                            <h3 className='text-[#FFF] text-[19px] font-[700] mb-2'>What it’s about:</h3>
                            <p className='text-[#C3C3C3] text-[14px] font-[400]'>{About}</p>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center gap-2 md:mt-4 lg:mt-4    flex-sm-column">
                            <h3 className='text-[#FFF] text-[19px] font-[700] '>Where to watch</h3>
                            <img className=' max-w-[120px] w-full' src={WhereToWhatch} alt='' />
                        </div>

                        <div className="result-action-btn">
                            <button
                                onClick={() => {
                                    setlike(!like)
                                    setdislike(false)
                                }}
                                type='button'>
                                <div className={`result-action-img ${like ? 'clicked' : ''} `}>
                                    <img src={Like} alt='' />
                                    <img src={LikeAct} alt='' />
                                </div>
                                <p>Liked it</p>
                            </button>

                            <button onClick={() => {
                                setdislike(!dislike)
                                setlike(false)
                            }}
                                type='button'>
                                <div className={`result-action-img ${dislike ? 'clicked' : ''} `}>
                                    <img src={Dislike} alt='' />
                                    <img src={DislikeAct} alt='' />
                                </div>
                                <p>Disliked it</p>
                            </button>

                            <button
                                onClick={() => {
                                    setskip(!skip)
                                }}
                                type='button'>
                                <div className={`result-action-img ${skip ? 'clicked' : ''} `}>
                                    <img src={ReactIcon} alt='' />
                                    <img src={ReactIconAct} alt='' />
                                </div>
                                <p>Skip</p>
                            </button>
                        </div>




                        <button className='suggest-mov-btn' type='button'>
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.95833 13.166L2.375 4.45768L6.72917 8.41602L9.5 3.66602L12.2708 8.41602L16.625 4.45768L15.0417 13.166H3.95833ZM15.0417 15.541C15.0417 16.016 14.725 16.3327 14.25 16.3327H4.75C4.275 16.3327 3.95833 16.016 3.95833 15.541V14.7493H15.0417V15.541Z" fill="#FFC700" />
                            </svg>

                            Suggest More Like This
                        </button>

                        <button onClick={() => {
                            setTrailModal(true)
                        }} type="button" class="sitebtnarrow site-btn mx-auto text-center w-fit show-d"><span>Watch trailer</span></button>

                    </div>
                </div>
                <div className=" mt-5 show-m">
                    <h3 className='text-[#FFF] text-[19px] font-[700] mb-2'>What it’s about:</h3>
                    <p className='text-[#C3C3C3] text-[12px] lg:text-[13px] font-[400]'>{About}</p>
                </div>
                <button onClick={() => {
                    setTrailModal(true)
                }} type="button" class="sitebtnarrow show-m-trailor-btn site-btn mt-3 text-center w-fit"><span>Watch trailer</span></button>
            </div>


        </>
    )
}

export default ResultCard

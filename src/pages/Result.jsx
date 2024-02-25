import React, { useState, useEffect } from 'react';

import { useCallback } from "react";
import PageTitle from '../components/PageTitle'
import ResultCard from '../components/ResultCard';
import FoundModal from '../components/FoundModal';
import MoodModal from '../components/MoodModal';
import CardImg1 from '../assets/images/card-img1.jpg'
import CardImg2 from '../assets/images/card-img2.jpg'
import CardImg3 from '../assets/images/card-img3.jpg'
import CardImg4 from '../assets/images/card-img4.jpg'
import CardImg5 from '../assets/images/card-img5.jpg'
import CardImg6 from '../assets/images/card-img6.jpg'
import CardImg7 from '../assets/images/card-img7.jpg'
import streamLogo1 from '../assets/images/stream-log1.svg'
import streamLogo2 from '../assets/images/stream-log2.svg'
import streamLogo3 from '../assets/images/stream-log3.svg'
import streamLogo4 from '../assets/images/stream-log4.svg'


const Result = () => {


    const [foundModal, setFoundModal] = useState(false);
    const onCloseFoundModal = useCallback(() => {
        setFoundModal(false);
    }, [foundModal]);

    const [moodModal, setMoodModal] = useState(false);
    const onCloseMoodModal = useCallback(() => {
        setMoodModal(false);
    }, [moodModal]);



    const scrollToTop = () => {
        window.scrollTo({
            top: 0,

        });
    };

    scrollToTop()


    return (
        <>
        {foundModal && 
        <>
           <style>
          {`
            body {
              overflow: hidden;
            }
           
          `}
        </style>
        </>
        }
          
                <FoundModal showCondition={`modal-bring ${foundModal ? 'bring' : ''}`} closeModal={onCloseFoundModal} />
            

            <div className={`modal-bring ${moodModal ? 'bring' : ''}`}>
                <MoodModal closeModal={onCloseMoodModal} />
            </div>

            <div className="results-loading flex items-center justify-center text-center flex-col min-h-full z-10 fixed top-0 left-0 w-full bg-[#454545]">
                <h4 className='text-[white] font-[600] text-[18px] md:text-[25px]'>Processing your inputs…</h4>
                <p className='text-[12px] md:text-[18px] text-[#C3C3C3] mb-7'>We’ll have your suggestions ready in a few seconds.</p>
                <div role="status">

                    <svg class="w-[100px] h-[100px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" xmlns="http://www.w3.org/2000/svg" width="98" height="97" viewBox="0 0 98 97" fill="none">
                        <path d="M60.6687 92.0382C63.6027 91.252 65.3439 88.2361 64.5577 85.3021C63.7716 82.368 60.7557 80.6268 57.8216 81.413L60.6687 92.0382ZM9.45007 46.8456L3.95481 46.6171L3.95481 46.6171L9.45007 46.8456ZM17.8818 24.0247L22.2055 27.424L22.2055 27.424L17.8818 24.0247ZM38.0683 10.4455L36.5494 5.15939L38.0683 10.4455ZM62.3842 11.2375L60.5246 16.4136L60.5246 16.4136L62.3842 11.2375ZM81.6443 26.1015L86.18 22.9907L81.6443 26.1015ZM57.8216 81.413C50.9095 83.2651 43.5898 82.8947 36.9 80.3543L32.9949 90.6378C41.8438 93.9981 51.5258 94.488 60.6687 92.0382L57.8216 81.413ZM36.9 80.3543C30.2102 77.8139 24.4896 73.2324 20.5491 67.2591L11.3671 73.3164C16.5793 81.2174 24.1461 87.2775 32.9949 90.6378L36.9 80.3543ZM20.5491 67.2591C16.6086 61.2859 14.648 54.2239 14.9453 47.0741L3.95481 46.6171C3.56155 56.0743 6.15482 65.4154 11.3671 73.3164L20.5491 67.2591ZM14.9453 47.0741C15.2426 39.9244 17.7827 33.0495 22.2055 27.424L13.5581 20.6253C7.70792 28.0663 4.34808 37.1599 3.95481 46.6171L14.9453 47.0741ZM22.2055 27.424C26.6284 21.7986 32.7096 17.7078 39.5872 15.7316L36.5494 5.15939C27.4522 7.77338 19.4084 13.1843 13.5581 20.6253L22.2055 27.424ZM39.5872 15.7316C46.4649 13.7554 53.7901 13.994 60.5246 16.4136L64.2439 6.06142C55.336 2.86098 45.6467 2.5454 36.5494 5.15939L39.5872 15.7316ZM60.5246 16.4136C67.259 18.8331 73.0612 23.3109 77.1085 29.2123L86.18 22.9907C80.8264 15.1848 73.1518 9.26185 64.2439 6.06142L60.5246 16.4136ZM77.1085 29.2123C81.1559 35.1136 83.2433 42.1392 83.0747 49.2932L94.0716 49.5523C94.2946 40.0895 91.5336 30.7966 86.18 22.9907L77.1085 29.2123Z" fill="#4C4C4C" />
                        <path d="M94.2448 48.4828C94.2448 45.4452 91.7823 42.9828 88.7448 42.9828C85.7072 42.9828 83.2448 45.4452 83.2448 48.4828H94.2448ZM81.2381 71.2632L85.6682 74.5227L81.2381 71.2632ZM61.5539 85.4384L59.848 80.2096H59.848L61.5539 85.4384ZM37.1276 85.6538L35.5146 90.912H35.5146L37.1276 85.6538ZM17.1861 71.8281L12.8158 75.1673H12.8158L17.1861 71.8281ZM9.2623 49.1838L14.7614 49.0828L9.2623 49.1838ZM16.3493 26.2747L11.8609 23.096H11.8609L16.3493 26.2747ZM35.77 11.7546L33.9718 6.55684L35.77 11.7546ZM83.2448 48.4828C83.2448 55.4785 80.9986 62.3082 76.8081 68.0036L85.6682 74.5227C91.2383 66.9522 94.2448 57.8418 94.2448 48.4828H83.2448ZM76.8081 68.0036C72.6163 73.7008 66.6871 77.9784 59.848 80.2096L63.2597 90.6672C72.255 87.7325 80.0994 82.0914 85.6682 74.5227L76.8081 68.0036ZM59.848 80.2096C53.008 82.4411 45.6212 82.5064 38.7405 80.3957L35.5146 90.912C44.5605 93.6869 54.2655 93.6014 63.2597 90.6672L59.848 80.2096ZM38.7405 80.3957C31.8609 78.2853 25.853 74.1123 21.5564 68.4889L12.8158 75.1673C18.5219 82.6355 26.4676 88.1367 35.5146 90.912L38.7405 80.3957ZM21.5564 68.4889C17.2611 62.8673 14.8899 56.0775 14.7614 49.0828L3.76323 49.2849C3.93512 58.6423 7.10833 67.6974 12.8158 75.1673L21.5564 68.4889ZM14.7614 49.0828C14.6329 42.0882 16.7532 35.2208 20.8377 29.4535L11.8609 23.096C6.42998 30.7645 3.59133 39.9273 3.76323 49.2849L14.7614 49.0828ZM20.8377 29.4535C24.9234 23.6843 30.7721 19.3035 37.5682 16.9523L33.9718 6.55684C25.0311 9.64993 17.2906 15.4292 11.8609 23.096L20.8377 29.4535ZM37.5682 16.9523C44.3654 14.6008 51.7498 14.405 58.6688 16.3942L61.7081 5.82241C52.6133 3.20768 42.9115 3.46411 33.9718 6.55684L37.5682 16.9523Z" fill="#00BDFF" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>

            </div>

        
            <div className="container mx-auto">
            <PageTitle
                Title='Your Curated Results'
            />
            <p className='text-center lg:text-[18px] md:text-[18px] text-[12px] font-[400] text-[#949393] md:mb-[80px] mb-[20px]'>If you’ve already seen it, tell us how you felt about it so your next set of results will be better</p>
                <div className="results-card-holder">
                    <ResultCard
                        ResultImg={CardImg1}
                        ResultTitle="Forrest Gump"
                        WhereToWhatch={streamLogo1}
                        About="Geralt of Rivia, a brooding professional monster hunter for hire also known as witcher, struggles to keep his humanity in a medieval dark fantasy world ruled by corrupt kings, queens and mages, where poverty, violence and intolerance are rampant"
                    />
                    <ResultCard
                        ResultImg={CardImg2}
                        ResultTitle="The Dark Knight"
                        WhereToWhatch={streamLogo2}
                        About="Geralt of Rivia, a brooding professional monster hunter for hire also known as witcher, struggles to keep his humanity in a medieval dark fantasy world ruled by corrupt kings, queens and mages, where poverty, violence and intolerance are rampant"
                    />
                     <ResultCard
                        ResultImg={CardImg3}
                        ResultTitle="Pulp Fiction"
                        WhereToWhatch={streamLogo3}
                        About="Geralt of Rivia, a brooding professional monster hunter for hire also known as witcher, struggles to keep his humanity in a medieval dark fantasy world ruled by corrupt kings, queens and mages, where poverty, violence and intolerance are rampant"
                    />
                      <ResultCard
                        ResultImg={CardImg5}
                        ResultTitle="Titanic"
                        WhereToWhatch={streamLogo4}
                        About="Geralt of Rivia, a brooding professional monster hunter for hire also known as witcher, struggles to keep his humanity in a medieval dark fantasy world ruled by corrupt kings, queens and mages, where poverty, violence and intolerance are rampant"
                    />
                </div>

                <div className="flex flex-col gap-3 mt-[50px]">
                    <h3 className='text-[24px] text-center font-[400] text-[white] anton mb-5'>Did you find something to watch?</h3>
                    <button onClick={() => {
                        setFoundModal(true)
                    }} type="button" class=" site-btn mx-auto text-center w-fit "><span>Yes, I found something! 😀</span></button>
                    <button onClick={()=>{
                        setMoodModal(true)
                    }} type='button' className='no-after w-fit mx-auto text-[12px] font-[400]  underline text-[white]'>No, please show me a new list of results</button>

                </div>
            </div>
        </>
    )
}

export default Result

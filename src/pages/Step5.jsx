import React from 'react'
import StepHeaderBar from '../components/StepHeaderBar'
import PageTitle from '../components/PageTitle'
import SiteBtn from '../components/SiteBtn'
import { NavLink } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import streamLogo1 from '../assets/images/stream-log1.svg'
import streamLogo2 from '../assets/images/stream-log2.svg'
import streamLogo3 from '../assets/images/stream-log3.svg'
import streamLogo4 from '../assets/images/stream-log4.svg'
import streamLogo5 from '../assets/images/stream-log5.svg'
import streamLogo6 from '../assets/images/stream-log6.svg'
import streamLogo7 from '../assets/images/stream-log7.svg'
import streamLogo8 from '../assets/images/stream-log8.svg'
import AccessCards from '../components/AccessCards'

const Step5 = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
     
        });
      };
    
      scrollToTop()
    return (
        <>
        <StepHeaderBar
        stepDesc='Last step!'
        stepProgress='100%'
        />
        <div className="container mx-auto">
        <PageTitle
        Title='Which streaming sites do you have access to?'
        />
   
        <div className="select-btn-holder step-5 mt-12 flex flex-wrap justify-center ">
          <AccessCards
          AccessImg={streamLogo1}
          AccessText='amaazon'
          />
            <AccessCards
          AccessImg={streamLogo2}
          AccessText='amaazon'
          />
           <AccessCards
          AccessImg={streamLogo3}
          AccessText='amaazon'
          />
           <AccessCards
          AccessImg={streamLogo4}
          AccessText='amaazon'
          />
           <AccessCards
          AccessImg={streamLogo5}
          AccessText='amaazon'
          />
           <AccessCards
          AccessImg={streamLogo6}
          AccessText='amaazon'
          />
            <AccessCards
          AccessImg={streamLogo7}
          AccessText='amaazon'
          />
            <AccessCards
          AccessImg={streamLogo8}
          AccessText='amaazon'
          />
          
        </div>
    
        <div className="text-center mt-20">
        <NavLink to='/login' className='text-[18px] font-[400] text-center mx-auto text-[#FFF] border-[white] border-b skip-btn'>I have access to all streaming sites</NavLink>
        </div>
        <div className="flex justify-end items-center gap-8 mt-12 steps-btn-holder">
            <NavLink to='/step4' className='text-[#8A8A8A] text-[15px] font-[700] nunito'>back</NavLink>
            <SiteBtn buttonLabel='Next' showArrow={true} buttonLink='/login'/>
        </div>
        </div>
        </>
      )
}

export default Step5

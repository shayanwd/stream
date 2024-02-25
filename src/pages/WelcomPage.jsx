import React from 'react'
import SiteBtn from '../components/SiteBtn'
import BookmarkBtn from '../components/BookmarkBtn'

const WelcomPage = () => {
  return (
    <div className="container mx-auto">
    <div className='gap-2 flex flex-col text-center text-white mt-[80px]'>
      <h4 className='lg:text-[28px] md:text-[28px] text-[14px] font-[400] mb-0-' style={{ letterSpacing: '1px' }}>TONIGHT’S ENTERTAINMENT, SORTED✨</h4>
      <h1 className='anton lg:text-[68px] md:text-[68px] text-[34px]  font-[400] lg:leading-[89px] md:leading-[89px] leading-[45px]' >Your Personalized  <span className=' lg:block'></span>TV & Movie Guide is Here.</h1>
      <p className='lg:text-[18px] md:text-[18px] text-[15px] font-[400] text-[#C3C3C3] mb-[80px]'>Powered by Artificial Intelligence</p>
   
    <div className="text-center">
      <SiteBtn 
      buttonLabel='Find Something to Watch'
      buttonLink='/step1'
      showArrow={true}
      />
      </div>
    </div>
    <BookmarkBtn/>
    </div>
  )
}

export default WelcomPage

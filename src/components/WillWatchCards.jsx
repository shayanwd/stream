import React from 'react'

const WillWatchCards = ({movImg, movTitle}) => {
  return (
    <div className="block cursor-pointer">
    <img className=' w-[70px] md:w-[90px] mx-auto h-[100px] md:h-[120px]  object-cover' src={movImg} alt='' />
    <p className='nunito text-center text-[#C8C8C8] text-[12px] md:text-[16px] mt-2 font-[700]'>{movTitle}</p>
</div>
  )
}

export default WillWatchCards

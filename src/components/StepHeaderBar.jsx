import React from 'react'

const StepHeaderBar = ({stepTitle, stepDesc, stepProgress}) => {
  return (
    <div className='step-header text-center mb-12'>
        {stepTitle&&
      <h3 className='lg:text-[32px] md:text-[32px] text-[20px] font-[600] text-[white] lg:leading-[60px] md:leading-[60px]'>{stepTitle}</h3>
    }
    {stepDesc&&
      <p className='text-[#C3C3C3] lg:text-[18px] md:text-[18px] text-[12px] font-[400]'>{stepDesc}</p>
     }
     <div className="step-progress-holder">
        <div className="step-progress-bar" style={{width: stepProgress}}></div>
      </div>
    </div>
  )
}

export default StepHeaderBar

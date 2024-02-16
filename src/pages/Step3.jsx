import React, { useState, useEffect } from 'react';
import StepHeaderBar from '../components/StepHeaderBar'
import PageTitle from '../components/PageTitle'
import SelectBtn from '../components/SelectBtn'
import SiteBtn from '../components/SiteBtn'
import { NavLink } from 'react-router-dom'
import TypeField from '../components/TypeField'

const Step3 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
 
    });
  };

  const initialButtons = [
    "Mindless",
    "Gruesome",
    "Chilling",
    "Scary",
    "Gripping",
    "Dark",
    "Gritty",
    "Funny",
    "Witty",
    "Thought-provoking",
    "Suspenseful",
    "Lighthearted",
    "Violent",
    "Captivating",
    "Raunchy",
    "Exciting",
    "Action-packed",
    "Adventurous",
    "Compelling",
    "Emotional",
    "Heart-warming",
    "Aspirational",
    "Quirky",
    "Mysterious",
    "Absurd"
  ];

  const [buttons, setButtons] = useState(() => {
    const storedButtons = localStorage.getItem('idealshow');
    return storedButtons ? JSON.parse(storedButtons) : initialButtons;
  });

  useEffect(() => {
    localStorage.setItem('idealshow', JSON.stringify(buttons));
  }, [buttons]);

  const handleAddButtonClick = (newButtonLabel) => {
    setButtons((prevButtons) => [newButtonLabel,...prevButtons]);
  };


  scrollToTop()
    return (
        <>
        <StepHeaderBar
        stepDesc='Analyzing your current mood…'
        stepProgress='60%'
        />
        <div className="container mx-auto">
        <PageTitle
        Title='Describe your ideal show/movie with a few more
        words, if you’d like.'
        />
     
     <TypeField searchText='Press enter to add this Descriptors' placeHolder='Type your own adjective if you don’t see yours here...' onAddButtonClick={handleAddButtonClick} existingButtons={buttons} />
      {/* <div className="select-btn-holder mt-12 flex flex-wrap justify-center">
        {buttons.map((label, index) => (
          <SelectBtn key={index} buttonLabel={label} />
        ))}
      </div> */}
        <div className="text-center mt-20">
        <NavLink to='/step4' className='text-[18px] font-[400] text-center mx-auto text-[#FFF] border-[white] border-b skip-btn'>Skip</NavLink>
        </div>
        <div className="flex justify-end items-center gap-8 mt-12 steps-btn-holder">
            <NavLink to='/step2' className='text-[#8A8A8A] text-[15px] font-[700] nunito'>back</NavLink>
            <SiteBtn buttonLabel='Next' showArrow={true} buttonLink='/step4'/>
        </div>
        </div>
        </>
      )
}

export default Step3

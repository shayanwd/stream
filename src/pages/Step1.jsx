import React, { useState, useEffect } from "react";
import StepHeaderBar from "../components/StepHeaderBar";
import PageTitle from "../components/PageTitle";
import SelectBtn from "../components/SelectBtn";
import SiteBtn from "../components/SiteBtn";
import { NavLink } from "react-router-dom";

const Step1 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  scrollToTop();

  const initialButtons = ["TV Show", "Movie", "either"];

  const [buttons, setButtons] = useState(() => {
    const storedButtons = localStorage.getItem("shows");
    return storedButtons ? JSON.parse(storedButtons) : initialButtons;
  });

  useEffect(() => {
    localStorage.setItem("shows", JSON.stringify(buttons));
  }, [buttons]);

  //NEW UPDATES

  const [selectedButton, setSelectedButton] = useState("");

  //END OF NEW UPDATES
  return (
    <>
      <StepHeaderBar
        // stepTitle='Well done! You have completed your taste profile!'
        stepDesc="Tell us what you’re interested in, and we’ll suggest something perfect for you. You’re just a few clicks away!"
        stepProgress="20%"
      />
      <div className="container mx-auto">
        <PageTitle Title="Do you want to watch a TV Show or Movie?" />
        <div className="select-btn-holder mt-12 flex flex-wrap justify-center">
          {buttons.map((label, index) => (
            <SelectBtn
              selectedLable={selectedButton==label}
              onSelected={(lable) => {
                setSelectedButton(lable);
              }}
              key={index}
              buttonLabel={label}
            />
          ))}
        </div>
        {/* <div className="select-btn-holder mt-12 flex flex-wrap justify-center gap-3">
        <SelectBtn
        type="radio"
        buttonLabel='TV'
        />
         <SelectBtn
          type="radio"
        buttonLabel='MOvie'
        />
         <SelectBtn
          type="radio"
        buttonLabel='either'
        />
    </div> */}
        <div className="flex justify-end items-center gap-8 mt-12 steps-btn-holder">
          <NavLink
            to="/"
            className="text-[#8A8A8A] text-[15px] font-[700] nunito"
          >
            back
          </NavLink>
          <SiteBtn
            buttonLabel="Next"
            showArrow={true}
            buttonLink={selectedButton != "" ? "/step2" : undefined}
          />
        </div>
      </div>
    </>
  );
};

export default Step1;

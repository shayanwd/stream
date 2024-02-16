import React, { useState, useEffect } from "react";
import StepHeaderBar from "../components/StepHeaderBar";
import PageTitle from "../components/PageTitle";
import SelectBtn from "../components/SelectBtn";
import SiteBtn from "../components/SiteBtn";
import { NavLink } from "react-router-dom";
import TypeField from "../components/TypeField";

const Step2 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  scrollToTop();

  const initialButtons = [
    "Sci-Fi",
    "Sci-Fi Adventure",
    "Sci-Fi Dramas",
    "Sci-Fi Thrillers",
    "Mindless",
    "Action",
    "Action Comedy",
    "Animated",
    "Cartoon",
    "Comedy",
    "Dark Comedies",
    "Political Comedies",
    "Romantic Comedies (Rom Com)",
    "Historical Fiction",
    "Drama",
    "Political Drama",
    "Military Drama",
    "Romantic",
    "Spy",
    "Reality",
  ];

  const [buttons, setButtons] = useState(() => {
    const storedButtons = localStorage.getItem("movieGenresButtons");
    return storedButtons ? JSON.parse(storedButtons) : initialButtons;
  });

  useEffect(() => {
    localStorage.setItem("movieGenresButtons", JSON.stringify(buttons));
  
  }, [buttons]);
  


  const handleAddButtonClick = (newButtonLabel) => {
    setButtons((prevButtons) => [newButtonLabel,...prevButtons ]);
  };
  //NEW UPDATES
  const [enableNextButton, setEnableNextButton] = useState(false);
  const [limitText, setLimitText] = useState(false)

  return (
    <>
    <p className={`pop-text ${limitText ? 'show-pop' : ''}`}>The maximum genres you can select is 4</p>
      <StepHeaderBar
        stepDesc="Analyzing your current mood…"
        stepProgress="40%"
      />
      <div className="container mx-auto">
        <PageTitle Title="What Genre are you looking for?" />

        <TypeField
          searchText="Press enter to add this genre"
          placeHolder="Type a genre if you don’t see yours here…"
          onAddButtonClick={handleAddButtonClick}
          existingButtons={buttons}
          limit={4}
          onLimitReached={()=>{
            setLimitText(true)
            setTimeout(() => {
              setLimitText(false);
          }, 5000);
          }}
          onSelectionChange={(items) => {
            setEnableNextButton(items.length > 0);
            console.log({items});
          }}
        />

        <div className="flex justify-end items-center gap-8 mt-12 steps-btn-holder">
          <NavLink
            to="/step1"
            className="text-[#8A8A8A] text-[15px] font-[700] nunito"
          >
            back
          </NavLink>
          <div className={enableNextButton ? "" : 'disable-next'}>
          <SiteBtn
            buttonLabel={"Next"}
            showArrow={true}
            buttonLink={enableNextButton ? "/step3" : undefined}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;

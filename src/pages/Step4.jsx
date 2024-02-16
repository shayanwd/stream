import React from "react";
import StepHeaderBar from "../components/StepHeaderBar";
import PageTitle from "../components/PageTitle";
import SelectBtn from "../components/SelectBtn";
import SiteBtn from "../components/SiteBtn";
import { NavLink } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import CardImg1 from "../assets/images/card-img1.jpg";
import CardImg2 from "../assets/images/card-img2.jpg";
import CardImg3 from "../assets/images/card-img3.jpg";
import CardImg4 from "../assets/images/card-img4.jpg";
import CardImg5 from "../assets/images/card-img5.jpg";
import CardImg6 from "../assets/images/card-img6.jpg";
import CardImg7 from "../assets/images/card-img7.jpg";
import TypeField from "../components/TypeField";
import { useState, useEffect } from "react";

const Step4 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  scrollToTop();

  const movienamesObj = [
    {
      name: "The Matrix",
      image: CardImg7,
    },
    {
      name: "Inception",
      image: CardImg4,
    },
    {
      name: "The Shawshank Redemption",
      image: CardImg6,
    },
    {
      name: "Pulp Fiction",
      image: CardImg3,
    },
    {
      name: "The Dark Knight",
      image: CardImg2,
    },
    {
      name: "Forrest Gump",
      image: CardImg1,
    },
    {
      name: "Titanic",
      image: CardImg5,
    },
  ];

  // const movienames = [
  //    "The Matrix",
  //    "Inception",
  //    "The Shawshank Redemption",
  //    "Pulp Fiction",
  //    "The Dark Knight",
  //    "Forrest Gump",
  //    "Titanic"
  // ];

  // const [buttons, setButtons] = useState(() => {
  //    const storedButtons = localStorage.getItem('movies');
  //    return storedButtons ? JSON.parse(storedButtons) : movienamesObj;
  // });
  const [buttons, setButtons] = useState(movienamesObj);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(buttons));
  }, [buttons]);

  const handleAddButtonClick = (newButtonLabel) => {
    setButtons((prevButtons) => [newButtonLabel, ...prevButtons]);
  };

  //NEW UPDATES
  const [enableNextButton, setEnableNextButton] = useState(false);

  return (
    <>
      <StepHeaderBar
        stepDesc="Analyzing your current mood…"
        stepProgress="80%"
      />
      <div className="container mx-auto">
        <PageTitle Title="Pick a few Titles that are similar to what you want to watch." />
        <p className="text-[#C3C3C3] lg:text-[18px] md:text-[18px] text-[12px] font-[400] text-center">
          Below are some suggestions based on your genre selections
        </p>

        <TypeField
          searchText="Press enter to add this Movie"
          placeHolder="Search for any TV Show or Movie ..."
          searchMov={true}
          onAddButtonClick={handleAddButtonClick}
          existingButtons={buttons}
          onSelectionChange={(items) => {
            setEnableNextButton(items.length > 0);
          }}
        />

        {/* <div className="select-btn-holder mt-12 flex flex-wrap justify-center ">
        {buttons.map((label, index) => (
         
         <MovieCard
         key={index} buttonLabel={label}
         CardImg={CardImg1}
         CardText={label}
         />
       ))}
          
        </div> */}

        <div className="flex justify-end items-center gap-8 mt-12 steps-btn-holder">
          <NavLink
            to="/step3"
            className="text-[#8A8A8A] text-[15px] font-[700] nunito"
          >
            back
          </NavLink>
          <div className={enableNextButton ? "" : 'disable-next'}>
          <SiteBtn
            buttonLabel="Next"
            showArrow={true}
            buttonLink={enableNextButton ? "/step5" : undefined}
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step4;

import React, { useState } from "react";
import SelectBtn from "./SelectBtn";
import MovieCard from "./MovieCard";
import CardImg1 from "../assets/images/card-img.png";
import Poster from "../assets/images/poster.svg";

const TypeField = ({
  onAddButtonClick,
  existingButtons,
  searchMov,
  placeHolder,
  searchText,
  onSelectionChange,
  limit,
  onLimitReached,
}) => {
  const [inputValue, setInputValue] = useState("");
  //NEW UPDATES

  const [selectedButtons, setSelectedButtons] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);

  //END OF NEW UPDATES
  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const isInputInFilteredButtons =
        existingButtons.filter((button) => {
          if (searchMov)
            return button?.name
              .toLowerCase()
              .includes(inputValue?.toLowerCase());
          else return button.toLowerCase().includes(inputValue?.toLowerCase());
        }).length > 0;

      if (!isInputInFilteredButtons) {
        if (searchMov) {
          onAddButtonClick({ name: inputValue, image: Poster });
          selectedMovies.push(inputValue);
          setSelectedMovies([...selectedMovies]);
        } else {
          if (limit) {
            if (selectedButtons.length < limit) {
              onAddButtonClick({ name: inputValue, image: Poster });
              selectedButtons.push(inputValue);
              setSelectedButtons([...selectedButtons]);
            } else {
              onLimitReached();
            }
          } else {
            onAddButtonClick(inputValue);
            selectedButtons.push(inputValue);
            setSelectedButtons([...selectedButtons]);
          }
        }
        setInputValue("");
      }
    }
  };

  const filteredButtons = existingButtons.filter((button) => {
    if (searchMov)
      return button?.name.toLowerCase().includes(inputValue?.toLowerCase());
    else return button.toLowerCase().includes(inputValue?.toLowerCase());
  });

  return (
    <>
      <div className="type-field">
        <input
          placeholder={placeHolder ? placeHolder : ""}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <p className="text-[10px] md:text-[14px] text-[#FFFFFF] text-center">
          {inputValue && <>{searchText}</>}
        </p>
        {/* Display matched buttons */}
      </div>

      <div
        className={`select-btn-holder mt-12 flex flex-wrap justify-center ${
          filteredButtons.length > 0 ? "show" : ""
        }`}
      >
        {searchMov && filteredButtons.length < 1 && (
          <MovieCard
            CardText={inputValue}
            CardImg={Poster}
            disabledBtn={true}
            key={1000}
            buttonLabel={inputValue}
          />
        )}

        {searchMov
          ? filteredButtons.map((item, index) => (
              <MovieCard
                CardText={item?.name}
                CardImg={item?.image}
                key={index}
                buttonLabel={item?.name}
                selected={selectedMovies.includes(item?.name)}
                onSelected={(lable, selected) => {
                  if (selected) {
                    selectedMovies.push(lable);
                    setSelectedMovies([...selectedMovies]);
                    onSelectionChange(selectedMovies);
                  }
                  if (!selected) {
                    const temp = selectedMovies.filter((it) => {
                      return it != lable;
                    });
                    onSelectionChange(temp);
                    setSelectedMovies(temp);
                  }
                }}
              />
            ))
          : filteredButtons.map((label, index) => (
              <SelectBtn
                selectedLable={selectedButtons.includes(label)}
                key={index}
                onSelected={(lable, selected) => {
                  if (selected) {
                    if (limit) {
                      if (selectedButtons.length >= limit) {
                        onLimitReached();
                      } else {
                        selectedButtons.push(lable);
                        setSelectedButtons([...selectedButtons]);
                        onSelectionChange(selectedButtons);
                      }
                    } else {
                      selectedButtons.push(lable);
                      setSelectedButtons([...selectedButtons]);
                      onSelectionChange(selectedButtons);
                    }
                  }
                  if (!selected) {
                    const temp = selectedButtons.filter((it) => it != lable);
                    onSelectionChange(temp);
                    setSelectedButtons(temp);
                  }
                }}
                buttonLabel={label}
              />
            ))}
      </div>
    </>
  );
};

export default TypeField;

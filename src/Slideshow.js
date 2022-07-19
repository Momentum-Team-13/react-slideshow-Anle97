import React, { useState, useEffect } from "react";

function Slideshow({ slides }) {
  const [slideState, changeSlide] = useState(0);

  useEffect(() => {
    if (slideState == 0) {
      document.getElementById("previous").disabled = true;
      document.getElementById("restart").disabled = true;
    }
  });

  const restart = () => {
    if (slideState != 0) {
      changeSlide(0);
      document.getElementById("next").disabled= false;
    }
  };

  const previous = () => {
    if (slideState != 0) {
      changeSlide(slideState - 1);
      document.getElementById("next").disabled = false;
    } else {
      document.getElementById("previous").disabled = true;
      document.getElementById("next").disabled = false;
    }
  };

  const next = () => {
    if (slideState != slides.length - 1) {
      changeSlide(slideState + 1);
      document.getElementById("previous").disabled = false;
      document.getElementById("restart").disabled = false;
    } else {
      document.getElementById("next").disabled = true;
    }
  };

  return (
    <div>
      <div className="movie-info">
        <h2>{slides[slideState].title}</h2>
        <h2>{slides[slideState].original_title}</h2>
        <img src={slides[slideState].image}/>
        <p>Release Date: {slides[slideState].release_date}</p>
        <p>{slides[slideState].description}</p>
      </div>

      <div className="nav-buttons">
        <button onClick={restart} id="restart">
          Restart
        </button>
        <button onClick={previous} id="previous">
          Previous
        </button>
        <button onClick={next} id="next">
          Next
        </button>
      </div>
    </div>
  );
}

export default Slideshow;

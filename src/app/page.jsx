
"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa"

import { FaThumbsUp, FaThumbsDown } from "react-icons/fa"


export default function Home() {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const [rating1, setRating1] = useState(null)
  const [hover1, setHover1] = useState(null)

  const [thumbsUp, setThumbsUp] = useState(false);
  const [thumbsDown, setThumbsDown] = useState(false);


  const handleThumbsUpClick = () => {
    setThumbsUp(!thumbsUp);
    if (thumbsDown) setThumbsDown(false);
  };

  const handleThumbsDownClick = () => {
    setThumbsDown(!thumbsDown);
    if (thumbsUp) setThumbsUp(false);
  };




  return (
    <>
      <div className="app ">
        <div className="container">
          <h1>Leave a review</h1>
          <div>
            <h2 className="sub_head">Safety</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="star_box">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1
              return (
                <label >
                  <input type="radio" name="rating" value={currentRating} onClick={() => setRating(currentRating)} />
                  <FaStar className="star" size={50} color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)} />

                </label>
              )



            })}
          </div>

          <div>
            <h2 className="sub_head">Communication</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="star_box">
            {[...Array(5)].map((star, index) => {
              const currentRating1 = index + 1
              return (
                <label >
                  <input type="radio" name="rating1" value={currentRating1} onClick={() => setRating1(currentRating1)} />
                  <FaStar className="star" size={50} color={currentRating1 <= (hover1 || rating1) ? "#ffc107" : "#e4e5e9"}
                    onMouseEnter={() => setHover1(currentRating1)}
                    onMouseLeave={() => setHover1(null)} />

                </label>
              )



            })}
          </div>

          <div className="third">
            <h2 className="sub_head">Would you recommend Trausti?</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="thumbs-rating">
            <div>
              <FaThumbsDown size={50}
                className={`icon ${thumbsDown ? 'active' : ''}`}
                onClick={handleThumbsDownClick}
              /> <span>No</span>
            </div>
            <div>
              <FaThumbsUp size={50}
                className={`icon ${thumbsUp ? 'active' : ''}`}
                onClick={handleThumbsUpClick}
              /> <span>Yes</span>
            </div>

          </div>



        </div>

      </div>

    </>

  );
}

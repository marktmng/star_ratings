import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Star.css";

export default function StarRate() {
  // State to store the selected rating value
  const [rating, setRating] = useState(null);
  // State for additional color control (not being updated in the code)
  const [color, setColor] = useState(null);

  return (
    <div className="star-rating-container">
      {/* Creates an array of 5 elements for 5-star rating */}
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1; // Star rating starts from 1 (not 0)

        const rateBtn = () => {
          setRating(currentRate);
          setColor(currentRate);
        };

        return (
          <>
            <label>
              {/* Hidden radio input to store the selected rating */}
              <input
                type="radio"
                name="rate"
                value={currentRate}
                onClick={rateBtn}
                style={{ display: "none" }} // Hides the radio button
              />
              {/* Star icon - changes color based on the selected rating */}
              <FaStar
                size={50} // Sets star size
                color={currentRate <= (color || rating) ? "yellow" : "grey"} // If the current rating (currentRate) is less than or equal to the selected rating (color or rating),
                // set the star color to yellow (highlighted), otherwise set it to grey (unhighlighted)
              />
            </label>
          </>
        );
      })}
    </div>
  );
}

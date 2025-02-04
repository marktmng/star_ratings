import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRate() {
  const [rating, setRating] = useState(null);
  const [color, setColor] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <>
            <label>
              <input
                type="radio"
                name="rate"
                value={currentRate}
                onClick={() => setRating(currentRate)}
                style={{ display: "none" }}
              />
              <FaStar
                size={50}
                color={currentRate <= (color || rating) ? "yellow" : "grey"}
              />
            </label>
          </>
        );
      })}
    </>
  );
}

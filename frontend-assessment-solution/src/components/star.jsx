import React from 'react';

export const StarRating = ({ rating }) => {
  const ratingRounded = Math.round(rating);

  function renderStars() {
    console.log(ratingRounded);

    const arr = [];

    for (let i = 0; i < ratingRounded; i++) {
      arr.push(
        <div key={i}>
          <svg
            fill="#bf63e3"
            viewBox="0 0 32.00 32.00"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#bf63e3"
            strokeWidth="3.2"
            width={24}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path>
            </g>
          </svg>
        </div>
      );
    }

    while (arr.length !== 5) {
      arr.push(
        <div key={arr}>
          <svg
            fill="#dedede"
            viewBox="0 0 32.00 32.00"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#dedede"
            strokeWidth="3.2"
            width={24}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"></path>
            </g>
          </svg>
        </div>
      );
    }
    return arr;
  }

  return <div className="flex">{renderStars()}</div>;
};

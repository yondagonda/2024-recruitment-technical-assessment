import React from 'react';
import { StarRating } from './star';

export const Main = () => {
  const data = [
    {
      course_prefix: 'COMP',
      course_code: 1511,
      course_title: 'Programming Fundamentals',
      average_stars: 4.8,
      total_reviews: 68,
      offered_terms: ['Term 1', 'Term 2', 'Term 3'],
    },
    {
      course_prefix: 'COMP',
      course_code: 1531,
      course_title: 'Software Engineering Fundamentals',
      average_stars: 3.9,
      total_reviews: 47,
      offered_terms: ['Term 1', 'Term 2', 'Term 3'],
    },
    {
      course_prefix: 'COMP',
      course_code: 1521,
      course_title: 'Computer Systems Fundamentals',
      average_stars: 4,
      total_reviews: 40,
      offered_terms: ['Term 1', 'Term 2', 'Term 3'],
    },
    {
      course_prefix: 'COMP',
      course_code: 2521,
      course_title: 'Data Structures and Algorithms',
      average_stars: 4,
      total_reviews: 36,
      offered_terms: ['Summer', 'Term 1', 'Term 2', 'Term 3'],
    },
    {
      course_prefix: 'COMP',
      course_code: 2511,
      course_title: 'Object-Oriented Design & Programming',
      average_stars: 3,
      total_reviews: 33,
      offered_terms: ['Term 1', 'Term 2', 'Term 3'],
    },
    {
      course_prefix: 'COMP',
      course_code: 3311,
      course_title: 'Database Systems',
      average_stars: 4,
      total_reviews: 33,
      offered_terms: ['Term 1', 'Term 3'],
    },
  ];

  console.log(data);

  return (
    <>
      <main className="pl-12 pt-6 w-full pr-32">
        <section className="text-start">
          <h4>DevSoc presents</h4>
          <h1 className="text-blue-500 font-bold text-6xl">unilectives</h1>
          <h3 className="font-bold">
            Your one-stop shop for UNSW course and elective reviews.
          </h3>

          <div className="mt-6">
            <label htmlFor="searchBar"></label>
            <div className="flex relative items-center">
              <svg
                viewBox="0 0 32 32"
                fill="#000000"
                width={18}
                className="absolute fill-blue-500 ml-3"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>search</title> <desc>Created with Sketch Beta.</desc>
                  <defs> </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    sketch:type="MSPage"
                  >
                    <g
                      id="Icon-Set"
                      sketch:type="MSLayerGroup"
                      transform="translate(-256.000000, -1139.000000)"
                    >
                      <path
                        d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z"
                        id="search"
                        sketch:type="MSShapeGroup"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>

              <input
                id="searchBar"
                type="text"
                placeholder="Search for a course e.g. COMP1511"
                className="border border-blue-400 rounded-md w-full outline-none placeholder:text-blue-500 pl-10 
                py-2.5 text-[12px]"
              />
            </div>

            <select
              name="sort"
              id="sort-by"
              className="bg-white outline outline-1 outline-gray-400 shadow-sm  py-1.5 pl-2 pr-6 mt-4 rounded-sm
            outline-none text-gray-500"
            >
              <option value="">Sort by</option>
              <option value="lowest">Lowest Rating</option>
              <option value="highest">Highest Rating</option>
            </select>
          </div>
        </section>

        <section className="grid grid-cols-3 pt-12 gap-6">
          {data.map((card, i) => {
            return (
              <article
                className="p-4 flex flex-col gap-3 shadow-md rounded-md"
                key={card.course_code}
              >
                <header className="font-bold flex justify-between">
                  <h2 className="text-2xl">
                    {card.course_prefix + card.course_code}
                  </h2>
                  <div className="text-start">
                    <StarRating rating={card.average_stars} />
                    <h7 className="text-[10px] text-slate-400">
                      {card.total_reviews} reviews
                    </h7>
                  </div>
                </header>
                <h5 className="text-[13px] text-start">{card.course_title}</h5>

                <div className="flex gap-3 pt-6">
                  {card.offered_terms.map((term, i) => {
                    return (
                      <h6
                        key={i}
                        className="border text-[10px] rounded-lg p-1 bg-blue-100"
                      >
                        {term}
                      </h6>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
};

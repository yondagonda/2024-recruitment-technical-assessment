import React from 'react';

export const Sidebar = () => {
  return (
    <>
      <aside className="flex  flex-col justify-between h-screen bg-slate-50 px-5 py-8">
        <div className="flex flex-col gap-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            id="body_1"
            preserveAspectRatio="xMidYMid meet"
            zoomAndPan="magnify"
            version="1.0"
            contentScriptType="text/ecmascript"
            contentStyleType="text/css"
            width={40}
            height={60}
            className=" border-b-2 border-gray-300 pb-4"
          >
            <g transform="matrix(1.3333334 0 0 1.3333334 0 0)">
              <image
                x="0"
                y="0"
                xlinkHref="data:image/png;base64,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"
                preserveAspectRatio="none"
                width={26}
                height={26}
                xlinkType="simple"
                xlinkShow="embed"
                xlinkActuate="onLoad"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width={30}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width={30}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width={30}
            className="rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width={30}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width={30}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            width={30}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
        </div>
      </aside>
    </>
  );
};

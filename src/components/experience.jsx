import React from 'react';

const Experience = () => {
  const driveLink = "https://drive.google.com/file/d/1FFe2COLnCVNIWr9xa13g7pPZp1PUrfxT/view";

  return (
    <div id="exp" className="min-h-[60vh] md:min-h-[50vh] bg-[#272727] p-8 rounded-[20px]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0">
            My <span className="text-orange-500">Experience</span>
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block"
        >
          <div
            className="bg-[#393939] rounded-3xl p-8 relative transition-transform hover:scale-105 hover:bg-[#505050] duration-300"
          >
            <h2 className="text-2xl font-cygre text-white mb-6">Flutter Intern</h2>
            <hr className="mb-6 border-gray-500" />
            <div>
              <p className="text-white text-[24px]">V4U Technologies</p>
            </div>
          </div>
          {/* Arrow Icon positioned in curved area */}
          <div
            className="absolute bottom-3 right-3 transform translate-x-[10%] translate-y-[10%] rotate-[-45deg] group-hover:scale-125 transition-transform duration-300"
          >
            <div className="bg-gray-900 rounded-full p-2">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Experience;

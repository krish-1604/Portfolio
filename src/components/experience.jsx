import React from 'react';

const Experience = () => {
  const driveLink = "https://drive.google.com/file/d/1FFe2COLnCVNIWr9xa13g7pPZp1PUrfxT/view";

  return (
    <div id="exp" className="w-full bg-[#272727] p-12 rounded-[20px] -mt-8 pb-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 md:pb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-orange-500">Experience</span>
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        <a
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block"
        >
          <div className="bg-[#393939] rounded-3xl p-8 transition-transform hover:scale-105 hover:bg-[#505050] duration-300">
            <h2 className="text-5xl font-cygre text-white pb-6">Flutter Intern</h2>
            <hr className="border-gray-500" />
            <div className="py-6">
              <p className="text-white text-[24px]">V4U Technologies</p>
            </div>
            <div className="flex justify-end pt-8">
              <div className="bg-[#272727] rounded-full p-4 transform rotate-[-45deg] group-hover:scale-125 transition-transform duration-300">
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
          </div>
        </a>
      </div>
    </div>
  );
};

export default Experience;
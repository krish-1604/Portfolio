import React from 'react';
import memories from '../assets/projects/mymemories.png';
import assignofast from '../assets/projects/assignofast.png';
const Project = () => {
  const memorieslink = "https://github.com/krish-1604/My-Memories/blob/master/README.md";
  const assignofastlink = 'https://play.google.com/store/search?q=assignofast&c=apps&hl=en';
  return (
    <div id="project" className="min-h-[132vh] sm:min-h-[100vh] md:min-h-[92vh] bg-[#1B1B1B] p-8 rounded-[20px]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-0">
            My <span className="text-orange-500">Projects</span>
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a
          href={memorieslink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block"
        >
          <div
            className="bg-[#272727] rounded-3xl p-8 pb-20 relative transition-transform hover:scale-105 hover:bg-[#505050] duration-300 h-[450px]"
          >
            <img 
                src={memories}
                alt='My Memories'
                class="h-[124px]" 
            />
            <div>
              <p className="text-white text-[30px]">My Memories</p>
              <p className="text-[#F4B98E] text-[16px]">Flutter</p>
              <p className="text-[#8B949E] text-[14px]">App is designed to help users store and organize memories with titles, dates, hashtags, and detailed descriptions. It allows the addition of pictures to enhance the memories and features a hashtag-search option for easy retrieval. Using SQLite for local storage ensures privacy and easy access to data without relying on the cloud.</p>

            </div>
          </div>
          <div
            className="absolute bottom-4 right-6 transform translate-x-[10%] translate-y-[10%] rotate-[-45deg] group-hover:scale-125 transition-transform duration-300"
          >
            <div className="bg-[#1B1B1B] rounded-full p-4">
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
        <a
          href={assignofastlink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block"
        >
          <div
            className="bg-[#272727] rounded-3xl p-8 pb-20 relative transition-transform hover:scale-105 hover:bg-[#505050] duration-300 h-[450px]"
          >
            <img 
                src={assignofast}
                alt='AssignoFast'
                class="h-[124px]" 
            />
            <div>
              <p className="text-white text-[30px]">AssignoFast</p>
              <p className="text-[#F4B98E] text-[16px]">Flutter</p>
              <p className="text-[#8B949E] text-[14px]">A reminder app that syncs assignment data from Firebase and works offline with SQLite. Implemented features to fetch, display, and update assignments, along with notifications for reminders. Improved UI/UX with intuitive layouts and collaborated with a team, enhancing teamwork and communication.</p>

            </div>
          </div>
          <div
            className="absolute bottom-4 right-6 transform translate-x-[10%] translate-y-[10%] rotate-[-45deg] group-hover:scale-125 transition-transform duration-300 "
          >
            <div className="bg-[#1B1B1B] rounded-full p-4">
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

export default Project;
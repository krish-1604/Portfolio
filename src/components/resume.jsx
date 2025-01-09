import React from 'react';

const Resume = () => {
  const handleDownloadPDF = () => {
    const pdfUrl = '/Krish-Mehta-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Krish-Mehta-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume" className="bg-[#1B1B1B] p-12 rounded-[20px]">
      <div className="max-w-6xl mx-auto pb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-orange-500">Resume</span>
          </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <a
          href="https://www.linkedin.com/in/krish-mehta-7a4037252/"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#272727] rounded-xl p-6 hover:bg-gray-700 transition-all cursor-pointer relative h-64"
        >
          <div className="absolute top-6 right-6">
            <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-orange-500 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 sm:text-left text-center sm:left-6 inset-x-0 sm:inset-x-auto">
            <h2 className="text-white text-2xl font-bold">LinkedIn</h2>
          </div>
        </a>

        <button
          onClick={handleDownloadPDF}
          className="group bg-[#272727] rounded-xl p-6 hover:bg-black transition-all relative h-64"
        >
          <div className="absolute top-6 right-6">
            <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-orange-500 transform group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 sm:text-left text-center sm:left-6 inset-x-0 sm:inset-x-auto">
            <h2 className="text-white text-2xl font-bold">Download PDF</h2>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Resume;
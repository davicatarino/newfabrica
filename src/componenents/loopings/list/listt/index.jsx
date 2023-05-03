import { useState } from 'react';

export default function Listt({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex-1 flex relative self-stretch px-6  flex-col bg-fuchsia-900  hover:border hover:border-fuchsia-600 hover:shadow-md hover:shadow-violet-900"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex-row flex">
        <div className="font-sans text-lg font-bold leading-9 my-4 text-white">
          {title}
        </div>
        <div className="ml-auto my-4 ">
          <div className="ml-auto  mr-2">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="pink"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="pink"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ${
          isOpen ? 'h-full opacity-100 ' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="font-sans leading-6 text-base text-white">
          {content}
        </div>
      </div>
    </div>
  );
}

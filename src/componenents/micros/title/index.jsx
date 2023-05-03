import React from 'react';

export default function Title({ title, description, risco, className }) {
  return (
    <div
      className={`
     ${className} w-[100%] flex items-center flex-col pb-[1px] justify-end `}
    >
      <span
        className={`text-center text-[#ffffff] text-[50px] font-sans ${risco}`}
      >
        {title}
      </span>
      <span className="mt-[16px] text-center leading-[30px] text-[#ffffff] mb-[30px] text-[24px] font-sans">
        {description}
      </span>
    </div>
  );
}

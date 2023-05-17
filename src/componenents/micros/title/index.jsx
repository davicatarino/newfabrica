import React from 'react';
import { Revel } from '../../motion';

export default function Title({ title, description, risco, className }) {
  return (
    <div
      className={`
     ${className} w-[100%] flex items-center flex-col pb-[1px] justify-center content-center mb-8 `}
    >
      <Revel>
        <span
          className={`font-bold  text-white sm:text-4xl text-center  text-[50px] font-sans ${risco}`}
        >
          {title}
        </span>
      </Revel>
      <Revel>
        <span className="mt-[16px] text-center leading-[30px] text-[#ffffff] mb-[30px] text-[24px] font-sans">
          {description}
        </span>
      </Revel>
    </div>
  );
}

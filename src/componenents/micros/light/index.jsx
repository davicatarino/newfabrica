import React from 'react';
import './styles.css'
export default function Light({ title, className, className2}) {
  return (
    <div className={`w-[100%] flex items-center flex-col  pb-[1px] justify-end ${className}`}>
      <span className={`text-center text-[#ffffff] text-[35px] font-sans brilho  ${className2}`}>
        {title}
      </span>
    </div>
  );
}

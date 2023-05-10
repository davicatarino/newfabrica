import React, { useState } from 'react';
import './styles.css';

export default function Flip({ Ftext, Ftitle, Btext, Btitle }) {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

  return (
    <div className=" flip-card bg-transparent w-[220px] sm:w-[250px]  h-[364px]  ">
      <div className={`flip-card-inner relative w-[100%] h-[100%] align-center ${flip ? 'flip-card-flip' : ''}`}>
        <div className="flip-card-front absolute flex flex-col content-center place-content-center items-center  w-[100%] h-[100%] rounded-[1rem]">
          <p className="text-[1.3rem] font-semibold font-black align-center   ">{Ftitle}</p>
          <p>{Ftext}</p>
          <button className='mt-16 bu' onClick={handleFlip}>Virar</button>
        </div>
        <div className="flip-card-back absolute flex flex-col content-center place-content-center items-center  w-[100%] h-[100%] rounded-[1rem]">
          <p className="text-[1.5rem] font-semibold font-black align-center m-0">{Btitle}</p>
          <p>{Btext}</p>
          <button className='mt-16 bu ' onClick={handleFlip}>Voltar</button>
        </div>
      </div>
    </div>
  );
}

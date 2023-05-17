import React from 'react';
import { Revel } from '../../motion';
export default function Header() {
  return (
    <header className="OBS bg-no-repeat bg-cover bg-fundo  sm:h-auto h-[80vh] flex items-center flex-col  p-[30px] sm:pt-[0vh] sm:p-[150px] ">
      <div className="w-[100%] h-[60vh] mt-16 flex items-center flex-col bg-no-repeat bg-cover bg-fundo ">
        <div className="w-[100%] flex max-w-[1200px] items-center flex-col justify-center sm:mt-[0%] mt-[-70px] sm:flex-row ">
          <div className="flex items-start ml-0 sm:ml-[180px] mt-[40px] flex-col flex-1">
            <div className="OBS">
              <Revel>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/fabricando.png`}
                  alt="pastedImage"
                  className="w-[100%] h-[100%]"
                />
              </Revel>
            </div>
            <div className="">
              <Revel>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/digital.png`}
                  alt="pastedImage"
                  className="w-[65%] h-[100%%] ml-[80px]"
                />
              </Revel>
            </div>
          </div>
          <Revel>
            <div className=" flex-1 flex items-center text-center flex-row">
              <img
                alt="pastedImage"
                src={`${process.env.PUBLIC_URL}/assets/logoHeader.avif`}
                className="w-[100%] h-[100%] sm:w-[50%] sm:h-[50%] object-contain "
              />
            </div>
          </Revel>
        </div>
      </div>
      <div className="text-center items-center text-6xl pt-20 text-white font-serif">"A sua Empresa de
      Marketing Digital"
      </div>
    </header>
  );
}

import React from 'react';

export default function Header() {
  return (
    <header className=" bg-no-repeat bg-cover bg-fundo  sm:h-auto h-[80vh] flex items-center flex-col  p-[30px] sm:pt-[0vh] sm:p-[150px] ">
      <div className="w-[100%] h-[60vh] mt-16 flex items-center flex-col bg-no-repeat bg-cover bg-fundo ">
        <div className="w-[100%] flex max-w-[1200px] items-center flex-col justify-center sm:mt-[0%] mt-[-70px] sm:flex-row ">
          <div className="flex items-start ml-0 sm:ml-[180px] mt-[40px] flex-col flex-1">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/fabricando.PNG`}
                alt="pastedImage"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/assets/digital.PNG`}
                alt="pastedImage"
                className="w-[65%] ml-[80px]"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center text-center flex-row">
            <img
              alt="pastedImage"
              src={`${process.env.PUBLIC_URL}/assets/logoHeader.avif`}
              className="w-[100%] h-[100%] sm:w-[50%] sm:h-[50%] object-contain "
            />
          </div>
        </div>
      </div>
    </header>
  );
}


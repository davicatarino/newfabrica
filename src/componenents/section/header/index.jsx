import React from 'react';
import { Link } from 'react-scroll';
import './styles.css';

export default function Header() {
  return (
    <header className="OBS bg-no-repeat bg-cover bg-fundo sm:h-auto h-[80vh] flex items-center flex-col p-[30px] sm:p-[120px]">
      <div className="w-[100%] flex max-w-[1200px] items-center flex-col justify-center sm:mt-[0%] mt-[-70px] sm:flex-row">
        <div className="flex items-center sm:mt-[40px] mt-[90px] flex-col flex-1">
          <div>
            <h1 className="title text-[#b279de] text-6xl sm:text-8xl">Fabricando</h1>
          </div>
          <div>
            <h1 className="subTitle text-8xl sm:text-9xl brilho2 text-[#FDA5D9]">
              Digital
            </h1>
          </div>
          <div className="text-center items-center text-3xl pt-10 text-white font-serif">
            <h1>A Sua Empresa De Marketing Digital</h1>
          </div>
          <div className="flex gap-4 sm:gap-20 mt-8 flex-col sm:flex-row">
            <div className="bg-[#e51ab0]  hover:text-white hover:bg-transparent hover:border hover:border-pink-400  rounded-full px-4 scroll-link">
              <Link
                to="digital"
                smooth={true}
                duration={500}
                className="text-2xl"
              >
                360° Digital
              </Link>
            </div>
            <div className="bg-[#e51ab0]  hover:text-white hover:bg-transparent hover:border hover:border-pink-400  rounded-full px-4 scroll-link">
              <Link to="flip" smooth={true} duration={500} className="text-2xl">
                Soluções
              </Link>
            </div>
            <div className="bg-[#e51ab0] hover:text-white hover:bg-transparent hover:border hover:border-pink-400 rounded-full px-4 scroll-link">
              <Link to="team" smooth={true} duration={500} className="text-2xl">
                Equipe
              </Link>
            </div>
          </div>
        </div>

        {/*      <div className=" flex-1 flex items-center justify-center text-center flex-row">
          <img
            alt="pastedImage"
            src={`${process.env.PUBLIC_URL}/assets/logoHeader.avif`}
            className="w-[100%] h-[100%] sm:w-[40%] sm:h-[50%] object-contain "
          />
        </div> */}
      </div>
    </header>
  );
}

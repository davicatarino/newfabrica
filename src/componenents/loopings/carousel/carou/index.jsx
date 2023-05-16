import React from 'react';

const Carou = ({ index, onClick }) => {
  const websites = [
    { url: 'https://drcardenal.com.br', title: 'Dr. Cardenal' },
    { url: 'https://smartkonelevadores.com.br', title: 'Smartkon Elevadores' },
  ];

  return (
    <div
      className=" left-16 w-full h-full"
      onClick={() => onClick && onClick(index)}
    >
      <div className="relative hidden sm:block">
        <img
          src={`${process.env.PUBLIC_URL}/assets/tela.png`}
          alt="tela"
          className="object-cover w-[95%]  relative h-full ml-4 flex sm:hidden"
        />

        <iframe
          title={websites[index].title}
          src={websites[index].url}
          width="87%"
          height="81%"
          className="absolute inset-0 m-auto  bottom-12 left-12 right-4  pl-0 pr-14"
        />
      </div>
      <div className="sm:hidden w-full h-full flex content-center mr-20 ">

        <iframe
          title={websites[index].title}
          src={websites[index].url}
          width="360px"
          height="600px"

        />
      </div>
    </div>
  );
};

export default Carou;

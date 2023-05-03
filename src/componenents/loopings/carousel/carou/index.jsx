import React from 'react';

const Carou = ({ index, onClick }) => {
  const websites = [
    { url: 'https://drcardenal.com.br', title: 'Dr. Cardenal' },
    { url: 'https://smartkonelevadores.com.br', title: 'Smartkon Elevadores' },
  ];

  return (
    <div
      className="relative left-16 w-full h-full"
      onClick={() => onClick && onClick(index)}
    >
      <div className="hidden sm:block">
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
      <div className="sm:hidden w-full h-full">
        <img
          src={`${process.env.PUBLIC_URL}/assets/celular.png`}
          alt="celular"
          className="object-cover w-[360px] max-w-[230%] right-[88px]  bg-no-repeat relative h-full "
        />
        <iframe
          title={websites[index].title}
          src={websites[index].url}
          width="90%"
          height="95%"
          className="absolute inset-0 m-auto bottom-8 left-0 pt-8 pl-0 pr-0 mr-20 "
        />
      </div>
    </div>
  );
};

export default Carou;

import React from 'react';
import Flip from './flip';
import Title from '../../micros/title';
import './styles.css'
const flip = [
  {
    Ftitle: 'necessidade1',
    Btitle: 'soluçao1',
    Ftext: 'necessidade1',
    Btext: 'soluçao1',
  },
  {
    Ftitle: 'necessidade2',
    Btitle: 'soluçao2',
    Ftext: 'necessidade2',
    Btext: 'soluçao2',
  },
];
const flip2 = [
  {
    Ftitle: 'necessidade3',
    Btitle: 'soluçao3',
    Ftext: 'necessidade3',
    Btext: 'soluçao3',
  },
  {
    Ftitle: 'necessidade4',
    Btitle: 'soluçao4',
    Ftext: 'necessidade4',
    Btext: 'soluçao4',
  },
];

export default function Fliper() {
  return (
    <section className=" h-[100%] flex z-1 items-center pt-[46px] flex-col be">
      <Title title={'Qual a sua necessidade ?'} />
      <div className=" flex max-w-7xl items-center  grid-rows-4 gap-[5px] flex-col sm:gap-[40px] sm:flex-row ">
        <div className="  flex items-center mb-[32px]  gap-[40px] flex-col sm:flex-row ">
          {flip.map((card, index) => (
            <Flip
              key={index}
              Ftitle={card.Ftitle}
              Ftext={card.Ftext}
              Btitle={card.Btitle}
              Btext={card.Btext}
            />
          ))}
        </div>
        <div className="  flex items-center mb-[32px] gap-[40px] flex-col sm:flex-row ">
          {flip2.map((card, index) => (
            <Flip
              key={index}
              Btitle={card.Btitle}
              Btext={card.Btext}
              Ftitle={card.Ftitle}
              Ftext={card.Ftext}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

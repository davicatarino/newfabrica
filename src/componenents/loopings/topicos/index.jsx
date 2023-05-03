import React from 'react';
import './styles.css';
import Topic from './topic';

export default function Topicos({ topics, className }) {
  return (
    <section className={` ${className} h-[80%] `}>
      <div className="  z-1 items-center py-[46px] sm:px-[100px]   flex max-w-7xl  flex-col conteee gap-[32px] my-[32px] sm:flex-col px-[15px]">
        {topics.map((card, index) => (
          <Topic key={index} title={card.title} />
        ))}
      </div>
    </section>
  );
}

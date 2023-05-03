import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carou from './carou';
import Title from '../../micros/title';
import './styles.css'
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <Carou index={i} />,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
        }}
      >
        <ul className="flex justify-center m-0">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="beck h-full px-6 sm:px-24">
      <Title
      title={'Nossos projetos'}
      />
      <div className="container h-full mx-auto">
        <Slider {...settings}>
          <div className='h-full' >
            <Carou index={0} />
          </div>
          <div className='h-full'>
            <Carou index={1} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

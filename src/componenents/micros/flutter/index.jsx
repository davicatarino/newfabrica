import { useEffect, useState } from 'react';
import './styles.css';

export default function Flutuante() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollToTop = window.setInterval(() => {
      const position = window.pageYOffset;
      if (position > 0) {
        window.scrollTo(0, position - 50);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  };

  return (
    <div>
      <div className="whats1">
        <a
          href="https://api.whatsapp.com/send/?phone=5521979762621&text&type=phone_number&app_absent=0"
          className="z-[999]"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/iconzap.PNG`}
            alt="fale conosco pelo Whatsapp"
            title="fale conosco pelo Whatsapp"
          />
        </a>
      </div>
      {isVisible && (
        <div className="whats" onClick={scrollToTop}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/iconzap.PNG`}
            alt="fale conosco pelo Whatsapp"
            title="fale conosco pelo Whatsapp"
          />
        </div>
      )}
    </div>
  );
}

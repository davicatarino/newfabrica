import { useEffect, useState } from 'react';

export default function ScrollTop() {
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
      {isVisible && (
        <div className=" ">
          <div
            className="bg-white fixed rounded-full w-[40px] h-[40px] bottom-[30px] left-[30px] flex items-center justify-center content-center"
            onClick={scrollToTop}
          >
            <div className="fixed rounded-full w-[40px] h-[40px] bottom-[120px] left-[30px]">
              <p className="text-white">voltar ao topo</p>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

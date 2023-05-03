import React from 'react';

const Footer = () => {
  return (

    <footer className="bg-fuchsia-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/logopng.png`} alt="Logo" className="w-[80px] h-[80px]" />
        </div>
        <div>
          <p>&copy; 2023 Fabricando Digital. Todos direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

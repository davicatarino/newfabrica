import React from 'react';

const Footer = () => {
  return (

    <footer className="bg-fuchsia-900 text-white py-4">
      <div className="container mx-auto justify-between text-center items-center flex flex-col gap-10 sm:flex-row">
        <div className='flex justify-center'>
          <img src={`${process.env.PUBLIC_URL}/assets/logopng.png`} alt="Logo" className="w-[120px] h-[120px] " />
        </div>
        <div className="time" >Horários de Atendimento
          <p>De Segunda à Sábado: 08:OO às 18:00</p>
        </div>
        <div className="number">Contato
        <p>(21) 97976-2621</p></div>
        <div className="email">Email
        <p>fabricandoodigital@fabricandoodigital.com.br</p></div>
        <div>
          <p>&copy; 2023 Fabricando Digital. Todos direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

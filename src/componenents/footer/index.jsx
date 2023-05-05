import React from 'react';

const Footer = () => {
  return (

    <footer className="bg-fuchsia-900 text-white py-4">
      <div className="container mx-auto justify-between text-center flex">
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/logopng.png`} alt="Logo" className="w-[80px] h-[80px]" />
        </div>
        <div class="time" >Horários de Atendimento
          <p>De Segunda à Sábado: 08:OO às 18:00</p>
        </div>
        <div class="number">Contato
        <p>(21) 97976-2621</p></div>
        <div class="email">Email
        <p>fabricandoodigital@fabricandoodigital.com.br</p></div>
        <div>
          <p>&copy; 2023 Fabricando Digital. Todos direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

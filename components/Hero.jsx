import React, { useState } from 'react';
import ModalOrderForm from './ModalOrderForm';

export default function Hero({ id }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section
      id={id}
      className="min-h-screen h-full flex items-center justify-center px-4 snap-start"
      style={{
        background: 'linear-gradient(135deg, #cb425c 0%, #2c1a19 100%)',
      }}
    >
      <div className="max-w-4xl w-full flex flex-col items-center text-center relative">
        <div className="relative flex flex-col items-center mb-8">
          <img
            src="/main.png"
            alt="БАД продукт"
            className="w-64 md:w-80 mx-auto z-10 drop-shadow-2xl"
            style={{ objectFit: 'contain' }}
          />
          {/* Пьедестал */}
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-72 h-10 md:w-96 md:h-12 bg-[#e8e7e9] rounded-b-full shadow-lg z-0"
            style={{ filter: 'blur(2px)', opacity: 0.85 }}
          ></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-shadow-xlg">
          "Gijja Stop"
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-white">
          Паразитларга қарши курашувчи самарали восита!
        </p>
        <button
          className="px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 cursor-pointer"
          style={{ backgroundColor: '#e8e7e9', color: '#2c1a19' }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#cb425c';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#e8e7e9';
            e.currentTarget.style.color = '#2c1a19';
          }}
          onClick={() => setModalOpen(true)}
        >
          Буюртма бериш
        </button>
        <ModalOrderForm
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
        <marquee
          speed="fast"
          className="pt-4 text-lg md:text-2xl mb-8 text-white italic"
        >
          Хозирок буюртма беринг ва 50% чегирмадан фойдаланинг!
        </marquee>
      </div>
    </section>
  );
}

export default function Footer({ id }) {
  return (
    <footer
      id={id}
      className="min-h-screen h-full flex items-center justify-center px-4 snap-start"
      style={{ backgroundColor: '#2c1a19', color: '#e8e7e9' }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-[#2c1a19] p-6 md:p-10 rounded-2xl shadow-lg ">
        {/* Фото препарата слева */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto mb-6 md:mb-0">
          <img
            src="/main.png"
            alt="Препарат"
            className="w-60 h-60 md:w-60 md:h-60 object-contain rounded-xl shadow border border-[#e8e7e9] bg-white"
          />
        </div>
        {/* Текст по центру */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-2 gap-1">
          <p className="text-2xl md:text-3xl font-bold text-[#e8e7e9] mb-2">
            🌿 biolong — Сифатли ва премиум препаратлар
          </p>
          <p className="text-lg md:text-xl text-[#e8e7e9]">
            ❤️ 20 000+ одам соғлом ҳаётни танлади
          </p>
          <p className="text-lg md:text-xl text-[#e8e7e9]">
            🌱 Синовдан ўтган таркиблар
          </p>
          <p className="text-lg md:text-xl text-[#e8e7e9] mt-2">
            📞 +998 55 515 77 78
          </p>
          <p className="text-lg md:text-xl text-[#e8e7e9]">
            📞 +998 55 510 77 78
          </p>
        </div>
        {/* Форма заявки справа */}
        <div className="w-full md:w-[320px] flex flex-col items-center bg-white/90 rounded-xl shadow p-5">
          <h3 className="text-lg font-bold text-[#cb425c] mb-2">
            Биз билан боғланинг
          </h3>
          <form className="w-full flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Исмингиз"
              required
              className="w-full px-3 py-2 text-[#2c1a19] rounded-lg border border-gray-300 focus:border-[#cb425c] focus:outline-none text-base"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон ракамингиз"
              required
              pattern="[+0-9\s()-]{7,20}"
              className="w-full px-3 py-2 text-[#2c1a19] rounded-lg border border-gray-300 focus:border-[#cb425c] focus:outline-none text-base"
            />
            <button
              type="submit"
              className="w-full py-2 mt-2 rounded-lg bg-[#cb425c] text-white font-bold text-base hover:bg-[#a82e45] transition-colors"
            >
              Буюртма бериш
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

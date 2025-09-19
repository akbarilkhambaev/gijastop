import { motion } from 'framer-motion';
export default function Instructions({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen h-full flex items-center justify-center px-4 snap-start overflow-hidden relative"
      style={{ backgroundColor: '#e8e7e9', position: 'relative' }}
    >
      {/* Фоновое изображение */}
      <img
        src="/forbg.png"
        alt="Фон"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none select-none"
        aria-hidden="true"
      />
      <motion.div
        className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Биз билан боғланинг
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-6 text-center">
          Биз билан богланиш учун шаклни тўлдиринг ва биз сиз билан тез орада
          алоқа қиламиз!
        </p>
        <form className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Исмингиз"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#cb425c] focus:outline-none text-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон ракамингиз"
            required
            pattern="[+0-9\s()-]{7,20}"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#cb425c] focus:outline-none text-lg"
          />
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-lg bg-[#cb425c] text-white font-bold text-lg hover:bg-[#a82e45] transition-colors"
          >
            Буюртма бериш
          </button>
        </form>
      </motion.div>
    </section>
  );
}

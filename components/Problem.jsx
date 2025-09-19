import { delay, motion } from 'framer-motion';

export default function Problem({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen h-full flex items-center justify-center px-4 snap-start"
      style={{ backgroundColor: '#e8e7e9' }}
    >
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Нима учун айнан "Gijja Stop"?
        </h2>
        {/* Ховер-эффект теперь реализован через whileHover во framer-motion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
          {[
            {
              img: '/bad-breath.png',
              alt: 'ОҒИЗ САСИШИ',
              title: 'ОҒИЗ САСИШИ',
              text: 'Огиздан ёкимсиз хид келиши атрофдагилар орасида ноқулайлик туғдиради.',
            },
            {
              img: '/insomnia.png',
              alt: 'УЙҚУСИЗЛИК',
              title: 'УЙҚУСИЗЛИК',
              text: 'Уйкусизлик, кун давомида чарчаш ва асабийлик.',
            },
            {
              img: '/anaphylaxis.png',
              alt: 'АЛЛЕРГИЯ',
              title: 'АЛЛЕРГИЯ',
              text: 'Аллергия, терининг қичиши ва қизариши.',
            },
            {
              img: '/lethargy.png',
              alt: 'ХОЛСИЗЛИК',
              title: 'ХОЛСИЗЛИК',
              text: 'Холсизлик, ишга бўлган қизиқишнинг йўқолиши.',
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              className="problem-card bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{
                y: -12,
                scale: 1.05,
                boxShadow:
                  '0 12px 32px 0 rgba(43, 66, 89, 0.18), 0 2px 8px 0 #cb425c44',
                zIndex: 2,
              }}
              whileHoverTransition={{ type: 'tween', duration: 0, delay: 0 }}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-16 h-16 mb-2 object-contain"
              />
              <h3 className="font-semibold text-lg mb-1 text-[#cb425c]">
                {item.title}
              </h3>
              <p className="text-[#2c1a19] text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <p className="text-gray-600 text-lg md:text-xl">
          Куидаги муаммолардан бирортаси сизга танишми? Агар шундай бўлса,
          "Gijja Stop" сиз учун мўлжалланган.
        </p>
      </div>
    </section>
  );
}

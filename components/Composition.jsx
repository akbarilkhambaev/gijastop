import { motion } from 'framer-motion';
export default function Composition({ id }) {
  const symptoms = [
    { icon: 'bad-breath.png', text: 'Оғиздан ёқимсиз ҳид келиши' },
    { icon: 'allergy.png', text: 'Аллергия (тошмалар, кўз ёшланиши, тумов)' },
    {
      icon: 'seasonal.png',
      text: 'Терида тошмалар пайдо бўлиши, унинг қизариши',
    },
    { icon: 'anaphylaxis.png', text: 'Тез-тез шамоллаш, ангина, бурун битиши' },
    {
      icon: 'lack-of-motivation.png',
      text: 'Сурункали чарчоқ (чарчаб қолиш, холсизлик)',
    },
    { icon: 'headache.png', text: 'Тез-тез бош оғриқлари' },
    { icon: 'diarrhea.png', text: 'Қабзият ёки ич суриши' },
    { icon: 'pain-in-joints.png', text: 'Бўғим ва мушаклар оғриши' },
    { icon: 'stress.png', text: 'Асабийчанлик, уйқу ва иштаҳа бузилиши' },
  ];

  return (
    <section
      id={id}
      className="relative min-h-screen h-full flex items-center justify-center px-4 py-4 snap-start overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #e8e7e9 0%, #cb425c 100%)',
      }}
    >
      {/* SVG Wave Top */}
      <div
        className="absolute top-0 left-0 w-full -z-10"
        style={{ lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[80px] md:h-[120px]"
        >
          <path
            fill="#cb425c"
            fillOpacity="0.18"
            d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,117.3C672,107,768,85,864,80C960,75,1056,85,1152,90.7C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Вужудингизда паразитлар ин қургани ҳақида дарак берувчи илк
          симптомлар:
        </h2>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#cb425c]/60 scrollbar-track-[#e8e7e9]">
          {symptoms.map((item, i) => (
            <motion.div
              key={i}
              className="min-w-[270px] max-w-[300px] min-h-[120px] h-full bg-white rounded-2xl shadow-lg px-6 py-5 flex items-center gap-6 border-l-8 border-[#cb425c]"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  '0 12px 32px 0 rgba(43, 66, 89, 0.18), 0 2px 8px 0 #cb425c44',
                zIndex: 2,
              }}
              whileHoverTransition={{ type: 'tween', duration: 0 }}
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#e8e7e9] mr-2 overflow-hidden">
                <img
                  src={`/composition/${item.icon}`}
                  alt="icon"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-md md:text-md text-[#2c1a19] text-left">
                {item.text}
              </span>
            </motion.div>
          ))}
          <p className="w-full text-lg text-center text-[#2c1a19] mt-4 px-4 shadow-lg">
            Ҳеч бўлмаса битта симптом борлиги - 99% эҳтимоллик билан айтиш
            мумкинки,сизнинг танангизда паразитлар яшаяпти. Уларга қарши зудлик
            билан кураш бошланг!
          </p>
        </div>
      </div>
      {/* SVG Wave Bottom */}
    </section>
  );
}

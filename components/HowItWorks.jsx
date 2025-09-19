import { motion } from 'framer-motion';
export default function HowItWorks({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen h-full flex items-center justify-center px-4 snap-start overflow-hidden relative"
    >
      {/* Animated gradient background */}
      <style>{`
        .howitworks-animated-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(270deg, #e1c3d1, #cb425c, #e1c3d1, #cb425c, #e1c3d1);
          background-size: 400% 400%;
          animation: howitworksGradientMove 12s ease-in-out infinite;
          opacity: 0.85;
        }
        @keyframes howitworksGradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <div className="howitworks-animated-bg" />
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
        <motion.div
          className="flex-shrink-0 flex items-center justify-center mb-6 md:mb-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/main.png"
            alt="Препарат"
            className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-xl shadow-md border border-[#e8e7e9] bg-white"
          />
        </motion.div>
        <motion.div
          className="flex-1 text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            АСЛ ВОСИТА
          </h2>
          <p className="text-[#2c1a19] text-lg md:text-xl mb-4">
            <b>Бу "Gijja Stop"</b> — паразитларга қарши восита!
          </p>
          <p className="text-[#2c1a19] text-lg md:text-xl mb-2">
            У шувоқ ўтлари, Сеннол, қоялардан кўчириб олинадиган оқ мўмиё,
            амаранта уруғлари ва яна 20 хил ёрдамчи компонентлардан иборат.
            Gijja Stop бизнинг Паразитология клиникамизда ва мустақил ёш олимлар
            гуруҳи иштирокида яратилган. Пандемия даврида биз хитойга
            махсулотимизни юборгандик, кейинчалик улар тасдиқлашган - Gijja Stop
            Коронавирусни хам ўлдиришга қодир махсулот экан тушунябсизми? Биз
            паразитларга қарши яна йигирматача восита устида ишладик. Аммо
            изланишлар вақтида айнан "Gijja Stop" энг самарали экани аён бўлди.
            Gijja Stop ўсимлик экстрактларининг хавфсиз ва улкан бирикмасидан
            иборат бўлиб, у ичилгач паразитлар, вируслар ва микроблар фаолиятига
            салбий таъсир кўрсатади. Ғарб мамлакатлари Gijja Stopни қарийб
            исталган баҳода сотиб олишга тайёр.
          </p>
          <p className="text-[#2c1a19] text-lg md:text-xl">
            Бунинг устига, ғарбий харидорлар учун экспорт устама нарх (Gijja
            Stop хорижга ўз нархидан ўн баробар қиммат сотилади) уни Ўзбекистон
            ичида таннархидан арзон баҳоларда сотишимизга имкон бермоқда.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

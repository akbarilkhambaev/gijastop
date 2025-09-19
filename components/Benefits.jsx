import { motion } from 'framer-motion';

export default function Benefits({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen h-full flex items-center justify-center px-4 snap-start"
      style={{ backgroundColor: '#e8e7e9' }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Экспертлар фикри
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 bg-white rounded-xl shadow-md p-8">
          {/* Левая колонка: фото и биография */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 md:self-start">
            <div className="w-full flex justify-center md:justify-center">
              <img
                src="/ekspert.jpg"
                alt="Эксперт"
                className="w-60 h-60 object-cover rounded-full border-4 border-[#cb425c] shadow-md mb-2"
              />
            </div>
            <div className="bg-[#e8e7e9] rounded-xl px-4 py-2 text-xs text-[#2c1a19] shadow-inner border border-[#cb425c]/20 w-full text-center md:text-left mt-2">
              <span className="font-semibold text-[#cb425c] block mb-1">
                Шерзод Абдуллаев
              </span>
              Тиббиёт ва биологик фанлари номзоди — Mountain Herbs номли Тиббий
              паразитология ва Gijja Stop клиникаси раҳбари.
              <br />
              Молекуляр паразитологияга оид 30 йиллик тажрибага эга.
              <br />
              «Кимёвий ва биологик хавфсизлик» дастури доирасида 11 шартнома ва
              ИНТАС нинг лейшманиозларни молекуляр ташхислаш бўйича лойиҳалар
              ижрочиси.
              <br />
              Санкт-Петербургда таҳсил олган, Германия, Жанубий Корея, Туркия ва
              Чехияда проктолог сифатида фаолият юритган.
              <br />
              <span className="italic text-[10px] text-[#cb425c]">
                Иш тажрибаси: 30 йил
              </span>
            </div>
          </div>
          {/* Правая колонка: интервью */}
          <motion.div
            className="text-sm text-[#2c1a19] text-left space-y-2 w-full md:w-2/3 md:max-w-2xl md:pl-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              <span className="font-semibold text-[#cb425c]">Мухбир:</span>{' '}
              Шерзод Абдуллаев, ассалому алайкум! Бош саволдан бошласам. Нега
              ҳозир Мамлакатимизда паразитлар билан зарарланиш кўпайиб кетди?
            </p>
            <p>
              <span className="font-semibold text-[#cb425c]">
                Шерзод Абдуллаев:
              </span>{' '}
              Ҳа, бунга сабаб - ёмон экология, сунъий овқатлар ва ҳоказолардир.
            </p>
            <p>
              <span className="font-semibold text-[#cb425c]">Мухбир:</span>{' '}
              Шерзод Абдуллаев, паразитлар билан зарарланиш ва оғиздан ёқимсиз
              ҳид келиши ўртасидаги боғлиқликка оид тадқиқот маълумотлари
              аниқми?
            </p>
            <p>
              <span className="font-semibold text-[#cb425c]">Мухбир:</span>{' '}
              Одатда паразит деганда оддий гижжаларни назарда тутишади, уларнинг
              оғиздан ёқимсиз ҳид келишига ва ҳатто инсон ўлимига қандай дахли
              бор?
            </p>
            <p>
              <span className="font-semibold text-[#cb425c]">
                Шерзод Абдуллаев:
              </span>{' '}
              Аслини олганда, инсон паразитлари - фақат гижжалар деб ҳисоблаш
              катта хато. Турли аъзоларда яшайдиган турли-туман паразитлар сони
              беҳисоб. Қолаверса, гижжалар ҳам, аниқроғи - гельминтлар, острица
              ва оскаридалар ўта хавфли. Улар ичакларга шикаст етказиб, уларнинг
              чиришига ва алал-оқибат ўлимга олиб келади. Боз устига, ҳатто
              гельминтларни аниқлаш ва йўқ қилиш бирмунча мураккаб иш.
            </p>
            <p>
              Улар билан бир қаторда, жигар, мия, ўпка, қон, ошқозонда яшайдиган
              минглаб паразитлар ҳам бор. Уларнинг қарийб ҳаммаси ўлимга олиб
              келади. Уларнинг бир қисми тажовузкорона таъсир қилиб, организмни
              ишдан чиқаради. Бир қисми эса сездирмай фаолият кўрсатади ва
              бора-бора шунақа кўпайиб кетадики, инсон бунга чидаёлмай ҳалок
              бўлади.
            </p>
            <p>
              Жигар, мия, ўпка, қон, ошқозонда яшайдиган минглаб паразитлар ҳам
              бор. Уларнинг қарийб ҳаммаси ўлимга олиб келади. Ҳаммаси одатда
              оғиздан ёқимсиз ҳид келишидан бошланади.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

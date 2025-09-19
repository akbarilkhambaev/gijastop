import React from 'react';
import { motion } from 'framer-motion';
export default function Reviews({ id }) {
  const results = [
    { text: 'Гельминтоз ва тухумлар йўқ қилиниши', percent: 100 },
    { text: 'Меъда ости бези фаолияти ва ҳолати яхшиланиши', percent: 80 },
    { text: 'Аллергик дерматит бартараф этилиши', percent: 90 },
    { text: 'Гастрит, яра, диарея бартараф этилиши', percent: 90 },
    { text: 'Камқонлик бартараф этилиши', percent: 100 },
    { text: 'Оғиздан ёқимсиз ҳид келишининг бартараф этилиши', percent: 100 },
  ];

  return (
    <section
      id={id}
      className="h-screen flex items-center justify-center px-4 snap-start overflow-auto"
      style={{
        background: 'linear-gradient(135deg, #e8e7e9 0%, #e8e7e9 100%)',
      }}
    >
      <motion.div
        className="w-full max-w-6xl bg-white/80 rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-[#cb425c]"
        initial={{ opacity: 0, scale: 0.7, y: -120 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.35 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#cb425c] text-center">
          Тадкикотлар натижаси
        </h2>
        <div className="overflow-x-auto overflow-x-hidden overflow-y-hidden">
          <table className="min-w-full text-lg md:text-xl text-[#2c1a19]">
            <thead>
              <tr>
                <th className="py-3 px-2 text-center font-semibold w-8"></th>
                <th className="py-3 px-2 text-left font-semibold">Натижа</th>
                <th className="py-3 px-2 text-center font-semibold">%</th>
                <th className="py-3 px-2 text-left font-semibold">
                  Курсаткичлар
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, i) => (
                <motion.tr
                  key={i}
                  className="border-b last:border-b-0"
                  initial={{ opacity: 0, scale: 0.7, y: -80 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    type: 'spring',
                    bounce: 0.25,
                    delay: i * 0.08,
                  }}
                >
                  <td className="py-3 px-2 align-middle text-center text-green-600 text-xl">
                    ✔
                  </td>
                  <td className="py-3 px-2 align-middle">{res.text}</td>
                  <td className="py-3 px-2 align-middle text-center font-bold text-[#cb425c]">
                    {res.percent}%
                  </td>
                  <td className="py-3 px-2 align-middle w-[120px] min-w-[80px]">
                    <div className="w-full h-4 bg-[#e8e7e9] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#cb425c] transition-all duration-700"
                        style={{ width: `${res.percent}%` }}
                      />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}

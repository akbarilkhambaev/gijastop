import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalOrderForm({ open, onClose }) {
  if (!open) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
          initial={{ scale: 0.85, y: 60, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.85, y: 60, opacity: 0 }}
          transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#cb425c] text-white hover:bg-[#a82e45] transition-colors focus:outline-none"
            aria-label="Закрыть"
            type="button"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6 6l8 8M6 14L14 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center text-[#cb425c]">
            Буюртма бериш
          </h2>
          <form className="flex flex-col gap-4">
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
              Жўнатиш
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

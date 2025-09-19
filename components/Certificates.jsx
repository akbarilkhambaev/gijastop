import React from 'react';
import { motion } from 'framer-motion';

export default function Certificates({ id }) {
  const voices = [
    {
      name: 'Гульбахор Рашидова',
      file: '/audio/Гульбахор Рашидова.ogg',
      avatar: '/avatars/гулбахор_рашидова.png',
    },
    {
      name: 'Одина Аманбаева',
      file: '/audio/Одина Аманбаева.ogg',
      avatar: '/avatars/одина_аманбаева.png',
    },
    {
      name: 'Паризода Алимова',
      file: '/audio/Паризода Алимова.ogg',
      avatar: '/avatars/паризода_алимова.png',
    },
    {
      name: 'Сардор Тилляев',
      file: '/audio/Сардор Тилляев.ogg',
      avatar: '/avatars/сардор_тилляев.jpg',
    },
  ];

  // Кастомный аудиоплеер для карточки
  function VoicePlayer({ src }) {
    const audioRef = React.useRef(null);
    const [playing, setPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [duration, setDuration] = React.useState(0);

    React.useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;
      const update = () => setProgress(audio.currentTime);
      const setDur = () => setDuration(audio.duration || 0);
      audio.addEventListener('timeupdate', update);
      audio.addEventListener('loadedmetadata', setDur);
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('timeupdate', update);
        audio.removeEventListener('loadedmetadata', setDur);
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);

    React.useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;
      if (playing) audio.play();
      else audio.pause();
    }, [playing]);

    const toggle = () => setPlaying((p) => !p);
    const onBarClick = (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.nativeEvent.clientX - rect.left;
      const percent = x / rect.width;
      const seek = percent * duration;
      audioRef.current.currentTime = seek;
      setProgress(seek);
    };

    function formatTime(t) {
      if (!t || isNaN(t)) return '0:00';
      const m = Math.floor(t / 60);
      const s = Math.floor(t % 60)
        .toString()
        .padStart(2, '0');
      return `${m}:${s}`;
    }

    return (
      <div className="w-full flex flex-col items-center gap-2">
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          className="hidden"
        />
        <div className="flex items-center gap-3 w-full">
          <button
            type="button"
            onClick={toggle}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#cb425c] text-white hover:bg-[#a82e45] transition-colors focus:outline-none"
            aria-label={playing ? 'Пауза' : 'Воспроизвести'}
          >
            {playing ? (
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
              >
                <rect
                  x="6"
                  y="5"
                  width="4"
                  height="14"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="14"
                  y="5"
                  width="4"
                  height="14"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 5v14l11-7z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
          <div
            className="flex-1 cursor-pointer"
            onClick={onBarClick}
          >
            <div className="w-full h-2 bg-[#e8e7e9] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#cb425c] transition-all duration-200"
                style={{
                  width: duration ? `${(progress / duration) * 100}%` : '0%',
                }}
              />
            </div>
          </div>
          <span className="text-xs text-gray-700 w-auto text-right">
            {formatTime(progress)} / {formatTime(duration)}
          </span>
        </div>
      </div>
    );
  }
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center px-4 py-8 snap-start overflow-auto"
      style={{ backgroundColor: '#e8e7e9' }}
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#cb425c]">
          Мижозларимиз фикрлари
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {voices.map((v, i) => (
            <motion.div
              key={i}
              className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-[#cb425c]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                type: 'spring',
                bounce: 0.25,
              }}
            >
              <img
                src={v.avatar}
                alt={v.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#cb425c] bg-white shadow mb-3"
                loading="lazy"
              />
              <span className="text-lg font-semibold text-[#2c1a19] mb-4 text-center">
                {v.name}
              </span>
              <VoicePlayer src={v.file} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

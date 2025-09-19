import Image from 'next/image';

export default function PreLoader({ id }) {
  return (
    <div
      id={id}
      className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black"
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Логотип с анимацией */}
        <div className="relative animate-bounce">
          <Image
            src="/logo.png"
            alt="Logo"
            width={350}
            height={350}
            className="drop-shadow-lg"
          />
          {/* Свечение вокруг */}
          <div className="absolute -inset-2 rounded-full blur-2xl bg-gradient-to-r from-green-300 to-emerald-100 opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

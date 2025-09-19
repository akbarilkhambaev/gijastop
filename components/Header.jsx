import Image from 'next/image';

export default function Header({ id }) {
  return (
    <header
      id={id}
      className="text-center w-full h-[150px] flex items-center justify-center snap-start"
    >
      <div className="relative flex items-center justify-center">
        <span className="wave wave1"></span>
        <Image
          src="/logo.png"
          alt="Logo"
          width={110}
          height={110}
          className="heartbeat relative z-10"
        />
      </div>
    </header>
  );
}

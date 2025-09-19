'use client';
import { useEffect, useState } from 'react';

export default function SectionNav({ sections }) {
  const [active, setActive] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      {sections.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`w-3 h-3 rounded-full transition-all ${
            active === id
              ? 'bg-red-400 scale-125'
              : 'bg-gray-400 hover:bg-red-400'
          }`}
        />
      ))}
    </div>
  );
}

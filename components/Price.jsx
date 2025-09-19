export default function Price({ id }) {
  return (
    <section
      id={id}
      className="h-screen flex items-center justify-center px-4 snap-start"
      style={{ backgroundColor: '#cb425c' }}
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Цена</h2>
        <p className="text-lg md:text-xl mb-6">1 упаковка — 1490 ₽</p>
        <button
          className="px-6 py-3 rounded-lg font-semibold text-lg transition"
          style={{ backgroundColor: '#e8e7e9', color: '#2c1a19' }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#cb425c';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#e8e7e9';
            e.currentTarget.style.color = '#2c1a19';
          }}
        >
          Купить сейчас
        </button>
      </div>
    </section>
  );
}

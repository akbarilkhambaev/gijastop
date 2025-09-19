export default function Faq({ id }) {
  return (
    <section
      id={id}
      className="h-screen flex items-center justify-center px-4 snap-start"
      style={{ backgroundColor: '#e8e7e9' }}
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Частые вопросы</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          ❓ Когда ждать эффект? ✅ Первые результаты заметны уже через неделю
          регулярного приёма.
        </p>
      </div>
    </section>
  );
}

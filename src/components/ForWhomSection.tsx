import Icon from "@/components/ui/icon";

const SEGMENTS = [
  {
    icon: "Scissors",
    title: "Бьюти-мастера и микробизнес",
    pain: "Расписание заполнено только наполовину, каждый клиент на счету, бюджет ограничен.",
    solution: "Запускаем Авито-связку — каждую заявку видите в CRM. CPL от 300 до 700 ₽.",
    channels: "Авито, MAX",
    cpl: "300–700 ₽",
  },
  {
    icon: "Sparkles",
    title: "Студии и салоны красоты",
    pain: "Мастеров несколько, но окна в расписании остаются. Трафик с соцсетей нестабилен.",
    solution: "Системная реклама в ВКонтакте + Яндекс Картах. Минимум 30 заявок по договору.",
    channels: "ВКонтакте, Яндекс Карты",
    cpl: "500–1 200 ₽",
  },
  {
    icon: "Stethoscope",
    title: "Косметологические центры и клиники",
    pain: "Аппаратные процедуры требуют лицензии — реклама блокируется. Долгий цикл прогрева клиента.",
    solution: "Запускаем рекламу по авторской методике согласования или с нашей лицензией. ВКонтакте + Яндекс с прогревом.",
    channels: "Яндекс Директ, ВКонтакте",
    cpl: "1 000–3 500 ₽",
  },
  {
    icon: "Building2",
    title: "Многопрофильные медицинские центры",
    pain: "Несколько направлений — сложно охватить всё, непонятно куда вкладывать бюджет.",
    solution: "Системная аналитика по каждому направлению: CPL, CR до записи, ROMI, ROAS. Яндекс Директ + Карты.",
    channels: "Яндекс Директ, Карты",
    cpl: "800–2 500 ₽",
  },
];

export default function ForWhomSection() {
  return (
    <section id="for-whom" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest brand-text mb-3 block">
            Для кого
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Работаем с бьюти и медициной
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            У каждого сегмента — своя воронка, свои площадки, свои метрики.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SEGMENTS.map((seg) => (
            <div
              key={seg.title}
              className="rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "hsl(var(--brand) / 0.08)" }}
              >
                <Icon name={seg.icon} size={24} className="brand-text" />
              </div>

              <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-3">
                {seg.title}
              </h3>

              <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                <span className="font-medium text-gray-700">Боль:</span> {seg.pain}
              </p>

              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                <span className="font-semibold brand-text">Решение:</span> {seg.solution}
              </p>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                <span className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                  {seg.channels}
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "hsl(var(--brand-accent) / 0.15)",
                    color: "hsl(var(--brand))",
                  }}
                >
                  CPL {seg.cpl}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
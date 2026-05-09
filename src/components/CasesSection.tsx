import Icon from "@/components/ui/icon";

const CASES = [
  {
    niche: "Студия наращивания ресниц",
    city: "Москва",
    channel: "ВКонтакте",
    task: "Заполнить расписание мастера, снизить зависимость от сарафанного радио.",
    result: {
      cpl: "420 ₽",
      leads: "47 заявок",
      cr: "CR до записи 68%",
      period: "за 30 дней",
    },
    label: "Базовый",
  },
  {
    niche: "Косметологическая клиника",
    city: "Санкт-Петербург",
    channel: "Яндекс Директ",
    task: "Реклама аппаратной косметологии с лицензионными ограничениями. Нужен стабильный поток первичных.",
    result: {
      cpl: "1 850 ₽",
      leads: "38 заявок",
      cr: "CR до записи 55%",
      period: "за 30 дней",
    },
    label: "Под ключ",
  },
  {
    niche: "Сеть салонов красоты (3 точки)",
    city: "Казань",
    channel: "ВКонтакте + Авито",
    task: "Запуск рекламы для трёх точек одновременно, контроль CPL по каждой локации отдельно.",
    result: {
      cpl: "680 ₽",
      leads: "112 заявок",
      cr: "CR до записи 60%",
      period: "за 30 дней",
    },
    label: "Под ключ",
  },
  {
    niche: "Многопрофильный медицинский центр",
    city: "Екатеринбург",
    channel: "Яндекс Директ + Карты",
    task: "Привлечение первичных пациентов по 5 направлениям. Оценить эффективность каждого.",
    result: {
      cpl: "1 320 ₽",
      leads: "84 заявки",
      cr: "CR до записи 62%",
      period: "за 30 дней",
    },
    label: "Базовый",
  },
];

export default function CasesSection() {
  return (
    <section id="cases" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest brand-text mb-3 block">
            Кейсы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Примеры результатов
          </h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            Данные ниже — структурные примеры. Реальные кейсы предоставляем на консультации под NDA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CASES.map((c) => (
            <div
              key={c.niche}
              className="rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="font-bold font-montserrat text-gray-900 text-lg mb-1">{c.niche}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Icon name="MapPin" size={13} />
                    {c.city}
                    <span className="text-gray-300">·</span>
                    <Icon name="Megaphone" size={13} />
                    {c.channel}
                  </div>
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full shrink-0"
                  style={{
                    background: "hsl(var(--brand-accent) / 0.15)",
                    color: "hsl(var(--brand))",
                  }}
                >
                  {c.label}
                </span>
              </div>

              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">Задача</p>
                <p className="text-sm text-gray-600 leading-relaxed">{c.task}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-5 border-t border-gray-100">
                <div className="bg-gray-50 rounded-xl px-4 py-3">
                  <p className="text-xs text-gray-400 mb-0.5">CPL</p>
                  <p className="font-bold font-montserrat brand-text">{c.result.cpl}</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-3">
                  <p className="text-xs text-gray-400 mb-0.5">Заявок</p>
                  <p className="font-bold font-montserrat brand-text">{c.result.leads}</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-3">
                  <p className="text-xs text-gray-400 mb-0.5">Конверсия</p>
                  <p className="font-bold font-montserrat text-gray-800 text-sm">{c.result.cr}</p>
                </div>
                <div className="bg-gray-50 rounded-xl px-4 py-3">
                  <p className="text-xs text-gray-400 mb-0.5">Период</p>
                  <p className="font-bold font-montserrat text-gray-800 text-sm">{c.result.period}</p>
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4 italic">
                [Пример. Замените на реальный кейс с данными клиента]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    num: "01",
    title: "Бриф и аудит",
    desc: "Изучаем бизнес, нишу, конкурентов и текущие рекламные материалы. Согласовываем KPI: целевой CPL, плановое количество заявок, CR до записи.",
  },
  {
    num: "02",
    title: "Упаковка",
    desc: "Готовим посадочные страницы, офферы, визуальные материалы. Если нужен сайт для Яндекса — создаём его. Всё под вашу нишу, не шаблонно.",
  },
  {
    num: "03",
    title: "Запуск рекламы",
    desc: "Настраиваем кампании на выбранных площадках. Для ниш с лицензионной спецификой используем авторскую методику согласования объявлений.",
  },
  {
    num: "04",
    title: "Обработка заявок",
    desc: "На тарифе «Под ключ» наш менеджер принимает звонки и записывает клиентов в вашу CRM. Заявки не теряются — каждый контакт фиксируется.",
  },
  {
    num: "05",
    title: "Аналитика",
    desc: "Еженедельный мониторинг CPL, CR до записи, ROMI, ROAS по каждому каналу. Видите, откуда приходят клиенты и сколько они стоят.",
  },
  {
    num: "06",
    title: "Отчёт и оптимизация",
    desc: "Ежемесячный отчёт с конкретными цифрами. Отключаем неэффективные связки, масштабируем рабочие. Прозрачно и чётко.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="py-20 px-6" style={{ background: "hsl(var(--brand) / 0.03)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest brand-text mb-3 block">
            Процесс
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Как мы работаем
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Системно, прозрачно и с отчётностью на каждом этапе.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                className="text-5xl font-black font-montserrat mb-4 leading-none"
                style={{ color: i < 3 ? "hsl(var(--brand) / 0.12)" : "hsl(var(--brand-accent) / 0.25)" }}
              >
                {step.num}
              </div>
              <h3 className="text-lg font-bold font-montserrat text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>

              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200" />
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
          style={{ background: "hsl(var(--brand))" }}
        >
          <div className="text-white flex-1">
            <p className="font-semibold text-lg font-montserrat mb-1">
              Работаем по договору с фиксированными гарантиями
            </p>
            <p className="text-white/70 text-sm">
              Не выполнили KPI по заявкам — продолжаем работу за свой счёт до достижения результата.
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="shrink-0 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ background: "hsl(var(--brand-accent))", color: "hsl(var(--brand))" }}
          >
            Обсудить проект
          </button>
        </div>
      </div>
    </section>
  );
}

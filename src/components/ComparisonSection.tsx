const ROWS = [
  { label: "Договор и гарантии", freelancer: "Редко, устно", us: "Всегда, письменно", agency: "Договор есть, KPI размыты" },
  { label: "Гарантия заявок", freelancer: "Нет", us: "Минимум 30 по договору", agency: "Трафик, не заявки" },
  { label: "Полный цикл до CRM", freelancer: "Только реклама", us: "Реклама + обработка заявок", agency: "Только трафик" },
  { label: "Погружение в нишу", freelancer: "Поверхностное", us: "Глубокое, 3+ года в нише", agency: "Шаблонный подход" },
  { label: "Лицензионная специфика", freelancer: "Не умеет / отказывает", us: "Авторская методика / своя лицензия", agency: "Зависит от агентства" },
  { label: "Скорость запуска", freelancer: "Быстро (но хаотично)", us: "3–5 рабочих дней", agency: "2–4 недели" },
  { label: "Аналитика", freelancer: "Базовая или нет", us: "CPL, CR, ROMI, ROAS", agency: "Есть, но в отдельном кабинете" },
  { label: "Доступность", freelancer: "Высокая", us: "Высокая", agency: "Низкая, менеджер в очереди" },
  { label: "Стоимость", freelancer: "Низкая", us: "Средняя, обоснованная", agency: "Высокая" },
];

export default function ComparisonSection() {
  return (
    <section id="why-us" className="py-20 px-6" style={{ background: "hsl(var(--brand) / 0.03)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest brand-text mb-3 block">
            Почему АЗИмпакт
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Золотая середина рынка
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Системность крупного агентства при доступности фрилансера. Без компромиссов по результату.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "hsl(var(--brand) / 0.04)" }}>
                <th className="text-left px-6 py-4 font-semibold text-gray-500 w-40">Параметр</th>
                <th className="text-center px-6 py-4 font-semibold text-gray-500">Фрилансер</th>
                <th
                  className="text-center px-6 py-4 font-bold text-white rounded-t-xl"
                  style={{ background: "hsl(var(--brand))" }}
                >
                  АЗИмпакт
                </th>
                <th className="text-center px-6 py-4 font-semibold text-gray-500">Крупное агентство</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}>
                  <td className="px-6 py-4 font-medium text-gray-700">{row.label}</td>
                  <td className="px-6 py-4 text-center text-gray-500">{row.freelancer}</td>
                  <td
                    className="px-6 py-4 text-center font-semibold"
                    style={{ color: "hsl(var(--brand))", background: "hsl(var(--brand) / 0.04)" }}
                  >
                    {row.us}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-500">{row.agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

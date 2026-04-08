const services = [
  {
    icon: "✅",
    title: "Упаковка сообщества",
    description:
      "Сразу видно, кто вы и какие услуги оказываете. Понятная навигация, которая превращает случайного гостя в клиента.",
  },
  {
    icon: "✅",
    title: "Таргет ВКонтакте",
    description:
      "Не «скидка 50% на первое посещение», а уникальный оффер, который отстраняет вас от конкурентов и привлекает целевую аудиторию.",
  },
  {
    icon: "✅",
    title: "Менеджер по продажам",
    description:
      "Ответ в течение 15 минут, готовые скрипты и повышение конверсии в запись до 40–75%.",
  },
  {
    icon: "✅",
    title: 'Воронка "Колесо Фортуны"',
    description:
      "От 20 до 150 заявок на ваши услуги за первые 72 часа благодаря интерактивной воронке в Маx.",
  },
  {
    icon: "✅",
    title: "Ведение Яндекс Карт",
    description:
      "Оптимизированная карточка, система управления отзывами и запуск продвижения для роста органического трафика.",
  },
];

export default function Featured() {
  return (
    <div id="services" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-12 lg:mb-0 lg:order-2">
        <div className="w-full h-full bg-neutral-950 flex flex-col justify-center items-center gap-6 px-8">
          <p className="text-neutral-400 uppercase text-xs tracking-widest mb-2">Цифры на 100+ проектах</p>
          <div className="text-center">
            <p className="text-5xl lg:text-6xl font-bold text-white">300–350 ₽</p>
            <p className="text-neutral-400 text-sm uppercase tracking-wide mt-2">CPL — стоимость заявки</p>
          </div>
          <div className="w-16 h-px bg-neutral-700" />
          <div className="text-center">
            <p className="text-5xl lg:text-6xl font-bold text-white">700–1500 ₽</p>
            <p className="text-neutral-400 text-sm uppercase tracking-wide mt-2">CPC — стоимость записи</p>
          </div>
          <div className="w-16 h-px bg-neutral-700" />
          <div className="text-center">
            <p className="text-5xl lg:text-6xl font-bold text-white">40–75%</p>
            <p className="text-neutral-400 text-sm uppercase tracking-wide mt-2">Конверсия в запись</p>
          </div>
          <p className="text-neutral-500 text-xs mt-4 text-center">Работаем по договору и с гарантией результата</p>
        </div>
      </div>

      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-4 text-xs tracking-widest text-neutral-500">Полная система, не кусочки</h3>
        <p className="text-2xl lg:text-3xl mb-10 text-neutral-900 leading-snug font-medium">
          Большинство владельцев ловят клиентов кусочками. Мы строим систему, где каждый элемент работает на общий результат.
        </p>
        <div className="flex flex-col gap-5">
          {services.map((s) => (
            <div key={s.title} className="flex gap-4">
              <span className="text-xl flex-shrink-0 mt-0.5">{s.icon}</span>
              <div>
                <p className="font-semibold text-neutral-900 text-sm uppercase tracking-wide mb-1">{s.title}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

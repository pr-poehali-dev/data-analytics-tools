import Icon from "@/components/ui/icon";

const FACTS = [
  { icon: "Calendar", value: "5+ лет", label: "опыт в маркетинге" },
  { icon: "Building", value: "3+ года", label: "работа агентства" },
  { icon: "Users", value: "4 площадки", label: "ВКонтакте, Яндекс, Авито, MAX" },
  { icon: "Map", value: "Вся Россия", label: "география работы" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest brand-text mb-3 block">
            Об агентстве
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
            АЗИмпакт — это системная работа,<br className="hidden md:block" /> а не разовые запуски
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="rounded-2xl overflow-hidden aspect-[4/5] relative mb-4"
              style={{ background: "hsl(var(--brand) / 0.08)" }}
            >
              {/* TODO: Замените src на реальное фото Анны */}
              <img
                src="https://placehold.co/480x600/1a2e5a/ffffff?text=Фото+Анны"
                alt="Анна — основательница АЗИмпакт"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(to top, hsl(var(--brand)) 0%, transparent 100%)" }}
              >
                <p className="text-white font-bold text-lg font-montserrat">Анна</p>
                <p className="text-white/70 text-sm">Основательница АЗИмпакт · Маркетолог</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Агентство АЗИмпакт основала Анна — маркетолог с опытом 5+ лет в digital.
              Специализация с первого дня: бьюти и медицина. Никакого универсализма — только глубокое
              понимание ниши, её особенностей и сложностей с модерацией.
            </p>
            <p className="text-gray-600 leading-relaxed">
              За 3+ года работы выстроили авторскую методику лидогенерации: от упаковки и рекламы
              до обработки заявок нашим менеджером. Работаем по договору с гарантией результата —
              не трафика, а реальных заявок и записей в CRM.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Мы намеренно остаёмся компактной командой: это позволяет глубоко погружаться
              в каждый проект и нести личную ответственность за результат.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl p-4 border border-gray-100 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={fact.icon} size={16} className="brand-text" />
                    <span className="text-lg font-bold font-montserrat brand-text">{fact.value}</span>
                  </div>
                  <p className="text-xs text-gray-500">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import Icon from "@/components/ui/icon";

const VK_PLANS = [
  {
    name: "Тестовый",
    price: "14 000",
    period: "14 дней",
    flag: false,
    guarantee: null,
    note: "Без гарантий результата — для тех, кто хочет попробовать перед полноценным стартом.",
    features: [
      "Настройка рекламного кабинета",
      "Создание 3–5 объявлений",
      "Базовая аналитика",
      "Отчёт по итогам периода",
    ],
  },
  {
    name: "Базовый",
    price: "25 000",
    period: "30 дней",
    flag: false,
    guarantee: "Минимум 30 заявок",
    note: "Гарантия прописана в договоре. Не выполним — продолжаем работу бесплатно.",
    features: [
      "Полная настройка рекламы в ВКонтакте",
      "A/B тестирование объявлений",
      "Еженедельная оптимизация",
      "Аналитика CPL и CR",
      "Ежемесячный отчёт",
    ],
  },
  {
    name: "Под ключ",
    price: "35 000",
    period: "30 дней",
    flag: true,
    guarantee: "30 заявок + 10 записей в CRM",
    note: "Включает обработку заявок нашим менеджером и занесение записей в вашу CRM.",
    features: [
      "Всё из тарифа «Базовый»",
      "Персональный менеджер по заявкам",
      "Обработка входящих обращений",
      "Занесение записей в CRM",
      "Приоритетная поддержка",
      "Отчёт CPL, CR, ROMI, ROAS",
    ],
  },
];

const YANDEX_PLANS = [
  {
    name: "Базовый",
    price: "15 000",
    period: "30 дней",
    flag: false,
    guarantee: null,
    note: "Для клиентов с готовым сайтом. Ведём рекламу в Яндекс Директ.",
    features: [
      "Настройка Яндекс Директ",
      "Подбор ключевых запросов",
      "Оптимизация ставок",
      "Аналитика CPL",
      "Ежемесячный отчёт",
    ],
  },
  {
    name: "Под ключ",
    price: "30 000",
    period: "90 дней / помесячно",
    flag: true,
    guarantee: null,
    note: "Включает разработку посадочной страницы. Оптимально для старта с нуля.",
    features: [
      "Создание посадочной страницы",
      "Настройка Яндекс Директ",
      "Яндекс Карты и геосервисы",
      "Регулярная оптимизация",
      "Аналитика CPL, ROAS, ROMI",
      "Ежемесячный отчёт с выводами",
    ],
  },
];

const DISCOUNTS = [
  { icon: "MapPin", text: "−50% на 2-ю точку в том же городе" },
  { icon: "Network", text: "−5 000 ₽ на каждый город при подключении 3+ городов" },
];

type Tab = "vk" | "yandex";

export default function PricingSection() {
  const [tab, setTab] = useState<Tab>("vk");
  const plans = tab === "vk" ? VK_PLANS : YANDEX_PLANS;

  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest brand-text mb-3 block">
            Тарифы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Прозрачное ценообразование
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Стоимость рекламного бюджета — отдельно, оговаривается на брифе.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl border border-gray-200 p-1 bg-gray-50">
            {(["vk", "yandex"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  tab === t
                    ? "bg-white shadow text-gray-900"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {t === "vk" ? "ВКонтакте" : "Яндекс"}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid gap-6 ${plans.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 max-w-3xl mx-auto"}`}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-shadow hover:shadow-lg flex flex-col ${
                plan.flag
                  ? "border-[hsl(var(--brand))] shadow-md"
                  : "border-gray-100"
              }`}
              style={plan.flag ? { background: "hsl(var(--brand) / 0.02)" } : {}}
            >
              {plan.flag && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{ background: "hsl(var(--brand-accent))", color: "hsl(var(--brand))" }}
                >
                  Флагман
                </div>
              )}

              <div className="mb-6">
                <p className="text-sm font-medium text-gray-500 mb-1">{plan.period}</p>
                <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-black font-montserrat brand-text">
                    {plan.price} ₽
                  </span>
                  <span className="text-gray-400 text-sm mb-1">/мес</span>
                </div>
              </div>

              {plan.guarantee && (
                <div
                  className="flex items-start gap-2 rounded-lg px-4 py-3 mb-5"
                  style={{ background: "hsl(var(--brand-accent) / 0.12)" }}
                >
                  <Icon name="ShieldCheck" size={16} className="brand-text mt-0.5 shrink-0" />
                  <p className="text-sm font-semibold brand-text">
                    Гарантия: {plan.guarantee}
                  </p>
                </div>
              )}

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Icon name="Check" size={15} className="brand-text mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-400 mb-6 leading-relaxed">{plan.note}</p>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3 rounded-lg font-semibold text-sm transition-all ${
                  plan.flag
                    ? "brand-bg text-white hover:opacity-90"
                    : "border-2 border-gray-200 text-gray-700 hover:border-[hsl(var(--brand))] hover:brand-text"
                }`}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {DISCOUNTS.map((d) => (
            <div
              key={d.text}
              className="flex items-center gap-3 rounded-xl p-4 border border-gray-100 bg-gray-50"
            >
              <Icon name={d.icon} size={20} className="brand-text shrink-0" />
              <p className="text-sm font-medium text-gray-700">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

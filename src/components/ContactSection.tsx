import { useState } from "react";
import Icon from "@/components/ui/icon";

const NICHES = [
  "Бьюти-мастер / микробизнес",
  "Студия или салон красоты",
  "Косметологический центр / клиника",
  "Многопрофильный медицинский центр",
  "Другое",
];

const CHANNELS = [
  { id: "vk", label: "ВКонтакте" },
  { id: "yandex", label: "Яндекс" },
  { id: "avito", label: "Авито" },
  { id: "max", label: "MAX" },
];

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    niche: "",
    channels: [] as string[],
    comment: "",
  });

  const toggleChannel = (id: string) => {
    setForm((prev) => ({
      ...prev,
      channels: prev.channels.includes(id)
        ? prev.channels.filter((c) => c !== id)
        : [...prev.channels, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-20 px-6" style={{ background: "hsl(var(--brand))" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <span className="text-sm font-semibold uppercase tracking-widest opacity-60 mb-4 block">
              Заявка
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-6 leading-tight">
              Рассчитаем стоимость<br />под ваш проект
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Без обязательств. Расскажем, какой канал и тариф подойдёт, назовём конкретные
              цифры по CPL для вашей ниши и объясним, как строится воронка.
            </p>

            <div className="space-y-4">
              {[
                { icon: "Clock", text: "Ответим в течение 2 часов в рабочее время" },
                { icon: "FileText", text: "Предложим тариф и прогноз CPL под вашу нишу" },
                { icon: "ShieldCheck", text: "Работаем по договору — всё фиксируем письменно" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "hsl(var(--brand-accent) / 0.2)" }}
                  >
                    <Icon name={item.icon} size={16} style={{ color: "hsl(var(--brand-accent))" }} />
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/50 text-xs mb-3 uppercase tracking-wider">Написать напрямую</p>
              <div className="flex gap-4">
                <a
                  href="https://vk.me/azimpact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm text-white font-medium"
                >
                  <Icon name="MessageCircle" size={16} />
                  ВКонтакте
                </a>
                {/* TODO: Замените на реальную ссылку на Instagram/Telegram */}
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm text-white font-medium"
                >
                  <Icon name="Send" size={16} />
                  Telegram
                </a>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="bg-white rounded-2xl p-10 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "hsl(var(--brand-accent) / 0.15)" }}
                >
                  <Icon name="CheckCircle" size={32} className="brand-text" />
                </div>
                <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-3">
                  Заявка принята!
                </h3>
                <p className="text-gray-500 text-sm">
                  Свяжемся с вами в течение 2 часов в рабочее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Ваше имя <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Имя"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Телефон / мессенджер <span className="text-red-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="+7 (___) ___-__-__ или @username"
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Ваша ниша <span className="text-red-400">*</span>
                  </label>
                  <select
                    required
                    value={form.niche}
                    onChange={(e) => setForm((p) => ({ ...p, niche: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))] transition bg-white text-gray-700"
                  >
                    <option value="">Выберите сегмент</option>
                    {NICHES.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Интересующие площадки
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {CHANNELS.map((ch) => (
                      <button
                        key={ch.id}
                        type="button"
                        onClick={() => toggleChannel(ch.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                          form.channels.includes(ch.id)
                            ? "border-[hsl(var(--brand))] brand-text brand-bg text-white"
                            : "border-gray-200 text-gray-600 hover:border-[hsl(var(--brand))]"
                        }`}
                        style={
                          form.channels.includes(ch.id)
                            ? { background: "hsl(var(--brand))", color: "white" }
                            : {}
                        }
                      >
                        {ch.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Комментарий (необязательно)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Опишите задачу, текущий бюджет, что пробовали ранее..."
                    value={form.comment}
                    onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 active:scale-[0.99]"
                  style={{ background: "hsl(var(--brand))", color: "white" }}
                >
                  Получить расчёт под мой проект
                </button>

                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  Отправляя заявку, вы соглашаетесь с{" "}
                  <a href="#privacy" className="underline hover:brand-text">
                    политикой конфиденциальности
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

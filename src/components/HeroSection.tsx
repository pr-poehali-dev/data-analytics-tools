export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "hsl(var(--brand))" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--brand-accent)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)`,
        }}
      />

      <div className="absolute inset-0">
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: "linear-gradient(to top, hsl(var(--brand)) 0%, transparent 100%)",
            opacity: 0.6,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Работаем по всей России · ВКонтакте, Яндекс, Авито, MAX
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-montserrat">
          Комплексная лидогенерация<br />
          <span style={{ color: "hsl(var(--brand-accent))" }}>для бьюти и медицины</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-4 font-light leading-relaxed">
          До записи в CRM. По договору. С гарантией результата.
        </p>

        <p className="text-base md:text-lg text-white/65 mb-10 max-w-2xl mx-auto leading-relaxed">
          Берём на себя полный цикл — от упаковки и рекламы до обработки заявок.
          Вы получаете реальных клиентов, а не просто трафик.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 text-base font-semibold rounded-lg transition-all hover:opacity-90 active:scale-95"
            style={{ background: "hsl(var(--brand-accent))", color: "hsl(var(--brand))" }}
          >
            Получить расчёт под мой проект
          </button>
          <button
            onClick={() => scrollTo("#pricing")}
            className="px-8 py-4 text-base font-semibold rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all"
          >
            Посмотреть тарифы
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto">
          {[
            { value: "3+", label: "года работы" },
            { value: "30+", label: "заявок по договору" },
            { value: "4", label: "рекламные площадки" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-bold font-montserrat"
                style={{ color: "hsl(var(--brand-accent))" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollTo("#for-whom")} aria-label="Прокрутить вниз">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/50">
            <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}

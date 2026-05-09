export default function SiteFooter() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-white py-14 px-6" id="footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-xl font-bold font-montserrat mb-3">
              АЗИ<span style={{ color: "hsl(var(--brand-accent))" }}>мпакт</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Комплексная лидогенерация для бьюти и медицины. По договору, с гарантией результата.
            </p>
            {/* TODO: Замените на реальные ссылки на ВКонтакте и Instagram */}
            <div className="flex gap-3">
              <a
                href="https://vk.me/azimpact"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-sm font-bold"
                aria-label="ВКонтакте"
              >
                ВК
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                IN
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Навигация</p>
            <ul className="space-y-2.5">
              {[
                { label: "Для кого", href: "#for-whom" },
                { label: "Как работаем", href: "#how-we-work" },
                { label: "Тарифы", href: "#pricing" },
                { label: "Кейсы", href: "#cases" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Информация</p>
            <ul className="space-y-2.5">
              {[
                { label: "FAQ", href: "#faq" },
                { label: "Об агентстве", href: "#about" },
                { label: "Оставить заявку", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Контакты</p>
            <ul className="space-y-2.5">
              <li>
                {/* TODO: Замените на реальный email */}
                <a href="mailto:info@azimpact.ru" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@azimpact.ru
                </a>
              </li>
              <li>
                {/* TODO: Замените на реальный телефон */}
                <a href="tel:+7" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +7 (___) ___-__-__
                </a>
              </li>
              <li className="text-sm text-gray-500">
                Работаем по всей России
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} АЗИмпакт. Все права защищены.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs text-gray-600">
            {/* TODO: Замените на реальные ИНН и ОГРН */}
            <span>ИНН: 0000000000</span>
            <span>ОГРН: 0000000000000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

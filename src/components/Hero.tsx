import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="АЗИмпакт — системный маркетинг для бьюти и медицины"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 text-neutral-300">
          Агентство системного маркетинга
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          АЗИ<span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>МПАКТ</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed">
          Строим полную маркетинговую систему для бьюти и медицины.<br />
          Не отдельные инструменты — а результат.
        </p>
        <a
          href="https://vk.me/azimpact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white text-white px-8 py-3 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Готовы к системе?
        </a>
      </div>
    </div>
  );
}
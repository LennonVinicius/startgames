import { useState } from "react";
import logoImg from "@/imports/image.png";
import teamImg from "@/imports/image-2.png";
import brokenPhoneImg from "@/imports/image-1.png";
import fridayImg from "@/imports/image-3.png";
import onePieceBottleImg from "@/imports/image-4.png";
import luffyImg from "@/imports/image-5.png";

const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#servicos" },
  { label: "Promoções", href: "#promocoes" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

const SERVICES = [
  {
    icon: "📱",
    title: "Telas e Displays",
    desc: "Troca de tela para todos os modelos de celular e tablet. Original e premium.",
  },
  {
    icon: "🎮",
    title: "Consoles",
    desc: "Manutenção de PS4, PS5, Xbox, Nintendo Switch e muito mais.",
  },
  {
    icon: "🔋",
    title: "Baterias",
    desc: "Substituição rápida de bateria com peças de alta qualidade e garantia.",
  },
  {
    icon: "💧",
    title: "Danos por Água",
    desc: "Tratamento especializado para dispositivos com danos de umidade ou líquidos.",
  },
  {
    icon: "🔌",
    title: "Conectores e Cargas",
    desc: "Troca de conectores USB, sem carregamento? A gente resolve.",
  },
  {
    icon: "🛡️",
    title: "Diagnóstico Grátis",
    desc: "Diagnóstico completo sem custo. Você só paga se quiser o serviço.",
  },
];

type PromoTab = "celular" | "console" | "colecionar";

const PROMOS: Record<PromoTab, { img: string; alt: string; title: string; old: string; price: string; badge: string }[]> = {
  celular: [
    {
      img: brokenPhoneImg,
      alt: "Troca de tela de celular",
      title: "Troca de Tela iPhone",
      old: "R$ 350",
      price: "R$ 249",
      badge: "−29%",
    },
    {
      img: brokenPhoneImg,
      alt: "Reparo de celular quebrado",
      title: "Troca de Tela Samsung",
      old: "R$ 280",
      price: "R$ 189",
      badge: "−32%",
    },
  ],
  console: [
    {
      img: luffyImg,
      alt: "Manutenção de console",
      title: "Limpeza Profunda PS4/PS5",
      old: "R$ 120",
      price: "R$ 79",
      badge: "−34%",
    },
    {
      img: luffyImg,
      alt: "Reparo de console",
      title: "Troca de Pasta Térmica",
      old: "R$ 80",
      price: "R$ 49",
      badge: "−38%",
    },
  ],
  colecionar: [
    {
      img: fridayImg,
      alt: "Action figure Friday the 13th Jason",
      title: "Action Figure Jason – Friday 13th",
      old: "R$ 199",
      price: "R$ 149",
      badge: "−25%",
    },
    {
      img: onePieceBottleImg,
      alt: "Garrafa One Piece Zoro",
      title: "Garrafa Clic One Piece",
      old: "R$ 89",
      price: "R$ 64",
      badge: "−28%",
    },
    {
      img: luffyImg,
      alt: "Figura Luffy One Piece",
      title: "Boneco Luffy One Piece",
      old: "R$ 159",
      price: "R$ 119",
      badge: "−25%",
    },
  ],
};

const TAB_LABELS: { key: PromoTab; label: string }[] = [
  { key: "celular", label: "📱 Celular" },
  { key: "console", label: "🎮 Console" },
  { key: "colecionar", label: "🧸 Colecionáveis" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<PromoTab>("celular");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f0f0f0] overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#222235]">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <img src={logoImg} alt="Start Games logo" className="h-10 w-auto object-contain" />
            <span className="font-display text-[#f5c400] text-lg tracking-wider hidden sm:block glow-yellow">
              START GAMES
            </span>
          </a>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="font-heading font-600 text-sm tracking-wide text-[#bbb] hover:text-[#f5c400] transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/5592999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#f5c400] text-[#0a0a0f] font-heading font-700 text-sm px-4 py-2 rounded hover:bg-yellow-300 transition-colors duration-200"
          >
            WhatsApp
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#f5c400] text-2xl"
            aria-label="Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-[#111118] border-t border-[#222235] px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-heading font-600 text-[#bbb] hover:text-[#f5c400] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5592999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f5c400] text-[#0a0a0f] font-heading font-700 text-sm px-4 py-2 rounded text-center"
            >
              WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative grid-bg min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <img
            src={logoImg}
            alt="Start Games"
            className="w-40 md:w-56 object-contain drop-shadow-[0_0_32px_rgba(245,196,0,0.5)]"
          />
          <h1 className="font-display text-4xl md:text-6xl text-[#f5c400] glow-yellow leading-tight tracking-wider">
            START GAMES
          </h1>
          <p className="font-heading font-500 text-lg md:text-2xl text-[#bbb] tracking-wide">
            Assistência Técnica · Celulares · Consoles · Colecionáveis
          </p>
          <p className="font-body text-[#888] max-w-xl text-base leading-relaxed">
            Consertamos seus dispositivos com agilidade e qualidade. Também temos os melhores itens de coleção para os fãs de games e anime!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#servicos"
              className="bg-[#f5c400] text-[#0a0a0f] font-heading font-700 px-8 py-3 rounded hover:bg-yellow-300 transition-all duration-200 text-base tracking-wide"
            >
              Ver Serviços
            </a>
            <a
              href="#promocoes"
              className="border border-[#f5c400] text-[#f5c400] font-heading font-700 px-8 py-3 rounded hover:bg-[#f5c400]/10 transition-all duration-200 text-base tracking-wide"
            >
              Promoções
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#f5c400]/50 animate-bounce">
          <span className="text-xs font-heading tracking-widest">SCROLL</span>
          <span className="text-lg">↓</span>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-20 px-4 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-display text-xs text-[#f5c400] tracking-[0.3em] block mb-3">SERVIÇOS</span>
            <h2 className="font-heading font-700 text-3xl md:text-4xl text-white">
              O que a gente conserta
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-[#111118] border border-[#222235] rounded-lg p-6 hover:border-[#f5c400]/40 hover:glow-box transition-all duration-300 group"
              >
                <span className="text-4xl block mb-4">{s.icon}</span>
                <h3 className="font-heading font-700 text-xl text-[#f5c400] mb-2 group-hover:glow-yellow transition-all">
                  {s.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOS */}
      <section id="promocoes" className="py-20 px-4 bg-[#0a0a0f] grid-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-display text-xs text-[#f5c400] tracking-[0.3em] block mb-3">OFERTAS ESPECIAIS</span>
            <h2 className="font-heading font-700 text-3xl md:text-4xl text-white">Promoções</h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {TAB_LABELS.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`font-heading font-600 px-5 py-2 rounded text-sm tracking-wide transition-all duration-200 border ${
                  activeTab === t.key
                    ? "bg-[#f5c400] text-[#0a0a0f] border-[#f5c400]"
                    : "bg-transparent text-[#888] border-[#222235] hover:border-[#f5c400]/40 hover:text-[#f5c400]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROMOS[activeTab].map((p) => (
              <div
                key={p.title}
                className="bg-[#111118] border border-[#222235] rounded-lg overflow-hidden hover:border-[#f5c400]/50 transition-all duration-300 hover:glow-box group"
              >
                <div className="relative h-52 bg-[#1a1a28] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-[#f5c400] text-[#0a0a0f] font-display text-xs px-2 py-1 rounded font-bold">
                    {p.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-700 text-lg text-white mb-3">{p.title}</h3>
                  <div className="flex items-baseline gap-3">
                    <span className="text-[#555] text-sm line-through">{p.old}</span>
                    <span className="font-display text-[#f5c400] text-xl glow-yellow">{p.price}</span>
                  </div>
                  <a
                    href="https://wa.me/5592999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block text-center bg-[#f5c400]/10 border border-[#f5c400]/40 text-[#f5c400] font-heading font-600 text-sm py-2 rounded hover:bg-[#f5c400] hover:text-[#0a0a0f] transition-all duration-200"
                  >
                    Quero esse!
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="equipe" className="py-20 px-4 bg-[#0d0d14]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-display text-xs text-[#f5c400] tracking-[0.3em] block mb-3">NOSSA EQUIPE</span>
            <h2 className="font-heading font-700 text-3xl md:text-4xl text-white mb-5">
              Apaixonados por tecnologia e games
            </h2>
            <p className="text-[#888] leading-relaxed mb-6">
              Nossa equipe é formada por técnicos especializados e fãs de cultura geek. Aqui você encontra profissionalismo e atendimento com quem entende do assunto — e curte tanto quanto você!
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Técnicos certificados com anos de experiência",
                "Atendimento humanizado e sem enrolação",
                "Peças originais e garantia em todos os serviços",
                "Loja física no coração da cidade",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#bbb]">
                  <span className="text-[#f5c400] mt-0.5">▶</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#f5c400]/30 to-transparent blur-xl pointer-events-none" />
            <img
              src={teamImg}
              alt="Equipe Start Games na loja"
              className="relative rounded-xl w-full object-cover border border-[#f5c400]/20"
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="py-20 px-4 bg-[#0a0a0f] border-t border-[#222235]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-display text-xs text-[#f5c400] tracking-[0.3em] block mb-3">FALE CONOSCO</span>
          <h2 className="font-heading font-700 text-3xl md:text-4xl text-white mb-4">Vem jogar com a gente!</h2>
          <p className="text-[#888] mb-10">
            Fale pelo WhatsApp, visite nossa loja ou nos siga nas redes sociais. Diagnóstico grátis e orçamento sem compromisso!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { icon: "📍", label: "Endereço", value: "Shopping Amazonas, Manaus – AM" },
              { icon: "📞", label: "WhatsApp", value: "(92) 99999-9999" },
              { icon: "🕐", label: "Horário", value: "Seg–Sáb: 9h às 21h" },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-[#111118] border border-[#222235] rounded-lg p-5 text-center hover:border-[#f5c400]/30 transition-colors"
              >
                <span className="text-3xl block mb-2">{c.icon}</span>
                <p className="font-heading font-600 text-[#f5c400] text-sm mb-1">{c.label}</p>
                <p className="text-[#bbb] text-sm">{c.value}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5592999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#f5c400] text-[#0a0a0f] font-display text-sm px-10 py-4 rounded hover:bg-yellow-300 transition-all duration-200 tracking-widest font-bold"
          >
            💬 CHAMAR NO WHATSAPP
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080810] border-t border-[#222235] py-8 px-4 text-center">
        <img src={logoImg} alt="Start Games" className="h-10 mx-auto mb-3 object-contain opacity-70" />
        <p className="font-heading text-[#555] text-sm">
          © {new Date().getFullYear()} Start Games · Assistência Técnica · Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}

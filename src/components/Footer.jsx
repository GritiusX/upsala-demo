import { useState } from 'react'

const LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1V3YTd0EZhkovLBfRz0CmDVthaA9Z4aeBDSUw2ZzBnuWsPOlvmvLEPNGhJ_sth1cExJc0OREnOQ8NnLkY_TET_RhnqzpRlNGnEALLPU5ThblHV1lrKoZGWVwNqJn8VyRjamH9uxct0pF1SwPW1BtsU4lLB0oBsWR-OVk58DEjdhtoxQNb83zTVpi9LhdL-STQHEg0A14UpAYIQB2tXfQBr2QAyrBBKcrsJElajTFhYa-WTWixTO81Dy_gbq'

const IMG1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaV0JGHHOtYHrMQPiFo9YVqRlCMjpWgPOG-VNGrpB-aZo3IAOhq56uJoZo8LrNrA8-qVu0fyiwah6mg1BkwsbcExWyhy7wo9GkMSx-3LydPlGk_NzH-intwu5-_bc7rbSfEhDwIvKquXiNDfiaJQiYIHZ4LGoTMdMacLiPBzJDkiarebFoi0dC3QQDBhCeqfcJ9MlvewoN7IHAPEA7FJEE6KwScf8Re5REcbEDVRALLi7izcFAYo5xYg'
const IMG2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdu0Jncvq051USWK0M5Y-EQo6BeZ_PhVMx8_-Dluci_Rdl_l8Zw5qRt6VBKjPgiIpVDWru1H1zSv4eT_FJ9Fzr3SnCBLU0M4I-zRTna1F3if7JURXuc22I_sbBBir-bcb_L7W82UqizILVtodYVmNI0WeSLjk3rMHuFUo81FNfDucliERFh5mgC9aiYByOcsTmbCAn9dAjnJXY5_SD62yLs5kheya_o4Y_tyze_9iK1UU600xYSSLcqg'

const DESTINOS = ['Las Leñas Snow Trip', 'Patagonia Ice Trek', 'Punta del Diablo Surf', 'Chapadmalal Surf Camp', 'Fitz Roy Summit Push']
const RECURSOS  = ['Cómo funciona', 'Protocolo de seguridad', 'Guías y expertos', 'Blog de aventuras', 'Preguntas frecuentes']
const EMPRESA   = ['Sobre nosotros', 'Prensa', 'Trabaja con nosotros', 'Contacto', 'Términos y condiciones']

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="w-full bg-[#f5f5f5]">

      {/* ── CTA banner ── */}
      <div className="w-full px-margin-desktop py-[72px] flex flex-col md:flex-row items-center justify-between gap-xl">
        {/* Left */}
        <div className="flex flex-col gap-md max-w-md">
          <h2 className="text-[2rem] font-bold leading-tight text-on-surface">
            Viví tu próxima aventura.
          </h2>
          <p className="text-on-surface-variant font-body-md">
            Sumáte a miles de exploradores que confían en Upsala Trips para sus expediciones más épicas en Sudamérica.
          </p>
          <div className="flex gap-sm">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 px-md py-3 rounded-lg border border-outline-variant bg-surface text-on-surface text-sm outline-none focus:ring-2 focus:ring-primary/30 transition"
            />
            <button className="px-md py-3 rounded-lg bg-on-surface text-surface text-sm font-semibold hover:bg-on-surface/90 transition whitespace-nowrap">
              Suscribirme
            </button>
          </div>
        </div>

        {/* Right — stacked photos */}
        <div className="relative w-72 h-52 shrink-0 hidden md:block">
          <img
            src={IMG1}
            alt="Expedición"
            className="absolute top-0 right-8 w-56 h-44 object-cover rounded-2xl shadow-xl rotate-[5deg] opacity-75"
          />
          <img
            src={IMG2}
            alt="Expedición"
            className="absolute top-6 right-0 w-56 h-44 object-cover rounded-2xl shadow-2xl -rotate-[2deg]"
          />
        </div>
      </div>

      {/* ── Separator ── */}
      <div className="border-t border-outline-variant/30 mx-margin-desktop" />

      {/* ── Links section ── */}
      <div className="w-full px-margin-desktop py-xl grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-xl">

        {/* Brand col */}
        <div className="flex flex-col gap-md">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="Upsala Trips" className="h-9 w-9 rounded-full object-cover shadow-sm" />
            <span className="text-[15px] font-semibold text-on-surface">Upsala trips</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-[220px]">
            Viajes de aventura curados en la Patagonia, los Andes y más allá del sur del mundo.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-md mt-xs">
            {/* Instagram */}
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="text-on-surface-variant hover:text-on-surface transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.47C18.88 4 12 4 12 4s-6.88 0-8.6.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.53C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>

        {/* Destinos */}
        <div className="flex flex-col gap-sm">
          <h4 className="text-xs font-semibold text-on-surface uppercase tracking-widest mb-xs">Destinos</h4>
          {DESTINOS.map(d => (
            <a key={d} href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">{d}</a>
          ))}
        </div>

        {/* Recursos */}
        <div className="flex flex-col gap-sm">
          <h4 className="text-xs font-semibold text-on-surface uppercase tracking-widest mb-xs">Recursos</h4>
          {RECURSOS.map(r => (
            <a key={r} href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">{r}</a>
          ))}
        </div>

        {/* Empresa */}
        <div className="flex flex-col gap-sm">
          <h4 className="text-xs font-semibold text-on-surface uppercase tracking-widest mb-xs">Empresa</h4>
          {EMPRESA.map(e => (
            <a key={e} href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">{e}</a>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-outline-variant/30 mx-margin-desktop" />
      <div className="w-full px-margin-desktop py-lg flex flex-col md:flex-row items-center justify-between gap-sm">
        <p className="text-sm text-on-surface-variant">© 2025 Upsala Trips. Todos los derechos reservados.</p>
        <div className="flex items-center gap-lg">
          {['Términos de servicio', 'Privacidad', 'Cookies', 'Accesibilidad'].map(l => (
            <a key={l} href="#" className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

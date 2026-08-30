import { useState } from 'react'
import Footer from '../components/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Mobile image URLs ─────────────────────────────────────────── */
const LOGO_MOB   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE_MOB = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'
const HERO_MOB   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuApKEUUOxgHG5zjAfTTmTwAba_IP08zQsyP35DnymH6fBRuNCFcFa4sMc0Ipe4A9yyyeE8Nmw-lQfWnraIZq0SSfrJW3dnOJM2_8Aq3WhGNxrpDKngr_cOANEr_0inCmd-lPuWLa6GJmH1xWeWO8EPMo6RDIaVz6ppE73MGp_-dOShurU8QIFZIuvyb_Xes3hadM7xnx-X1-LNNPPMF2_qb1uQMJOI0PwYWQ9duYDpWvCTMnig2Xra6Uw'

/* ── Desktop image URLs ─────────────────────────────────────────── */
const HERO_DESK  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM2Sl0i1I72vrJJgz6yQAcypkcm5OoReKKJSFEhSb3GH4EcFhT_iDPGgvhMzMIfBEcNKc8CqxwPDGmhhWzLnZAVaOZsKACpmxmWvID9PQd-aqLcLjQOvc-1Q-OACj2wZlfmLT4Ff2DpgUKrsi5a80L9qUfejSDAkOy-1_KfaVjYAhRrf6Ddfh1rul8-0zJ_9iXNKBm_1z8bZMPEitwfiqHY2XwVMYXuihrrfkGLtTZMFBJWStGrQC9Wg'
const LOGO_DESK  = 'https://lh3.googleusercontent.com/aida/AEtjO1V3YTd0EZhkovLBfRz0CmDVthaA9Z4aeBDSUw2ZzBnuWsPOlvmvLEPNGhJ_sth1cExJc0OREnOQ8NnLkY_TET_RhnqzpRlNGnEALLPU5ThblHV1lrKoZGWVwNqJn8VyRjamH9uxct0pF1SwPW1BtsU4lLB0oBsWR-OVk58DEjdhtoxQNb83zTVpi9LhdL-STQHEg0A14UpAYIQB2tXfQBr2QAyrBBKcrsJElajTFhYa-WTWixTO81Dy_gbq'
const PARTNER1   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRq_C7DAxrLAmWqQD8pGetZgPQR1e56WNwxmzF_dSpwP06sfDASOKnCcsPQQsMi4w2HyjOM1cMWx311m19jwf8UsNjFeMt9yrUZHruuGDn6vEh48f0k4Zlb9IHdHFz1ojSmY0dQRfpfC5oDrWuCzkAQ5Z9GGVCbiGK61CsoTMx-CLdZJeHyzubdhazw30sNJ9QZZ8zVF0TfUeZDYYTyUwC-y2YYm0zib9FRm7fzGx-_Q29-F6HADNPiQ'
const PARTNER2   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMzQypVdnHz1xJP3f-NADhWCjmiN0p1atxQACgDNux0lZ9Zy8lhMnTv245neOeolJc_vOzQgnmzz2fkiGLKgAhr98ho7KVQpRDKzrAyfmlSbX4ifWqCInSAKoRIRwA27QlxtVOxFJKFaYD-YPuNB36jNnYvymLecHyDYKFpi-zgIUK7B0T2aTsz1GTgftS5DR4XygFOFgs0FTEiDuCtqYYTlLocuE414vyaeGZxgXspIfVA9aQ'
const PARTNER3   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8W50Y2-etUvhpjdXwUBHGBqqKobaaPIxEf9ofvYS2hSTy8GhupTpVQsXIr-ih59dJLJI4MYQqbXVBhNDP695GtRO7Rp83x9pilVZhxn6g3ubR5fjOYnGIzHefRj7Lx5hlX1nUNf4oDZnDUAFjGFjf7KOzZVD1HHXrLrmWdCdIr86G-_5k9h8B6ybU3PAxekPZS26RTKSThwgfTJuJx4oF940pMWGuQvESUSfBppITlf1wwGPJJiZIjw'
const CARD1_IMG  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaV0JGHHOtYHrMQPiFo9YVqRlCMjpWgPOG-VNGrpB-aZo3IAOhq56uJoZo8LrNrA8-qVu0fyiwah6mg1BkwsbcExWyhy7wo9GkMSx-3LydPlGk_NzH-intwu5-_bc7rbSfEhDwIvKquXiNDfiaJQiYIHZ4LGoTMdMacLiPBzJDkiarebFoi0dC3QQDBhCeqfcJ9MlvewoN7IHAPEA7FJEE6KwScf8Re5REcbEDVRALLi7izcFAYo5xYg'
const CARD2_IMG  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdu0Jncvq051USWK0M5Y-EQo6BeZ_PhVMx8_-Dluci_Rdl_l8Zw5qRt6VBKjPgiIpVDWru1H1zSv4eT_FJ9Fzr3SnCBLU0M4I-zRTna1F3if7JURXuc22I_sbBBir-bcb_L7W82UqizILVtodYVmNI0WeSLjk3rMHuFUo81FNfDucliERFh5mgC9aiYByOcsTmbCAn9dAjnJXY5_SD62yLs5kheya_o4Y_tyze_9iK1UU600xYSSLcqg'
const CARD3_IMG  = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhomfFa9pgqWHTgirl1AvZRG3WQNGK-8ab7tQn59qlvMK4ICbQ8Kr-Num_PN-JAMnFGJt6NVTqBhdqv6JsA52FORXqaPWYQvahOxLQUY_0WoHYjfj7CUGpZBKv27Nixw43h-9No0DyhiLDw2RocuYGSACznBoQAkwuUkjcP_mc5Rgt9KMfKDzUp8msDUEHiu3BNtpG-DtQXvd6Uh0LY7EukEsBrx7bZx4ELRlPS9Opj_q09dajmfyM2g'

/* ── Mobile data ────────────────────────────────────────────────── */
const mobileTrips = [
  { id: 'laslenhas', label: 'Ski', labelIcon: 'downhill_skiing', labelColor: 'text-primary', badge: 'Últimos 2 cupos', badgePulse: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpygtKaAZVYaSRsCb3xkst7G9Tkf6JEmz4zewSmOKJnWeC7QfqLSlhvZRj_rk_Pe-k7RtPbieCzjhq5F9beKLzC3judrf3-A9UpGU9SrRi_yhG906jJunBXRpdhJPlE3W7rIqVaJhPcH7iAYmc7i2QK5GaFK9lbyHE0qK-vcDjiqp6WunYPFIeNHL3jrpVmrqzQbsEw353StX7rQqr2pXbOmIgfArkuN7dzxMBah4uS8ym6yoqmxIwPw', location: 'Mendoza, Arg', title: 'Las Leñas Snow Trip', price: '$1,200' },
  { id: 'puntadiablo', label: 'Surf', labelIcon: 'surfing', labelColor: 'text-secondary-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv9B2MpC3eFOlftIEta520YVq8s6HE5sF5HG9qBl9vBPTFmcoqK0Z5QRZtKkB1cqHdzlt8rsUF3hLtuYMMuWJ7OZQo1pWMNRlsjI0pETFCH9BJ3A3Tp8-MTyP7K7ptOIMZJJ0nxq_9diiRxtvjLCyHB0qTG129DOlyR1A3_wCeWZJHRhjGzOez7rybejBN7vr3TrKf7j09rRtlxKjA8js7W0HESERw0clWTSG21fBQHM2U15Dzs_xk8A', location: 'Rocha, UY', title: 'Punta del Diablo Surf Trip', price: '$900' },
  { id: 'chapadmalal', label: 'Surf', labelIcon: 'surfing', labelColor: 'text-secondary-container', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6kNUaFZ3BvfKty9DK8jA--RLPBb6Igo6KeLkIxpTS-fQyBLUEg7yTsXvxlJk2HglXnynKaJwuKFLCbiQCli8q9e8NRqjYfDVJukeAYsOLdAVS4CVRlTqeZHBkvQp8Nw2OmMf56XNJSsmav5AN9pjsqp3AhJSISjmqpMOmeZLR691quFUYu2s8HVBRm0p3DGG9XAmq4-dJfVNnXpnO6aZJsELuuqyE97GZiXQXlKKoMOBz8ddEX_W8w', location: 'Buenos Aires, Arg', title: 'Chapadmalal Surf Camp', price: '$750' },
]

const reviews = [
  { name: 'Martina R.', sub: 'Viajó a Mendoza', text: '"Increíble la organización en Las Leñas. Los equipos de ski eran de primera y la coordinación del refugio perfecta. Volvería a viajar sin dudarlo."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfSA6yqNSdFSNQd0UUCWgk4_QHwieImOVGokkmdW2Ggl_GzoGmKIUdMw-j3h_bvk8cGS-PoAQTcBci7jyMuhTZiTCGnnZLoVNpnHt26xsSDS8GQmF1s0yayfEJorDyQZZe523R44CzCo2j6hQr55JLZtZw1MPzKsTnxUqpe4d3b-qNv7f614Q6BWHw0Iq7ajpy20Dn7Vrwu5pIadeFoX5dByNYrBhqLe57W57C8CuAyWXqd_wjLitFfw' },
  { name: 'Juan Ignacio M.', sub: 'Viajó a Chapadmalal', text: '"El surf camp en Chapa fue una locura. El nivel de los instructores y la buena onda del grupo hicieron que sea una experiencia inolvidable."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZ2CEPGS2FOgzjjlQE2YjCN-UKaC4zMXi6UevY6wb3wmjEOOR-vs0OOBqSqgYu3RzZzA9C6QxiEGwQQy4AQegFpFU33b9vQtXHcJTdSVhdMNOraqZQurOZ8jcDzXqEMAdhYytXgtIkZu3IP4yDFK_CIJzvzuaBiZWMQbGkBM1GPYD5yRTmk4t23Cq1Ticd2ugys5eEkphEwwghJ6mFucZsXSzWNAjPQcx83w0akKUc3KbqHaLmveRT9g' },
  { name: 'Sofía L.', sub: 'Viajó a Punta del Diablo', text: '"Todo resuelto desde el día uno. Uruguay tiene unas olas tremendas y el alojamiento que eligieron superó mis expectativas. Muy pro todo."', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0PTLSOIQG4QEdXSn0RFCsweNxX7OpYEfKKm_c6MjzmPjwcboGyoJrx2QdzJ7buNILkl4IpFx0ZqYwpIMgdQvm41ZE_XuhQxYpwX5EtZ_1M7jFNb-BXjO-_JBhwCElZjoVFPB28uzcDlpDhxUSVRqRtgcWT-Vtp9qeE3l9ZcbbHJ0aRDvE--KrCm0TNOTm5idkDmT0nGOqZX8WYH_eZtbnqbBWIqO0u8QMbgM3KUUdEIzcTuOPJoV-4g' },
]

const faqs = [
  { q: '¿Qué incluye cada trip?', a: 'Nuestros paquetes son integrales. Generalmente incluyen alojamiento premium, pases (de ski o surf), alquiler de equipos básicos, algunas comidas grupales y la coordinación constante de nuestro equipo.' },
  { q: '¿Necesito tener experiencia previa?', a: '¡No! Armamos grupos para todos los niveles. Desde principiantes absolutos que toman clases desde cero, hasta riders experimentados que buscan spots desafiantes.' },
  { q: '¿Puedo cancelar mi reserva?', a: 'Sí, podés cancelar. Ofrecemos reembolso completo si cancelás con al menos 30 días de anticipación. Para cancelaciones entre 15 y 29 días, retenemos el 50%.' },
]

/* ── Desktop expedition cards ───────────────────────────────────── */
const deskCards = [
  {
    img: CARD1_IMG, badge: 'Alta Demanda', badgeColor: 'bg-secondary w-2 h-2 rounded-full',
    title: 'Glacier Core Traverse', rating: '4.9',
    desc: 'Expedición técnica de trekking en hielo navegando las grietas más profundas del Campo de Hielo Patagónico Sur.',
    difficulty: 'Avanzado', diffBars: [true, true, true, false],
    price: '$3,200', stagger: '', diffColor: 'bg-primary',
  },
  {
    img: CARD2_IMG, badge: 'Nueva Ruta', badgeColor: 'bg-primary w-2 h-2 rounded-full',
    title: 'High Desert Solitude', rating: '5.0',
    desc: 'Experimentá el aislamiento total en los Andes. Campamentos privados, observación astronómica y paisajes en silencio.',
    difficulty: 'Moderado', diffBars: [true, true, false, false],
    price: '$4,150', stagger: 'md:-mt-8', diffColor: 'bg-primary',
  },
  {
    img: CARD3_IMG, badge: null,
    title: 'Fitz Roy Summit Push', rating: '4.8',
    desc: 'Un ascenso exigente apuntando a los icónicos picos de granito. Requiere experiencia alpina previa y condición física óptima.',
    difficulty: 'Experto', diffBars: [true, true, true, true],
    price: '$5,800', stagger: 'lg:mt-8', diffColor: 'bg-secondary',
  },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(o => !o)} className="w-full text-left bg-surface-container-lowest p-md rounded-xl flex items-center justify-between group focus:outline-none shadow-sm">
        <span className="font-headline-sm text-headline-sm text-on-surface">{q}</span>
        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">{open ? 'remove' : 'add'}</span>
      </button>
      {open && <div className="px-md pb-md pt-xs text-on-surface-variant font-body-md bg-surface-container-lowest -mt-2 rounded-b-xl shadow-sm">{a}</div>}
    </div>
  )
}

export default function Home({ navigate }) {
  return (
    <main className="min-h-screen bg-surface">

      {/* ══════════════════ MOBILE ══════════════════ */}
      <div className="md:hidden">
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
          <div className="h-16 flex items-center justify-between px-margin-mobile">
            <div className="flex items-center gap-base">
              <img alt="Upsala Trips Logo" className="h-8 w-auto object-contain" src={LOGO_MOB} />
              <span className="font-headline-sm text-headline-sm text-primary">Home</span>
            </div>
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-sm" src={PROFILE_MOB} />
          </div>
        </header>

        <div className="pt-16 pb-20 flex flex-col w-full">
          {/* Hero */}
          <div className="relative w-full h-[600px] flex items-center justify-center p-margin-mobile"
            style={{ backgroundImage: `url('${HERO_MOB}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/40 to-inverse-surface/80" />
            <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[800px] mt-12">
              <span className="inline-flex items-center gap-xs px-3 py-1 rounded-full bg-surface/20 backdrop-blur-md text-on-primary font-label-md mb-sm shadow-sm">
                <span className="material-symbols-outlined text-[16px]">ac_unit</span>
                Temporada de Invierno 2024
              </span>
              <h1 className="font-headline-xl text-headline-xl text-on-primary mb-sm leading-tight">Experiencias de Aventura en Argentina</h1>
              <p className="font-body-lg text-body-lg text-primary-fixed mb-lg max-w-lg opacity-90">Ski, Surf y Naturaleza. Descubrí los rincones más increíbles con nuestra curaduría premium.</p>
              <div className="w-full bg-surface p-xs rounded-xl shadow-xl flex flex-col gap-xs mb-lg">
                <div className="flex items-center gap-sm px-4 py-3 bg-surface-container-lowest rounded-lg">
                  <span className="material-symbols-outlined text-outline">location_on</span>
                  <input className="w-full bg-transparent border-none outline-none text-on-surface font-body-md placeholder:text-outline-variant" placeholder="¿A dónde querés ir?" type="text" />
                </div>
                <div className="flex items-center gap-sm px-4 py-3 bg-surface-container-lowest rounded-lg">
                  <span className="material-symbols-outlined text-outline">calendar_month</span>
                  <select className="w-full bg-transparent border-none outline-none text-on-surface font-body-md appearance-none cursor-pointer">
                    <option disabled defaultValue="">Mes del viaje</option>
                    <option>Julio 2024</option>
                    <option>Agosto 2024</option>
                    <option>Septiembre 2024</option>
                  </select>
                </div>
                <Button variant="default" onClick={() => navigate('trips')} className="w-full px-6 py-4 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-xs">
                  <span>Explorar</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Featured trips */}
          <section className="py-xl px-margin-mobile bg-surface">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-lg gap-sm">
              <div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-xs">Destinos Destacados</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Próximas salidas confirmadas con cupos limitados.</p>
              </div>
              <Button variant="link" onClick={() => navigate('trips')} className="inline-flex items-center gap-xs font-label-md p-0 h-auto">
                Ver todos los trips <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Button>
            </div>
            <div className="flex flex-col gap-md">
              {mobileTrips.map(trip => (
                <button key={trip.id} onClick={() => navigate('detail')} className="group relative flex flex-col bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-[420px] text-left">
                  <div className="absolute top-4 left-4 z-20 flex gap-xs">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface/90 backdrop-blur-md rounded-full text-on-surface font-label-md shadow-sm">
                      <span className={`material-symbols-outlined text-[14px] ${trip.labelColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{trip.labelIcon}</span>
                      {trip.label}
                    </span>
                  </div>
                  {trip.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`inline-flex items-center px-3 py-1 bg-error/90 backdrop-blur-md rounded-full text-on-error font-label-md shadow-sm ${trip.badgePulse ? 'animate-pulse' : ''}`}>{trip.badge}</span>
                    </div>
                  )}
                  <div className="w-full h-[60%] relative" style={{ backgroundImage: `url('${trip.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 p-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-xs text-outline mb-xs">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        <span className="font-body-md text-[14px]">{trip.location}</span>
                      </div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">{trip.title}</h3>
                    </div>
                    <div className="flex items-center justify-between mt-sm pt-sm border-t border-outline-variant/30">
                      <div className="flex flex-col">
                        <span className="font-body-md text-[12px] text-on-surface-variant">Desde</span>
                        <span className="font-headline-sm text-[20px] text-primary">{trip.price}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center group-hover:bg-primary transition-colors">
                        <span className="material-symbols-outlined text-on-primary-fixed group-hover:text-on-primary transition-colors">arrow_outward</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-xl px-margin-mobile bg-surface-container-low">
            <div className="text-center mb-lg">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-xs">La Comunidad Upsala</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Experiencias reales de viajeros que confiaron en nosotros.</p>
            </div>
            <div className="flex flex-col gap-md">
              {reviews.map(r => (
                <div key={r.name} className="bg-surface p-md rounded-2xl shadow-sm flex flex-col gap-sm">
                  <div className="flex text-secondary-container">
                    {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
                  </div>
                  <p className="font-body-lg text-body-lg text-on-surface flex-1">{r.text}</p>
                  <div className="flex items-center gap-sm mt-xs">
                    <img className="w-12 h-12 rounded-full object-cover" src={r.img} alt={r.name} />
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">{r.name}</p>
                      <p className="font-body-md text-[14px] text-on-surface-variant">{r.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-xl px-margin-mobile bg-surface">
            <div className="text-center mb-lg">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-xs">Preguntas Frecuentes</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Todo lo que necesitás saber antes de empacar.</p>
            </div>
            <div className="flex flex-col gap-xs">
              {faqs.map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
            </div>
          </section>

          <footer className="bg-inverse-surface text-inverse-on-surface pt-xl pb-4 px-margin-mobile flex flex-col items-center text-center">
            <div className="flex flex-col items-center">
              <h3 className="font-headline-sm text-headline-sm mb-xs">Upsala Trips</h3>
              <p className="font-body-md text-on-tertiary-container mb-lg max-w-sm">Curaduría de aventuras premium en el sur del mundo.</p>
              <p className="font-body-md text-[12px] text-on-tertiary-container/50">© 2024 Upsala Trips. Todos los derechos reservados.</p>
            </div>
          </footer>
        </div>
      </div>

      {/* ══════════════════ DESKTOP ══════════════════ */}
      <div className="hidden md:block pt-20">
        {/* Hero — imagen full, texto abajo a la izquierda */}
        <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden -mt-20">
          {/* Fondo */}
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${HERO_DESK}')` }} />
            {/* gradiente de izquierda blanca a transparente */}
            <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
          </div>

          {/* Contenido — anclado abajo */}
          <div className="relative z-10 px-margin-desktop pb-xl pt-[calc(80px+120px)] flex flex-col gap-lg max-w-4xl">
            <div className="flex flex-col gap-md">
              <h1 className="font-headline-xl text-on-surface leading-[1.1]">
                Aventurá más allá de<br />
                <span className="text-primary">lo esperado.</span>
              </h1>
              <p className="font-body-lg text-on-surface-variant max-w-lg">
                Expediciones a los rincones más salvajes de la Patagonia y los Andes. Guías expertos, logística premium, naturaleza sin filtros.
              </p>
            </div>

            {/* Buscador */}
            <div className="w-full max-w-3xl bg-surface/95 backdrop-blur-xl rounded-2xl p-xs shadow-[0_8px_32px_rgba(0,0,0,0.10)] flex items-stretch gap-xs">
              <div className="flex-1 flex items-center px-md py-sm gap-sm hover:bg-surface-container/40 rounded-xl transition-colors">
                <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
                <div className="flex flex-col">
                  <label className="text-[10px] font-label-md text-on-surface-variant uppercase tracking-[0.08em]">Destino</label>
                  <input className="bg-transparent border-none outline-none font-body-md text-on-surface placeholder:text-on-surface-variant/60 w-full" placeholder="¿A dónde vas?" type="text" />
                </div>
              </div>
              <div className="w-px self-stretch my-sm bg-outline-variant/40" />
              <div className="flex-1 flex items-center px-md py-sm gap-sm hover:bg-surface-container/40 rounded-xl transition-colors">
                <span className="material-symbols-outlined text-primary shrink-0">calendar_today</span>
                <div className="flex flex-col">
                  <label className="text-[10px] font-label-md text-on-surface-variant uppercase tracking-[0.08em]">Fechas</label>
                  <input className="bg-transparent border-none outline-none font-body-md text-on-surface placeholder:text-on-surface-variant/60 w-full" placeholder="Elegí un período" type="text" />
                </div>
              </div>
              <div className="w-px self-stretch my-sm bg-outline-variant/40" />
              <div className="flex-1 flex items-center px-md py-sm gap-sm hover:bg-surface-container/40 rounded-xl transition-colors">
                <span className="material-symbols-outlined text-primary shrink-0">group</span>
                <div className="flex flex-col">
                  <label className="text-[10px] font-label-md text-on-surface-variant uppercase tracking-[0.08em]">Viajeros</label>
                  <select className="bg-transparent border-none outline-none font-body-md text-on-surface w-full appearance-none cursor-pointer">
                    <option>2 Exploradores</option>
                    <option>1 Explorador</option>
                    <option>3-4 Exploradores</option>
                    <option>Grupo (5+)</option>
                  </select>
                </div>
              </div>
              <Button onClick={() => navigate('trips')} className="shrink-0 px-lg self-stretch rounded-xl bg-secondary-container text-on-secondary-container hover:bg-secondary-container/90 shadow-[0_4px_14px_rgba(253,101,30,0.4)] hover:-translate-y-0.5 transition-all font-label-md whitespace-nowrap">
                ENCONTRAR EXPEDICIÓN
              </Button>
            </div>
          </div>
        </section>

        {/* Barra de partners */}
        <section className="w-full py-lg bg-surface-container-lowest border-y border-outline-variant/20 flex flex-col items-center justify-center">
          <p className="font-label-md text-on-surface-variant mb-md uppercase tracking-[0.2em]">Socios de Aventura de Todo el Mundo</p>
          <div className="flex flex-wrap items-center justify-center gap-xl opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <img alt="Upsala Trips" className="h-12 w-auto object-contain" src={LOGO_DESK} />
            <img className="h-10 w-auto object-contain" src={PARTNER1} alt="Partner" />
            <img className="h-8 w-auto object-contain" src={PARTNER2} alt="Partner" />
            <img className="h-10 w-auto object-contain" src={PARTNER3} alt="Partner" />
          </div>
        </section>

        {/* Expediciones destacadas */}
        <section className="w-full py-[120px] px-margin-desktop bg-surface">
          <div className="max-w-7xl mx-auto flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-end mb-xl">
              <div className="max-w-xl">
                <span className="font-label-md text-primary uppercase tracking-[0.1em] flex items-center gap-2 mb-xs">
                  <span className="w-8 h-px bg-primary" /> Rutas Curadas
                </span>
                <h2 className="font-headline-lg text-on-surface">Expediciones Exclusivas</h2>
                <p className="font-body-lg text-on-surface-variant mt-sm">Nuestros itinerarios más buscados, combinando paisajes extremos con comodidad refinada.</p>
              </div>
              <Button variant="outline" onClick={() => navigate('trips')} className="mt-md md:mt-0 px-lg font-label-md flex items-center gap-2 border-primary/20 text-primary hover:bg-primary/5">
                VER TODAS LAS EXPEDICIONES <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
              {deskCards.map(c => (
                <article key={c.title} className={`group bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col relative ${c.stagger}`}>
                  {c.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-surface/90 backdrop-blur-md text-on-surface font-label-md text-xs shadow-sm flex items-center gap-1 rounded-full px-3 py-1">
                        <span className={c.badgeColor} /> {c.badge}
                      </Badge>
                    </div>
                  )}
                  <div className="h-64 w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('${c.img}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent" />
                  </div>
                  <div className="p-md flex flex-col flex-1 relative bg-surface-container-lowest -mt-12 rounded-t-[24px]">
                    <div className="flex justify-between items-start mb-sm">
                      <h3 className="font-headline-sm text-on-surface leading-tight">{c.title}</h3>
                      <div className="bg-surface-container px-2 py-1 rounded-md flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">star</span>
                        <span className="font-label-md text-sm text-on-surface">{c.rating}</span>
                      </div>
                    </div>
                    <p className="font-body-md text-on-surface-variant flex-1 line-clamp-3 mb-md">{c.desc}</p>
                    <div className="w-full mb-md">
                      <div className="flex justify-between font-label-md text-xs text-on-surface-variant mb-1">
                        <span>Dificultad</span><span className="text-on-surface">{c.difficulty}</span>
                      </div>
                      <div className="w-full h-1.5 flex gap-1">
                        {c.diffBars.map((filled, i) => (
                          <div key={i} className={`flex-1 ${filled ? c.diffColor : 'bg-surface-container-high'} ${i === 0 ? 'rounded-l-full' : ''} ${i === 3 ? 'rounded-r-full' : ''}`} />
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-md border-t border-outline-variant/20">
                      <div>
                        <span className="font-label-md text-xs text-on-surface-variant block">DESDE</span>
                        <span className="font-headline-sm text-on-surface">{c.price}</span>
                      </div>
                      <Button variant="default" size="sm" onClick={() => navigate('detail')} className="font-label-md flex items-center gap-1">
                        Explorar <span className="material-symbols-outlined text-[18px]">east</span>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

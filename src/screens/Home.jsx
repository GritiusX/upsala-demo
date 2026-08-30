const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'
const HERO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuApKEUUOxgHG5zjAfTTmTwAba_IP08zQsyP35DnymH6fBRuNCFcFa4sMc0Ipe4A9yyyeE8Nmw-lQfWnraIZq0SSfrJW3dnOJM2_8Aq3WhGNxrpDKngr_cOANEr_0inCmd-lPuWLa6GJmH1xWeWO8EPMo6RDIaVz6ppE73MGp_-dOShurU8QIFZIuvyb_Xes3hadM7xnx-X1-LNNPPMF2_qb1uQMJOI0PwYWQ9duYDpWvCTMnig2Xra6Uw'

const trips = [
  {
    id: 'laslenhas',
    label: 'Ski', labelIcon: 'downhill_skiing', labelColor: 'text-primary',
    badge: 'Últimos 2 cupos', badgePulse: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpygtKaAZVYaSRsCb3xkst7G9Tkf6JEmz4zewSmOKJnWeC7QfqLSlhvZRj_rk_Pe-k7RtPbieCzjhq5F9beKLzC3judrf3-A9UpGU9SrRi_yhG906jJunBXRpdhJPlE3W7rIqVaJhPcH7iAYmc7i2QK5GaFK9lbyHE0qK-vcDjiqp6WunYPFIeNHL3jrpVmrqzQbsEw353StX7rQqr2pXbOmIgfArkuN7dzxMBah4uS8ym6yoqmxIwPw',
    location: 'Mendoza, Arg', title: 'Las Leñas Snow Trip', price: '$1,200',
  },
  {
    id: 'puntadiablo',
    label: 'Surf', labelIcon: 'surfing', labelColor: 'text-secondary-container',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv9B2MpC3eFOlftIEta520YVq8s6HE5sF5HG9qBl9vBPTFmcoqK0Z5QRZtKkB1cqHdzlt8rsUF3hLtuYMMuWJ7OZQo1pWMNRlsjI0pETFCH9BJ3A3Tp8-MTyP7K7ptOIMZJJ0nxq_9diiRxtvjLCyHB0qTG129DOlyR1A3_wCeWZJHRhjGzOez7rybejBN7vr3TrKf7j09rRtlxKjA8js7W0HESERw0clWTSG21fBQHM2U15Dzs_xk8A',
    location: 'Rocha, UY', title: 'Punta del Diablo Surf Trip', price: '$900',
  },
  {
    id: 'chapadmalal',
    label: 'Surf', labelIcon: 'surfing', labelColor: 'text-secondary-container',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6kNUaFZ3BvfKty9DK8jA--RLPBb6Igo6KeLkIxpTS-fQyBLUEg7yTsXvxlJk2HglXnynKaJwuKFLCbiQCli8q9e8NRqjYfDVJukeAYsOLdAVS4CVRlTqeZHBkvQp8Nw2OmMf56XNJSsmav5AN9pjsqp3AhJSISjmqpMOmeZLR691quFUYu2s8HVBRm0p3DGG9XAmq4-dJfVNnXpnO6aZJsELuuqyE97GZiXQXlKKoMOBz8ddEX_W8w',
    location: 'Buenos Aires, Arg', title: 'Chapadmalal Surf Camp', price: '$750',
  },
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

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full text-left bg-surface-container-lowest p-md rounded-xl flex items-center justify-between group focus:outline-none shadow-sm"
      >
        <span className="font-headline-sm text-headline-sm text-on-surface">{q}</span>
        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">{open ? 'remove' : 'add'}</span>
      </button>
      {open && (
        <div className="px-md pb-md pt-xs text-on-surface-variant font-body-md bg-surface-container-lowest -mt-2 rounded-b-xl shadow-sm">
          {a}
        </div>
      )}
    </div>
  )
}

import { useState } from 'react'

export default function Home({ navigate }) {
  return (
    <main className="pt-16 pb-20 min-h-screen bg-surface">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-16 flex items-center justify-between px-margin-mobile">
          <div className="flex items-center gap-base">
            <img alt="Upsala Trips Logo" className="h-8 w-auto object-contain" src={LOGO} />
            <span className="font-headline-sm text-headline-sm text-primary">Home</span>
          </div>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-sm" src={PROFILE} />
        </div>
      </header>

      <div className="flex flex-col w-full">
        {/* Hero */}
        <div className="relative w-full h-[600px] flex items-center justify-center p-margin-mobile"
          style={{ backgroundImage: `url('${HERO}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/40 to-inverse-surface/80" />
          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[800px] mt-12">
            <span className="inline-flex items-center gap-xs px-3 py-1 rounded-full bg-surface/20 backdrop-blur-md text-on-primary font-label-md mb-sm shadow-sm">
              <span className="material-symbols-outlined text-[16px]">ac_unit</span>
              Temporada de Invierno 2024
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-primary mb-sm leading-tight">Experiencias de Aventura en Argentina</h1>
            <p className="font-body-lg text-body-lg text-primary-fixed mb-lg max-w-lg opacity-90">Ski, Surf y Naturaleza. Descubrí los rincones más increíbles con nuestra curaduría premium.</p>
            <div className="w-full bg-surface p-xs rounded-xl shadow-xl flex flex-col gap-xs mb-lg sm:flex-row sm:items-center">
              <div className="flex-1 flex items-center gap-sm px-4 py-3 bg-surface-container-lowest rounded-lg">
                <span className="material-symbols-outlined text-outline">location_on</span>
                <input className="w-full bg-transparent border-none outline-none text-on-surface font-body-md placeholder:text-outline-variant" placeholder="¿A dónde querés ir?" type="text" />
              </div>
              <div className="flex-1 flex items-center gap-sm px-4 py-3 bg-surface-container-lowest rounded-lg">
                <span className="material-symbols-outlined text-outline">calendar_month</span>
                <select className="w-full bg-transparent border-none outline-none text-on-surface font-body-md appearance-none cursor-pointer">
                  <option disabled defaultValue="">Mes del viaje</option>
                  <option>Julio 2024</option>
                  <option>Agosto 2024</option>
                  <option>Septiembre 2024</option>
                </select>
              </div>
              <button
                onClick={() => navigate('trips')}
                className="w-full sm:w-auto px-6 py-4 bg-secondary text-on-secondary font-label-md rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-xs"
              >
                <span>Explorar</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured trips */}
        <section className="py-xl px-margin-mobile bg-surface">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-lg gap-sm">
              <div>
                <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-xs">Destinos Destacados</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Próximas salidas confirmadas con cupos limitados.</p>
              </div>
              <button onClick={() => navigate('trips')} className="inline-flex items-center gap-xs text-primary font-label-md hover:text-primary-container transition-colors">
                Ver todos los trips
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
              {trips.map(trip => (
                <button
                  key={trip.id}
                  onClick={() => navigate('detail')}
                  className="group relative flex flex-col bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-[420px] text-left"
                >
                  <div className="absolute top-4 left-4 z-20 flex gap-xs">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-surface/90 backdrop-blur-md rounded-full text-on-surface font-label-md shadow-sm">
                      <span className={`material-symbols-outlined text-[14px] ${trip.labelColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{trip.labelIcon}</span>
                      {trip.label}
                    </span>
                  </div>
                  {trip.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`inline-flex items-center px-3 py-1 bg-error/90 backdrop-blur-md rounded-full text-on-error font-label-md shadow-sm ${trip.badgePulse ? 'animate-pulse' : ''}`}>
                        {trip.badge}
                      </span>
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
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-xl px-margin-mobile bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto text-center mb-lg">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-xs">La Comunidad Upsala</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Experiencias reales de viajeros que confiaron en nosotros.</p>
          </div>
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-md">
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
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-lg">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-xs">Preguntas Frecuentes</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Todo lo que necesitás saber antes de empacar.</p>
            </div>
            <div className="flex flex-col gap-xs">
              {faqs.map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-inverse-surface text-inverse-on-surface pt-xl pb-32 px-margin-mobile flex flex-col items-center text-center">
          <div className="w-12 h-12 mb-sm bg-surface/10 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">landscape</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm mb-xs">Upsala Trips</h3>
          <p className="font-body-md text-on-tertiary-container mb-lg max-w-sm">Curaduría de aventuras premium en el sur del mundo.</p>
          <div className="flex gap-md mb-lg">
            <a href="#" className="text-on-tertiary-container"><span className="material-symbols-outlined">mail</span></a>
            <a href="#" className="text-on-tertiary-container"><span className="material-symbols-outlined">call</span></a>
            <a href="#" className="text-on-tertiary-container"><span className="material-symbols-outlined">public</span></a>
          </div>
          <p className="font-body-md text-[12px] text-on-tertiary-container/50">© 2024 Upsala Trips. Todos los derechos reservados.</p>
        </footer>
      </div>
    </main>
  )
}

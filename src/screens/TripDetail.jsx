import { useState } from 'react'

const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'
const HERO_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIhP_bCnUd-sWMD9qmBYap9DMt-mLCYbgTsJ7gcxcQJWvUmeq4BaamBHxySDoh82BLvGVZzJ8H7sgzToNo-OZVNhcLEdPs9kCAuKq5j-p8SDpE-tVqQvKCoS2h-icSnaExuetcj23xY71HBRo2Yr5NsAnmzs3rBgmf6mWka3_pPEODaEiQMxdo8P3sEtf6vPG5-sNgVWNBY_507iZJeAYeWFqX0BRQUlkWwgIr-YQiEW_PVZeHz_sGeQ'
const GUIDE_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3LUub_0K1xYYE8EUbSSzqH9uE41e1cFSc-8LKFniO18igITex3MHKabYD8JOz4XnB73uug7_nRKUAFJjA-UNOiYV99SJ7avYTeqRWR-CTcYWAIPqoACjqe1MHf7CRSQz0UJBHvqje3WJO0y7Kut30lTHSY-sxg19w2URjxrvZd5DSJD_LZgcm88Fj2IOyLq5Nt5m_hjj-EwoGFntnMwmSTu3ewo-COa6-hZjs2eAPpIPqCNHTIN_FLg'
const MAP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd_HwFlJKPv2_nHeamkFhuRiNeyZvhF6-BVNbLJ9MWHBfRBY_wT2J5M_tYCGjX9XFq9uEuNpvfDvduqXkcxMTfzCKkF5p7zmTi7vh8tM3dMTtDQERtVMEUgP9-oPQfIIcBvfbhSL68cisCRNCGPLLPjTWPidjfD7ResG6fOnczDJ9B9EbDHUNMCAK1ISqEhHgTP1j_0DsKxveQzWACj2pKo-PJ1pR_ecNppPMwuvgF18G0FNYGraKQxA'

const reviews = [
  { name: 'María L.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyq3ykWD45i8jaiRPP8CG88CnnKZZLR4W16LHAIvSzicm-PUJJwu1fBakAH1YSymSkuz7jfv8ZAJxS6S2TAg71swpznncFTqwiK0-gE9Or1RCs2mJWcpJVqA7q0Jq7m_vmTNvacg_Jtju_uASZKhaU5WeE6WLEenie0qqSFaTqFnSfQrWt0onLmWtLCigBvHgNgecv5DCgA95A7pjLJJsZ8fOPOKQ2X_nUaKyNrYrLf1U00oF47pSPnw', stars: 5, text: 'Increíble experiencia. La nieve estaba perfecta y la organización de Juan fue impecable. Definitivamente volveré el próximo año.' },
  { name: 'Carlos D.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpfENsYSI9qX3EZKrvPmh5q7wWYDqb7oP35Wv9LFqHsHDpgnVsSLNLZcfEASS79UORuZWJqrbKxQDCU82mWzbxKZcCJhlckJuWX_GSBwcPp9-9T7o6XNYAQAqzHWnl_hPw2PUYo3N9Ve0I3DrEcpGZ-Bvvg7y5sWSvBwY3M_hM-xRQLRRTpYaeHfKYXQYlQ-NFTF2YwCYb2IS2sSLwc2tfYyuynkA6scQMipmo1DC-IKaX98GHlMxwxw', stars: 4.5, text: 'El hotel muy cómodo y las clases de ski me ayudaron muchísimo a mejorar mi técnica en fuera de pista.' },
  { name: 'Ana & Pablo', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF1WAmZcwsa5koWqvg2qud-6Je5CF9Z1qI69EUtyoX6cjCBbHR4ydha7lr9ohMvjcd5ew9PT25IYtvPBR8Jbr9OXC_yDVB2Hzmady8rwLPJcke8QCs0Fe67NEZS2jpF7Mz8Yz2d332fBCjSxBdqiOUiF75X_79u2Ou-wvXAdFwl86pK2Jw4uSe98Z-tM3HpwWFz_65bAb5vG5er94wviLRDo9tmv1tTmqDXgc3ATjGZC7BpvB1PqtBWg', stars: 5, text: 'Un viaje de lujo. Los paisajes son insuperables y la atención a los detalles hace que valga cada centavo.' },
]

const days = [
  { label: 'D1', title: 'Llegada y Bienvenida', desc: 'Recepción en el aeropuerto de Mendoza, traslado privado al resort en Las Leñas. Check-in, prueba de equipo y cena de bienvenida con el equipo de guías.' },
  { label: 'D2', title: 'Clínica de Esquí y Primeras Bajadas', desc: 'Mañana dedicada a perfeccionar la técnica con instructores certificados. Tarde libre para explorar las pistas principales.' },
  { label: 'D3-7', title: 'Exploración Alpina', desc: 'Días intensos de esquí, incluyendo la famosa bajada de \'Marte\' y expediciones fuera de pista si las condiciones lo permiten. Despedida y traslado de regreso.' },
]

function DayItem({ label, title, desc }) {
  const [open, setOpen] = useState(false)
  const isFirst = label === 'D1'
  return (
    <div className="bg-surface-container-lowest rounded-xl p-md shadow-sm">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpen(o => !o)}>
        <div className="flex items-center gap-md">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-headline-sm text-[16px] ${isFirst ? 'bg-primary-container text-on-primary-container' : 'bg-surface-variant text-on-surface-variant'}`}>
            {label}
          </div>
          <h3 className="font-headline-sm text-[18px] text-on-surface">{title}</h3>
        </div>
        <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>expand_more</span>
      </div>
      {open && (
        <div className="pt-md mt-md border-t border-surface-variant">
          <p className="font-body-md text-on-surface-variant">{desc}</p>
        </div>
      )}
    </div>
  )
}

export default function TripDetail({ navigate }) {
  const [liked, setLiked] = useState(false)

  return (
    <main className="pt-16 min-h-screen bg-surface">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-16 flex items-center px-margin-mobile gap-md">
          <button className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" onClick={() => navigate('trips')}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex items-center gap-base flex-1">
            <img alt="Logo" className="h-6 w-auto" src={LOGO} />
            <span className="font-headline-sm text-headline-sm text-primary truncate">Trip Detail</span>
          </div>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={PROFILE} />
        </div>
      </header>

      <div className="flex flex-col w-full pb-24">
        {/* Gallery */}
        <div className="relative w-full h-[400px] bg-surface-container-high overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out hover:scale-105"
            style={{ backgroundImage: `url('${HERO_IMG}')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          <div className="absolute top-md right-md bg-inverse-surface/80 backdrop-blur-md rounded-full px-sm py-xs flex items-center gap-xs shadow-md">
            <span className="material-symbols-outlined text-inverse-on-surface text-[18px]">ac_unit</span>
            <span className="font-label-md text-inverse-on-surface">-5°C / 120cm Nieve</span>
          </div>
          <div className="absolute bottom-md left-0 right-0 flex justify-center gap-base">
            {[0,1,2,3].map(i => <div key={i} className={`w-2 h-2 rounded-full ${i===0 ? 'bg-on-primary' : 'bg-on-primary/50'}`} />)}
          </div>
        </div>

        <div className="px-margin-mobile -mt-6 relative z-10">
          {/* Header card */}
          <div className="bg-surface-container-lowest rounded-[24px] p-md shadow-[0_10px_20px_rgba(0,0,0,0.04)] mb-xl">
            <div className="flex flex-col gap-sm">
              <div className="flex justify-between items-start">
                <h1 className="font-headline-lg-mobile text-on-surface">Las Leñas Snow Trip</h1>
                <button
                  onClick={() => setLiked(l => !l)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${liked ? 'bg-error text-on-error' : 'bg-surface-container text-primary hover:bg-primary-container'}`}
                >
                  <span className="material-symbols-outlined" style={liked ? { fontVariationSettings: "'FILL' 1" } : {}}>favorite</span>
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-md text-on-surface-variant font-body-md">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-headline-sm text-on-surface text-[18px]">4.9</span>
                  <span className="text-on-surface-variant">(24 reseñas)</span>
                </div>
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                  <span>Mendoza, Argentina</span>
                </div>
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                  <span>7 días / 6 noches</span>
                </div>
              </div>
              <div className="mt-sm flex items-center gap-sm">
                <span className="font-label-md text-on-surface-variant uppercase tracking-wider text-[12px]">Dificultad</span>
                <div className="flex gap-xs">
                  {[1,2,3,4].map(i => <div key={i} className={`w-6 h-1.5 rounded-full ${i<=2 ? 'bg-primary' : 'bg-primary/20'}`} />)}
                </div>
                <span className="font-label-md text-on-surface-variant text-[12px]">Intermedio</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <section className="mb-xl">
            <h2 className="font-headline-sm text-on-surface mb-sm">La Experiencia</h2>
            <div className="bg-surface-container rounded-xl p-md">
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Sumérgete en la inmensidad de la Cordillera de los Andes con esta expedición premium a Las Leñas. Diseñado para aventureros que buscan combinar la adrenalina del esquí de alta montaña con el confort excepcional. Disfruta de pistas fuera de serie, nieve polvo inigualable y paisajes que te dejarán sin aliento.
              </p>
              <button className="mt-sm font-label-md text-primary flex items-center gap-xs hover:text-on-primary-fixed-variant transition-colors">
                <span>Leer más</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </section>

          {/* Itinerary */}
          <section className="mb-xl">
            <h2 className="font-headline-sm text-on-surface mb-md">Itinerario</h2>
            <div className="flex flex-col gap-sm">
              {days.map(d => <DayItem key={d.label} {...d} />)}
            </div>
          </section>

          {/* Includes / Not includes */}
          <section className="mb-xl grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="bg-primary-fixed/20 rounded-xl p-md">
              <h3 className="font-headline-sm text-[18px] text-on-surface mb-sm flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary">check_circle</span> Qué incluye
              </h3>
              <ul className="flex flex-col gap-sm font-body-md text-on-surface-variant">
                {['Alojamiento 6 noches (Hotel 4*)', 'Pases de ski para 7 días', 'Clases grupales (Nivel intermedio)', 'Traslados in/out Mendoza'].map(item => (
                  <li key={item} className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-error-container/20 rounded-xl p-md">
              <h3 className="font-headline-sm text-[18px] text-on-surface mb-sm flex items-center gap-xs">
                <span className="material-symbols-outlined text-error">cancel</span> No incluye
              </h3>
              <ul className="flex flex-col gap-sm font-body-md text-on-surface-variant">
                {['Alquiler de equipo de ski/snowboard', 'Vuelos hacia/desde Mendoza', 'Comidas no especificadas'].map(item => (
                  <li key={item} className="flex items-start gap-sm">
                    <span className="material-symbols-outlined text-error text-[20px] mt-0.5">close</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Guide */}
          <section className="mb-xl">
            <h2 className="font-headline-sm text-on-surface mb-md">Tu Guía</h2>
            <div className="bg-surface-container-lowest rounded-[24px] p-md shadow-sm flex items-center gap-md">
              <img className="w-20 h-20 rounded-full object-cover shadow-sm" src={GUIDE_IMG} alt="Juan García" />
              <div>
                <h3 className="font-headline-sm text-[20px] text-on-surface">Juan García</h3>
                <p className="font-body-md text-on-surface-variant flex items-center gap-xs mt-xs">
                  <span className="material-symbols-outlined text-[18px]">snowboarding</span>
                  15 años de experiencia
                </p>
              </div>
            </div>
          </section>

          {/* Map */}
          <section className="mb-xl">
            <h2 className="font-headline-sm text-on-surface mb-md">Ubicación</h2>
            <div className="relative w-full h-[250px] rounded-xl overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${MAP_IMG}')` }} />
              <div className="absolute bottom-md left-md bg-surface-container-lowest/90 backdrop-blur-sm rounded-lg p-sm shadow-md">
                <span className="font-label-md text-on-surface flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                  Las Leñas Resort
                </span>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="mb-xl">
            <div className="flex items-center justify-between mb-md">
              <h2 className="font-headline-sm text-on-surface">Reseñas</h2>
              <button className="font-label-md text-primary">Ver todas</button>
            </div>
            <div className="flex overflow-x-auto gap-md pb-md snap-x">
              {reviews.map(r => (
                <div key={r.name} className="min-w-[280px] bg-surface-container-lowest rounded-xl p-md shadow-sm snap-center">
                  <div className="flex items-center gap-sm mb-sm">
                    <img className="w-10 h-10 rounded-full object-cover" src={r.img} alt={r.name} />
                    <div>
                      <p className="font-label-md text-on-surface">{r.name}</p>
                      <div className="flex text-secondary-container">
                        {[1,2,3,4,5].map(i => (
                          <span key={i} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: i <= Math.floor(r.stars) ? "'FILL' 1" : "'FILL' 0" }}>
                            {i <= r.stars ? (i === Math.ceil(r.stars) && r.stars % 1 !== 0 ? 'star_half' : 'star') : 'star'}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="font-body-md text-on-surface-variant text-sm line-clamp-3">{r.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sticky booking */}
        <div className="fixed bottom-0 left-0 right-0 bg-surface-container-lowest/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-md z-40 pb-safe">
          <div className="max-w-[768px] mx-auto flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-headline-md text-on-surface">$1200 <span className="font-body-md text-on-surface-variant">/ persona</span></span>
              <span className="font-label-md text-error flex items-center gap-xs">
                <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
                Quedan 3 lugares
              </span>
            </div>
            <button
              onClick={() => navigate('checkout')}
              className="bg-secondary-container text-on-secondary-container font-headline-sm text-[16px] px-lg py-sm rounded-lg shadow-md hover:bg-secondary transition-colors hover:text-on-secondary"
            >
              Reservar Ahora
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

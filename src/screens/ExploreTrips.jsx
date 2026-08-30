const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'

const trips = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAne6WQTgAjcRLSvr376elHiAVHJVjS3bDBiHT7cdYMkaMVtcpU-FIT1FT0fFWeX2s6Gmm2S3OUYnHIZtXHiEOhw2EMgz_6pO4RoQ886uHNmc2oLgm0qtjnndVligtMTt50PhvIv2efSIkdMKYWzZ5j9Yl3c_NodwdWdcVMOV2KdYkdFVZ_Wm0XEVICYcEix-vP-iF343r1dCXXIWUxTNldlcRxKx3vyycywaoEBdMZv8bdFrly7MH0pQ',
    badge: '-2°C', badgeIcon: 'thermostat', title: 'Expedición Cerro Catedral', date: '15 - 22 Julio',
    price: '$1,200', rating: '4.9', spots: 4, total: 12, bar: 'bg-secondary',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvD7AhqXp9ZCXGI11UwpeMeKC2dUKTSG6aLGaQHanUsC8brCozrDEukVLcz9c8eESSeocpIQ2m4OzLgJC9qi9yk1np7MyzGR6G6iqs7EBrclZnMoJqhwwpzF0zt0qszzXAWGpi_LP-CoRof1GTPo2s9468pOZnuhBQJCqxIowXTfpN8d9iasI4TvJZ0d1ZaCtdoqoNvs_wt32OOWwiTaocAftYq3os_QkNIP1UvQ-UL28_6Wlu7h4hUg',
    badge: '3m', badgeIcon: 'waves', title: 'Surf Camp Chapadmalal', date: '10 - 15 Noviembre',
    price: '$850', rating: '4.7', spots: 8, total: 20, bar: 'bg-primary',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAne6WQTgAjcRLSvr376elHiAVHJVjS3bDBiHT7cdYMkaMVtcpU-FIT1FT0fFWeX2s6Gmm2S3OUYnHIZtXHiEOhw2EMgz_6pO4RoQ886uHNmc2oLgm0qtjnndVligtMTt50PhvIv2efSIkdMKYWzZ5j9Yl3c_NodwdWdcVMOV2KdYkdFVZ_Wm0XEVICYcEix-vP-iF343r1dCXXIWUxTNldlcRxKx3vyycywaoEBdMZv8bdFrly7MH0pQ',
    badge: 'NUEVO', badgeIcon: 'new_releases', title: 'Patagonia Ice Trek', date: '12 - 18 Octubre',
    price: '$2,100', rating: '5.0', spots: 6, total: 12, bar: 'bg-secondary',
  },
]

import { useState } from 'react'

export default function ExploreTrips({ navigate }) {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [activeMonth, setActiveMonth] = useState('Julio')

  return (
    <main className="pt-16 md:pt-20 pb-20 md:pb-0 min-h-screen bg-surface">
      {/* Mobile header - hidden on desktop */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-16 flex items-center justify-between px-margin-mobile">
          <div className="flex items-center gap-base">
            <img alt="Upsala Trips Logo" className="h-8 w-auto object-contain" src={LOGO} />
            <span className="font-headline-sm text-headline-sm text-primary">Trips</span>
          </div>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-sm" src={PROFILE} />
        </div>
      </header>

      {/* Desktop: flex row with sidebar + content. Mobile: column (existing) */}
      <div className="flex flex-col md:flex-row md:gap-lg md:px-margin-desktop md:py-lg md:max-w-[1440px] md:mx-auto px-margin-mobile py-lg">

        {/* Desktop Sidebar - hidden on mobile */}
        <aside className="hidden md:flex flex-col gap-lg w-72 shrink-0">
          <div className="bg-surface-container rounded-xl p-md flex flex-col gap-md">
            <h3 className="font-headline-sm text-on-surface">Destination</h3>
            {['Las Leñas', 'Patagonia', 'Atacama', 'Iguazú'].map(dest => (
              <label key={dest} className="flex items-center gap-sm cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary" />
                <span className="font-body-md text-on-surface">{dest}</span>
              </label>
            ))}
          </div>
          <div className="bg-surface-container rounded-xl p-md flex flex-col gap-md">
            <h3 className="font-headline-sm text-on-surface">Activity Level</h3>
            {[{icon:'directions_walk',label:'Beginner'},{icon:'hiking',label:'Intermediate'},{icon:'terrain',label:'Expert'}].map(a => (
              <label key={a.label} className="flex items-center gap-sm cursor-pointer">
                <span className="material-symbols-outlined text-primary">{a.icon}</span>
                <span className="font-body-md text-on-surface">{a.label}</span>
              </label>
            ))}
          </div>
          <div className="bg-surface-container rounded-xl p-md flex flex-col gap-md">
            <h3 className="font-headline-sm text-on-surface">Price Range</h3>
            <div className="flex justify-between font-label-md text-on-surface-variant">
              <span>$500</span><span>$5,000</span>
            </div>
            <input type="range" min="500" max="5000" defaultValue="3000" className="w-full accent-primary" />
          </div>
        </aside>

        {/* Main content area */}
        <div className="flex-1 flex flex-col gap-lg">
          {/* Mobile filter controls - hidden on desktop */}
          <div className="md:hidden flex flex-col gap-sm">
            <div className="flex justify-between items-center">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Explorar Viajes</h1>
              <button
                onClick={() => setFiltersOpen(o => !o)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>

            {filtersOpen && (
              <div className="flex flex-col gap-md bg-surface-container-lowest p-md rounded-xl shadow-sm">
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Destino</label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-low text-on-surface font-body-md rounded-lg py-sm px-md appearance-none focus:outline-none">
                      <option>Todos los destinos</option>
                      <option>Patagonia Argentina</option>
                      <option>Costa Atlántica</option>
                      <option>Mendoza</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">expand_more</span>
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Mes</label>
                  <div className="flex overflow-x-auto gap-xs pb-xs">
                    {['Julio', 'Agosto', 'Septiembre', 'Octubre'].map(m => (
                      <button
                        key={m}
                        onClick={() => setActiveMonth(m)}
                        className={`shrink-0 px-md py-sm rounded-full font-label-md text-label-md transition-colors ${activeMonth === m ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant'}`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Actividad</label>
                  <div className="flex gap-sm">
                    {[{icon:'downhill_skiing',label:'Ski'},{icon:'surfing',label:'Surf'}].map(a => (
                      <button key={a.icon} className="flex-1 flex flex-col items-center justify-center gap-xs p-sm rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors group">
                        <span className="material-symbols-outlined text-[32px] group-hover:text-primary transition-colors">{a.icon}</span>
                        <span className="font-label-md text-label-md">{a.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Desktop page title */}
          <div className="hidden md:block">
            <h1 className="font-headline-lg-mobile text-on-surface">Explorar Expediciones</h1>
            <p className="font-body-md text-on-surface-variant mt-xs">Salidas confirmadas con cupos limitados.</p>
          </div>

          {/* Trip cards - responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {trips.map(trip => (
              <article
                key={trip.title}
                className="flex flex-col bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_10px_20px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                onClick={() => navigate('detail')}
              >
                <div className="relative w-full h-64" style={{ backgroundImage: `url('${trip.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001453]/80 via-transparent to-[#001453]/20" />
                  <div className="absolute top-sm right-sm">
                    <span className="bg-surface/90 backdrop-blur-sm text-on-surface font-label-md text-label-md px-sm py-xs rounded-full flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[16px]">{trip.badgeIcon}</span>
                      {trip.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-md left-md right-md flex flex-col gap-xs text-on-primary">
                    <h3 className="font-headline-sm text-headline-sm truncate">{trip.title}</h3>
                    <p className="font-body-md text-body-md opacity-90 flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                      {trip.date}
                    </p>
                  </div>
                </div>
                <div className="p-md flex flex-col gap-sm">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-xs">
                      <span className="font-label-md text-label-md text-on-surface-variant">Precio p/p</span>
                      <span className="font-headline-sm text-headline-sm text-primary">{trip.price}</span>
                    </div>
                    <div className="flex items-center gap-xs bg-surface-container py-xs px-sm rounded-full">
                      <span className="material-symbols-outlined text-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-md text-label-md text-on-surface">{trip.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-xs pt-xs">
                    <div className="flex justify-between font-label-md text-label-md text-on-surface-variant">
                      <span>Cupos disponibles</span>
                      <span>{trip.spots}/{trip.total}</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className={`h-full ${trip.bar} rounded-full`} style={{ width: `${(trip.spots / trip.total) * 100}%` }} />
                    </div>
                  </div>
                  <button
                    onClick={e => { e.stopPropagation(); navigate('detail') }}
                    className="mt-sm w-full py-sm rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-[#c24600] transition-colors"
                  >
                    Ver Detalles
                  </button>
                </div>
              </article>
            ))}
          </div>

          <button className="w-full py-md text-center font-label-md text-label-md text-primary flex flex-col items-center gap-xs mb-lg">
            <span>Cargar más aventuras</span>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </div>
    </main>
  )
}

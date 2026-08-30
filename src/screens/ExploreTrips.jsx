import { useState } from 'react'
import Footer from '../components/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Images ─────────────────────────────────────────────────────── */
const LOGO    = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'
const GLACIER = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAne6WQTgAjcRLSvr376elHiAVHJVjS3bDBiHT7cdYMkaMVtcpU-FIT1FT0fFWeX2s6Gmm2S3OUYnHIZtXHiEOhw2EMgz_6pO4RoQ886uHNmc2oLgm0qtjnndVligtMTt50PhvIv2efSIkdMKYWzZ5j9Yl3c_NodwdWdcVMOV2KdYkdFVZ_Wm0XEVICYcEix-vP-iF343r1dCXXIWUxTNldlcRxKx3vyycywaoEBdMZv8bdFrly7MH0pQ'
const SURF1   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvD7AhqXp9ZCXGI11UwpeMeKC2dUKTSG6aLGaQHanUsC8brCozrDEukVLcz9c8eESSeocpIQ2m4OzLgJC9qi9yk1np7MyzGR6G6iqs7EBrclZnMoJqhwwpzF0zt0qszzXAWGpi_LP-CoRof1GTPo2s9468pOZnuhBQJCqxIowXTfpN8d9iasI4TvJZ0d1ZaCtdoqoNvs_wt32OOWwiTaocAftYq3os_QkNIP1UvQ-UL28_6Wlu7h4hUg'
const SURF2   = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2PB2E_l8B9Oo8WpwG5Du4Tnslmkv2I8OVMOFvVCgwr3V7sJNkkC1VQU7oGnUDgCKGrMyrGXlRJ5JlPG0JruIVpCY4JoLLR3280A1A86J8ZqToAgaPt7nt3tuHB2ra8BtfaxGlYA2PKrzEwU_VtNnl4B7V8mQ51z31dzNA8y9ipjP9hXflFWhfnvCVqN5rotZnASYEmAgB-W4Dm2xND49rGI9FTaX3DaFuaCUjAiA1YckWiDHJ1fL1UA'

/* ── Static data ─────────────────────────────────────────────────── */
const DEST_OPTIONS = [
  { label: 'Argentina (Todo)', count: 42 },
  { label: 'Punta del Diablo, UY', count: 8 },
  { label: 'Mendoza, Arg', count: 12 },
]

const ACTIVITY_LEVELS = [
  { icon: 'surfing',  label: 'Moderado' },
  { icon: 'hiking',   label: 'Intenso'  },
  { icon: 'ac_unit',  label: 'Extremo'  },
]

const mobileTrips = [
  { img: GLACIER, badge: '1m+ nieve', badgeIcon: 'ac_unit',      title: 'Las Leñas Snow Trip',         date: '15 - 22 Julio',     price: '$1,200', rating: '4.8', spots: 4,  total: 12, bar: 'bg-primary' },
  { img: SURF1,   badge: 'Olas 2m',   badgeIcon: 'waves',        title: 'Chapadmalal Surf Camp',        date: '10 - 15 Noviembre', price: '$750',   rating: '4.9', spots: 8,  total: 20, bar: 'bg-secondary-container' },
  { img: SURF2,   badge: 'NUEVO',     badgeIcon: 'new_releases',  title: 'Punta del Diablo Surf Trip',  date: '12 - 18 Octubre',  price: '$900',   rating: '5.0', spots: 6,  total: 12, bar: 'bg-primary' },
]

const deskCards = [
  {
    img: SURF1, badge: 'Alta Demanda', badgeIcon: 'local_fire_department', badgeIconColor: 'text-secondary-container',
    location: 'Buenos Aires, Argentina', title: 'Chapadmalal Surf Camp',
    desc: 'Surf camp completo en la costa atlántica bonaerense. Clases, equipamiento, alojamiento frente al mar y las mejores olas del país.',
    duration: '5 Días', difficulty: 'Moderado', diffDots: [true, true, false, false],
    date: 'Nov 10 - Nov 15', spotsText: '8 cupos', spotsColor: 'text-primary', spotsBar: 'bg-primary', spotsPct: 40,
    price: '$750',
  },
  {
    img: SURF2, badge: 'Nueva Ruta', badgeIcon: 'new_releases', badgeIconColor: 'text-primary',
    location: 'Rocha, Uruguay', title: 'Punta del Diablo Surf Trip',
    desc: 'Las mejores olas de Uruguay en uno de los destinos más bohemios de Sudamérica. Surf, sol y comunidad en Rocha.',
    duration: '7 Días', difficulty: 'Moderado', diffDots: [true, true, false, false],
    date: 'Oct 12 - Oct 18', spotsText: 'Disponible', spotsColor: 'text-primary', spotsBar: 'bg-primary', spotsPct: 30,
    price: '$900',
  },
  {
    img: GLACIER, badge: null,
    location: 'Mendoza, Argentina', title: 'Las Leñas Snow Trip',
    desc: 'El mejor resort de nieve de Argentina. Pistas desafiantes, après-ski de primer nivel y una semana épica en la montaña mendocina.',
    duration: '7 Días', difficulty: 'Avanzado', diffDots: [true, true, true, false],
    date: 'Jul 15 - Jul 22', spotsText: '4 cupos', spotsColor: 'text-secondary-container', spotsBar: 'bg-secondary-container', spotsPct: 75,
    price: '$1,200',
  },
]

export default function ExploreTrips({ navigate }) {
  const [filtersOpen, setFiltersOpen]   = useState(false)
  const [activeMonth, setActiveMonth]   = useState('Julio')
  const [checkedDests, setCheckedDests] = useState({ 'Argentina (Todo)': true, 'Punta del Diablo, UY': false, 'Mendoza, Arg': false })
  const [activityLevel, setActivityLevel] = useState('Moderado')
  const [priceMax, setPriceMax]         = useState(1500)
  const [favorites, setFavorites]       = useState(new Set())
  const [activeFilters, setActiveFilters] = useState(['Argentina', 'Moderado'])

  const toggleFav = (title) => setFavorites(prev => {
    const next = new Set(prev)
    next.has(title) ? next.delete(title) : next.add(title)
    return next
  })

  const toggleDest = (label) => setCheckedDests(prev => ({ ...prev, [label]: !prev[label] }))
  const removeFilter = (f) => setActiveFilters(prev => prev.filter(x => x !== f))

  const handleApplyFilters = () => {
    const next = []
    Object.entries(checkedDests).forEach(([k, v]) => { if (v) next.push(k.split(' ')[0]) })
    next.push(activityLevel)
    setActiveFilters([...new Set(next)])
  }

  return (
    <main className="min-h-screen bg-surface">

      {/* ══════════════════ MOBILE ══════════════════ */}
      <div className="md:hidden">
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
          <div className="h-16 flex items-center justify-between px-margin-mobile">
            <div className="flex items-center gap-base">
              <img alt="Logo" className="h-8 w-auto object-contain" src={LOGO} />
              <span className="font-headline-sm text-primary">Viajes</span>
            </div>
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={PROFILE} />
          </div>
        </header>

        <div className="pt-16 pb-20 px-margin-mobile py-lg flex flex-col gap-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-headline-lg-mobile text-on-surface">Explorar Viajes</h1>
            <Button variant="ghost" size="icon" onClick={() => setFiltersOpen(o => !o)} className="w-10 h-10 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container">
              <span className="material-symbols-outlined">tune</span>
            </Button>
          </div>

          {filtersOpen && (
            <div className="flex flex-col gap-md bg-surface-container-lowest p-md rounded-xl shadow-sm">
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-on-surface-variant uppercase tracking-wider">Destino</label>
                <select className="w-full bg-surface-container-low text-on-surface font-body-md rounded-lg py-sm px-md appearance-none focus:outline-none">
                  <option>Todos los destinos</option>
                  <option>Argentina (Todo)</option>
                  <option>Punta del Diablo, UY</option>
                  <option>Mendoza, Arg</option>
                </select>
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-on-surface-variant uppercase tracking-wider">Mes</label>
                <div className="flex overflow-x-auto gap-xs pb-xs">
                  {['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'].map(m => (
                    <button key={m} onClick={() => setActiveMonth(m)}
                      className={`shrink-0 px-md py-sm rounded-full font-label-md transition-colors ${activeMonth === m ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant'}`}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-md">
            {mobileTrips.map(trip => (
              <article key={trip.title} className="flex flex-col bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer" onClick={() => navigate('detail')}>
                <div className="relative w-full h-64" style={{ backgroundImage: `url('${trip.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001453]/80 via-transparent to-[#001453]/20" />
                  <div className="absolute top-sm right-sm">
                    <span className="bg-surface/90 backdrop-blur-sm text-on-surface font-label-md px-sm py-xs rounded-full flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[16px]">{trip.badgeIcon}</span>
                      {trip.badge}
                    </span>
                  </div>
                  <button
                    className="absolute top-sm left-sm w-9 h-9 bg-surface/80 rounded-full flex items-center justify-center shadow-sm transition-colors"
                    onClick={e => { e.stopPropagation(); toggleFav(trip.title) }}
                  >
                    <span className={`material-symbols-outlined text-[20px] transition-colors ${favorites.has(trip.title) ? 'text-red-500' : 'text-on-surface-variant'}`}
                      style={{ fontVariationSettings: favorites.has(trip.title) ? "'FILL' 1" : "'FILL' 0" }}>
                      favorite
                    </span>
                  </button>
                  <div className="absolute bottom-md left-md right-md flex flex-col gap-xs text-on-primary">
                    <h3 className="font-headline-sm truncate">{trip.title}</h3>
                    <p className="font-body-md opacity-90 flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                      {trip.date}
                    </p>
                  </div>
                </div>
                <div className="p-md flex flex-col gap-sm">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="font-label-md text-on-surface-variant block">Precio p/p</span>
                      <span className="font-headline-sm text-primary">{trip.price}</span>
                    </div>
                    <div className="flex items-center gap-xs bg-surface-container py-xs px-sm rounded-full">
                      <span className="material-symbols-outlined text-secondary-container text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-md text-on-surface">{trip.rating}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-label-md text-on-surface-variant mb-xs">
                      <span>Cupos disponibles</span>
                      <span>{trip.spots}/{trip.total}</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                      <div className={`h-full ${trip.bar} rounded-full`} style={{ width: `${(trip.spots / trip.total) * 100}%` }} />
                    </div>
                  </div>
                  <Button onClick={e => { e.stopPropagation(); navigate('detail') }} className="mt-sm w-full rounded-lg font-label-md">Ver Detalles</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════ DESKTOP ══════════════════ */}
      <div className="hidden md:block pt-20">

        {/* ── Hero section con fondo glaciar ── */}
        <section className="relative w-full px-margin-desktop py-xl overflow-hidden">
          {/* Glacier background at low opacity */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${GLACIER}')`, opacity: 0.18 }}
          />
          <div className="absolute inset-0 bg-surface-container-low/60" />

          {/* Content */}
          <div className="relative z-10 flex items-end justify-between gap-xl">
            <div>
              <span className="block text-primary font-label-md uppercase tracking-wider mb-sm">Explorar</span>
              <h1 className="font-headline-xl text-on-surface">Expediciones Curadas</h1>
              <p className="font-body-lg text-on-surface-variant mt-md" style={{ maxWidth: '560px' }}>
                Encontrá tu próxima aventura en los mejores destinos del sur. Filtrá por nivel de actividad, duración y entorno para descubrir el trip perfecto.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-md shrink-0">
              <span className="text-on-surface-variant font-label-md uppercase">Ordenar por:</span>
              <select className="bg-surface font-body-md text-on-surface px-md py-sm rounded-lg shadow-sm border border-outline-variant/30 focus:outline-none focus:border-primary appearance-none cursor-pointer">
                <option>Recomendados</option>
                <option>Fecha: Próximas</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
              </select>
            </div>
          </div>
        </section>

        {/* ── Sidebar + grid ── */}
        <section className="w-full px-margin-desktop py-lg flex items-start gap-gutter">

          {/* Sidebar */}
          <aside className="w-72 shrink-0 space-y-lg sticky top-32">

            {/* Destino */}
            <div className="space-y-md">
              <h3 className="font-headline-sm text-on-surface">Destino</h3>
              <div className="flex flex-col gap-sm">
                {DEST_OPTIONS.map(({ label, count }) => (
                  <label key={label} className="flex items-center gap-sm cursor-pointer group">
                    <div
                      onClick={() => toggleDest(label)}
                      className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors shrink-0 ${
                        checkedDests[label]
                          ? 'bg-primary border-primary'
                          : 'border-outline-variant hover:border-primary'
                      }`}
                    >
                      {checkedDests[label] && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span
                      onClick={() => toggleDest(label)}
                      className={`font-body-md transition-colors ${checkedDests[label] ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}
                    >
                      {label}
                    </span>
                    <span className="ml-auto font-label-md text-on-surface-variant">{count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Nivel de actividad */}
            <div className="space-y-md">
              <h3 className="font-headline-sm text-on-surface">Nivel de Actividad</h3>
              <div className="grid grid-cols-3 gap-xs">
                {ACTIVITY_LEVELS.map(({ icon, label }) => {
                  const isActive = activityLevel === label
                  return (
                    <button
                      key={label}
                      onClick={() => setActivityLevel(label)}
                      className={`flex flex-col items-center justify-center p-sm rounded-lg border-2 transition-all ${
                        isActive
                          ? 'bg-primary border-primary shadow-md'
                          : 'bg-surface border-outline-variant hover:border-primary'
                      }`}
                    >
                      <span className={`material-symbols-outlined mb-xs text-[22px] ${isActive ? 'text-white' : 'text-on-surface-variant'}`}>{icon}</span>
                      <span className={`font-label-md text-[10px] ${isActive ? 'text-white' : 'text-on-surface-variant'}`}>{label}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Rango de precio */}
            <div className="space-y-md">
              <h3 className="font-headline-sm text-on-surface">Rango de Precio</h3>
              <div className="px-xs">
                <input
                  type="range"
                  min={500}
                  max={3000}
                  step={50}
                  value={priceMax}
                  onChange={e => setPriceMax(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-on-surface-variant font-label-md">
                <span>$500</span>
                <span className="text-primary font-semibold">Hasta ${priceMax.toLocaleString()}</span>
              </div>
            </div>

            {/* Aplicar filtros */}
            <button
              onClick={handleApplyFilters}
              className="w-full py-3 rounded-lg border-2 border-primary text-primary font-label-md uppercase tracking-wide transition-all hover:bg-primary hover:text-white"
            >
              Aplicar Filtros
            </button>
          </aside>

          {/* Cards area */}
          <div className="flex-1 min-w-0">

            {/* Active filters */}
            <div className="flex flex-wrap items-center gap-sm mb-lg">
              <span className="font-body-md text-on-surface-variant">Filtros activos:</span>
              {activeFilters.map(f => (
                <span key={f} className="inline-flex items-center gap-xs px-sm py-xs bg-primary/10 text-primary rounded-full font-label-md border border-primary/20">
                  {f}
                  <button onClick={() => removeFilter(f)} className="hover:text-error transition-colors ml-0.5">
                    <span className="material-symbols-outlined text-[14px] leading-none">close</span>
                  </button>
                </span>
              ))}
              {activeFilters.length > 0 && (
                <button onClick={() => setActiveFilters([])} className="font-label-md text-on-surface-variant hover:text-primary ml-sm transition-colors underline underline-offset-2">
                  Borrar todo
                </button>
              )}
              <span className="ml-auto font-body-md text-on-surface-variant">{deskCards.length} resultados</span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg">
              {deskCards.map(c => (
                <article
                  key={c.title}
                  className="group relative flex flex-col bg-surface rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => navigate('detail')}
                >
                  {/* Image */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${c.img}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                    {c.badge && (
                      <div className="absolute top-md left-md">
                        <Badge className="inline-flex items-center gap-1 bg-surface-container/90 backdrop-blur-sm text-on-surface px-3 py-1 rounded-full font-label-md text-xs shadow-sm">
                          <span className={`material-symbols-outlined text-[14px] ${c.badgeIconColor}`}>{c.badgeIcon}</span>
                          {c.badge}
                        </Badge>
                      </div>
                    )}
                    {/* Favorite button */}
                    <button
                      className="absolute top-md right-md w-10 h-10 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm transition-all hover:scale-110"
                      onClick={e => { e.stopPropagation(); toggleFav(c.title) }}
                    >
                      <span
                        className={`material-symbols-outlined text-[20px] transition-colors ${favorites.has(c.title) ? 'text-red-500' : 'text-on-surface-variant'}`}
                        style={{ fontVariationSettings: favorites.has(c.title) ? "'FILL' 1" : "'FILL' 0" }}
                      >
                        favorite
                      </span>
                    </button>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-md pt-sm z-10 bg-surface relative -mt-6">
                    <div className="flex items-center gap-1 mb-sm text-on-surface-variant font-label-md text-xs uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      {c.location}
                    </div>
                    <h2 className="font-headline-md text-on-surface leading-tight mb-xs">{c.title}</h2>
                    <p className="font-body-md text-on-surface-variant line-clamp-2 mb-md">{c.desc}</p>

                    <div className="flex items-center justify-between py-sm border-t border-b border-surface-variant mb-md">
                      <div>
                        <span className="font-label-md text-on-surface-variant text-xs uppercase block">Duración</span>
                        <span className="font-body-md text-on-surface font-semibold">{c.duration}</span>
                      </div>
                      <div className="w-px h-8 bg-surface-variant" />
                      <div>
                        <span className="font-label-md text-on-surface-variant text-xs uppercase block">Dificultad</span>
                        <span className="font-body-md text-on-surface font-semibold flex items-center gap-1">
                          {c.difficulty}
                          <div className="flex gap-[2px] ml-1">
                            {c.diffDots.map((filled, i) => (
                              <div key={i} className={`w-2 h-2 rounded-full ${filled ? 'bg-primary' : 'bg-surface-variant'}`} />
                            ))}
                          </div>
                        </span>
                      </div>
                    </div>

                    <div className="mb-md">
                      <div className="flex justify-between items-end mb-1">
                        <span className="font-label-md text-on-surface-variant text-xs uppercase">{c.date}</span>
                        <span className={`font-label-md text-xs ${c.spotsColor}`}>{c.spotsText}</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                        <div className={`h-full ${c.spotsBar} rounded-full transition-all`} style={{ width: `${c.spotsPct}%` }} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <span className="font-label-md text-on-surface-variant text-xs block">Desde</span>
                        <span className="font-headline-sm text-on-surface">{c.price}</span>
                      </div>
                      <button
                        onClick={e => { e.stopPropagation(); navigate('detail') }}
                        className="px-md py-2 rounded-lg bg-primary text-on-primary font-label-md transition-all hover:bg-primary/90 hover:text-white shadow-sm"
                      >
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-xs mt-xl">
              <button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              {[1, 2, 3].map(n => (
                <button key={n} className={`w-10 h-10 rounded-lg flex items-center justify-center font-label-md transition-colors ${n === 1 ? 'bg-primary text-on-primary' : 'text-on-surface hover:bg-surface-container'}`}>{n}</button>
              ))}
              <span className="text-on-surface-variant mx-xs">...</span>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}

import { useState } from 'react'
import Footer from '../components/Footer'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'

/* Mobile trips */
const mobileTrips = [
  { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAne6WQTgAjcRLSvr376elHiAVHJVjS3bDBiHT7cdYMkaMVtcpU-FIT1FT0fFWeX2s6Gmm2S3OUYnHIZtXHiEOhw2EMgz_6pO4RoQ886uHNmc2oLgm0qtjnndVligtMTt50PhvIv2efSIkdMKYWzZ5j9Yl3c_NodwdWdcVMOV2KdYkdFVZ_Wm0XEVICYcEix-vP-iF343r1dCXXIWUxTNldlcRxKx3vyycywaoEBdMZv8bdFrly7MH0pQ', badge: '-2°C', badgeIcon: 'thermostat', title: 'Expedición Cerro Catedral', date: '15 - 22 Julio', price: '$1,200', rating: '4.9', spots: 4, total: 12, bar: 'bg-secondary' },
  { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvD7AhqXp9ZCXGI11UwpeMeKC2dUKTSG6aLGaQHanUsC8brCozrDEukVLcz9c8eESSeocpIQ2m4OzLgJC9qi9yk1np7MyzGR6G6iqs7EBrclZnMoJqhwwpzF0zt0qszzXAWGpi_LP-CoRof1GTPo2s9468pOZnuhBQJCqxIowXTfpN8d9iasI4TvJZ0d1ZaCtdoqoNvs_wt32OOWwiTaocAftYq3os_QkNIP1UvQ-UL28_6Wlu7h4hUg', badge: '3m', badgeIcon: 'waves', title: 'Surf Camp Chapadmalal', date: '10 - 15 Noviembre', price: '$850', rating: '4.7', spots: 8, total: 20, bar: 'bg-primary' },
  { img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAne6WQTgAjcRLSvr376elHiAVHJVjS3bDBiHT7cdYMkaMVtcpU-FIT1FT0fFWeX2s6Gmm2S3OUYnHIZtXHiEOhw2EMgz_6pO4RoQ886uHNmc2oLgm0qtjnndVligtMTt50PhvIv2efSIkdMKYWzZ5j9Yl3c_NodwdWdcVMOV2KdYkdFVZ_Wm0XEVICYcEix-vP-iF343r1dCXXIWUxTNldlcRxKx3vyycywaoEBdMZv8bdFrly7MH0pQ', badge: 'NUEVO', badgeIcon: 'new_releases', title: 'Patagonia Ice Trek', date: '12 - 18 Octubre', price: '$2,100', rating: '5.0', spots: 6, total: 12, bar: 'bg-secondary' },
]

/* Desktop cards */
const deskCards = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_njxmnsDM6fO6HggG-9TSJRwDeEVomg9Re9M5-jvDFSRv79UfzIg_mixVg4DDlJDZ2lF2lSsB_d37KsNEeAYnm-deWln2ZoGYyk4MW-VGrRX_nDCb73I3eQAAmj-PCj6_2X3hxmqIqylmUzISOzWw3H8Pg8AuoDgkJo8jI2kYkeyH4uJCHVmO3rL0gp3lgk91j4WdHcEjeEFb_YqX-B9Ho2vaB7YMLxVMmKDDE4jA5oY_UYDg1NjBTw',
    badge: 'High Demand', badgeIcon: 'local_fire_department', badgeIconColor: 'text-secondary',
    location: 'El Chaltén, Argentina', title: 'Fitz Roy Massif Trek',
    desc: 'An iconic multi-day circuit navigating the rugged granite spires and glacial valleys of Los Glaciares National Park.',
    duration: '7 Days', difficulty: 'Strenuous', diffDots: [true,true,true,false],
    date: 'Nov 12 - Nov 18', spotsText: '4 spots left', spotsColor: 'text-secondary', spotsBar: 'bg-secondary', spotsPct: 80,
    price: '$1,850', btnStyle: 'bg-primary text-on-primary hover:bg-on-primary-fixed-variant',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2PB2E_l8B9Oo8WpwG5Du4Tnslmkv2I8OVMOFvVCgwr3V7sJNkkC1VQU7oGnUDgCKGrMyrGXlRJ5JlPG0JruIVpCY4JoLLR3280A1A86J8ZqToAgaPt7nt3tuHB2ra8BtfaxGlYA2PKrzEwU_VtNnl4B7V8mQ51z31dzNA8y9ipjP9hXflFWhfnvCVqN5rotZnASYEmAgB-W4Dm2xND49rGI9FTaX3DaFuaCUjAiA1YckWiDHJ1fL1UA',
    badge: 'New Route', badgeIcon: 'new_releases', badgeIconColor: 'text-primary',
    location: 'Torres del Paine, Chile', title: 'Grey Glacier Kayak',
    desc: 'Navigate through massive icebergs in a double sea kayak, approaching the towering blue walls of Glacier Grey.',
    duration: '3 Days', difficulty: 'Moderate', diffDots: [true,true,false,false],
    date: 'Dec 01 - Dec 03', spotsText: 'Available', spotsColor: 'text-primary', spotsBar: 'bg-primary', spotsPct: 30,
    price: '$950', btnStyle: 'bg-surface text-primary border border-primary hover:bg-primary-container',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyaht2pi1GzdCE99zkmgBf5tRXZ8izQohXTAIKvQTHpR_nlGFQUs7J4YvScZQfAN0rApfcmLwtjZysVvx_qQTN4t1Io9yp7LdKPxu0t5eGBWBTt4_86aEjf0Y1hTR2NHH3ZXSNKovbcVABYrZ_ajePfd_pk09Nodyv-qqNlxm56SFaoXfcJOGB2v1jnQkgXY6HQ4nVitJXNbsEVurYUa_ZnLkQqDUWerON5yqhRicaWApWrsffXD9XVg',
    badge: null,
    location: 'Atacama, Chile', title: 'Altiplano Overland',
    desc: 'An intense 4x4 expedition crossing the high-altitude deserts, salt flats, and geothermal fields of northern Chile.',
    duration: '10 Days', difficulty: 'Extreme', diffDots: [true,true,true,true],
    date: 'Jan 10 - Jan 20', spotsText: '2 spots left', spotsColor: 'text-secondary', spotsBar: 'bg-secondary', spotsPct: 90,
    price: '$3,200', btnStyle: 'bg-surface text-primary border border-primary hover:bg-primary-container',
  },
]

export default function ExploreTrips({ navigate }) {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [activeMonth, setActiveMonth] = useState('Julio')

  return (
    <main className="min-h-screen bg-surface">

      {/* ══════════════════ MOBILE ══════════════════ */}
      <div className="md:hidden">
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
          <div className="h-16 flex items-center justify-between px-margin-mobile">
            <div className="flex items-center gap-base">
              <img alt="Upsala Trips Logo" className="h-8 w-auto object-contain" src={LOGO} />
              <span className="font-headline-sm text-headline-sm text-primary">Trips</span>
            </div>
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-sm" src={PROFILE} />
          </div>
        </header>
        <div className="pt-16 pb-20 px-margin-mobile py-lg flex flex-col gap-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Explorar Viajes</h1>
            <Button variant="ghost" size="icon" onClick={() => setFiltersOpen(o => !o)} className="w-10 h-10 rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container">
              <span className="material-symbols-outlined">tune</span>
            </Button>
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
                    <button key={m} onClick={() => setActiveMonth(m)} className={`shrink-0 px-md py-sm rounded-full font-label-md text-label-md transition-colors ${activeMonth === m ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant'}`}>{m}</button>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col gap-md">
            {mobileTrips.map(trip => (
              <article key={trip.title} className="flex flex-col bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-[0_10px_20px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer" onClick={() => navigate('detail')}>
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
                  <Button onClick={e => { e.stopPropagation(); navigate('detail') }} className="mt-sm w-full rounded-lg font-label-md text-label-md">Ver Detalles</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════ DESKTOP ══════════════════ */}
      <div className="hidden md:block pt-20">
        {/* Header area */}
        <section className="w-full px-margin-desktop py-xl bg-surface-container-low">
          <div className="flex items-end justify-between">
            <div className="max-w-2xl">
              <span className="block text-primary font-label-md uppercase tracking-wider mb-sm">Explore</span>
              <h1 className="font-headline-xl text-on-surface">Curated Expeditions</h1>
              <p className="font-body-lg text-on-surface-variant mt-md">Find your next adventure across Patagonia and beyond. Filter by activity level, duration, and environment to discover the perfect expedition.</p>
            </div>
            <div className="hidden lg:flex items-center gap-md">
              <span className="text-on-surface-variant font-label-md uppercase">Sort by:</span>
              <select className="bg-surface font-body-md text-on-surface px-md py-sm rounded-lg shadow-sm border border-outline-variant/30 focus:outline-none focus:border-primary appearance-none cursor-pointer">
                <option>Recommended</option>
                <option>Date: Upcoming</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </section>

        {/* Sidebar + grid */}
        <section className="w-full px-margin-desktop py-lg flex items-start gap-gutter">
          {/* Sidebar */}
          <aside className="w-72 shrink-0 space-y-lg sticky top-32">
            <div className="space-y-md">
              <h3 className="font-headline-sm text-on-surface">Destination</h3>
              <div className="flex flex-col gap-sm">
                {[['Patagonia (All)', '42', true], ['Tierra del Fuego', '18', false], ['Atacama Desert', '12', false]].map(([label, count, checked]) => (
                  <div key={label} className="flex items-center gap-sm cursor-pointer group">
                    <Checkbox id={`dest-${label}`} defaultChecked={checked} className="border-outline-variant data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                    <Label htmlFor={`dest-${label}`} className="font-body-md text-on-surface group-hover:text-primary transition-colors cursor-pointer">{label}</Label>
                    <span className="ml-auto font-label-md text-on-surface-variant">{count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-md">
              <h3 className="font-headline-sm text-on-surface">Activity Level</h3>
              <div className="grid grid-cols-3 gap-xs">
                {[['hiking', 'Moderate', false], ['landscape', 'Strenuous', true], ['kayaking', 'Extreme', false]].map(([icon, label, active]) => (
                  <button key={label} className={`flex flex-col items-center justify-center p-sm rounded-lg border transition-colors ${active ? 'bg-primary-container border-2 border-primary' : 'bg-surface border-outline-variant hover:border-primary'} group`}>
                    <span className={`material-symbols-outlined mb-xs ${active ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>{icon}</span>
                    <span className={`font-label-md text-[10px] ${active ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>{label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-md">
              <h3 className="font-headline-sm text-on-surface">Price Range</h3>
              <div className="w-full h-12 relative flex items-center">
                <div className="w-full h-1 bg-surface-variant rounded-full absolute" />
                <div className="w-3/4 h-1 bg-primary rounded-full absolute left-[10%]" />
                <div className="w-4 h-4 bg-primary rounded-full absolute left-[10%] -ml-2 shadow-md cursor-grab" />
                <div className="w-4 h-4 bg-primary rounded-full absolute left-[85%] -ml-2 shadow-md cursor-grab" />
              </div>
              <div className="flex justify-between items-center text-on-surface-variant font-label-md">
                <span>$1,200</span><span>$5,000+</span>
              </div>
            </div>
            <Button variant="outline" className="w-full py-md font-label-md uppercase tracking-wide border-primary text-primary hover:bg-primary-container">
              Apply Filters
            </Button>
          </aside>

          {/* Cards area */}
          <div className="flex-1">
            {/* Active filters */}
            <div className="flex flex-wrap items-center gap-sm mb-lg">
              <span className="font-body-md text-on-surface-variant mr-sm">Active Filters:</span>
              {['Patagonia', 'Strenuous'].map(f => (
                <span key={f} className="inline-flex items-center gap-xs px-sm py-xs bg-surface-container rounded-full text-on-surface font-label-md">
                  {f} <span className="material-symbols-outlined text-[16px] cursor-pointer hover:text-error">close</span>
                </span>
              ))}
              <button className="font-label-md text-primary ml-sm hover:underline">Clear All</button>
              <span className="ml-auto font-body-md text-on-surface-variant">Showing 14 Results</span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-lg">
              {deskCards.map(c => (
                <article key={c.title} className="group relative flex flex-col bg-surface rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer" onClick={() => navigate('detail')}>
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${c.img}')` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                    {c.badge && (
                      <div className="absolute top-md left-md">
                        <Badge className="inline-flex items-center gap-1 bg-surface-container/90 backdrop-blur-sm text-on-surface px-3 py-1 rounded-full font-label-md text-xs shadow-sm">
                          <span className={`material-symbols-outlined text-[14px] ${c.badgeIconColor}`}>{c.badgeIcon}</span> {c.badge}
                        </Badge>
                      </div>
                    )}
                    <button className="absolute top-md right-md w-10 h-10 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-secondary hover:bg-surface transition-colors shadow-sm" onClick={e => e.stopPropagation()}>
                      <span className="material-symbols-outlined">favorite_border</span>
                    </button>
                  </div>
                  <div className="flex flex-col flex-1 p-md pt-sm z-10 bg-surface relative -mt-6">
                    <div className="flex items-center gap-2 mb-sm text-on-surface-variant font-label-md text-xs uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      {c.location}
                    </div>
                    <h2 className="font-headline-md text-on-surface leading-tight mb-xs">{c.title}</h2>
                    <p className="font-body-md text-on-surface-variant line-clamp-2 mb-md">{c.desc}</p>
                    <div className="flex items-center justify-between py-sm border-t border-b border-surface-variant mb-md">
                      <div className="flex flex-col">
                        <span className="font-label-md text-on-surface-variant text-xs uppercase">Duration</span>
                        <span className="font-body-md text-on-surface font-semibold">{c.duration}</span>
                      </div>
                      <div className="w-px h-8 bg-surface-variant" />
                      <div className="flex flex-col">
                        <span className="font-label-md text-on-surface-variant text-xs uppercase">Difficulty</span>
                        <span className="font-body-md text-on-surface font-semibold flex items-center gap-1">
                          {c.difficulty}
                          <div className="flex gap-[2px]">
                            {c.diffDots.map((filled, i) => (
                              <div key={i} className={`w-2 h-2 rounded-full ${filled ? 'bg-primary' : 'bg-surface-variant'}`} />
                            ))}
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className="mt-auto flex flex-col gap-xs mb-md">
                      <div className="flex justify-between items-end">
                        <span className="font-label-md text-on-surface-variant text-xs uppercase">{c.date}</span>
                        <span className={`font-label-md text-xs ${c.spotsColor}`}>{c.spotsText}</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-variant rounded-full overflow-hidden">
                        <div className={`h-full ${c.spotsBar} rounded-full`} style={{ width: `${c.spotsPct}%` }} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="font-label-md text-on-surface-variant text-xs">From</span>
                        <span className="font-headline-sm text-on-surface">{c.price}</span>
                      </div>
                      <Button className={`font-label-md px-md rounded-lg shadow-sm ${c.btnStyle}`} onClick={e => { e.stopPropagation(); navigate('detail') }}>
                        View Details
                      </Button>
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
              <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-on-primary font-label-md">1</button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors font-label-md">2</button>
              <button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors font-label-md">3</button>
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

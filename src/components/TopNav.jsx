const LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1V3YTd0EZhkovLBfRz0CmDVthaA9Z4aeBDSUw2ZzBnuWsPOlvmvLEPNGhJ_sth1cExJc0OREnOQ8NnLkY_TET_RhnqzpRlNGnEALLPU5ThblHV1lrKoZGWVwNqJn8VyRjamH9uxct0pF1SwPW1BtsU4lLB0oBsWR-OVk58DEjdhtoxQNb83zTVpi9LhdL-STQHEg0A14UpAYIQB2tXfQBr2QAyrBBKcrsJElajTFhYa-WTWixTO81Dy_gbq'
const PROFILE = 'https://lh3.googleusercontent.com/aida/AEtjO1VwpW4s1q-CpKW7l9Njvw6iy2xrNr5SpcLKVAFfN21hImu-wtRyJ54lpUuRtj8l7S-4lXiELFQOdRxBt-Ao37mGKp_k2SpqI1NFIIj_6FbOAp2WHpiDfZIaJ-3JMCdTZJnkxdx7Z2JFQPekHIjfWhzESZ_XX4qRVoaBKHz_4k_SD37DLySsesd9x5-FiW_1_OtDnqP1T6bJV7byq8IFqIhA_X0UVnaIPzOuiz2Un2CbMulad2S6a75F8Gc'

const TAB_MAP = { home: 'home', trips: 'trips', detail: 'trips', checkout: 'trips', 'my-trips': 'my-trips', admin: 'admin' }

export default function TopNav({ current, navigate, overlay = false }) {
  const active = TAB_MAP[current] ?? 'home'
  const links = [
    { label: 'Inicio', tab: 'home', screen: 'home' },
    { label: 'Viajes', tab: 'trips', screen: 'trips' },
    { label: 'Mi Dashboard', tab: 'my-trips', screen: 'my-trips' },
  ]

  if (overlay) {
    return (
      <header className="hidden md:block fixed top-0 w-full z-50">
        <div className="h-20 w-full px-margin-desktop flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-base cursor-pointer" onClick={() => navigate('home')}>
            <img alt="Upsala Trips" className="h-8 w-auto object-contain" src={LOGO} />
            <span className="font-headline-sm text-white uppercase tracking-tight drop-shadow">Upsala Trips</span>
          </div>

          {/* Pill nav */}
          <nav className="flex items-center">
            <div className="flex items-center gap-1 rounded-full bg-white/10 px-1 py-1 ring-1 ring-white/15 backdrop-blur-md">
              {links.map(l => (
                <button key={l.tab} onClick={() => navigate(l.screen)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    active === l.tab
                      ? 'bg-white/20 text-white'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}>
                  {l.label}
                </button>
              ))}
              {current === 'admin' && (
                <button onClick={() => navigate('admin')}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-white/20 text-white">
                  Admin
                </button>
              )}
              <button onClick={() => navigate('my-trips')}
                className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90 transition-colors">
                Mi Cuenta
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </button>
            </div>
          </nav>

          {/* Profile */}
          <img alt="Profile" className="w-10 h-10 rounded-full object-cover ring-2 ring-white/30 shadow-lg" src={PROFILE} />
        </div>
      </header>
    )
  }

  return (
    <header className="hidden md:block fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-base cursor-pointer" onClick={() => navigate('home')}>
          <img alt="Upsala Trips" className="h-8 w-auto object-contain" src={LOGO} />
          <span className="font-headline-sm text-primary uppercase tracking-tight">Upsala Trips</span>
        </div>
        <nav className="flex items-center gap-lg">
          {links.map(l => (
            <button key={l.tab} onClick={() => navigate(l.screen)}
              className={`font-label-md transition-colors ${active === l.tab ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}>
              {l.label}
            </button>
          ))}
          {current === 'admin' && (
            <button onClick={() => navigate('admin')}
              className="font-label-md text-primary font-bold">
              ADMIN
            </button>
          )}
        </nav>
        <div className="flex items-center gap-md">
          <div className="hidden lg:block text-right">
            <p className="text-xs font-label-md text-on-surface-variant">BIENVENIDO</p>
            <p className="text-sm font-label-md text-on-surface">ALEX RIVERA</p>
          </div>
          <img alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-surface-container-high shadow-sm" src={PROFILE} />
        </div>
      </div>
    </header>
  )
}

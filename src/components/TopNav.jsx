const LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1V3YTd0EZhkovLBfRz0CmDVthaA9Z4aeBDSUw2ZzBnuWsPOlvmvLEPNGhJ_sth1cExJc0OREnOQ8NnLkY_TET_RhnqzpRlNGnEALLPU5ThblHV1lrKoZGWVwNqJn8VyRjamH9uxct0pF1SwPW1BtsU4lLB0oBsWR-OVk58DEjdhtoxQNb83zTVpi9LhdL-STQHEg0A14UpAYIQB2tXfQBr2QAyrBBKcrsJElajTFhYa-WTWixTO81Dy_gbq'
const PROFILE = 'https://lh3.googleusercontent.com/aida/AEtjO1VwpW4s1q-CpKW7l9Njvw6iy2xrNr5SpcLKVAFfN21hImu-wtRyJ54lpUuRtj8l7S-4lXiELFQOdRxBt-Ao37mGKp_k2SpqI1NFIIj_6FbOAp2WHpiDfZIaJ-3JMCdTZJnkxdx7Z2JFQPekHIjfWhzESZ_XX4qRVoaBKHz_4k_SD37DLySsesd9x5-FiW_1_OtDnqP1T6bJV7byq8IFqIhA_X0UVnaIPzOuiz2Un2CbMulad2S6a75F8Gc'

const TAB_MAP = { home: 'home', trips: 'trips', detail: 'trips', checkout: 'trips', 'my-trips': 'my-trips', admin: 'admin' }

export default function TopNav({ current, navigate }) {
  const active = TAB_MAP[current] ?? 'home'
  const links = [
    { label: 'HOME', tab: 'home', screen: 'home' },
    { label: 'TRIPS', tab: 'trips', screen: 'trips' },
    { label: 'MY DASHBOARD', tab: 'my-trips', screen: 'my-trips' },
  ]
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
            <p className="text-xs font-label-md text-on-surface-variant">WELCOME BACK</p>
            <p className="text-sm font-label-md text-on-surface">ALEX RIVERA</p>
          </div>
          <img alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-surface-container-high shadow-sm" src={PROFILE} />
        </div>
      </div>
    </header>
  )
}

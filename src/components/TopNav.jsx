const LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1V3YTd0EZhkovLBfRz0CmDVthaA9Z4aeBDSUw2ZzBnuWsPOlvmvLEPNGhJ_sth1cExJc0OREnOQ8NnLkY_TET_RhnqzpRlNGnEALLPU5ThblHV1lrKoZGWVwNqJn8VyRjamH9uxct0pF1SwPW1BtsU4lLB0oBsWR-OVk58DEjdhtoxQNb83zTVpi9LhdL-STQHEg0A14UpAYIQB2tXfQBr2QAyrBBKcrsJElajTFhYa-WTWixTO81Dy_gbq'
const PROFILE = 'https://lh3.googleusercontent.com/aida/AEtjO1VwpW4s1q-CpKW7l9Njvw6iy2xrNr5SpcLKVAFfN21hImu-wtRyJ54lpUuRtj8l7S-4lXiELFQOdRxBt-Ao37mGKp_k2SpqI1NFIIj_6FbOAp2WHpiDfZIaJ-3JMCdTZJnkxdx7Z2JFQPekHIjfWhzESZ_XX4qRVoaBKHz_4k_SD37DLySsesd9x5-FiW_1_OtDnqP1T6bJV7byq8IFqIhA_X0UVnaIPzOuiz2Un2CbMulad2S6a75F8Gc'

const TAB_MAP = { home: 'home', trips: 'trips', detail: 'trips', checkout: 'trips', 'my-trips': 'my-trips', admin: 'admin' }

export default function TopNav({ current, navigate, overlay = false }) {
  const active = TAB_MAP[current] ?? 'home'
  const links = [
    { label: 'Inicio', tab: 'home', screen: 'home' },
    { label: 'Viajes', tab: 'trips', screen: 'trips' },
    { label: 'Mi dashboard', tab: 'my-trips', screen: 'my-trips' },
  ]

  return (
    <header className={`hidden md:flex fixed top-0 w-full z-50 h-20 items-center justify-between px-margin-desktop transition-all duration-300 ${
      overlay ? '' : 'bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)]'
    }`}>

      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => navigate('home')}>
        <img
          alt="Upsala Trips"
          className="h-9 w-9 rounded-full object-cover shadow-sm"
          src={LOGO}
        />
        <span className={`text-[15px] font-semibold tracking-tight ${overlay ? 'text-white drop-shadow' : 'text-primary'}`}>
          Upsala trips
        </span>
      </div>

      {/* Pill nav — centro */}
      <nav>
        <div className={`flex items-center gap-1 rounded-full px-1 py-1 ring-1 backdrop-blur-md ${
          overlay
            ? 'bg-white/10 ring-white/15'
            : 'bg-surface-container ring-outline-variant/50'
        }`}>
          {links.map(l => (
            <button
              key={l.tab}
              onClick={() => navigate(l.screen)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                overlay
                  ? active === l.tab
                    ? 'bg-white/25 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/12'
                  : active === l.tab
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {l.label}
            </button>
          ))}
          {current === 'admin' && (
            <button
              onClick={() => navigate('admin')}
              className={`px-4 py-2 text-sm font-medium rounded-full ${
                overlay ? 'bg-white/25 text-white' : 'bg-primary text-on-primary'
              }`}
            >
              Admin
            </button>
          )}
          {/* CTA button */}
          <button
            onClick={() => navigate('my-trips')}
            className={`ml-1 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              overlay
                ? 'bg-white text-neutral-900 hover:bg-white/90'
                : 'bg-primary text-on-primary hover:bg-primary/90'
            }`}
          >
            Mi cuenta
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Profile con tooltip */}
      <div className="group/profile relative flex items-center shrink-0">
        {/* Tooltip "Hola Juan" */}
        <div className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap shadow-lg pointer-events-none opacity-0 group-hover/profile:opacity-100 transition-opacity duration-200 ${
          overlay
            ? 'bg-white/90 text-neutral-900 backdrop-blur-md'
            : 'bg-on-surface text-surface'
        }`}>
          Hola, Juan 👋
        </div>
        <img
          alt="Profile"
          src={PROFILE}
          className={`w-10 h-10 rounded-full object-cover cursor-pointer shadow-md transition-transform hover:scale-105 ${
            overlay ? 'ring-2 ring-white/40' : 'ring-2 ring-outline-variant'
          }`}
        />
      </div>
    </header>
  )
}

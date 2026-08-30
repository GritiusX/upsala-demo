const tabs = [
  { id: 'home',     icon: 'home',                label: 'Home' },
  { id: 'trips',    icon: 'explore',             label: 'Trips' },
  { id: 'my-trips', icon: 'luggage',             label: 'My Trips' },
  { id: 'admin',    icon: 'admin_panel_settings', label: 'Admin' },
]

const activeScreens = { home: 'home', trips: 'trips', detail: 'trips', checkout: 'trips', 'my-trips': 'my-trips', admin: 'admin' }

export default function BottomNav({ current, navigate }) {
  const active = activeScreens[current] || current
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex justify-between items-center h-20 px-margin-mobile">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => navigate(t.id)}
            className={`flex flex-col items-center justify-center gap-xs flex-1 h-11 transition-colors ${active === t.id ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
          >
            <span className="material-symbols-outlined">{t.icon}</span>
            <span className="text-label-md font-label-md">{t.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

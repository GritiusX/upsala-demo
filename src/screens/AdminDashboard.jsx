const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'

const kpis = [
  { icon: 'group',         color: 'text-primary',    label: 'Visitantes',  value: '1,234', bg: 'bg-surface-container',  accent: 'bg-primary/5' },
  { icon: 'monitoring',    color: 'text-secondary',  label: 'Tasa Conv.',  value: '6.5%',  bg: 'bg-surface-container',  accent: 'bg-secondary/5' },
  { icon: 'payments',      color: 'text-on-primary', label: 'Ingresos',    value: '$24,500', bg: 'bg-primary', accent: null, inverted: true },
  { icon: 'subscriptions', color: 'text-primary',    label: 'Activos',     value: '12',    bg: 'bg-surface-container',  accent: 'bg-primary/5' },
]

const bars = [
  { month: 'Jul', pct: 40,  tooltip: '$4.2k',  opacity: 'bg-primary/40' },
  { month: 'Ago', pct: 70,  tooltip: '$7.5k',  opacity: 'bg-primary/60' },
  { month: 'Sep', pct: 100, tooltip: '$10.8k', opacity: 'bg-primary', bold: true, glow: true },
  { month: 'Oct', pct: 25,  tooltip: '$2.0k',  opacity: 'bg-primary/20' },
]

const inventory = [
  { initial: 'L', bg: 'bg-error-container', fg: 'text-on-error-container', name: 'Las Leñas', sub: 'Winter Expedition', count: '12/15', pct: 80, barColor: 'bg-error', dot: 'bg-error animate-pulse' },
  { initial: 'C', bg: 'bg-secondary-fixed', fg: 'text-on-secondary-fixed', name: 'Chapadmalal', sub: 'Surf Retreat', count: '8/15', pct: 53, barColor: 'bg-primary', dot: 'bg-primary' },
  { initial: 'M', bg: 'bg-surface-variant', fg: 'text-on-surface-variant', name: 'Mendoza', sub: 'Wine Route', count: '15/15', pct: 100, barColor: 'bg-outline', check: true },
]

export default function AdminDashboard() {
  return (
    <main className="pt-16 md:pt-20 pb-20 md:pb-0 min-h-screen bg-surface">
      {/* Mobile header - hidden on desktop */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-16 flex items-center justify-between px-margin-mobile">
          <div className="flex items-center gap-base">
            <img alt="Upsala Trips Logo" className="h-8 w-auto object-contain" src={LOGO} />
            <span className="font-headline-sm text-headline-sm text-primary">Admin Analytics</span>
          </div>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-sm" src={PROFILE} />
        </div>
      </header>

      <div className="flex flex-col w-full gap-lg px-margin-mobile md:px-margin-desktop py-lg pb-xl md:max-w-[1440px] md:mx-auto">
        <div className="flex flex-col gap-sm">
          <h1 className="font-headline-lg-mobile text-on-surface">Analytics Overview</h1>
          <p className="font-body-md text-on-surface-variant">Real-time performance metrics and inventory status.</p>
        </div>

        {/* KPI grid - 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
          {kpis.map(k => (
            <div key={k.label} className={`${k.bg} rounded-[24px] p-md flex flex-col gap-xs relative overflow-hidden group shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md`}>
              <span className={`material-symbols-outlined ${k.color} mb-xs`} style={{ fontVariationSettings: "'FILL' 1" }}>{k.icon}</span>
              <span className={`font-label-md uppercase tracking-wider ${k.inverted ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`}>{k.label}</span>
              <span className={`font-headline-sm ${k.inverted ? 'text-on-primary' : 'text-on-surface'}`}>{k.value}</span>
              {k.accent && <div className={`absolute -right-4 -bottom-4 w-16 h-16 ${k.accent} rounded-full group-hover:scale-150 transition-transform duration-500`} />}
              {k.inverted && (
                <div className="absolute right-0 bottom-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg fill="none" height="40" viewBox="0 0 60 40" width="60" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 40L15 25L30 35L60 0V40H0Z" fill="currentColor" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="bg-surface-container rounded-[24px] p-md shadow-sm flex flex-col gap-md">
          <div className="flex justify-between items-center">
            <h2 className="font-headline-sm text-on-surface">Ingresos Mensuales</h2>
            <button className="text-primary bg-primary/10 p-xs rounded-full hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
          <div className="flex items-end justify-between h-40 mt-sm pt-sm relative w-full">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[0,1,2,3].map(i => <div key={i} className="w-full h-px bg-outline-variant/30" />)}
            </div>
            {bars.map(b => (
              <div key={b.month} className="flex flex-col items-center gap-xs relative z-10 w-1/4 group">
                <div
                  className={`w-full max-w-[32px] ${b.opacity} rounded-t-lg ${b.glow ? 'shadow-[0_0_12px_rgba(0,40,142,0.3)]' : 'group-hover:bg-primary'} transition-colors cursor-pointer relative`}
                  style={{ height: `${b.pct}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {b.tooltip}
                  </div>
                </div>
                <span className={`font-label-md ${b.bold ? 'text-on-surface font-bold' : 'text-on-surface-variant'}`}>{b.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory table */}
        <div className="bg-surface-container rounded-[24px] shadow-sm overflow-hidden flex flex-col">
          <div className="p-md bg-surface-container-high flex justify-between items-center">
            <h2 className="font-headline-sm text-on-surface">Inventory Status</h2>
            <span className="material-symbols-outlined text-on-surface-variant">filter_list</span>
          </div>
          <div className="flex flex-col px-md py-sm">
            {inventory.map(item => (
              <div key={item.name} className="flex items-center justify-between py-sm border-b border-outline-variant/20 last:border-0">
                <div className="flex items-center gap-sm">
                  <div className={`w-10 h-10 rounded-lg ${item.bg} ${item.fg} flex items-center justify-center font-bold text-lg`}>
                    {item.initial}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-on-surface">{item.name}</span>
                    <span className="font-body-md text-on-surface-variant text-sm">{item.sub}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-xs">
                  <div className="flex items-center gap-xs">
                    <span className="font-label-md text-on-surface">{item.count}</span>
                    {item.check
                      ? <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                      : <span className={`w-2 h-2 rounded-full ${item.dot}`} />
                    }
                  </div>
                  <div className="w-20 h-1.5 bg-outline-variant/30 rounded-full overflow-hidden">
                    <div className={`h-full ${item.barColor} rounded-full`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-md text-primary font-label-md hover:bg-surface-container-high transition-colors text-center border-t border-outline-variant/10">
            View All Inventory
          </button>
        </div>

        {/* Desktop-only upcoming expeditions table */}
        <div className="hidden md:block bg-surface-container rounded-[24px] shadow-sm overflow-hidden">
          <div className="p-md bg-surface-container-high flex justify-between items-center">
            <h2 className="font-headline-sm text-on-surface">Upcoming Expeditions</h2>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-outline-variant/20 font-label-md text-on-surface-variant">
                <th className="p-md font-normal">EXPEDITION</th>
                <th className="p-md font-normal">DATE</th>
                <th className="p-md font-normal">CAPACITY</th>
                <th className="p-md font-normal">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {[
                {name:'Las Leñas Freeride', date:'Aug 12-19', cap:'12/15', status:'High Demand', statusColor:'text-error'},
                {name:'Patagonia Ice Trek', date:'Oct 12-18', cap:'8/12', status:'Open', statusColor:'text-primary'},
                {name:'Atacama Desert Trek', date:'Nov 5-12', cap:'15/15', status:'Sold Out', statusColor:'text-on-surface-variant'},
              ].map(exp => (
                <tr key={exp.name} className="border-b border-outline-variant/10 hover:bg-surface-container/50 transition-colors">
                  <td className="p-md font-label-md text-on-surface">{exp.name}</td>
                  <td className="p-md font-body-md text-on-surface-variant">{exp.date}</td>
                  <td className="p-md font-body-md text-on-surface">{exp.cap}</td>
                  <td className={`p-md font-label-md ${exp.statusColor}`}>{exp.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

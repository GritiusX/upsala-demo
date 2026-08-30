import { useState } from 'react'

const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'
const TRIP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0wPt8O6EHTOlqEUuS_uIf8XFE6AzhEhe6MXem7AYYaTzvdlQDSt5hJNT2MSALJni7zlyDxiAoQnOowlmuHQFpKTv_JR0cXV348gYFQAOWSwjv-KPkPXVKUdv2cFcrLHSSfRv96D5SYFPVSJLyFjr385tQIkDtDJ8SGbrPzdJqgzy4PYUEfxuB2kWyXB3kI5xlgZb3UFHKpkiVMUoLFDcq3ARJphyZRLrhHgT4IgdOlulqpBXYJ2yZcQ'
const CHECKOUT_HERO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfJ5s7hVXcqsp059dApfeVNBDcFfCwNGVyaoOUPdeQP31BYceX0aOxr7AZN89DZ7OcokcFfJfqU0c0oZakat6i_EwmdT1gug_TYR3iznoFDd4YFAKzuppBympkhwKKHQ3hjwVP0TsnAWwI4ZHSZXWBlv10JJZIG97-DQ70Qu28ChOt9wVBRxtDJv5aiatVkgnPPJE2r1ayJkkDx17TjEjUaEOxAMxBjRDBKfCWK56iIXubbykTCIlC-g'
const SUMMARY_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNRDHbd6ppGTNu70zEBMQfQaeSWJ3zKZeSdBJutkJBusjCSZMJlkTIHmB6kqh5x31CBrz_Bxd7azTctkMIHUoes5S8U5zGueBshH-J0CCCSPdrwcVSme5MW38GSxy_RPu_lJdI05k820wULAMXvWgLnEI4TLkIjH5emfK7bsKxmazjHNfxH4WELibQ6KBcT6QJ-u3b9UZ--LyFUIps8wW9fz9gjgZ4-FIZiJV5GCjFaMC7E-Ux84wmig'

const plans = [
  { id: 'full', label: 'Pago Completo', sub: 'Asegura tu lugar de inmediato.', price: '$1,380', color: 'primary' },
  { id: 'half', label: 'Seña (50%)', sub: 'Reserva ahora, paga el resto 30 días antes del viaje.', price: '$690', color: 'primary' },
  { id: 'sub', label: 'Suscripción Mensual', sub: 'Plan de 12 cuotas. Ahorra un 20% en el total ($1,104).', price: '$92/mes', old: '$115/mes', badge: 'Recomendado -20%', color: 'secondary' },
]

export default function Checkout({ navigate }) {
  const [plan, setPlan] = useState('full')
  const [exp, setExp] = useState('')
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  return (
    <main className="pt-16 md:pt-0 min-h-screen bg-surface">
      {/* Mobile header - hidden on desktop */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-16 flex items-center px-margin-mobile gap-md">
          <button className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" onClick={() => navigate('detail')}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex items-center gap-base flex-1">
            <img alt="Logo" className="h-6 w-auto" src={LOGO} />
            <span className="font-headline-sm text-headline-sm text-primary truncate">Booking Checkout</span>
          </div>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={PROFILE} />
        </div>
      </header>

      {/* Desktop page header */}
      <div className="hidden md:block relative w-full h-64 bg-surface-container overflow-hidden rounded-b-3xl">
        <div className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${CHECKOUT_HERO}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-md left-margin-desktop">
          <p className="font-label-md text-primary tracking-widest uppercase mb-xs">Step 3 of 3</p>
          <h1 className="font-headline-xl text-on-surface">Secure Checkout</h1>
        </div>
      </div>

      {/* Main content area */}
      <div className="w-full md:max-w-[1440px] md:mx-auto md:px-margin-desktop md:py-xl md:grid md:grid-cols-12 md:gap-gutter px-margin-mobile">
        {/* Left col - form */}
        <div className="md:col-span-8 flex flex-col gap-lg">
          <div className="flex flex-col gap-base pt-lg md:pt-0 text-center md:text-left">
            <h1 className="md:hidden font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Completa tu Aventura</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Solo unos pasos más para asegurar tu lugar en la nieve.</p>
          </div>

          {/* Step 1: Summary */}
          <section className="flex flex-col gap-md">
            <div className="flex items-center gap-base">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md">1</div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Resumen de la Expedición</h2>
            </div>
            <div className="bg-surface-container rounded-[24px] p-md flex flex-col gap-md shadow-sm">
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 rounded-xl bg-cover bg-center shrink-0" style={{ backgroundImage: `url('${TRIP_IMG}')` }} />
                <div className="flex flex-col gap-xs flex-1 min-w-0">
                  <span className="font-label-md text-label-md text-secondary">Nieve & Adrenalina</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Las Leñas Snow Trip</h3>
                  <div className="flex items-center gap-xs text-on-surface-variant font-body-md">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    <span>Julio 15-22, 2026</span>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-outline-variant/30" />
              <div className="flex justify-between items-end">
                <span className="font-body-lg text-body-lg text-on-surface-variant">Total Estimado</span>
                <span className="font-headline-md text-headline-md text-primary">$1,380 <span className="text-body-md font-body-md text-on-surface-variant align-baseline">USD</span></span>
              </div>
            </div>
          </section>

          {/* Step 2: Payment plan */}
          <section className="flex flex-col gap-md">
            <div className="flex items-center gap-base">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md transition-colors ${plan !== 'full' ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface'}`}>2</div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Plan de Pago</h2>
            </div>
            <div className="flex flex-col gap-sm">
              {plans.map(p => (
                <label key={p.id} className={`relative flex p-md rounded-xl cursor-pointer hover:-translate-y-[2px] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-[1.5px] ${plan === p.id ? `border-${p.color} bg-${p.color === 'secondary' ? 'secondary-fixed/20' : 'primary-fixed/20'}` : 'border-transparent bg-surface-container'}`}>
                  {p.badge && (
                    <div className={`absolute top-0 right-0 bg-secondary text-on-secondary px-3 py-1 rounded-bl-lg font-label-md text-[10px] uppercase tracking-wider`}>{p.badge}</div>
                  )}
                  <input
                    type="radio" name="payment_plan" value={p.id} checked={plan === p.id}
                    onChange={() => setPlan(p.id)} className="sr-only"
                  />
                  <div className="flex-1 flex flex-col gap-xs pr-8 mt-2">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface">{p.label}</span>
                      <div className="flex flex-col items-end">
                        {p.old && <span className="font-body-md text-body-md text-on-surface-variant line-through text-[12px]">{p.old}</span>}
                        <span className={`font-headline-sm text-headline-sm text-${p.color}`}>{p.price}</span>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">{p.sub}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-[2px] absolute right-md top-md flex items-center justify-center transition-colors ${plan === p.id ? `border-${p.color} bg-${p.color}` : 'border-outline-variant'}`}>
                    {plan === p.id && <div className="w-2 h-2 rounded-full bg-on-primary" />}
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* Step 3: Form */}
          <section className="flex flex-col gap-md pb-safe md:pb-xl">
            <div className="flex items-center gap-base">
              <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center font-label-md text-label-md">3</div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">Datos del Pasajero</h2>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-md">
              {[
                { label: 'Nombre Completo', type: 'text', icon: 'person', placeholder: 'Ej: Juan Pérez' },
                { label: 'Correo Electrónico', type: 'email', icon: 'mail', placeholder: 'tu@email.com' },
                { label: 'Teléfono', type: 'tel', icon: 'phone_iphone', placeholder: '+54 9 11 1234-5678' },
              ].map(f => (
                <div key={f.label} className="flex flex-col gap-sm">
                  <label className="font-label-md text-label-md text-on-surface">{f.label}</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">{f.icon}</span>
                    <input required type={f.type} placeholder={f.placeholder}
                      className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-sm pl-[40px] pr-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-on-surface-variant/50" />
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-sm">
                <label className="font-label-md text-label-md text-on-surface">Nivel de Experiencia en Nieve</label>
                <div className="grid grid-cols-3 gap-xs">
                  {['Principiante', 'Intermedio', 'Avanzado'].map(level => (
                    <label key={level} className="relative cursor-pointer text-center">
                      <input type="radio" name="experience" value={level} checked={exp === level} onChange={() => setExp(level)} className="sr-only" />
                      <div className={`py-sm px-xs rounded-lg border font-body-md text-body-md transition-colors ${exp === level ? 'border-primary bg-primary-fixed text-on-primary-fixed' : 'border-transparent bg-surface-container text-on-surface-variant'}`}>
                        {level}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex gap-sm items-start cursor-pointer mt-sm">
                <input required type="checkbox" className="mt-1 w-5 h-5 rounded border-outline-variant checked:bg-primary checked:border-primary transition-colors focus:outline-none" />
                <span className="font-body-md text-body-md text-on-surface-variant">
                  Acepto los <span className="text-primary underline">Términos y Condiciones</span> y la Política de Cancelación de Upsala Trips.
                </span>
              </label>

              <div className="flex flex-col gap-sm mt-lg">
                <button type="submit" className="w-full bg-[#009EE3] hover:bg-[#008ACA] text-white rounded-xl py-4 px-md font-label-md text-label-md flex items-center justify-center gap-sm transition-all shadow-[0_4px_12px_rgba(0,158,227,0.2)] hover:-translate-y-[2px]">
                  <span className="material-symbols-outlined">payments</span>
                  Pagar con Mercado Pago
                </button>
                <button type="submit" className="w-full bg-[#3D3AFA] hover:bg-[#2B29CC] text-white rounded-xl py-4 px-md font-label-md text-label-md flex items-center justify-center gap-sm transition-all shadow-[0_4px_12px_rgba(61,58,250,0.2)] hover:-translate-y-[2px]">
                  <span className="material-symbols-outlined">credit_card</span>
                  Suscripción vía Rebill
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* Right col - order summary (desktop only) */}
        <div className="hidden md:block md:col-span-4">
          <div className="sticky top-[100px] bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden">
            {/* Trip image */}
            <div className="h-48 relative w-full overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${SUMMARY_IMG}')` }} />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/20 to-transparent" />
            </div>
            {/* Summary content */}
            <div className="p-md flex flex-col gap-md">
              <div>
                <p className="font-label-md text-primary tracking-widest uppercase text-xs mb-1">Expedition</p>
                <h3 className="font-headline-sm text-on-surface">Las Leñas Snow Trip</h3>
              </div>
              <div className="flex flex-col gap-sm p-sm bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-outline">calendar_month</span>
                  <div>
                    <span className="font-body-md text-on-surface">Julio 15-22, 2026</span>
                    <span className="font-label-md text-on-surface-variant text-xs block">7 Days</span>
                  </div>
                </div>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-outline">group</span>
                  <span className="font-body-md text-on-surface">2 Adults</span>
                </div>
              </div>
              <div className="w-full h-px bg-outline-variant/30" />
              <div className="flex flex-col gap-xs">
                <div className="flex justify-between">
                  <span className="font-body-md text-on-surface-variant">Base Price (2x)</span>
                  <span className="font-body-md text-on-surface">$2,760.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body-md text-on-surface-variant">Taxes & Fees</span>
                  <span className="font-body-md text-on-surface">$138.00</span>
                </div>
              </div>
              <div className="w-full h-px bg-outline-variant/30" />
              <div className="flex justify-between items-end">
                <span className="font-label-md text-on-surface-variant">Total</span>
                <span className="font-headline-md text-primary">$2,898</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] bg-on-surface/80 backdrop-blur-sm flex items-center justify-center p-margin-mobile">
          <div className="bg-surface w-full max-w-sm rounded-[24px] p-lg flex flex-col items-center text-center gap-md relative overflow-hidden shadow-2xl animate-[slideUp_0.4s_ease-out]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
            <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mb-sm relative z-10">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-50" />
              <span className="material-symbols-outlined text-[40px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <div className="flex flex-col gap-xs relative z-10">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">¡RESERVA CONFIRMADA!</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Tu lugar en la nieve está asegurado. Preparate para la aventura.</p>
            </div>
            <div className="bg-surface-container rounded-lg py-sm px-md w-full border border-outline-variant/30 relative z-10">
              <span className="block font-label-md text-[12px] text-on-surface-variant uppercase tracking-wider mb-1">Código de Reserva</span>
              <span className="font-headline-sm text-headline-sm text-primary tracking-widest">UP-001-2026</span>
            </div>
            <div className="flex flex-col gap-sm w-full mt-sm relative z-10">
              <button
                onClick={() => { setShowModal(false); navigate('my-trips') }}
                className="w-full bg-primary text-on-primary rounded-lg py-3 px-md font-label-md text-label-md shadow-md hover:-translate-y-1 transition-transform"
              >
                Ir a Mi Dashboard
              </button>
              <button
                onClick={() => { setShowModal(false); navigate('detail') }}
                className="w-full bg-transparent text-primary border border-primary rounded-lg py-3 px-md font-label-md text-label-md hover:bg-primary/5 transition-colors"
              >
                Ver Itinerario
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

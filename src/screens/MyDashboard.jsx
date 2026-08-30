const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'
const TRIP_HERO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkBDbpkauPOK3b-X21-p2O5JnQ3pjksgj-r0XwZQfJ72AqUy7JV6BAIJnC5OhcnGZLVsRQsTGjO3ZIcNKuv7rPiD-KXa0jyOxN_cgwEShXVwXYu8m_DC67Fw4TM8XDWnrgTxtR-Svi-6R6LGnOShTBtMsvI-Pd8RfZXlKbicWRFVdGWHQmcTN4au0fUUj_MbsXX9H6Itdj3FKg0b-hC6akdcVpwNvbi87Yi_fvEDw94gdE9X3e4IsCvg'

const pastTrips = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2iCIOfJ5cvRbLtEv5M6yL03RZ7l8miTSAR8zxRrqAKlnjqtu25ANgFt_ZDoaMpg_XJms75bcIlbrWfRdkBygVnbXOz-Lys7HK6euJEWIvVF85J_Dg_qhiaXWGPj72NchkZsz8RWgYzap_J76yUy2yvEGURAfsoDZp9CAcdUB4pnI7XE4FOS5JKb__maid6sHIwrw_xCfvysUyyJxWxDerC0-26vAzQrSiZ4Qgg18kjyQj2LzCRskAxQ',
    title: 'Bariloche, Patagonia', date: 'Mayo 2023',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvbFfSpc-y5dHrLx7Gnmv9SQdLSVUKRQpuX04iI0Z58kWHly1xWNC5l2zlnQGinSZ8tkKr2vVclqygri_CdBwUnNTRGnYEHxqc3YAKe_BN0MmE6RK-Ot6g7UnKNTpcjCjmxe23NA_j44m5gpm3XFf9N6agUX9ghlClOJOgvhDrqGoPXbkOEcp2bMLTDZSt5tIwUDhMfz0JwAnHrJ_ABuruoOEhrxntpAZydy584vKHjHFcDrCxfafcqg',
    title: 'Cataratas del Iguazú', date: 'Diciembre 2022',
  },
]

export default function MyDashboard({ navigate }) {
  return (
    <main className="pt-16 pb-20 min-h-screen bg-surface">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
        <div className="h-16 flex items-center justify-between px-margin-mobile">
          <div className="flex items-center gap-base">
            <img alt="Upsala Trips Logo" className="h-8 w-auto object-contain" src={LOGO} />
            <span className="font-headline-sm text-headline-sm text-primary">My Trips</span>
          </div>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-sm" src={PROFILE} />
        </div>
      </header>

      <div className="flex flex-col w-full px-margin-mobile gap-xl pb-xl">
        {/* Greeting */}
        <section className="flex items-center justify-between w-full pt-sm">
          <div className="flex flex-col gap-xs">
            <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-on-surface tracking-tight">¡Hola, Juan!</h1>
            <p className="text-body-md font-body-md text-on-surface-variant">juan.adventurer@email.com</p>
          </div>
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-30 blur transition duration-300" />
            <img alt="Juan" className="relative w-16 h-16 rounded-full object-cover shadow-sm ring-4 ring-surface" src={PROFILE} />
          </div>
        </section>

        {/* Upcoming trip */}
        <section className="flex flex-col gap-md">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>landscape</span>
            <h2 className="text-headline-sm font-headline-sm text-on-surface">Próxima Aventura</h2>
          </div>
          <div className="flex flex-col bg-surface-container rounded-[24px] shadow-sm overflow-hidden group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
            <div className="h-56 w-full relative" style={{ backgroundImage: `url('${TRIP_HERO}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-[#001453]/40 transition-opacity group-hover:bg-[#001453]/30" />
              <div className="absolute top-md right-md bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[18px] text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-label-md font-label-md text-on-surface">Confirmado</span>
              </div>
              <div className="absolute bottom-md left-md bg-surface/90 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">ac_unit</span>
                <span className="text-label-md font-label-md text-on-surface">-4°C Nieve</span>
              </div>
            </div>
            <div className="flex flex-col gap-md p-md bg-surface-container text-on-surface">
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col gap-xs min-w-0">
                  <h3 className="text-headline-md font-headline-md text-on-surface truncate">Las Leñas, Mendoza</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    15 - 22 Agosto, 2024
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center bg-primary-container text-on-primary-container px-4 py-2 rounded-xl shadow-inner shrink-0">
                  <span className="text-headline-sm font-headline-sm leading-none">30</span>
                  <span className="text-label-md font-label-md opacity-80 uppercase tracking-wide text-[10px]">días</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-sm mt-xs">
                <button
                  onClick={() => navigate('detail')}
                  className="flex-1 bg-secondary-container text-on-secondary-container font-label-md text-label-md py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                >
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                  Ver Detalles
                </button>
                <button className="flex-1 bg-transparent text-primary shadow-[inset_0_0_0_1px_#00288e] font-label-md text-label-md py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-all">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  Descargar Itinerario
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bento grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="flex flex-col bg-surface-container-high text-on-surface rounded-[24px] p-md shadow-sm relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 text-primary/5 transform rotate-12 transition-transform group-hover:rotate-45 duration-700">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <div className="flex items-center gap-2 mb-lg text-primary relative z-10">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
              <h3 className="text-label-md font-label-md uppercase tracking-wider">Suscripción Activa</h3>
            </div>
            <div className="flex items-baseline gap-1 relative z-10">
              <span className="text-headline-xl font-headline-xl text-on-surface tracking-tight">$368</span>
              <span className="text-headline-sm font-headline-sm text-on-surface-variant font-normal">/mes</span>
            </div>
            <div className="mt-xl flex items-center gap-2 text-body-md font-body-md text-on-surface-variant bg-surface/50 rounded-lg p-2 w-fit relative z-10">
              <span className="material-symbols-outlined text-[16px]">event</span>
              Próximo pago: 1 de Septiembre
            </div>
          </div>

          <div className="flex flex-col bg-surface-container text-on-surface rounded-[24px] p-md shadow-sm">
            <div className="flex items-center gap-2 mb-md text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>folder_open</span>
              <h3 className="text-label-md font-label-md uppercase tracking-wider">Documentos Recientes</h3>
            </div>
            <div className="flex flex-col gap-xs mt-auto">
              {['Itinerario_Vuelo.pdf', 'Confirmacion_Reserva.pdf'].map(doc => (
                <a key={doc} href="#" className="flex items-center justify-between p-3 bg-surface rounded-xl hover:bg-surface-variant transition-colors group/doc">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">picture_as_pdf</span>
                    </div>
                    <span className="text-body-md font-body-md text-on-surface truncate">{doc}</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover/doc:text-primary transition-colors">download</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Past trips */}
        <section className="flex flex-col bg-surface-container rounded-[24px] shadow-sm overflow-hidden text-on-surface">
          <details className="group marker:content-['']">
            <summary className="flex justify-between items-center p-md cursor-pointer list-none select-none hover:bg-surface-variant/50 transition-colors">
              <div className="flex items-center gap-3 text-on-surface-variant group-open:text-primary transition-colors">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
                <span className="text-headline-sm font-headline-sm text-on-surface">Viajes Pasados</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </div>
            </summary>
            <div className="p-md pt-0 flex flex-col gap-sm border-t border-outline-variant/30 mt-2">
              {pastTrips.map(t => (
                <div key={t.title} className="flex items-center gap-4 p-3 bg-surface rounded-xl hover:bg-surface-variant transition-colors cursor-pointer group/item">
                  <div className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0 shadow-sm" style={{ backgroundImage: `url('${t.img}')` }} />
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-body-lg font-body-lg text-on-surface truncate group-hover/item:text-primary transition-colors">{t.title}</span>
                    <span className="text-body-md font-body-md text-on-surface-variant">{t.date}</span>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover/item:opacity-100 transition-opacity">chevron_right</span>
                </div>
              ))}
            </div>
          </details>
        </section>
      </div>
    </main>
  )
}

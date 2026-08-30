import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Footer from '../components/Footer'

const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'
const CHECKOUT_HERO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfJ5s7hVXcqsp059dApfeVNBDcFfCwNGVyaoOUPdeQP31BYceX0aOxr7AZN89DZ7OcokcFfJfqU0c0oZakat6i_EwmdT1gug_TYR3iznoFDd4YFAKzuppBympkhwKKHQ3hjwVP0TsnAWwI4ZHSZXWBlv10JJZIG97-DQ70Qu28ChOt9wVBRxtDJv5aiatVkgnPPJE2r1ayJkkDx17TjEjUaEOxAMxBjRDBKfCWK56iIXubbykTCIlC-g'
const SUMMARY_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNRDHbd6ppGTNu70zEBMQfQaeSWJ3zKZeSdBJutkJBusjCSZMJlkTIHmB6kqh5x31CBrz_Bxd7azTctkMIHUoes5S8U5zGueBshH-J0CCCSPdrwcVSme5MW38GSxy_RPu_lJdI05k820wULAMXvWgLnEI4TLkIjH5emfK7bsKxmazjHNfxH4WELibQ6KBcT6QJ-u3b9UZ--LyFUIps8wW9fz9gjgZ4-FIZiJV5GCjFaMC7E-Ux84wmig'
const TRIP_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0wPt8O6EHTOlqEUuS_uIf8XFE6AzhEhe6MXem7AYYaTzvdlQDSt5hJNT2MSALJni7zlyDxiAoQnOowlmuHQFpKTv_JR0cXV348gYFQAOWSwjv-KPkPXVKUdv2cFcrLHSSfRv96D5SYFPVSJLyFjr385tQIkDtDJ8SGbrPzdJqgzy4PYUEfxuB2kWyXB3kI5xlgZb3UFHKpkiVMUoLFDcq3ARJphyZRLrhHgT4IgdOlulqpBXYJ2yZcQ'

export default function Checkout({ navigate }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [plan, setPlan] = useState('full')
  const [showConfirm, setShowConfirm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowConfirm(true)
  }

  return (
    <main className="min-h-screen bg-surface-container-low">

      {/* ── MOBILE LAYOUT ──────────────────────────────────────────────── */}
      <div className="md:hidden">

        {/* Fixed mobile header */}
        <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-outline-variant">
          <div className="h-16 flex items-center px-margin-mobile gap-md">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
              onClick={() => navigate('detail')}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex items-center gap-sm flex-1 min-w-0">
              <img src={LOGO} alt="Upsala Logo" className="h-6 w-auto shrink-0" />
              <span className="font-headline-sm text-on-surface truncate">Pago</span>
            </div>
            <img
              src={PROFILE}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover shrink-0"
            />
          </div>
        </header>

        {/* Mobile content */}
        <div className="pt-16 pb-24 px-margin-mobile flex flex-col gap-lg">

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-xs pt-lg">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center gap-xs">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-label-md text-white text-sm">{step}</span>
                </div>
                {step < 3 && (
                  <div className="w-8 h-0.5 bg-primary" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center font-body-md text-on-surface-variant -mt-sm">Paso 3 de 3</p>

          {/* Step 1 – Your Details */}
          <section className="flex flex-col gap-md">
            <h2 className="font-headline-sm text-on-surface">Paso 1 — Tus Datos</h2>
            <form className="flex flex-col gap-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-sm">
                <div className="flex flex-col gap-xs">
                  <Label htmlFor="m-firstName" className="font-label-md text-on-surface">Nombre</Label>
                  <Input
                    id="m-firstName"
                    placeholder="Jane"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <Label htmlFor="m-lastName" className="font-label-md text-on-surface">Apellido</Label>
                  <Input
                    id="m-lastName"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-xs">
                <Label htmlFor="m-email" className="font-label-md text-on-surface">Email</Label>
                <Input
                  id="m-email"
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-xs">
                <Label htmlFor="m-phone" className="font-label-md text-on-surface">Teléfono</Label>
                <Input
                  id="m-phone"
                  type="tel"
                  placeholder="+1 555 000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Step 2 – Payment */}
              <h2 className="font-headline-sm text-on-surface mt-sm">Paso 2 — Método de Pago</h2>

              {/* Payment option cards */}
              <div className="flex flex-col gap-sm">
                {/* Full Payment */}
                <button
                  type="button"
                  onClick={() => setPlan('full')}
                  className={cn(
                    'w-full text-left p-md rounded-xl border-2 transition-all',
                    plan === 'full'
                      ? 'border-primary bg-primary/5'
                      : 'border-outline-variant bg-surface-container-lowest'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-on-surface">Pago Completo</span>
                    <span className="font-headline-sm text-primary">$3,400</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant text-sm mt-xs">Pagá el total y asegurate el lugar de inmediato.</p>
                </button>

                {/* Deposit */}
                <button
                  type="button"
                  onClick={() => setPlan('deposit')}
                  className={cn(
                    'w-full text-left p-md rounded-xl border-2 transition-all relative',
                    plan === 'deposit'
                      ? 'border-primary bg-primary/5'
                      : 'border-outline-variant bg-surface-container-lowest'
                  )}
                >
                  <Badge className="absolute -top-2 right-md bg-primary text-white font-label-md text-xs">
                    Recomendado
                  </Badge>
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-on-surface">Reservar con Seña</span>
                    <span className="font-headline-sm text-primary">$850</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant text-sm mt-xs">Pagá el 10% ahora, el resto antes del viaje.</p>
                </button>
              </div>

              {/* Card fields */}
              <div className="flex flex-col gap-sm">
                <div className="flex flex-col gap-xs">
                  <Label htmlFor="m-card" className="font-label-md text-on-surface">Número de Tarjeta</Label>
                  <Input
                    id="m-card"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-sm">
                  <div className="flex flex-col gap-xs">
                    <Label htmlFor="m-expiry" className="font-label-md text-on-surface">Vencimiento</Label>
                    <Input
                      id="m-expiry"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      maxLength={5}
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <Label htmlFor="m-cvv" className="font-label-md text-on-surface">CVV</Label>
                    <Input
                      id="m-cvv"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Confirmar Reserva
              </Button>
            </form>
          </section>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ─────────────────────────────────────────────── */}
      <div className="hidden md:block pt-0">

        {/* Hero banner */}
        <div className="relative w-full h-64 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${CHECKOUT_HERO}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 px-margin-desktop pb-lg">
            <p className="font-label-md text-white/70 uppercase tracking-widest mb-xs">Paso 3 de 3</p>
            <h1 className="font-headline-xl text-white">Pago Seguro</h1>
          </div>
        </div>

        {/* 12-col grid */}
        <div className="max-w-[1440px] mx-auto px-margin-desktop py-xl grid grid-cols-12 gap-gutter">

          {/* Left 8 cols */}
          <div className="col-span-8 flex flex-col gap-xl">

            {/* Step 1 – Traveler Details */}
            <section className="flex flex-col gap-md">
              <h2 className="font-headline-md text-on-surface">Paso 1 — Tus Datos</h2>
              <Card className="bg-surface-container-lowest border-outline-variant shadow-sm">
                <CardContent className="p-lg">
                  <form className="grid grid-cols-2 gap-md">
                    <div className="flex flex-col gap-xs">
                      <Label htmlFor="d-firstName" className="font-label-md text-on-surface">Nombre</Label>
                      <Input
                        id="d-firstName"
                        placeholder="Jane"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <Label htmlFor="d-lastName" className="font-label-md text-on-surface">Apellido</Label>
                      <Input
                        id="d-lastName"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className="col-span-2 flex flex-col gap-xs">
                      <Label htmlFor="d-email" className="font-label-md text-on-surface">Email</Label>
                      <Input
                        id="d-email"
                        type="email"
                        placeholder="jane@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-span-2 flex flex-col gap-xs">
                      <Label htmlFor="d-phone" className="font-label-md text-on-surface">Teléfono</Label>
                      <Input
                        id="d-phone"
                        type="tel"
                        placeholder="+1 555 000 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </form>
                </CardContent>
              </Card>
            </section>

            {/* Step 2 – Payment Method */}
            <section className="flex flex-col gap-md">
              <h2 className="font-headline-md text-on-surface">Paso 2 — Método de Pago</h2>

              {/* Payment method selectors */}
              <div className="grid grid-cols-2 gap-md">
                {/* Mercado Pago */}
                <button
                  type="button"
                  onClick={() => setPlan('full')}
                  className={cn(
                    'flex flex-col items-center gap-sm p-lg rounded-xl border-2 transition-all text-center',
                    plan === 'full'
                      ? 'border-primary bg-primary/5'
                      : 'border-outline-variant bg-surface-container-lowest hover:border-primary/40'
                  )}
                >
                  <span className="material-symbols-outlined text-3xl text-primary">account_balance_wallet</span>
                  <div>
                    <p className="font-label-md text-on-surface">Mercado Pago</p>
                    <p className="font-body-md text-on-surface-variant text-sm">Pago Completo $3,400</p>
                  </div>
                </button>

                {/* Credit/Debit Card */}
                <button
                  type="button"
                  onClick={() => setPlan('deposit')}
                  className={cn(
                    'flex flex-col items-center gap-sm p-lg rounded-xl border-2 transition-all text-center',
                    plan === 'deposit'
                      ? 'border-primary bg-primary/5'
                      : 'border-outline-variant bg-surface-container-lowest hover:border-primary/40'
                  )}
                >
                  <span className="material-symbols-outlined text-3xl text-primary">credit_card</span>
                  <div>
                    <p className="font-label-md text-on-surface">Tarjeta de Crédito/Débito</p>
                    <p className="font-body-md text-on-surface-variant text-sm">Reservar con Seña $850</p>
                  </div>
                </button>
              </div>

              {/* Card form */}
              <Card className="bg-surface-container-lowest border-outline-variant shadow-sm">
                <CardContent className="p-lg">
                  <div className="grid grid-cols-2 gap-md">
                    <div className="col-span-2 flex flex-col gap-xs">
                      <Label htmlFor="d-card" className="font-label-md text-on-surface">Número de Tarjeta</Label>
                      <Input
                        id="d-card"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        maxLength={19}
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <Label htmlFor="d-expiry" className="font-label-md text-on-surface">Vencimiento</Label>
                      <Input
                        id="d-expiry"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        maxLength={5}
                      />
                    </div>
                    <div className="flex flex-col gap-xs">
                      <Label htmlFor="d-cvv" className="font-label-md text-on-surface">CVV</Label>
                      <Input
                        id="d-cvv"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        maxLength={4}
                      />
                    </div>
                  </div>

                  {/* Price breakdown */}
                  <div className="mt-lg flex flex-col gap-xs">
                    <div className="flex justify-between font-body-md text-on-surface-variant">
                      <span>Precio Base</span>
                      <span>$3,400</span>
                    </div>
                    <div className="flex justify-between font-body-md text-on-surface-variant">
                      <span>Gastos</span>
                      <span>$245</span>
                    </div>
                    <div className="flex justify-between font-body-md text-on-surface-variant">
                      <span>Seguro</span>
                      <span>$150</span>
                    </div>
                    <Separator className="my-xs" />
                    <div className="flex justify-between font-label-md text-on-surface font-semibold">
                      <span>Total</span>
                      <span>$3,795</span>
                    </div>
                    <p className="font-body-md text-on-surface-variant text-sm text-right">
                      Seña 10% = $379.50
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full" size="lg" onClick={handleSubmit}>
                Confirmar Reserva
              </Button>
            </section>
          </div>

          {/* Right 4 cols – sticky trip summary */}
          <div className="col-span-4">
            <div className="sticky top-32 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md">
              {/* Summary image */}
              <div
                className="h-[200px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${SUMMARY_IMG}')` }}
              />

              {/* Summary body */}
              <div className="p-lg flex flex-col gap-md">
                <div>
                  <h3 className="font-headline-sm text-on-surface">Fitz Roy Trek</h3>
                  <p className="font-body-md text-on-surface-variant">El Chaltén, Argentina</p>
                </div>

                <div className="flex flex-col gap-xs">
                  <div className="flex items-center gap-sm font-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                    <span>Nov 12 - Nov 18 · 7 Días</span>
                  </div>
                  <div className="flex items-center gap-sm font-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">group</span>
                    <span>2 Viajeros</span>
                  </div>
                </div>

                <Separator />

                {/* Price breakdown */}
                <div className="flex flex-col gap-xs">
                  <div className="flex justify-between font-body-md text-on-surface-variant">
                    <span>Precio Base</span>
                    <span>$3,400</span>
                  </div>
                  <div className="flex justify-between font-body-md text-on-surface-variant">
                    <span>Equipamiento</span>
                    <span>$245</span>
                  </div>
                  <div className="flex justify-between font-body-md text-on-surface-variant">
                    <span>Seguro de Viaje</span>
                    <span>$150</span>
                  </div>
                  <Separator className="my-xs" />
                  <div className="flex justify-between font-label-md text-on-surface font-bold">
                    <span>Total</span>
                    <span>$3,795</span>
                  </div>
                </div>

                {/* Deposit highlight */}
                <div className="bg-primary/10 rounded-xl p-sm">
                  <p className="font-body-md text-primary text-sm text-center">
                    Pago de hoy (seña 10%):{' '}
                    <span className="font-semibold">$379.50</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* ── SUCCESS MODAL ──────────────────────────────────────────────── */}
      {showConfirm && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-margin-mobile">
          <div className="bg-surface-container-lowest w-full max-w-[384px] rounded-2xl p-lg flex flex-col items-center text-center gap-md shadow-2xl">
            {/* Checkmark */}
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <span
                className="material-symbols-outlined text-primary text-5xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>

            <div className="flex flex-col gap-xs">
              <h3 className="font-headline-md text-on-surface">¡Reserva Confirmada!</h3>
              <p className="font-body-md text-on-surface-variant">Tu expedición está asegurada. ¡Preparate para la aventura!</p>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={() => { setShowConfirm(false); navigate('my-trips') }}
            >
              Ver Mis Viajes
            </Button>
          </div>
        </div>
      )}
    </main>
  )
}

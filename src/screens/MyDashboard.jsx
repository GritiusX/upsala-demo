import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Footer from '../components/Footer'

// ─── Image constants ──────────────────────────────────────────────────────────
const LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'

const PROFILE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'

const TRIP_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAne6WQTgAjcRLSvr376elHiAVHJVjS3bDBiHT7cdYMkaMVtcpU-FIT1FT0fFWeX2s6Gmm2S3OUYnHIZtXHiEOhw2EMgz_6pO4RoQ886uHNmc2oLgm0qtjnndVligtMTt50PhvIv2efSIkdMKYWzZ5j9Yl3c_NodwdWdcVMOV2KdYkdFVZ_Wm0XEVICYcEix-vP-iF343r1dCXXIWUxTNldlcRxKx3vyycywaoEBdMZv8bdFrly7MH0pQ'

// ─── Data ─────────────────────────────────────────────────────────────────────
const documents = [
  { name: 'Medical Clearance', status: 'ACTION REQUIRED', statusColor: 'text-secondary', icon: 'description', action: 'Upload' },
  { name: 'Liability Waiver', status: 'COMPLETED', statusColor: 'text-green-600', icon: 'task_alt', action: 'Download' },
  { name: 'Expedition Route Map', status: 'AVAILABLE', statusColor: 'text-primary', icon: 'map', action: 'Download' },
]

const mobileTrips = [
  { title: 'Patagonia Ice Trek', date: 'Oct 12 - Oct 18', location: 'El Chaltén', status: 'CONFIRMED', img: TRIP_BG, days: 14 },
  { title: 'Las Leñas Snow Trip', date: 'Jul 15 - Jul 22', location: 'Mendoza', status: 'PENDING', img: TRIP_BG, days: 47 },
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function MyDashboard() {
  return (
    <div className="min-h-screen bg-surface-container-lowest">
      {/* ══════════════════════════════════════════════
          MOBILE LAYOUT  (md:hidden)
      ══════════════════════════════════════════════ */}
      <div className="md:hidden">
        {/* Fixed header */}
        <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-margin-mobile bg-surface-container-lowest/90 backdrop-blur border-b border-outline-variant">
          <div className="flex items-center gap-sm">
            <img src={LOGO} alt="Upsala Trips Logo" className="h-8 w-auto object-contain" />
            <span className="font-headline-sm text-on-surface">My Dashboard</span>
          </div>
          <img src={PROFILE} alt="Profile" className="w-9 h-9 rounded-full object-cover ring-2 ring-outline-variant" />
        </header>

        {/* Scrollable content */}
        <main className="pt-16 pb-24 px-margin-mobile flex flex-col gap-lg">
          {/* Welcome banner */}
          <section className="pt-md">
            <p className="font-headline-sm text-on-surface">Welcome back, Juan!</p>
            <p className="font-body-md text-on-surface-variant">Explorer since 2022</p>
          </section>

          {/* Credits card */}
          <Card className="bg-primary text-on-primary rounded-2xl p-md border-0">
            <div className="flex items-center justify-between mb-sm">
              <span className="font-label-md opacity-80">Explorer Pass</span>
              <Badge className="bg-on-primary/20 text-on-primary border-0">Tier: Gold</Badge>
            </div>
            <p className="font-headline-md mb-xs">2,450 <span className="font-body-md opacity-70">/ 3,000 credits</span></p>
            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-on-primary/30 overflow-hidden">
              <div className="h-full rounded-full bg-on-primary" style={{ width: '80%' }} />
            </div>
          </Card>

          {/* Upcoming Trips */}
          <section className="flex flex-col gap-sm">
            <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Upcoming Trips</p>
            {mobileTrips.map((trip) => (
              <Card key={trip.title} className="overflow-hidden rounded-2xl border-0 shadow-sm">
                {/* Background image with gradient overlay */}
                <div
                  className="relative h-44 bg-cover bg-center"
                  style={{ backgroundImage: `url('${trip.img}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Status badge */}
                  <div className="absolute top-sm left-sm">
                    <Badge
                      className={
                        trip.status === 'CONFIRMED'
                          ? 'bg-green-600 text-white border-0'
                          : 'bg-amber-500 text-white border-0'
                      }
                    >
                      {trip.status}
                    </Badge>
                  </div>
                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-md text-on-primary">
                    <p className="font-headline-sm">{trip.title}</p>
                    <p className="font-body-md opacity-80">{trip.date} · {trip.location}</p>
                    <p className="font-label-md mt-xs opacity-70">Days until departure: {trip.days}</p>
                    <div className="mt-sm">
                      <Button variant="outline" className="text-on-primary border-on-primary/50 hover:bg-on-primary/10">
                        VIEW ITINERARY
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          <Separator className="bg-outline-variant" />

          {/* Travel Documents */}
          <section className="flex flex-col gap-sm">
            <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Travel Documents</p>
            {documents.map((doc) => (
              <div key={doc.name} className="flex items-center gap-sm py-sm">
                <span className="material-symbols-outlined text-on-surface-variant">{doc.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-body-md text-on-surface truncate">{doc.name}</p>
                  <p className={`font-label-md ${doc.statusColor}`}>{doc.status}</p>
                </div>
                <Button variant="ghost" size="sm" className="shrink-0">
                  {doc.action}
                </Button>
              </div>
            ))}
          </section>
        </main>
      </div>

      {/* ══════════════════════════════════════════════
          DESKTOP LAYOUT  (hidden md:block)
      ══════════════════════════════════════════════ */}
      <div className="hidden md:block pt-20">
        {/* Page header */}
        <div className="px-margin-desktop py-lg flex items-center justify-between">
          <div>
            <h1 className="font-headline-xl text-on-surface">Welcome back, Juan</h1>
            <p className="font-body-md text-on-surface-variant mt-xs">Explorer Since 2022 · Gold Member</p>
          </div>
          <Button variant="outline" className="gap-xs border-outline-variant text-on-surface">
            <span className="material-symbols-outlined text-[18px]">export_notes</span>
            Export
          </Button>
        </div>

        {/* Bento grid */}
        <div className="px-margin-desktop pb-lg grid grid-cols-12 gap-gutter">
          {/* ── Featured trip card — 8 cols ── */}
          <Card className="col-span-8 h-96 rounded-3xl overflow-hidden relative border-0 shadow-sm">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${TRIP_BG}')` }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* CONFIRMED badge — top left */}
            <div className="absolute top-md left-md">
              <Badge className="bg-green-600 text-white border-0">CONFIRMED</Badge>
            </div>

            {/* Content overlay — bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-md text-on-primary">
              <p className="font-headline-md">Patagonia Ice Trek</p>
              <p className="font-body-md opacity-80 mt-xs">El Chaltén, Argentina · Oct 12–18</p>

              {/* Countdown row */}
              <div className="flex gap-sm mt-sm">
                {[['14', 'DAYS'], ['08', 'HRS'], ['45', 'MIN']].map(([val, label], i) => (
                  <div
                    key={label}
                    className="flex items-center gap-sm"
                  >
                    <div className="bg-on-primary/20 rounded-xl px-md py-xs text-center min-w-[56px]">
                      <p className="font-headline-sm">{val}</p>
                      <p className="font-label-md opacity-70 text-[10px] tracking-wider">{label}</p>
                    </div>
                    {i < 2 && <span className="font-headline-sm opacity-50">|</span>}
                  </div>
                ))}
              </div>

              <Button className="mt-sm bg-on-primary/20 border border-on-primary/40 text-on-primary hover:bg-on-primary/30">
                VIEW ITINERARY
              </Button>
            </div>
          </Card>

          {/* ── Explorer Pass card — 4 cols ── */}
          <Card className="col-span-4 bg-primary text-on-primary rounded-3xl p-md h-96 flex flex-col justify-between border-0 shadow-sm">
            {/* Top */}
            <div className="flex flex-col gap-sm">
              <Badge className="bg-on-primary/20 text-on-primary border-0 w-fit">GOLD TIER</Badge>
              <p className="font-headline-sm">Explorer Pass</p>
              <p className="font-body-md opacity-80">Juan M.</p>
            </div>

            {/* Middle */}
            <div className="flex flex-col gap-xs">
              <p className="font-headline-xl leading-none">2,450</p>
              <p className="font-body-md opacity-70">/ 3,000 credits</p>
              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-on-primary/30 overflow-hidden mt-xs">
                <div className="h-full rounded-full bg-on-primary" style={{ width: '80%' }} />
              </div>
            </div>

            {/* Bottom */}
            <div className="flex flex-col gap-sm">
              <p className="font-label-md opacity-70">Next tier: Platinum at 3,000 credits</p>
              <Button variant="outline" className="border-on-primary/50 text-on-primary w-full hover:bg-on-primary/10">
                Redeem Credits
              </Button>
            </div>
          </Card>
        </div>

        {/* Travel Documents table */}
        <div className="px-margin-desktop pb-xl">
          <h2 className="font-headline-sm text-on-surface mb-md">Travel Documents</h2>

          <Card className="rounded-2xl border border-outline-variant overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low">
                  <th className="px-md py-sm font-label-md text-on-surface-variant font-normal">Document</th>
                  <th className="px-md py-sm font-label-md text-on-surface-variant font-normal">Status</th>
                  <th className="px-md py-sm font-label-md text-on-surface-variant font-normal text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, i) => (
                  <tr
                    key={doc.name}
                    className={`border-b border-outline-variant last:border-0 hover:bg-surface-container transition-colors ${
                      i % 2 === 0 ? 'bg-surface-container-lowest' : 'bg-surface-container-low/40'
                    }`}
                  >
                    <td className="px-md py-sm">
                      <div className="flex items-center gap-sm">
                        <span className="material-symbols-outlined text-on-surface-variant">{doc.icon}</span>
                        <span className="font-body-md text-on-surface">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-md py-sm">
                      <span className={`font-label-md ${doc.statusColor}`}>{doc.status}</span>
                    </td>
                    <td className="px-md py-sm text-right">
                      <Button
                        variant={doc.action === 'Upload' ? 'default' : 'outline'}
                        size="sm"
                      >
                        {doc.action}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import Footer from '../components/Footer'

const LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'
const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBIhP_bCnUd-sWMD9qmBYap9DMt-mLCYbgTsJ7gcxcQJWvUmeq4BaamBHxySDoh82BLvGVZzJ8H7sgzToNo-OZVNhcLEdPs9kCAuKq5j-p8SDpE-tVqQvKCoS2h-icSnaExuetcj23xY71HBRo2Yr5NsAnmzs3rBgmf6mWka3_pPEODaEiQMxdo8P3sEtf6vPG5-sNgVWNBY_507iZJeAYeWFqX0BRQUlkWwgIr-YQiEW_PVZeHz_sGeQ'
const GUIDE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC3LUub_0K1xYYE8EUbSSzqH9uE41e1cFSc-8LKFniO18igITex3MHKabYD8JOz4XnB73uug7_nRKUAFJjA-UNOiYV99SJ7avYTeqRWR-CTcYWAIPqoACjqe1MHf7CRSQz0UJBHvqje3WJO0y7Kut30lTHSY-sxg19w2URjxrvZd5DSJD_LZgcm88Fj2IOyLq5Nt5m_hjj-EwoGFntnMwmSTu3ewo-COa6-hZjs2eAPpIPqCNHTIN_FLg'

const reviews = [
  {
    name: 'María L.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyq3ykWD45i8jaiRPP8CG88CnnKZZLR4W16LHAIvSzicm-PUJJwu1fBakAH1YSymSkuz7jfv8ZAJxS6S2TAg71swpznncFTqwiK0-gE9Or1RCs2mJWcpJVqA7q0Jq7m_vmTNvacg_Jtju_uASZKhaU5WeE6WLEenie0qqSFaTqFnSfQrWt0onLmWtLCigBvHgNgecv5DCgA95A7pjLJJsZ8fOPOKQ2X_nUaKyNrYrLf1U00oF47pSPnw',
    stars: 5,
    text: 'Increíble experiencia. La nieve estaba perfecta y la organización fue impecable.',
  },
  {
    name: 'Carlos D.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpfENsYSI9qX3EZKrvPmh5q7wWYDqb7oP35Wv9LFqHsHDpgnVsSLNLZcfEASS79UORuZWJqrbKxQDCU82mWzbxKZcCJhlckJuWX_GSBwcPp9-9T7o6XNYAQAqzHWnl_hPw2PUYo3N9Ve0I3DrEcpGZ-Bvvg7y5sWSvBwY3M_hM-xRQLRRTpYaeHfKYXQYlQ-NFTF2YwCYb2IS2sSLwc2tfYyuynkA6scQMipmo1DC-IKaX98GHlMxwxw',
    stars: 4.5,
    text: 'El hotel muy cómodo y las clases de ski me ayudaron muchísimo a mejorar mi técnica.',
  },
  {
    name: 'Ana & Pablo',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF1WAmZcwsa5koWqvg2qud-6Je5CF9Z1qI69EUtyoX6cjCBbHR4ydha7lr9ohMvjcd5ew9PT25IYtvPBR8Jbr9OXC_yDVB2Hzmady8rwLPJcke8QCs0Fe67NEZS2jpF7Mz8Yz2d332fBCjSxBdqiOUiF75X_79u2Ou-wvXAdFwl86pK2Jw4uSe98Z-tM3HpwWFz_65bAb5vG5er94wviLRDo9tmv1tTmqDXgc3ATjGZC7BpvB1PqtBWg',
    stars: 5,
    text: 'Un viaje de lujo. Los paisajes insuperables y la atención al detalle hacen que valga cada centavo.',
  },
]

const days = [
  {
    label: 'Day 1',
    title: 'Arrival & Welcome',
    desc: 'Private transfer from Mendoza airport to Las Leñas resort. Equipment fitting, welcome dinner with the guide team.',
  },
  {
    label: 'Days 2-3',
    title: 'Ski Clinic & First Descents',
    desc: 'Morning technique sessions with certified instructors. Afternoon free to explore main slopes at your own pace.',
  },
  {
    label: 'Days 4-6',
    title: 'Alpine Exploration',
    desc: 'Intense ski days including the legendary "Marte" run and off-piste expeditions weather permitting. Farewell dinner.',
  },
]

function StarRating({ stars, size = 18 }) {
  return (
    <div className="flex items-center gap-xs">
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= Math.floor(stars)
        const half = !filled && i === Math.ceil(stars) && stars % 1 !== 0
        return (
          <span
            key={i}
            className="material-symbols-outlined text-secondary-container"
            style={{
              fontSize: size,
              fontVariationSettings: filled ? "'FILL' 1" : half ? "'FILL' 0" : "'FILL' 0",
            }}
          >
            {half ? 'star_half' : 'star'}
          </span>
        )
      })}
    </div>
  )
}

export default function TripDetail({ navigate }) {
  const [travelers, setTravelers] = useState(2)
  const [departure, setDeparture] = useState('Jul 15')

  return (
    <>
      {/* ─────────────────────────────────────────────
          MOBILE LAYOUT
      ───────────────────────────────────────────── */}
      <div className="md:hidden min-h-screen bg-surface-container-low">
        {/* Fixed header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-sm">
          <div className="h-14 flex items-center px-margin-mobile gap-gap-sm">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
              onClick={() => navigate('trips')}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex items-center gap-base flex-1 min-w-0">
              <img src={LOGO} alt="Logo" className="h-6 w-auto shrink-0" />
              <span className="font-label-md text-on-surface truncate">
                Las Leñas Freeride Circuit
              </span>
            </div>
            <img
              src={PROFILE}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover shrink-0"
            />
          </div>
        </header>

        {/* Hero image */}
        <div className="relative w-full h-[400px] overflow-hidden mt-14">
          <img
            src={HERO_IMG}
            alt="Las Leñas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Weather chip */}
          <div className="absolute top-gap-md right-gap-md flex items-center gap-xs bg-black/60 backdrop-blur-sm rounded-full px-sm py-xs">
            <span className="material-symbols-outlined text-white text-[16px]">ac_unit</span>
            <span className="font-label-md text-white text-[12px]">-5°C / 120cm Powder</span>
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-xs">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  'w-2 h-2 rounded-full',
                  i === 0 ? 'bg-white' : 'bg-white/40'
                )}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-margin-mobile py-lg pb-24 flex flex-col gap-lg">
          {/* Title block */}
          <div className="flex flex-col gap-sm">
            <h1 className="font-headline-lg text-on-surface">Las Leñas Freeride Circuit</h1>
            <p className="font-body-md text-on-surface-variant">Mendoza, Argentina</p>
            <div className="flex items-center gap-sm">
              <StarRating stars={4.9} />
              <span className="font-body-md text-on-surface font-semibold">4.9</span>
            </div>
            <p className="font-headline-md text-primary">$2,850 <span className="font-body-md text-on-surface-variant">per person</span></p>
          </div>

          {/* Badge row */}
          <div className="flex flex-wrap gap-sm">
            <Badge variant="secondary">7 Days</Badge>
            <Badge variant="secondary" className="animate-pulse">High Demand</Badge>
            <Badge variant="secondary">Expert Level</Badge>
          </div>

          {/* Description */}
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Immerse yourself in the vast expanse of the Andes with this premium freeride expedition
            to Las Leñas. Designed for adventurers seeking world-class powder skiing combined with
            exceptional mountain hospitality. Explore legendary off-piste terrain, pristine alpine
            bowls, and breathtaking Andean landscapes under the guidance of expert local guides.
          </p>

          {/* Guide */}
          <div className="flex flex-col gap-sm">
            <h2 className="font-headline-sm text-on-surface">Your Guide</h2>
            <div className="flex items-center gap-md bg-surface-container-lowest rounded-2xl p-md shadow-sm">
              <img
                src={GUIDE_IMG}
                alt="Tomas Alarcon"
                className="w-16 h-16 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="font-headline-sm text-on-surface">Tomas Alarcon</p>
                <p className="font-body-md text-on-surface-variant">Mountain Guide · 12 Years Exp.</p>
              </div>
            </div>
          </div>

          {/* Itinerary */}
          <div className="flex flex-col gap-sm">
            <h2 className="font-headline-sm text-on-surface">Itinerary</h2>
            <Accordion type="single" collapsible className="flex flex-col gap-sm">
              {days.map((day, idx) => (
                <AccordionItem
                  key={day.label}
                  value={`day-${idx}`}
                  className="bg-surface-container-lowest rounded-xl px-md shadow-sm border-0"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-md text-left">
                      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                        <span className="font-label-md text-primary text-[11px]">{day.label.split(' ')[1] ?? day.label}</span>
                      </div>
                      <span className="font-headline-sm text-on-surface">{day.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-body-md text-on-surface-variant pb-md">
                    {day.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Reviews */}
          <div className="flex flex-col gap-sm">
            <h2 className="font-headline-sm text-on-surface">Reviews</h2>
            <div className="flex flex-col gap-sm">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="bg-surface-container-lowest rounded-xl p-md shadow-sm flex flex-col gap-sm"
                >
                  <div className="flex items-center gap-sm">
                    <img src={r.img} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-label-md text-on-surface">{r.name}</p>
                      <StarRating stars={r.stars} size={14} />
                    </div>
                  </div>
                  <p className="font-body-md text-on-surface-variant">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-margin-mobile py-md">
          <Button variant="default" size="lg" className="w-full" onClick={() => navigate('checkout')}>
            Secure Your Spot – $2,850
          </Button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          DESKTOP LAYOUT
      ───────────────────────────────────────────── */}
      <div className="hidden md:block pt-20 bg-surface-container-low min-h-screen">
        <div className="max-w-[1440px] mx-auto px-margin-desktop py-lg grid grid-cols-12 gap-gutter">

          {/* ── Left column (8 cols) ── */}
          <div className="col-span-8 flex flex-col gap-lg">

            {/* Hero */}
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-md">
              <img src={HERO_IMG} alt="Las Leñas" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-gap-md right-gap-md">
                <Badge className="flex items-center gap-xs bg-black/60 text-white border-0 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[14px]">ac_unit</span>
                  120cm Powder
                </Badge>
              </div>
            </div>

            {/* Title block */}
            <div className="flex flex-col gap-sm">
              <h1 className="font-headline-lg text-on-surface">Las Leñas Freeride Circuit</h1>
              <p className="font-body-lg text-on-surface-variant">Mendoza, Argentina</p>
              <div className="flex items-center gap-sm">
                <StarRating stars={4.9} size={20} />
                <span className="font-body-lg text-on-surface font-semibold">4.9</span>
                <span className="font-body-md text-on-surface-variant">/ 42 reviews</span>
              </div>
            </div>

            <Separator className="border-outline-variant" />

            {/* About */}
            <div className="flex flex-col gap-sm">
              <h2 className="font-headline-md text-on-surface">About This Expedition</h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Las Leñas is one of South America's premier freeride destinations, boasting over
                3,000 meters of vertical and reliably dry Andean powder. This expedition places
                you at the heart of the mountain's most coveted terrain — from wide open alpine
                bowls to steep chutes accessible only with a certified guide.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Each day is crafted to maximize your time on snow while ensuring safety and
                comfort. Evenings are reserved for immersive mountain culture: shared meals,
                route briefings, and the camaraderie that only high-altitude adventure fosters.
                This is skiing as it was meant to be experienced.
              </p>
            </div>

            {/* Difficulty meter */}
            <div className="flex flex-col gap-sm">
              <h2 className="font-headline-sm text-on-surface">Difficulty</h2>
              <div className="flex items-center gap-md">
                <div className="flex gap-xs">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={cn(
                        'w-8 h-2 rounded-full',
                        i <= 3 ? 'bg-primary' : 'bg-surface-container-high'
                      )}
                    />
                  ))}
                </div>
                <span className="font-body-md text-on-surface-variant">Advanced / Expert</span>
              </div>
            </div>

            <Separator className="border-outline-variant" />

            {/* Itinerary accordion */}
            <div className="flex flex-col gap-sm">
              <h2 className="font-headline-md text-on-surface">Itinerary</h2>
              <Accordion type="single" collapsible className="flex flex-col gap-sm">
                {days.map((day, idx) => (
                  <AccordionItem
                    key={day.label}
                    value={`day-desktop-${idx}`}
                    className="bg-surface-container-lowest rounded-xl px-md shadow-sm border-0"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-md text-left">
                        <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                          <span className="font-label-md text-primary text-[11px] text-center leading-tight px-1">
                            {day.label}
                          </span>
                        </div>
                        <span className="font-headline-sm text-on-surface">{day.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="font-body-md text-on-surface-variant pb-md pl-[64px]">
                      {day.desc}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <Separator className="border-outline-variant" />

            {/* Guide card */}
            <div className="flex flex-col gap-sm">
              <h2 className="font-headline-md text-on-surface">Your Guide</h2>
              <div className="bg-surface-container-lowest rounded-2xl p-md shadow-sm flex items-start gap-md">
                <img
                  src={GUIDE_IMG}
                  alt="Tomas Alarcon"
                  className="w-24 h-24 rounded-full object-cover shrink-0"
                />
                <div className="flex flex-col gap-sm flex-1">
                  <div>
                    <h3 className="font-headline-sm text-on-surface">Tomas Alarcon</h3>
                    <p className="font-body-md text-on-surface-variant">Mountain Guide · 12 Years Exp.</p>
                  </div>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Tomas grew up in the Mendoza foothills and has spent over a decade guiding
                    expeditions in Las Leñas and beyond. Certified by the Argentine Mountain Guide
                    Association, he brings deep terrain knowledge, calm leadership, and an
                    infectious passion for the mountains to every trip.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-xs text-secondary-container font-body-md">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      <span className="font-label-md text-on-surface">4.9 Rating</span>
                    </div>
                    <Button variant="outline">Message Guide</Button>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="border-outline-variant" />

            {/* Reviews */}
            <div className="flex flex-col gap-md">
              <h2 className="font-headline-md text-on-surface">Reviews</h2>
              <div className="grid grid-cols-3 gap-md">
                {reviews.map((r) => (
                  <div
                    key={r.name}
                    className="bg-surface-container-lowest rounded-xl p-md shadow-sm flex flex-col gap-sm"
                  >
                    <div className="flex items-center gap-sm">
                      <img src={r.img} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <p className="font-label-md text-on-surface">{r.name}</p>
                        <StarRating stars={r.stars} size={14} />
                      </div>
                    </div>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column (4 cols) – sticky price card ── */}
          <div className="col-span-4">
            <div className="sticky top-32 flex flex-col gap-md">
              <div className="bg-surface-container-lowest rounded-2xl p-md shadow-md flex flex-col gap-md">

                {/* Price + high demand */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-headline-md text-on-surface">$2,850</p>
                    <p className="font-body-md text-on-surface-variant">per person</p>
                  </div>
                  <Badge variant="secondary" className="animate-pulse">High Demand</Badge>
                </div>

                <Separator className="border-outline-variant" />

                {/* Departure date select */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-on-surface-variant">Departure Date</label>
                  <select
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    className="w-full rounded-lg border border-outline-variant bg-surface-container px-sm py-xs font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Jul 15</option>
                    <option>Aug 12</option>
                    <option>Sep 10</option>
                  </select>
                </div>

                {/* Travelers stepper */}
                <div className="flex flex-col gap-xs">
                  <label className="font-label-md text-on-surface-variant">Travelers</label>
                  <div className="flex items-center gap-sm">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTravelers((t) => Math.max(1, t - 1))}
                    >
                      <span className="material-symbols-outlined">remove</span>
                    </Button>
                    <span className="font-headline-sm text-on-surface w-8 text-center">{travelers}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setTravelers((t) => t + 1)}
                    >
                      <span className="material-symbols-outlined">add</span>
                    </Button>
                  </div>
                </div>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => navigate('checkout')}
                >
                  Secure Your Spot
                </Button>

                <Separator className="border-outline-variant" />

                {/* Trust indicators */}
                <div className="flex flex-col gap-sm">
                  {[
                    { icon: 'replay', label: '100% Refundable · 30 days' },
                    { icon: 'lock', label: 'Secure Payment' },
                    { icon: 'support_agent', label: 'Expert Support 24/7' },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-[18px] text-primary">{icon}</span>
                      <span className="font-body-md">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

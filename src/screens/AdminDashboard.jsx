import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const LOGO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZThyURbLNJntYqPuQvOAuvya3orzxFpi_w9ghGDaCk5yRoK-lDecvkiqqf4oLJSyeMzm2753hAHMFeUls5PCnbUguUf6t9XLF2vqgPp7aydZbjPMAJugicO1w7BTAQPqcK75k_KWJ3YbBLlObuJZsFIL0jf_QMRf0beqJhtWLa9KHGohORxhG2TOb_UYBYGaOtBdgG2DWb5Fs7bmgiZo6k0zO4KfWbaSgkU5cMCV1XEVk8g4mNSzhg'
const PROFILE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCheYdsipuktbVlX2BhtCH4yMCb36Wb9zyFxPbyT4VZnfR8GvujMu8CP6O_6c65y8Qzduyt2AiWXKQMq9efrp5noWo3qB32W-psprfXXnKI201YthVa3guEHHbdbksN7CyXuQmIbKT48iFnxwAvbLAcVssl07ztWXvEhvcO7xu9Pk9odT0J53dmjpGX6NelfC89MAC0MI88cMvUT5z3n9fXAOWfhsLtWqdfdv3SozR3ontT0FJMFCrV_Q'
const TRIP1_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaV0JGHHOtYHrMQPiFo9YVqRlCMjpWgPOG-VNGrpB-aZo3IAOhq56uJoZo8LrNrA8-qVu0fyiwah6mg1BkwsbcExWyhy7wo9GkMSx-3LydPlGk_NzH-intwu5-_bc7rbSfEhDwIvKquXiNDfiaJQiYIHZ4LGoTMdMacLiPBzJDkiarebFoi0dC3QQDBhCeqfcJ9MlvewoN7IHAPEA7FJEE6KwScf8Re5REcbEDVRALLi7izcFAYo5xYg'
const TRIP2_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdu0Jncvq051USWK0M5Y-EQo6BeZ_PhVMx8_-Dluci_Rdl_l8Zw5qRt6VBKjPgiIpVDWru1H1zSv4eT_FJ9Fzr3SnCBLU0M4I-zRTna1F3if7JURXuc22I_sbBBir-bcb_L7W82UqizILVtodYVmNI0WeSLjk3rMHuFUo81FNfDucliERFh5mgC9aiYByOcsTmbCAn9dAjnJXY5_SD62yLs5kheya_o4Y_tyze_9iK1UU600xYSSLcqg'
const TRIP3_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhomfFa9pgqWHTgirl1AvZRG3WQNGK-8ab7tQn59qlvMK4ICbQ8Kr-Num_PN-JAMnFGJt6NVTqBhdqv6JsA52FORXqaPWYQvahOxLQUY_0WoHYjfj7CUGpZBKv27Nixw43h-9No0DyhiLDw2RocuYGSACznBoQAkwuUkjcP_mc5Rgt9KMfKDzUp8msDUEHiu3BNtpG-DtQXvd6Uh0LY7EukEsBrx7bZx4ELRlPS9Opj_q09dajmfyM2g'

const kpis = [
  { label: 'Ingresos Totales', value: '$124,500', change: '+14.2%', positive: true, icon: 'payments', primary: true },
  { label: 'Reservas Activas', value: '342', change: '+8.1%', positive: true, icon: 'confirmation_number', primary: false },
  { label: 'Valor Promedio', value: '$890', change: '+2.3%', positive: true, icon: 'trending_up', primary: false },
  { label: 'Nuevos Clientes', value: '128', change: '-3.5%', positive: false, icon: 'person_add', primary: false },
]

const expeditions = [
  { img: TRIP1_IMG, name: 'Chapadmalal Surf Camp', date: '10 Nov', spots: '18/20', revenue: '$32,400', status: 'Confirmado' },
  { img: TRIP2_IMG, name: 'Las Leñas Snow Trip', date: '15 Jul', spots: '12/15', revenue: '$87,000', status: 'Confirmado' },
  { img: TRIP3_IMG, name: 'Punta del Diablo Surf Trip', date: '12 Oct', spots: '8/12', revenue: '$11,400', status: 'Abierto' },
]

const chartData = [65000, 72000, 68000, 95000, 88000, 124500]
const chartLabels = ['Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago']

// Compute SVG polyline points
const CHART_W = 600
const CHART_H = 200
const CHART_PAD_LEFT = 56
const CHART_PAD_RIGHT = 16
const CHART_PAD_TOP = 16
const CHART_PAD_BOTTOM = 32

const minVal = Math.min(...chartData)
const maxVal = Math.max(...chartData)
const range = maxVal - minVal || 1

function toX(i) {
  return CHART_PAD_LEFT + (i / (chartData.length - 1)) * (CHART_W - CHART_PAD_LEFT - CHART_PAD_RIGHT)
}
function toY(v) {
  return CHART_PAD_TOP + (1 - (v - minVal) / range) * (CHART_H - CHART_PAD_TOP - CHART_PAD_BOTTOM)
}

const points = chartData.map((v, i) => `${toX(i)},${toY(v)}`).join(' ')

// Closed area path (go to bottom-right then bottom-left)
const lastX = toX(chartData.length - 1)
const firstX = toX(0)
const bottomY = CHART_H - CHART_PAD_BOTTOM
const areaPath = `M ${firstX},${bottomY} ${chartData.map((v, i) => `L ${toX(i)},${toY(v)}`).join(' ')} L ${lastX},${bottomY} Z`

const yLabels = ['$60k', '$80k', '$100k', '$120k']
const yValues = [60000, 80000, 100000, 120000]

const INITIAL_TRIPS = [
  { id: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6kNUaFZ3BvfKty9DK8jA--RLPBb6Igo6KeLkIxpTS-fQyBLUEg7yTsXvxlJk2HglXnynKaJwuKFLCbiQCli8q9e8NRqjYfDVJukeAYsOLdAVS4CVRlTqeZHBkvQp8Nw2OmMf56XNJSsmav5AN9pjsqp3AhJSISjmqpMOmeZLR691quFUYu2s8HVBRm0p3DGG9XAmq4-dJfVNnXpnO6aZJsELuuqyE97GZiXQXlKKoMOBz8ddEX_W8w', name: 'Chapadmalal Surf Camp', location: 'Buenos Aires, Argentina', date: '10 Nov', price: '$750', spots: '18/20', status: 'Confirmado' },
  { id: 2, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpygtKaAZVYaSRsCb3xkst7G9Tkf6JEmz4zewSmOKJnWeC7QfqLSlhvZRj_rk_Pe-k7RtPbieCzjhq5F9beKLzC3judrf3-A9UpGU9SrRi_yhG906jJunBXRpdhJPlE3W7rIqVaJhPcH7iAYmc7i2QK5GaFK9lbyHE0qK-vcDjiqp6WunYPFIeNHL3jrpVmrqzQbsEw353StX7rQqr2pXbOmIgfArkuN7dzxMBah4uS8ym6yoqmxIwPw', name: 'Las Leñas Snow Trip', location: 'Mendoza, Argentina', date: '15 Jul', price: '$1,200', spots: '12/15', status: 'Confirmado' },
  { id: 3, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv9B2MpC3eFOlftIEta520YVq8s6HE5sF5HG9qBl9vBPTFmcoqK0Z5QRZtKkB1cqHdzlt8rsUF3hLtuYMMuWJ7OZQo1pWMNRlsjI0pETFCH9BJ3A3Tp8-MTyP7K7ptOIMZJJ0nxq_9diiRxtvjLCyHB0qTG129DOlyR1A3_wCeWZJHRhjGzOez7rybejBN7vr3TrKf7j09rRtlxKjA8js7W0HESERw0clWTSG21fBQHM2U15Dzs_xk8A', name: 'Punta del Diablo Surf Trip', location: 'Rocha, Uruguay', date: '12 Oct', price: '$900', spots: '8/12', status: 'Abierto' },
]

export default function AdminDashboard() {
  const [trips, setTrips] = useState(INITIAL_TRIPS)
  const [editTrip, setEditTrip] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [editingContent, setEditingContent] = useState(false)

  const handleSaveEdit = () => {
    setTrips(prev => prev.map(t => t.id === editTrip.id ? editTrip : t))
    setEditTrip(null)
  }
  const handleDelete = () => {
    setTrips(prev => prev.filter(t => t.id !== deleteId))
    setDeleteId(null)
  }

  return (
    <div className="min-h-screen bg-surface-container-lowest flex flex-col">

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden flex flex-col min-h-screen">

        {/* Fixed mobile header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant/30 h-16 flex items-center justify-between px-margin-mobile">
          <div className="flex items-center gap-base">
            <img src={LOGO} alt="Upsala Trips Logo" className="h-8 w-auto object-contain" />
            <span className="font-headline-sm text-on-surface">Admin</span>
          </div>
          <img src={PROFILE} alt="Profile" className="w-9 h-9 rounded-full object-cover ring-2 ring-outline-variant/40" />
        </header>

        {/* Mobile content */}
        <main className="pt-16 pb-24 px-margin-mobile flex flex-col gap-lg">

          <div className="pt-lg flex flex-col gap-xs">
            <h1 className="font-headline-md text-on-surface">Panel de Control</h1>
            <p className="font-body-md text-on-surface-variant text-sm bg-primary/8 border border-primary/20 rounded-lg px-sm py-xs">
              🔒 Esta información solo la ven los dueños de la página, no los clientes.
            </p>
          </div>

          {/* Mobile KPI cards */}
          <div className="flex flex-col gap-sm">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className={`rounded-2xl p-md flex items-center gap-md ${
                  kpi.primary
                    ? 'bg-primary'
                    : 'bg-surface-container border border-outline-variant/20 shadow-sm'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[28px] ${kpi.primary ? 'text-white/80' : 'text-primary'}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {kpi.icon}
                </span>
                <div className="flex-1 flex flex-col gap-xs">
                  <span className={`font-label-md ${kpi.primary ? 'text-white/70' : 'text-on-surface-variant'}`}>
                    {kpi.label}
                  </span>
                  <span className={`font-headline-sm ${kpi.primary ? 'text-white' : 'text-on-surface'}`}>
                    {kpi.value}
                  </span>
                </div>
                <span
                  className={`font-label-md px-sm py-xs rounded-full ${
                    kpi.primary
                      ? 'bg-white/20 text-white'
                      : kpi.positive
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-600'
                  }`}
                >
                  {kpi.change}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile recent trips */}
          <div className="flex flex-col gap-sm">
            <h2 className="font-headline-sm text-on-surface">Expediciones Recientes</h2>
            {expeditions.map((exp) => (
              <div
                key={exp.name}
                className="bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm"
              >
                <div
                  className="h-36 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${exp.img}')` }}
                />
                <div className="p-md flex flex-col gap-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-on-surface">{exp.name}</span>
                    <Badge variant={exp.status === 'Confirmado' ? 'default' : 'outline'}>
                      {exp.status}
                    </Badge>
                  </div>
                  <div className="flex gap-md">
                    <span className="font-body-md text-on-surface-variant">{exp.date}</span>
                    <span className="font-body-md text-on-surface-variant">{exp.spots} cupos</span>
                    <span className="font-body-md text-on-surface">{exp.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full">Exportar Informe</Button>
        </main>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block pt-20 flex-1">

        {/* Page header */}
        <div className="px-margin-desktop py-lg flex items-start justify-between gap-lg">
          <div className="flex flex-col gap-xs">
            <h1 className="font-headline-xl text-on-surface">Panel de Control</h1>
            <p className="font-body-md text-on-surface-variant flex items-center gap-xs">
              <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
              Esta información solo la ven los dueños de la página, no los clientes.
            </p>
          </div>
          <div className="flex items-center gap-sm">
            <select className="border border-outline-variant/40 rounded-lg px-sm py-xs font-body-md text-on-surface bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30">
              <option>Últimos 30 días</option>
              <option>Últimos 90 días</option>
              <option>Este año</option>
            </select>
            <Button variant="outline" className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>download</span>
              Exportar Informe
            </Button>
            <Button>Nueva Expedición</Button>
          </div>
        </div>

        {/* KPI grid */}
        <div className="px-margin-desktop pb-lg grid grid-cols-4 gap-md">

          {/* First KPI – primary */}
          <div className="bg-primary rounded-2xl p-md flex flex-col gap-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-md text-white/70">{kpis[0].label}</span>
              <span
                className="material-symbols-outlined text-white/60 text-[22px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {kpis[0].icon}
              </span>
            </div>
            <span className="font-headline-md text-white">{kpis[0].value}</span>
            <span className="self-start bg-white/20 text-white font-label-md rounded-full px-sm py-xs">
              {kpis[0].change}
            </span>
          </div>

          {/* Other 3 KPIs */}
          {kpis.slice(1).map((kpi) => (
            <div
              key={kpi.label}
              className="bg-surface-container-lowest rounded-2xl p-md shadow-sm border border-outline-variant/20 flex flex-col gap-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-label-md text-on-surface-variant">{kpi.label}</span>
                <span
                  className="material-symbols-outlined text-primary text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {kpi.icon}
                </span>
              </div>
              <span className="font-headline-md text-on-surface">{kpi.value}</span>
              <span
                className={`self-start font-label-md rounded-full px-sm py-xs ${
                  kpi.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
                }`}
              >
                {kpi.change}
              </span>
            </div>
          ))}
        </div>

        {/* Revenue chart */}
        <div className="px-margin-desktop pb-lg">
          <Card>
            <CardHeader className="flex flex-row items-start justify-between pb-sm">
              <div className="flex flex-col gap-xs">
                <CardTitle className="font-headline-sm text-on-surface">Análisis de Ingresos</CardTitle>
                <span className="font-body-md text-on-surface-variant">Últimos 6 Meses</span>
              </div>
              <div className="text-right">
                <div className="font-headline-sm text-on-surface">$124,500</div>
                <div className="font-body-md text-green-600">+14.2% vs mes anterior</div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <svg
                viewBox={`0 0 ${CHART_W} ${CHART_H}`}
                className="w-full"
                preserveAspectRatio="none"
                aria-label="Revenue line chart"
              >
                {/* Y-axis labels */}
                {yValues.map((v, i) => (
                  <text
                    key={v}
                    x={CHART_PAD_LEFT - 8}
                    y={toY(v) + 4}
                    textAnchor="end"
                    fontSize="11"
                    fill="#6b7280"
                  >
                    {yLabels[i]}
                  </text>
                ))}

                {/* Horizontal grid lines */}
                {yValues.map((v) => (
                  <line
                    key={v}
                    x1={CHART_PAD_LEFT}
                    y1={toY(v)}
                    x2={CHART_W - CHART_PAD_RIGHT}
                    y2={toY(v)}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Filled area */}
                <path d={areaPath} fill="rgba(0,40,142,0.1)" />

                {/* Stroke polyline */}
                <polyline
                  points={points}
                  fill="none"
                  stroke="#00288e"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Data point dots */}
                {chartData.map((v, i) => (
                  <circle
                    key={i}
                    cx={toX(i)}
                    cy={toY(v)}
                    r="5"
                    fill="#00288e"
                  />
                ))}

                {/* X-axis labels */}
                {chartLabels.map((label, i) => (
                  <text
                    key={label}
                    x={toX(i)}
                    y={CHART_H - 6}
                    textAnchor="middle"
                    fontSize="11"
                    fill="#6b7280"
                  >
                    {label}
                  </text>
                ))}
              </svg>
            </CardContent>
          </Card>
        </div>

        {/* Bottom grid: expeditions table + active region */}
        <div className="px-margin-desktop pb-xl grid grid-cols-3 gap-lg">

          {/* Recent Expeditions – spans 2 cols */}
          <div className="col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-headline-sm text-on-surface">Expediciones Recientes</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-outline-variant/20">
                      <th className="pb-sm font-label-md text-on-surface-variant font-normal">Expedición</th>
                      <th className="pb-sm font-label-md text-on-surface-variant font-normal">Fecha</th>
                      <th className="pb-sm font-label-md text-on-surface-variant font-normal">Cupos</th>
                      <th className="pb-sm font-label-md text-on-surface-variant font-normal">Ingresos</th>
                      <th className="pb-sm font-label-md text-on-surface-variant font-normal">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expeditions.map((exp, idx) => (
                      <tr
                        key={exp.name}
                        className={`border-b border-outline-variant/10 last:border-0 hover:bg-surface-container transition-colors`}
                      >
                        <td className="py-sm pr-md">
                          <div className="flex items-center gap-sm">
                            <img
                              src={exp.img}
                              alt={exp.name}
                              className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                            />
                            <span className="font-label-md text-on-surface">{exp.name}</span>
                          </div>
                        </td>
                        <td className="py-sm pr-md font-body-md text-on-surface-variant">{exp.date}</td>
                        <td className="py-sm pr-md font-body-md text-on-surface">{exp.spots}</td>
                        <td className="py-sm pr-md font-label-md text-on-surface">{exp.revenue}</td>
                        <td className="py-sm">
                          <Badge variant={exp.status === 'Confirmado' ? 'default' : 'outline'}>
                            {exp.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Active Region – 1 col */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-headline-sm text-on-surface">Región Activa</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col gap-md">
                <div className="bg-surface-container rounded-xl h-48 flex flex-col items-center justify-center gap-sm">
                  <span
                    className="material-symbols-outlined text-primary text-[40px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <span className="font-label-md text-on-surface text-center">El Calafate, Patagonia</span>
                </div>
                <Separator />
                <div className="flex flex-col gap-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-body-md text-on-surface-variant">Expediciones activas</span>
                    <span className="font-label-md text-on-surface">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-md text-on-surface-variant">Total participantes</span>
                    <span className="font-label-md text-on-surface">38</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-md text-on-surface-variant">Temporada</span>
                    <span className="font-label-md text-on-surface">Nov–Dic 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ── Gestión de Viajes ── */}
        <div className="px-margin-desktop pb-xl">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-sm">
              <div>
                <CardTitle className="font-headline-sm text-on-surface">Gestión de Viajes</CardTitle>
                <p className="font-body-md text-on-surface-variant text-sm mt-xs">Editá o eliminá cualquier expedición</p>
              </div>
              <Button size="sm" onClick={() => setEditTrip({ id: Date.now(), name: '', location: '', date: '', price: '', spots: '', status: 'Abierto', img: '' })}>
                <span className="material-symbols-outlined text-[18px] mr-1">add</span>
                Nuevo Viaje
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-col gap-sm">
                {trips.map(trip => (
                  <div key={trip.id} className="flex items-center gap-md p-md rounded-xl border border-outline-variant/20 hover:bg-surface-container transition-colors">
                    <img src={trip.img} alt={trip.name} className="w-14 h-14 rounded-xl object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-label-md text-on-surface truncate">{trip.name}</p>
                      <p className="font-body-md text-on-surface-variant text-sm">{trip.location} · {trip.date} · {trip.price}</p>
                      <div className="flex items-center gap-sm mt-xs">
                        <Badge variant={trip.status === 'Confirmado' ? 'default' : 'outline'} className="text-xs">{trip.status}</Badge>
                        <span className="font-body-md text-on-surface-variant text-xs">{trip.spots} cupos</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-sm shrink-0">
                      <Button variant="outline" size="sm" onClick={() => setEditTrip({ ...trip })}>
                        <span className="material-symbols-outlined text-[16px]">edit</span>
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50" onClick={() => setDeleteId(trip.id)}>
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ── Editor de Contenido ── */}
      <div className="hidden md:block px-margin-desktop pb-xl">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-sm">
            <div>
              <CardTitle className="font-headline-sm text-on-surface">Editor de Contenido — Home</CardTitle>
              <p className="font-body-md text-on-surface-variant text-sm mt-xs">Hacé click en cualquier campo para ver cómo se edita el contenido de la página principal</p>
            </div>
            <Button size="sm" variant="outline" onClick={() => setEditingContent(p => !p)}>
              <span className="material-symbols-outlined text-[16px] mr-1">{editingContent ? 'visibility' : 'edit'}</span>
              {editingContent ? 'Ver preview' : 'Editar contenido'}
            </Button>
          </CardHeader>
          <CardContent className="px-md pb-md">
            <div className="flex flex-col gap-lg">

              {/* Hero section */}
              <div className="flex flex-col gap-sm">
                <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-xs flex items-center gap-2">
                  <span className="w-4 h-px bg-outline-variant" /> Sección Hero
                </p>
                <div className="grid grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <Label className="font-label-md text-on-surface text-sm">Título principal</Label>
                    {editingContent
                      ? <Input defaultValue="Aventurá más allá de lo esperado." className="font-headline-sm" />
                      : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface cursor-not-allowed opacity-70">Aventurá más allá de lo esperado.</div>
                    }
                  </div>
                  <div className="flex flex-col gap-xs">
                    <Label className="font-label-md text-on-surface text-sm">Subtítulo</Label>
                    {editingContent
                      ? <Input defaultValue="Expediciones a los rincones más salvajes de la Patagonia y los Andes." />
                      : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface cursor-not-allowed opacity-70">Expediciones a los rincones más salvajes...</div>
                    }
                  </div>
                  <div className="flex flex-col gap-xs">
                    <Label className="font-label-md text-on-surface text-sm">Texto botón CTA</Label>
                    {editingContent
                      ? <Input defaultValue="ENCONTRAR EXPEDICIÓN" />
                      : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface cursor-not-allowed opacity-70">ENCONTRAR EXPEDICIÓN</div>
                    }
                  </div>
                  <div className="flex flex-col gap-xs">
                    <Label className="font-label-md text-on-surface text-sm">Imagen de fondo (URL)</Label>
                    {editingContent
                      ? <Input defaultValue="https://lh3.googleusercontent.com/aida-public/..." />
                      : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface-variant text-xs cursor-not-allowed opacity-70 truncate">https://lh3.googleusercontent.com/aida-public/...</div>
                    }
                  </div>
                </div>
              </div>

              <div className="border-t border-outline-variant/20" />

              {/* Expediciones section */}
              <div className="flex flex-col gap-sm">
                <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-xs flex items-center gap-2">
                  <span className="w-4 h-px bg-outline-variant" /> Sección Expediciones
                </p>
                <div className="grid grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <Label className="font-label-md text-on-surface text-sm">Título sección</Label>
                    {editingContent
                      ? <Input defaultValue="Expediciones Exclusivas" />
                      : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface cursor-not-allowed opacity-70">Expediciones Exclusivas</div>
                    }
                  </div>
                  <div className="flex flex-col gap-xs">
                    <Label className="font-label-md text-on-surface text-sm">Descripción sección</Label>
                    {editingContent
                      ? <Input defaultValue="Nuestros itinerarios más buscados, combinando paisajes extremos con comodidad refinada." />
                      : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface cursor-not-allowed opacity-70 truncate">Nuestros itinerarios más buscados...</div>
                    }
                  </div>
                </div>
              </div>

              <div className="border-t border-outline-variant/20" />

              {/* Comunidad section */}
              <div className="flex flex-col gap-sm">
                <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-xs flex items-center gap-2">
                  <span className="w-4 h-px bg-outline-variant" /> Sección Comunidad
                </p>
                <div className="grid grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <Label className="font-label-md text-on-surface text-sm">Título sección</Label>
                    {editingContent
                      ? <Input defaultValue="La Comunidad Upsala" />
                      : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface cursor-not-allowed opacity-70">La Comunidad Upsala</div>
                    }
                  </div>
                  <div className="flex flex-col gap-xs">
                    <Label className="font-label-md text-on-surface text-sm">URL del video</Label>
                    {editingContent
                      ? <Input defaultValue="https://youtube.com/..." placeholder="URL del video de YouTube o Vimeo" />
                      : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface-variant text-xs cursor-not-allowed opacity-70">https://youtube.com/...</div>
                    }
                  </div>
                  {[
                    { label: 'Reseña 1 — Texto', val: '"Increíble la organización en Las Leñas. Los equipos de ski eran de primera..."' },
                    { label: 'Reseña 1 — Autor', val: 'Martina R.' },
                    { label: 'Reseña 2 — Texto', val: '"El surf camp en Chapa fue una locura. El nivel de los instructores..."' },
                    { label: 'Reseña 2 — Autor', val: 'Juan Ignacio M.' },
                    { label: 'Reseña 3 — Texto', val: '"Todo resuelto desde el día uno. Uruguay tiene unas olas tremendas..."' },
                    { label: 'Reseña 3 — Autor', val: 'Sofía L.' },
                  ].map(f => (
                    <div key={f.label} className="flex flex-col gap-xs">
                      <Label className="font-label-md text-on-surface text-sm">{f.label}</Label>
                      {editingContent
                        ? <Input defaultValue={f.val} />
                        : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface cursor-not-allowed opacity-70 truncate text-sm">{f.val}</div>
                      }
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-outline-variant/20" />

              {/* Footer section */}
              <div className="flex flex-col gap-sm">
                <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-xs flex items-center gap-2">
                  <span className="w-4 h-px bg-outline-variant" /> Footer
                </p>
                <div className="grid grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <Label className="font-label-md text-on-surface text-sm">Título CTA footer</Label>
                    {editingContent
                      ? <Input defaultValue="Viví tu próxima aventura." />
                      : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface cursor-not-allowed opacity-70">Viví tu próxima aventura.</div>
                    }
                  </div>
                  <div className="flex flex-col gap-xs">
                    <Label className="font-label-md text-on-surface text-sm">Subtítulo CTA footer</Label>
                    {editingContent
                      ? <Input defaultValue="Sumáte a miles de exploradores que confían en Upsala Trips para sus expediciones más épicas." />
                      : <div className="px-sm py-2 rounded-lg bg-surface-container border border-outline-variant/30 font-body-md text-on-surface cursor-not-allowed opacity-70 truncate">Sumáte a miles de exploradores...</div>
                    }
                  </div>
                </div>
              </div>

              {editingContent && (
                <div className="flex gap-sm justify-end pt-sm border-t border-outline-variant/20">
                  <Button variant="outline" onClick={() => setEditingContent(false)}>Cancelar</Button>
                  <Button onClick={() => setEditingContent(false)}>Guardar Cambios</Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ── Edit Modal ── */}
      {editTrip && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-md bg-black/50 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-2xl shadow-2xl w-full max-w-[520px] flex flex-col gap-lg p-xl">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-sm text-on-surface">{editTrip.id > 3 ? 'Nuevo Viaje' : 'Editar Viaje'}</h2>
              <button onClick={() => setEditTrip(null)} className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface-variant">close</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div className="col-span-2 flex flex-col gap-xs">
                <Label className="font-label-md text-on-surface">Nombre del viaje</Label>
                <Input value={editTrip.name} onChange={e => setEditTrip(p => ({ ...p, name: e.target.value }))} placeholder="Ej: Las Leñas Snow Trip" />
              </div>
              <div className="col-span-2 flex flex-col gap-xs">
                <Label className="font-label-md text-on-surface">Ubicación</Label>
                <Input value={editTrip.location} onChange={e => setEditTrip(p => ({ ...p, location: e.target.value }))} placeholder="Ej: Mendoza, Argentina" />
              </div>
              <div className="flex flex-col gap-xs">
                <Label className="font-label-md text-on-surface">Fecha</Label>
                <Input value={editTrip.date} onChange={e => setEditTrip(p => ({ ...p, date: e.target.value }))} placeholder="Ej: 15 Jul" />
              </div>
              <div className="flex flex-col gap-xs">
                <Label className="font-label-md text-on-surface">Precio</Label>
                <Input value={editTrip.price} onChange={e => setEditTrip(p => ({ ...p, price: e.target.value }))} placeholder="Ej: $1,200" />
              </div>
              <div className="flex flex-col gap-xs">
                <Label className="font-label-md text-on-surface">Cupos</Label>
                <Input value={editTrip.spots} onChange={e => setEditTrip(p => ({ ...p, spots: e.target.value }))} placeholder="Ej: 12/15" />
              </div>
              <div className="flex flex-col gap-xs">
                <Label className="font-label-md text-on-surface">Estado</Label>
                <select value={editTrip.status} onChange={e => setEditTrip(p => ({ ...p, status: e.target.value }))}
                  className="border border-outline-variant/40 rounded-lg px-sm py-2 font-body-md text-on-surface bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option>Confirmado</option>
                  <option>Abierto</option>
                  <option>Completo</option>
                  <option>Cancelado</option>
                </select>
              </div>
            </div>
            <div className="flex gap-sm justify-end">
              <Button variant="outline" onClick={() => setEditTrip(null)}>Cancelar</Button>
              <Button onClick={handleSaveEdit}>Guardar Cambios</Button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Confirm Modal ── */}
      {deleteId && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-md bg-black/50 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-2xl shadow-2xl w-full max-w-[400px] flex flex-col gap-lg p-xl">
            <div className="flex flex-col gap-sm">
              <span className="material-symbols-outlined text-red-500 text-[40px]">warning</span>
              <h2 className="font-headline-sm text-on-surface">¿Eliminar este viaje?</h2>
              <p className="font-body-md text-on-surface-variant">Esta acción no se puede deshacer. El viaje será removido permanentemente.</p>
            </div>
            <div className="flex gap-sm justify-end">
              <Button variant="outline" onClick={() => setDeleteId(null)}>Cancelar</Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white border-0" onClick={handleDelete}>Eliminar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

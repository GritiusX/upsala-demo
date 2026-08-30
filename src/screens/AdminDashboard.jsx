import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Footer from '../components/Footer'

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
  { img: TRIP1_IMG, name: 'Perito Moreno Traverse', date: 'Nov 12', spots: '18/20', revenue: '$32,400', status: 'Confirmado' },
  { img: TRIP2_IMG, name: 'Fitz Roy Summit Push', date: 'Nov 18', spots: '12/15', revenue: '$87,000', status: 'Confirmado' },
  { img: TRIP3_IMG, name: 'Lake Argentino Kayak', date: 'Dec 01', spots: '8/12', revenue: '$11,400', status: 'Abierto' },
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

export default function AdminDashboard() {
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

          <h1 className="font-headline-md text-on-surface pt-lg">Panel de Control</h1>

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
        <div className="px-margin-desktop py-lg flex items-center justify-between">
          <h1 className="font-headline-xl text-on-surface">Panel de Control</h1>
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
      </div>

      <Footer />
    </div>
  )
}

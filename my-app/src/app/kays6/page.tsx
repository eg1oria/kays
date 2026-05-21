import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Кейс №6 | Green Almaty',
  description:
    'Платформа Green Almaty для мониторинга и 48-часового прогноза качества городского воздуха с помощью IoT, Pandas, NumPy и ML.',
};

type Accent = 'emerald' | 'cyan' | 'amber' | 'rose' | 'sky' | 'slate';

const accentClasses: Record<
  Accent,
  {
    card: string;
    badge: string;
    text: string;
    fill: string;
    line: string;
    ring: string;
  }
> = {
  emerald: {
    card: 'border-emerald-200 bg-emerald-50',
    badge: 'border-emerald-200 bg-emerald-100 text-emerald-900',
    text: 'text-emerald-800',
    fill: 'bg-emerald-600',
    line: 'bg-emerald-500',
    ring: 'ring-emerald-200',
  },
  cyan: {
    card: 'border-cyan-200 bg-cyan-50',
    badge: 'border-cyan-200 bg-cyan-100 text-cyan-900',
    text: 'text-cyan-800',
    fill: 'bg-cyan-600',
    line: 'bg-cyan-500',
    ring: 'ring-cyan-200',
  },
  amber: {
    card: 'border-amber-200 bg-amber-50',
    badge: 'border-amber-200 bg-amber-100 text-amber-900',
    text: 'text-amber-800',
    fill: 'bg-amber-500',
    line: 'bg-amber-500',
    ring: 'ring-amber-200',
  },
  rose: {
    card: 'border-rose-200 bg-rose-50',
    badge: 'border-rose-200 bg-rose-100 text-rose-900',
    text: 'text-rose-800',
    fill: 'bg-rose-600',
    line: 'bg-rose-500',
    ring: 'ring-rose-200',
  },
  sky: {
    card: 'border-sky-200 bg-sky-50',
    badge: 'border-sky-200 bg-sky-100 text-sky-900',
    text: 'text-sky-800',
    fill: 'bg-sky-600',
    line: 'bg-sky-500',
    ring: 'ring-sky-200',
  },
  slate: {
    card: 'border-slate-200 bg-slate-50',
    badge: 'border-slate-200 bg-slate-100 text-slate-900',
    text: 'text-slate-800',
    fill: 'bg-slate-800',
    line: 'bg-slate-500',
    ring: 'ring-slate-200',
  },
};

const metrics = [
  { value: '500+', label: 'городских IoT-датчиков', accent: 'emerald' as const },
  { value: '48 ч', label: 'горизонт прогноза PM2.5 и CO2', accent: 'cyan' as const },
  { value: '60 сек', label: 'пакетная агрегация потока', accent: 'amber' as const },
  { value: '< 2 мин', label: 'доставка критического push', accent: 'rose' as const },
];

const pipelineStages = [
  {
    title: 'Sensor Fleet',
    detail: 'PM2.5, CO2, температура, влажность, GPS и статус устройства.',
    accent: 'emerald' as const,
  },
  {
    title: 'IoT Data Ingestion',
    detail: 'MQTT/HTTPS принимает события, проверяет подпись датчика и timestamp.',
    accent: 'cyan' as const,
  },
  {
    title: 'Stream Processing',
    detail: 'Фильтрация выбросов, дедупликация, нормализация единиц измерения.',
    accent: 'amber' as const,
  },
  {
    title: 'Pandas / NumPy',
    detail: 'Окна признаков, rolling mean, лаги, районные и погодные факторы.',
    accent: 'sky' as const,
  },
  {
    title: 'ML Forecast',
    detail: 'Модель строит прогноз риска загрязнения на следующие 48 часов.',
    accent: 'rose' as const,
  },
  {
    title: 'Mobile Alerts',
    detail: 'Push-уведомления жителям и события на панели эколога.',
    accent: 'slate' as const,
  },
];

const activitySteps = [
  {
    owner: 'Sensor',
    title: 'Снять показания воздуха',
    detail: 'Датчик фиксирует PM2.5, CO2, температуру, влажность, координаты и уровень заряда.',
    accent: 'emerald' as const,
  },
  {
    owner: 'IoT Gateway',
    title: 'Передать пакет телеметрии',
    detail: 'Пакет уходит по MQTT или HTTPS с deviceId, подписью и временем измерения.',
    accent: 'cyan' as const,
  },
  {
    owner: 'Data Pipeline',
    title: 'Проверить и очистить данные',
    detail: 'Pipeline отбрасывает дубли, невозможные значения, устаревшие события и шум сенсора.',
    accent: 'amber' as const,
  },
  {
    owner: 'Feature Service',
    title: 'Подготовить признаки',
    detail: 'Pandas и NumPy считают скользящие средние, лаги, тренды и агрегаты по районам.',
    accent: 'sky' as const,
  },
  {
    owner: 'PredictionModel',
    title: 'Построить прогноз на 48 часов',
    detail: 'ML-модель возвращает прогноз PM2.5, CO2, AQI и вероятность превышения порогов.',
    accent: 'rose' as const,
  },
];

const classes = [
  {
    name: 'Sensor',
    accent: 'emerald' as const,
    attributes: ['sensorId: string', 'district: string', 'latitude: number', 'longitude: number', 'status: SensorStatus'],
    methods: ['collect(): Measurement', 'calibrate(): void', 'reportHealth(): SensorStatus'],
  },
  {
    name: 'Measurement',
    accent: 'cyan' as const,
    attributes: ['measurementId: string', 'timestamp: Date', 'pm25: number', 'co2: number', 'qualityFlag: string'],
    methods: ['validate(): boolean', 'normalize(): Measurement', 'toFeatureVector(): number[]'],
  },
  {
    name: 'PredictionModel',
    accent: 'amber' as const,
    attributes: ['modelId: string', 'version: string', 'horizonHours: 48', 'metricSet: string[]'],
    methods: ['train(history): void', 'predict(features): Forecast', 'score(actual): ModelMetric'],
  },
  {
    name: 'AlertNotification',
    accent: 'rose' as const,
    attributes: ['alertId: string', 'severity: AlertLevel', 'targetDistrict: string', 'message: string', 'sentAt: Date'],
    methods: ['compose(forecast): string', 'sendPush(): DeliveryStatus', 'markDelivered(): void'],
  },
];

const relationships = [
  { left: '1', label: 'records', right: '0..*' },
  { left: '0..*', label: 'becomes features for', right: '1' },
  { left: '1', label: 'triggers', right: '0..*' },
];

const nfrs = [
  {
    title: 'Надежность pipeline',
    accent: 'emerald' as const,
    items: [
      'Очередь сообщений сохраняет телеметрию при временном падении ML-сервиса или базы.',
      'Idempotency key по sensorId + timestamp защищает от двойной записи измерений.',
      'Dead-letter queue изолирует некорректные пакеты, не останавливая общий поток.',
    ],
  },
  {
    title: 'Производительность',
    accent: 'cyan' as const,
    items: [
      'Поток разбивается на партиции по району и sensorId, чтобы обрабатывать тысячи событий в минуту параллельно.',
      'Горячие агрегаты за 1, 5 и 15 минут считаются в stream processor, а не на пользовательском запросе.',
      'Модель прогнозирования запускается пакетами по районам и переиспользует подготовленные NumPy-векторы.',
    ],
  },
  {
    title: 'Качество данных',
    accent: 'amber' as const,
    items: [
      'Диапазонные проверки отсеивают отрицательные PM2.5, резкие скачки CO2 и потерю координат.',
      'Калибровочный коэффициент хранится отдельно для каждого датчика и учитывается при нормализации.',
      'Версия модели и версия feature schema сохраняются рядом с каждым прогнозом.',
    ],
  },
  {
    title: 'Наблюдаемость и безопасность',
    accent: 'rose' as const,
    items: [
      'Метрики p95 latency, lag очереди, доля offline-датчиков и error rate видны на SRE-панели.',
      'TLS, подпись устройства и RBAC защищают ingestion API и админ-панель.',
      'Аудит фиксирует, кто менял пороги уведомлений и правила отправки push.',
    ],
  },
];

const forecastRows = [
  { time: 'Сейчас', pm25: '38', co2: '710', risk: 'Норма', accent: 'emerald' as const },
  { time: '+12 ч', pm25: '54', co2: '790', risk: 'Рост', accent: 'amber' as const },
  { time: '+24 ч', pm25: '72', co2: '870', risk: 'Внимание', accent: 'rose' as const },
  { time: '+48 ч', pm25: '49', co2: '760', risk: 'Снижение', accent: 'cyan' as const },
];

function Section({
  id,
  tone = 'light',
  children,
}: {
  id?: string;
  tone?: 'light' | 'white' | 'dark' | 'mint';
  children: ReactNode;
}) {
  const toneClass =
    tone === 'dark'
      ? 'bg-[#13231e] text-white'
      : tone === 'white'
        ? 'bg-white text-slate-950'
        : tone === 'mint'
          ? 'bg-[#eaf4ee] text-slate-950'
          : 'bg-[#f6f8f4] text-slate-950';

  return (
    <section id={id} className={`${toneClass} px-5 py-14 sm:px-8 lg:px-10 lg:py-20`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

function SectionHeader({
  label,
  title,
  description,
  dark = false,
}: {
  label: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className={`text-sm font-semibold ${dark ? 'text-emerald-200' : 'text-emerald-700'}`}>
        {label}
      </p>
      <h2 className={`mt-2 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl ${dark ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
        {description}
      </p>
    </div>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
      <path
        d="M3 9h11M10 5l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function SensorIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="shrink-0">
      <path d="M17 4v7M17 23v7M4 17h7M23 17h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
      <circle cx="17" cy="17" r="6" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="17" cy="17" r="2" fill="currentColor" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path
        d="M6 10a6 6 0 1 1 12 0c0 5 2 6 2 7H4c0-1 2-2 2-7ZM10 20h4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path
        d="M9 5a3 3 0 0 0-4 3 3 3 0 0 0 1 2.2A3.7 3.7 0 0 0 5 13a4 4 0 0 0 4 4h1V5H9ZM15 5a3 3 0 0 1 4 3 3 3 0 0 1-1 2.2A3.7 3.7 0 0 1 19 13a4 4 0 0 1-4 4h-1V5h1Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path d="M10 9H7M14 9h3M10 13H7M14 13h3" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function HeroVisual() {
  const sensors = [
    { district: 'Медеу', value: '42', status: 'ok', x: 'left-[18%]', y: 'top-[34%]', tone: 'bg-emerald-500' },
    { district: 'Бостандык', value: '57', status: 'watch', x: 'left-[43%]', y: 'top-[52%]', tone: 'bg-amber-500' },
    { district: 'Алатау', value: '74', status: 'risk', x: 'left-[66%]', y: 'top-[41%]', tone: 'bg-rose-500' },
    { district: 'Турксиб', value: '48', status: 'ok', x: 'left-[75%]', y: 'top-[68%]', tone: 'bg-cyan-500' },
  ];

  return (
    <div className="relative min-h-[530px] overflow-hidden rounded-[8px] border border-white/15 bg-[#173126] shadow-2xl shadow-black/20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:42px_42px]" />
      <svg className="absolute bottom-0 left-0 h-56 w-full text-emerald-950/80" viewBox="0 0 900 260" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 210 120 130l80 42 115-108 100 88 80-54 130 102 96-88 178 112v36H0Z" fill="currentColor" />
        <path d="M0 225h900v35H0Z" fill="#0d1d18" />
      </svg>

      <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="text-sm font-semibold text-white">Green Almaty Control Center</p>
          <p className="mt-1 text-xs text-emerald-100/75">датчики, прогноз и push-оповещения</p>
        </div>
        <div className="rounded-[8px] border border-emerald-300/25 bg-emerald-300/12 px-3 py-2 text-xs font-semibold text-emerald-100">
          ONLINE 99.4%
        </div>
      </div>

      <div className="absolute left-6 right-6 top-24 h-64 rounded-[8px] border border-white/10 bg-[#203d31]/92">
        <div className="absolute left-[8%] top-[45%] h-2 w-[84%] -rotate-6 rounded-full bg-white/15" />
        <div className="absolute left-[38%] top-[12%] h-[78%] w-2 rotate-[15deg] rounded-full bg-white/15" />
        <div className="absolute left-[13%] top-[18%] h-24 w-36 rounded-[8px] border border-emerald-300/25 bg-emerald-300/10" />
        <div className="absolute right-[14%] top-[18%] h-24 w-34 rounded-[8px] border border-cyan-300/25 bg-cyan-300/10" />
        <div className="absolute bottom-[12%] left-[25%] h-24 w-40 rounded-[8px] border border-amber-300/25 bg-amber-300/10" />
        <div className="absolute bottom-[16%] right-[22%] h-24 w-36 rounded-[8px] border border-rose-300/25 bg-rose-300/10" />

        {sensors.map((sensor) => (
          <div key={sensor.district} className={`absolute ${sensor.x} ${sensor.y}`}>
            <div className={`h-4 w-4 rounded-full ${sensor.tone} ring-4 ring-white/15 shadow-[0_0_18px_rgba(255,255,255,0.35)]`} />
            <div className="mt-2 min-w-28 rounded-[8px] border border-white/10 bg-[#0f211b]/95 px-3 py-2 text-xs shadow-xl">
              <p className="font-semibold text-white">{sensor.district}</p>
              <p className="text-emerald-100/75">PM2.5 {sensor.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-6 right-6 grid gap-3 md:grid-cols-[1fr_0.86fr]">
        <div className="rounded-[8px] border border-white/10 bg-[#0f211b]/92 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">48-hour forecast</p>
            <span className="rounded-[8px] border border-amber-300/25 bg-amber-300/12 px-2 py-1 text-xs font-semibold text-amber-100">
              риск через 24 ч
            </span>
          </div>
          <ForecastChart dark />
        </div>

        <div className="rounded-[8px] border border-rose-300/25 bg-rose-300/10 p-4 text-white">
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-[8px] bg-rose-500 text-white">
              <BellIcon />
            </span>
            <div>
              <p className="text-sm font-semibold">Push alert preview</p>
              <p className="text-xs text-rose-100/80">мобильное приложение</p>
            </div>
          </div>
          <p className="text-sm leading-6 text-rose-50">
            Завтра утром в Алатауском районе ожидается рост PM2.5. Рекомендуется сократить прогулки и закрыть окна.
          </p>
        </div>
      </div>
    </div>
  );
}

function ForecastChart({ dark = false }: { dark?: boolean }) {
  const gridColor = dark ? '#315346' : '#dbe7df';
  const textColor = dark ? '#d9f5e6' : '#334155';

  return (
    <svg viewBox="0 0 620 220" className="h-auto w-full" role="img" aria-label="Прогноз PM2.5 и CO2 на 48 часов">
      {[40, 80, 120, 160].map((y) => (
        <line key={y} x1="35" x2="590" y1={y} y2={y} stroke={gridColor} strokeWidth="1" />
      ))}
      <line x1="35" x2="590" y1="176" y2="176" stroke={gridColor} strokeWidth="1.5" />
      <line x1="35" x2="35" y1="28" y2="176" stroke={gridColor} strokeWidth="1.5" />
      <path d="M35 136 C95 124 132 116 180 103 C235 87 276 73 328 82 C384 92 426 121 476 112 C520 104 555 92 590 78" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" />
      <path d="M35 155 C102 148 145 139 190 128 C245 114 278 104 332 111 C386 119 430 139 478 133 C522 129 558 118 590 110" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
      <path d="M35 95H590" stroke="#f59e0b" strokeDasharray="7 8" strokeWidth="2" />
      <text x="40" y="24" fill={textColor} fontSize="14" fontWeight="700">PM2.5</text>
      <text x="112" y="24" fill="#38bdf8" fontSize="14" fontWeight="700">CO2 trend</text>
      <text x="500" y="90" fill="#f59e0b" fontSize="13" fontWeight="700">порог</text>
      {['0', '12', '24', '36', '48'].map((tick, index) => (
        <text key={tick} x={35 + index * 138} y="205" fill={textColor} fontSize="13">
          +{tick} ч
        </text>
      ))}
    </svg>
  );
}

function MetricGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const accent = accentClasses[metric.accent];
        return (
          <div key={metric.label} className={`rounded-[8px] border ${accent.card} p-5 shadow-sm`}>
            <p className={`text-3xl font-semibold ${accent.text}`}>{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
          </div>
        );
      })}
    </div>
  );
}

function PipelineDiagram() {
  return (
    <div className="rounded-[8px] border border-white/15 bg-white/[0.06] p-5 sm:p-7">
      <div className="grid gap-4 lg:grid-cols-[1fr_42px_1fr_42px_1fr_42px_1fr_42px_1fr_42px_1fr]">
        {pipelineStages.map((stage, index) => {
          const accent = accentClasses[stage.accent];
          return (
            <div key={stage.title} className="contents">
              <div className="rounded-[8px] border border-white/10 bg-[#0e1d18] p-4">
                <span className={`mb-4 block h-1.5 rounded-full ${accent.line}`} />
                <p className="text-sm font-semibold text-white">{stage.title}</p>
                <p className="mt-3 text-xs leading-5 text-slate-300">{stage.detail}</p>
              </div>
              {index < pipelineStages.length - 1 ? <DarkArrow /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DarkArrow() {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <div className="relative h-px w-full bg-white/25">
        <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rotate-45 border-r-2 border-t-2 border-white/45" />
      </div>
    </div>
  );
}

function VerticalArrow({ label }: { label?: string }) {
  return (
    <div className="flex justify-center py-2">
      <div className="relative h-10 w-px bg-slate-300">
        <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rotate-[135deg] border-r-2 border-t-2 border-slate-400" />
        {label ? (
          <span className="absolute left-4 top-2 whitespace-nowrap rounded-[8px] border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-600 shadow-sm">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function FlowNode({
  title,
  subtitle,
  accent,
  className = '',
}: {
  title: string;
  subtitle: string;
  accent: Accent;
  className?: string;
}) {
  const style = accentClasses[accent];
  return (
    <div className={`rounded-[8px] border ${style.card} p-4 shadow-sm ${className}`}>
      <div className="flex items-start gap-3">
        <span className={`mt-1 h-3 w-3 shrink-0 rounded-[3px] ${style.fill}`} />
        <div>
          <p className={`text-sm font-semibold leading-5 ${style.text}`}>{title}</p>
          <p className="mt-2 text-xs leading-5 text-slate-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function ActivityDiagram() {
  return (
    <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <div className="grid h-12 w-12 place-items-center rounded-full border-4 border-slate-900 bg-white">
          <span className="h-4 w-4 rounded-full bg-slate-900" />
        </div>
        <VerticalArrow />

        {activitySteps.map((step) => (
          <div key={step.title} className="flex w-full flex-col items-center">
            <FlowNode
              title={step.title}
              subtitle={`${step.owner}: ${step.detail}`}
              accent={step.accent}
              className="w-full max-w-2xl"
            />
            <VerticalArrow />
          </div>
        ))}

        <div className="my-2 grid h-40 w-40 rotate-45 place-items-center border-2 border-amber-300 bg-amber-50 shadow-sm">
          <div className="-rotate-45 px-4 text-center">
            <p className="text-sm font-semibold leading-5 text-amber-900">
              Превышен порог качества воздуха?
            </p>
          </div>
        </div>

        <div className="grid w-full gap-5 pt-6 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <p className="mb-3 rounded-[8px] bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700">Да</p>
            <FlowNode
              title="Сформировать AlertNotification"
              subtitle="Система выбирает район, уровень риска, текст рекомендации и список получателей."
              accent="rose"
              className="w-full"
            />
            <VerticalArrow label="push" />
            <FlowNode
              title="Отправить уведомление в мобильное приложение"
              subtitle="Граждане получают предупреждение, а эколог видит событие на панели мониторинга."
              accent="emerald"
              className="w-full"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-3 rounded-[8px] bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">Нет</p>
            <FlowNode
              title="Обновить карту и прогноз"
              subtitle="Dashboard показывает спокойный статус, свежие значения AQI и тренд на 48 часов."
              accent="cyan"
              className="w-full"
            />
            <VerticalArrow label="monitoring" />
            <FlowNode
              title="Ожидать следующую порцию данных"
              subtitle="Pipeline продолжает принимать измерения от городских датчиков без остановки."
              accent="slate"
              className="w-full"
            />
          </div>
        </div>

        <VerticalArrow />
        <div className="grid h-12 w-12 place-items-center rounded-full border-4 border-slate-900 bg-white">
          <span className="h-6 w-6 rounded-full border-4 border-slate-900" />
        </div>
      </div>
    </div>
  );
}

function UmlClass({ item }: { item: (typeof classes)[number] }) {
  const accent = accentClasses[item.accent];
  return (
    <div className={`rounded-[8px] border ${accent.card} shadow-sm`}>
      <div className={`border-b ${accentClasses.slate.ring} px-4 py-3`}>
        <p className={`text-center text-base font-semibold ${accent.text}`}>{item.name}</p>
      </div>
      <div className="border-b border-slate-200 px-4 py-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-normal text-slate-500">Attributes</p>
        <div className="grid gap-1.5">
          {item.attributes.map((attribute) => (
            <code key={attribute} className="rounded-[6px] bg-white px-2 py-1 text-xs text-slate-700">
              + {attribute}
            </code>
          ))}
        </div>
      </div>
      <div className="px-4 py-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-normal text-slate-500">Methods</p>
        <div className="grid gap-1.5">
          {item.methods.map((method) => (
            <code key={method} className="rounded-[6px] bg-white px-2 py-1 text-xs text-slate-700">
              + {method}
            </code>
          ))}
        </div>
      </div>
    </div>
  );
}

function UmlRelation({ relation }: { relation: (typeof relationships)[number] }) {
  return (
    <div className="flex items-center">
      <div className="relative h-px w-full bg-slate-300">
        <span className="absolute -left-1 top-2 text-xs font-semibold text-slate-500">{relation.left}</span>
        <span className="absolute -right-2 top-2 text-xs font-semibold text-slate-500">{relation.right}</span>
        <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rotate-45 border-r-2 border-t-2 border-slate-400" />
        <span className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap rounded-[8px] border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-600 shadow-sm">
          {relation.label}
        </span>
      </div>
    </div>
  );
}

function ClassDiagram() {
  return (
    <div className="overflow-x-auto rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="min-w-[1180px]">
        <div className="grid grid-cols-[1fr_82px_1fr_82px_1fr_82px_1fr] gap-0">
          {classes.map((item, index) => (
            <div key={item.name} className="contents">
              <UmlClass item={item} />
              {index < relationships.length ? <UmlRelation relation={relationships[index]} /> : null}
            </div>
          ))}
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <FlowNode
            title="Sensor 1 -> 0..* Measurement"
            subtitle="Один датчик создает множество измерений во времени."
            accent="emerald"
          />
          <FlowNode
            title="Measurement 0..* -> 1 PredictionModel"
            subtitle="Модель берет набор измерений как признаки для прогноза."
            accent="cyan"
          />
          <FlowNode
            title="PredictionModel 1 -> 0..* AlertNotification"
            subtitle="Один прогноз может породить несколько уведомлений по районам."
            accent="rose"
          />
        </div>
      </div>
    </div>
  );
}

function ForecastTable() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-[8px] bg-emerald-600 text-white">
            <BrainIcon />
          </span>
          <div>
            <h3 className="text-xl font-semibold text-slate-950">ML-прогноз на 48 часов</h3>
            <p className="text-sm text-slate-500">PM2.5, CO2, AQI, риск превышения</p>
          </div>
        </div>
        <ForecastChart />
      </div>

      <div className="grid gap-3">
        {forecastRows.map((row) => {
          const accent = accentClasses[row.accent];
          return (
            <div key={row.time} className={`grid grid-cols-4 items-center gap-3 rounded-[8px] border ${accent.card} p-4 shadow-sm`}>
              <p className={`text-sm font-semibold ${accent.text}`}>{row.time}</p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-950">{row.pm25}</span> PM2.5
              </p>
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-950">{row.co2}</span> CO2
              </p>
              <span className={`rounded-[8px] border px-3 py-1 text-center text-xs font-semibold ${accent.badge}`}>
                {row.risk}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DataScienceFlow() {
  const steps = [
    { title: 'DataFrame', text: 'сырые события превращаются в таблицу измерений', accent: 'emerald' as const },
    { title: 'Clean', text: 'drop_duplicates, clip, interpolate, timezone sync', accent: 'cyan' as const },
    { title: 'Features', text: 'rolling mean, lag_1h, wind_dir, district_index', accent: 'amber' as const },
    { title: 'Predict', text: 'NumPy matrix -> model.predict -> forecast table', accent: 'rose' as const },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step) => {
        const accent = accentClasses[step.accent];
        return (
          <div key={step.title} className={`rounded-[8px] border ${accent.card} p-5 shadow-sm`}>
            <p className={`text-sm font-semibold ${accent.text}`}>{step.title}</p>
            <p className="mt-3 text-sm leading-6 text-slate-700">{step.text}</p>
          </div>
        );
      })}
    </div>
  );
}

function NfrGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {nfrs.map((nfr) => {
        const accent = accentClasses[nfr.accent];
        return (
          <article key={nfr.title} className={`rounded-[8px] border ${accent.card} p-5 shadow-sm`}>
            <div className="mb-4 flex items-center gap-3">
              <span className={`h-10 w-2 rounded-full ${accent.fill}`} />
              <h3 className="text-xl font-semibold text-slate-950">{nfr.title}</h3>
            </div>
            <div className="grid gap-3">
              {nfr.items.map((item) => (
                <div key={item} className="rounded-[8px] border border-white bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function Kays6Page() {
  return (
    <main className="min-h-screen bg-[#f6f8f4] text-slate-950">
      <section className="bg-[linear-gradient(135deg,#10231d_0%,#174536_52%,#403617_100%)] px-5 py-10 text-white sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-[8px] border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100">
              <SensorIcon />
              Кейс №6 · Green Almaty · IoT + Big Data + ML
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              Платформа мониторинга и прогнозирования качества городского воздуха
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/90">
              Система собирает данные с сотен датчиков Алматы, очищает поток, готовит признаки через Pandas и NumPy,
              прогнозирует PM2.5 и CO2 на 48 часов и заранее предупреждает жителей через мобильное приложение.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#activity"
                className="inline-flex h-11 items-center gap-2 rounded-[8px] bg-emerald-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
              >
                Activity Diagram
                <ArrowRightIcon />
              </a>
              <a
                href="#class"
                className="inline-flex h-11 items-center rounded-[8px] border border-white/20 bg-white/[0.06] px-5 text-sm font-semibold text-white transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
              >
                Class Diagram
              </a>
              <a
                href="#nfr"
                className="inline-flex h-11 items-center rounded-[8px] border border-white/20 bg-white/[0.06] px-5 text-sm font-semibold text-white transition hover:border-amber-200/60 hover:bg-amber-200/10"
              >
                NFR
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <Section tone="white">
        <MetricGrid />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-rose-700">Ситуация</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-950">
              Датчики показывают текущее состояние, но город не видит завтрашний риск
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              В городе установлены сотни датчиков, но поток данных часто используется только как текущий мониторинг.
              Без прогноза жители узнают о плохом воздухе поздно, а экологические службы реагируют уже после роста загрязнения.
            </p>
          </div>

          <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Бизнес-цель</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-950">
              Построить ML-платформу для раннего предупреждения
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Green Almaty принимает IoT-потоки, очищает и агрегирует данные, использует Pandas и NumPy для подготовки
              признаков, затем строит прогноз PM2.5 и CO2 на ближайшие 48 часов и отправляет адресные push-уведомления.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          label="Data Pipeline"
          title="От датчика до предупреждения жителю"
          description="Pipeline разделен на независимые этапы, чтобы сбор данных, очистка, прогнозирование и уведомления масштабировались отдельно и не блокировали друг друга."
        />
        <PipelineDiagram />
      </Section>

      <Section tone="mint">
        <SectionHeader
          label="Pandas / NumPy"
          title="Как сырые измерения превращаются в признаки для модели"
          description="Студенты могут показать здесь, где именно используются инструменты обработки данных: таблицы измерений, фильтрация, оконные признаки и матрица для ML-инференса."
        />
        <DataScienceFlow />
      </Section>

      <Section>
        <SectionHeader
          label="48-hour Forecast"
          title="Пример результата прогнозной модели"
          description="Прогноз выводится как временной ряд: по каждому району видно ожидаемые значения PM2.5, CO2 и уровень риска для уведомлений."
        />
        <ForecastTable />
      </Section>

      <Section id="activity" tone="white">
        <SectionHeader
          label="1. Activity Diagram"
          title="Получение данных, фильтрация, ML-прогноз и push-уведомления"
          description="Диаграмма описывает алгоритм из задания: датчик отправляет измерение, pipeline фильтрует поток, модель строит прогноз, затем система решает, нужно ли отправлять уведомление гражданам."
        />
        <ActivityDiagram />
      </Section>

      <Section id="class" tone="mint">
        <SectionHeader
          label="2. Class Diagram"
          title="Связи между Sensor, Measurement, PredictionModel и AlertNotification"
          description="Классы разделены по ответственности: устройство создает измерения, измерения становятся признаками для модели, а прогноз модели запускает уведомления."
        />
        <ClassDiagram />
      </Section>

      <Section id="nfr" tone="white">
        <SectionHeader
          label="3. Нефункциональные требования"
          title="Надежность и производительность при тысячах потоков в минуту"
          description="Система должна не только красиво показывать данные, но и выдерживать постоянный поток телеметрии, не терять события и быстро доставлять предупреждения."
        />
        <NfrGrid />
      </Section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500 sm:px-8">
        Green Almaty · Кейс №6 · IoT Data Ingestion, Big Data, Pandas, NumPy и Machine Learning
      </footer>
    </main>
  );
}

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Кейс №2 | Scooter Sharing Microservices',
  description:
    'Фронтенд-страница кейса №2: микросервисная платформа для шеринга электросамокатов, sequence diagram и нефункциональные требования.',
};

type Accent = 'teal' | 'lime' | 'amber' | 'rose' | 'sky' | 'ink';

const accentClasses: Record<
  Accent,
  {
    card: string;
    chip: string;
    text: string;
    fill: string;
    line: string;
  }
> = {
  teal: {
    card: 'border-teal-200 bg-teal-50',
    chip: 'border-teal-200 bg-teal-100 text-teal-900',
    text: 'text-teal-800',
    fill: 'bg-teal-600',
    line: 'bg-teal-500',
  },
  lime: {
    card: 'border-lime-200 bg-lime-50',
    chip: 'border-lime-200 bg-lime-100 text-lime-900',
    text: 'text-lime-800',
    fill: 'bg-lime-600',
    line: 'bg-lime-500',
  },
  amber: {
    card: 'border-amber-200 bg-amber-50',
    chip: 'border-amber-200 bg-amber-100 text-amber-900',
    text: 'text-amber-800',
    fill: 'bg-amber-500',
    line: 'bg-amber-500',
  },
  rose: {
    card: 'border-rose-200 bg-rose-50',
    chip: 'border-rose-200 bg-rose-100 text-rose-900',
    text: 'text-rose-800',
    fill: 'bg-rose-600',
    line: 'bg-rose-500',
  },
  sky: {
    card: 'border-sky-200 bg-sky-50',
    chip: 'border-sky-200 bg-sky-100 text-sky-900',
    text: 'text-sky-800',
    fill: 'bg-sky-600',
    line: 'bg-sky-500',
  },
  ink: {
    card: 'border-zinc-200 bg-white',
    chip: 'border-zinc-200 bg-zinc-100 text-zinc-900',
    text: 'text-zinc-800',
    fill: 'bg-zinc-900',
    line: 'bg-zinc-700',
  },
};

const metrics = [
  { value: '10k+', label: 'одновременных запросов к карте', accent: 'teal' as const },
  { value: '< 300 мс', label: 'цель ответа поиска рядом', accent: 'lime' as const },
  { value: '1 сек', label: 'шаг тарификации поездки', accent: 'amber' as const },
  { value: '99.9%', label: 'целевой uptime ядра аренды', accent: 'rose' as const },
];

const services = [
  {
    name: 'User Service',
    title: 'Сервис пользователей',
    accent: 'teal' as const,
    owns: ['профиль', 'сессии', 'KYC / документы', 'роль пользователя'],
    api: 'login(), getProfile(), checkAccess()',
    storage: 'PostgreSQL: users, sessions',
    note: 'Должен работать независимо от оплаты: вход в приложение не зависит от платежного провайдера.',
  },
  {
    name: 'Geo Service',
    title: 'Сервис геолокации',
    accent: 'lime' as const,
    owns: ['поиск ближайших самокатов', 'геозоны', 'индексы координат', 'карта доступности'],
    api: 'nearbyScooters(), validateParkingZone()',
    storage: 'Redis GEO + PostGIS',
    note: 'Читает горячие координаты из кэша и выдерживает высокий QPS на карте.',
  },
  {
    name: 'Scooter Service',
    title: 'Сервис самокатов',
    accent: 'amber' as const,
    owns: ['статус самоката', 'бронь', 'разблокировка', 'телеметрия IoT'],
    api: 'reserve(), unlockByQr(), startRide()',
    storage: 'PostgreSQL + event log',
    note: 'Следит за переходами статусов: available, reserved, in_ride, maintenance.',
  },
  {
    name: 'Billing Service',
    title: 'Сервис биллинга',
    accent: 'rose' as const,
    owns: ['предавторизация', 'тариф', 'посекундные списания', 'закрытие чека'],
    api: 'preAuthorize(), startMeter(), chargeTick()',
    storage: 'Ledger DB + outbox events',
    note: 'При сбое платежей работает через очередь и повторяет списания без потери событий.',
  },
];

const supportServices = [
  { title: 'API Gateway', text: 'единая точка входа, rate limit, JWT, маршрутизация', accent: 'ink' as const },
  { title: 'Event Bus', text: 'RideStarted, PaymentFailed, ScooterMoved, PhotoUploaded', accent: 'sky' as const },
  { title: 'Media Service', text: 'фото парковки, проверка формата, хранение в object storage', accent: 'amber' as const },
  { title: 'Notification Service', text: 'push, SMS, письма, события по статусам поездки', accent: 'teal' as const },
];

const sequenceLanes = [
  'Пользователь',
  'Mobile App',
  'API Gateway',
  'Geo Service',
  'Scooter Service',
  'Billing Service',
  'Самокат IoT',
];

const sequenceMessages = [
  {
    step: '01',
    from: 0,
    to: 1,
    title: 'Выбор самоката на карте',
    detail: 'Пользователь открывает карту и выбирает ближайший доступный самокат.',
    accent: 'teal' as const,
  },
  {
    step: '02',
    from: 1,
    to: 2,
    title: 'GET /scooters/nearby',
    detail: 'Приложение отправляет координаты, радиус поиска и токен сессии.',
    accent: 'lime' as const,
  },
  {
    step: '03',
    from: 2,
    to: 3,
    title: 'Поиск по geo-индексу',
    detail: 'Geo Service возвращает список самокатов с расстоянием, зарядом и зоной.',
    accent: 'lime' as const,
  },
  {
    step: '04',
    from: 1,
    to: 4,
    title: 'POST /reserve',
    detail: 'Создается бронь с TTL, чтобы самокат не забрал другой пользователь.',
    accent: 'amber' as const,
  },
  {
    step: '05',
    from: 4,
    to: 5,
    title: 'preAuthorize(user, tariff)',
    detail: 'Billing Service проверяет баланс или холд на карте до старта поездки.',
    accent: 'rose' as const,
  },
  {
    step: '06',
    from: 0,
    to: 1,
    title: 'Сканирование QR-кода',
    detail: 'Код связывает физический самокат с активной бронью пользователя.',
    accent: 'sky' as const,
  },
  {
    step: '07',
    from: 1,
    to: 4,
    title: 'unlockByQr(qr, reservationId)',
    detail: 'Scooter Service проверяет бронь, QR, статус устройства и срок TTL.',
    accent: 'amber' as const,
  },
  {
    step: '08',
    from: 4,
    to: 6,
    title: 'UNLOCK command',
    detail: 'Команда уходит на IoT-модуль самоката через MQTT / device gateway.',
    accent: 'sky' as const,
  },
  {
    step: '09',
    from: 6,
    to: 4,
    title: 'Unlocked + telemetry',
    detail: 'Самокат подтверждает разблокировку, заряд и актуальную координату.',
    accent: 'teal' as const,
  },
  {
    step: '10',
    from: 4,
    to: 5,
    title: 'RideStarted event',
    detail: 'Billing запускает посекундный счетчик и пишет первые события в ledger.',
    accent: 'rose' as const,
  },
];

const requirements = [
  {
    title: 'Надежность',
    accent: 'teal' as const,
    items: [
      'Circuit breaker между сервисами и fallback для некритичных функций.',
      'Outbox pattern для событий поездки и платежей: события не теряются при сбоях.',
      'Идемпотентные команды reserve, unlock и chargeTick, чтобы повторы не создавали двойные списания.',
    ],
  },
  {
    title: 'Доступность',
    accent: 'lime' as const,
    items: [
      'User Service и Geo Service масштабируются отдельно от Billing Service.',
      'Если платежный модуль недоступен, пользователь все равно может войти и смотреть карту.',
      'Горячие координаты самокатов лежат в Redis GEO, чтобы карта не зависела от тяжелых запросов к БД.',
    ],
  },
  {
    title: 'Безопасность геоданных',
    accent: 'rose' as const,
    items: [
      'TLS для всех API и MQTT-соединений с устройствами.',
      'Минимизация точности координат в аналитике и логах, где не нужна точная позиция.',
      'RBAC, аудит доступа и шифрование чувствительных данных в хранилище.',
    ],
  },
  {
    title: 'Highload и наблюдаемость',
    accent: 'amber' as const,
    items: [
      'Rate limiting на Gateway и защита от частого polling карты.',
      'Метрики p95 latency, error rate, device online ratio, billing lag.',
      'Трассировка bookingId / rideId через все сервисы для поиска проблем в цепочке.',
    ],
  },
];

const closingFlow = [
  'Пользователь завершает поездку',
  'Приложение проверяет геозону парковки',
  'Загружается фото подтверждения',
  'Billing закрывает поездку и финализирует чек',
];

function Section({
  id,
  children,
  tone = 'light',
}: {
  id?: string;
  children: ReactNode;
  tone?: 'light' | 'white' | 'dark' | 'mint';
}) {
  const toneClass =
    tone === 'dark'
      ? 'bg-[#101916] text-white'
      : tone === 'mint'
        ? 'bg-[#edf8ef] text-zinc-950'
        : tone === 'white'
          ? 'bg-white text-zinc-950'
          : 'bg-[#f6f8f2] text-zinc-950';

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
      <p className={`text-sm font-semibold ${dark ? 'text-lime-200' : 'text-teal-700'}`}>
        {label}
      </p>
      <h2
        className={`mt-2 text-3xl font-semibold leading-tight tracking-normal sm:text-4xl ${
          dark ? 'text-white' : 'text-zinc-950'
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>
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

function QrIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="shrink-0">
      <path d="M3 3h6v6H3zM13 3h6v6h-6zM3 13h6v6H3z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13 13h2v2h-2zM17 13h2v6h-2zM13 17h2v2h-2z" fill="currentColor" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="shrink-0">
      <path
        d="M11 3 18 6v5c0 4.4-2.8 7.1-7 8-4.2-.9-7-3.6-7-8V6l7-3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path d="m8 11 2 2 4-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
    </svg>
  );
}

function ScooterIcon() {
  return (
    <svg width="54" height="34" viewBox="0 0 54 34" aria-hidden="true" className="shrink-0">
      <path
        d="M8 26h24c7 0 11-4 12-10M37 6h8l2 10M17 18l8-8h9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <circle cx="9" cy="26" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="42" cy="26" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

function HeroVisual() {
  const scooters = [
    { id: 'S-104', battery: '86%', x: 'left-[17%]', y: 'top-[25%]', tone: 'bg-lime-500' },
    { id: 'S-221', battery: '42%', x: 'left-[57%]', y: 'top-[34%]', tone: 'bg-amber-500' },
    { id: 'S-309', battery: '71%', x: 'left-[38%]', y: 'top-[62%]', tone: 'bg-teal-500' },
    { id: 'S-418', battery: '18%', x: 'left-[76%]', y: 'top-[65%]', tone: 'bg-rose-500' },
  ];

  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[8px] border border-white/15 bg-[#17231f] shadow-2xl shadow-black/20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute left-6 right-6 top-6 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-sm font-semibold text-white">Live Fleet Map</p>
          <p className="mt-1 text-xs text-zinc-300">геопоиск, бронь, телеметрия</p>
        </div>
        <div className="rounded-[8px] border border-lime-300/30 bg-lime-300/15 px-3 py-2 text-xs font-semibold text-lime-100">
          ONLINE 98.7%
        </div>
      </div>

      <div className="absolute left-8 right-8 top-28 h-72 rounded-[8px] border border-white/10 bg-[#20342e]">
        <div className="absolute left-[8%] top-[48%] h-2 w-[84%] -rotate-6 rounded-full bg-white/15" />
        <div className="absolute left-[45%] top-[8%] h-[84%] w-2 rotate-[15deg] rounded-full bg-white/15" />
        <div className="absolute left-[18%] top-[16%] h-24 w-36 rounded-[8px] border border-lime-300/25 bg-lime-300/10" />
        <div className="absolute right-[13%] top-[18%] h-28 w-32 rounded-[8px] border border-sky-300/25 bg-sky-300/10" />
        <div className="absolute bottom-[13%] left-[23%] h-24 w-44 rounded-[8px] border border-amber-300/25 bg-amber-300/10" />
        <div className="absolute bottom-[18%] right-[21%] h-24 w-36 rounded-[8px] border border-rose-300/25 bg-rose-300/10" />

        {scooters.map((item) => (
          <div key={item.id} className={`absolute ${item.x} ${item.y}`}>
            <div className={`h-4 w-4 rounded-full ${item.tone} shadow-[0_0_18px_rgba(255,255,255,0.35)]`} />
            <div className="mt-2 rounded-[8px] border border-white/10 bg-[#101916]/95 px-3 py-2 text-xs shadow-xl">
              <p className="font-semibold text-white">{item.id}</p>
              <p className="text-zinc-300">{item.battery} battery</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
          <p className="text-xs text-zinc-400">Nearby</p>
          <p className="mt-1 text-2xl font-semibold text-white">24</p>
        </div>
        <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
          <p className="text-xs text-zinc-400">Reserved</p>
          <p className="mt-1 text-2xl font-semibold text-amber-200">7</p>
        </div>
        <div className="rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
          <p className="text-xs text-zinc-400">In ride</p>
          <p className="mt-1 text-2xl font-semibold text-lime-200">183</p>
        </div>
      </div>
    </div>
  );
}

function MetricGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const accent = accentClasses[metric.accent];
        return (
          <div key={metric.label} className={`rounded-[8px] border ${accent.card} p-5 shadow-sm`}>
            <p className={`text-3xl font-semibold ${accent.text}`}>{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{metric.label}</p>
          </div>
        );
      })}
    </div>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const accent = accentClasses[service.accent];

  return (
    <article className={`rounded-[8px] border ${accent.card} p-5 shadow-sm`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-normal ${accent.text}`}>{service.name}</p>
          <h3 className="mt-2 text-xl font-semibold leading-7 text-zinc-950">{service.title}</h3>
        </div>
        <span className={`h-3 w-3 shrink-0 rounded-full ${accent.fill}`} />
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold text-zinc-900">Владение данными</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {service.owns.map((item) => (
            <span key={item} className={`rounded-[8px] border px-3 py-1.5 text-xs font-medium ${accent.chip}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm leading-6">
        <p className="rounded-[8px] border border-white bg-white px-3 py-2 text-zinc-700 shadow-sm">
          <span className="font-semibold text-zinc-950">API:</span> {service.api}
        </p>
        <p className="rounded-[8px] border border-white bg-white px-3 py-2 text-zinc-700 shadow-sm">
          <span className="font-semibold text-zinc-950">Storage:</span> {service.storage}
        </p>
      </div>

      <p className="mt-5 border-t border-black/10 pt-4 text-sm leading-6 text-zinc-700">{service.note}</p>
    </article>
  );
}

function ArrowBlock({ label }: { label: string }) {
  return (
    <div className="flex min-h-12 items-center justify-center">
      <div className="relative h-px w-full min-w-12 bg-zinc-300">
        <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rotate-45 border-r-2 border-t-2 border-zinc-400" />
        <span className="absolute left-1/2 top-2 -translate-x-1/2 whitespace-nowrap rounded-[8px] border border-zinc-200 bg-white px-2 py-1 text-xs font-medium text-zinc-600 shadow-sm">
          {label}
        </span>
      </div>
    </div>
  );
}

function MonolithSplitDiagram() {
  return (
    <div className="overflow-x-auto rounded-[8px] border border-zinc-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="min-w-[980px]">
        <div className="grid grid-cols-[0.9fr_100px_1.6fr] items-stretch gap-0">
          <div className="rounded-[8px] border border-rose-200 bg-rose-50 p-5">
            <p className="text-sm font-semibold text-rose-800">Монолит до декомпозиции</p>
            <h3 className="mt-2 text-2xl font-semibold text-zinc-950">Scooter App Core</h3>
            <div className="mt-5 grid gap-3">
              {['пользователи', 'карта', 'бронь', 'самокаты', 'тарифы', 'платежи'].map((item) => (
                <div key={item} className="rounded-[8px] border border-white bg-white px-4 py-3 text-sm font-medium text-zinc-800 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-zinc-700">
              Один релиз, общая база и общий отказ: сбой оплаты может затронуть вход, карту и аренду.
            </p>
          </div>

          <ArrowBlock label="split by domain" />

          <div className="rounded-[8px] border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm font-semibold text-teal-800">Микросервисная платформа</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {services.map((service) => {
                const accent = accentClasses[service.accent];
                return (
                  <div key={service.name} className={`rounded-[8px] border ${accent.card} p-4`}>
                    <p className={`text-sm font-semibold ${accent.text}`}>{service.title}</p>
                    <p className="mt-2 text-xs leading-5 text-zinc-600">{service.storage}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 rounded-[8px] border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-sky-800">Event Bus + API Gateway</p>
              <p className="mt-2 text-xs leading-5 text-zinc-600">
                Сервисы общаются через API для команд и через события для асинхронных процессов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="rounded-[8px] border border-white/15 bg-white/[0.06] p-5 sm:p-7">
      <div className="grid gap-4 lg:grid-cols-[1fr_56px_1.1fr_56px_1fr]">
        <div className="rounded-[8px] border border-lime-300/25 bg-lime-300/10 p-5">
          <p className="text-sm font-semibold text-lime-100">Клиенты</p>
          <div className="mt-4 grid gap-3">
            {['Mobile App', 'Admin Panel', 'Support Console'].map((item) => (
              <div key={item} className="rounded-[8px] border border-white/10 bg-[#101916] px-4 py-3 text-sm font-medium text-white">
                {item}
              </div>
            ))}
          </div>
        </div>

        <DarkArrow label="HTTPS" />

        <div className="rounded-[8px] border border-sky-300/25 bg-sky-300/10 p-5">
          <p className="text-sm font-semibold text-sky-100">Платформа</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[...services, ...supportServices].map((item) => {
              const accent = accentClasses[item.accent];
              return (
                <div key={item.title} className="rounded-[8px] border border-white/10 bg-[#101916] p-3">
                  <span className={`mb-2 block h-1 rounded-full ${accent.line}`} />
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  {'text' in item ? <p className="mt-1 text-xs leading-5 text-zinc-300">{item.text}</p> : null}
                </div>
              );
            })}
          </div>
        </div>

        <DarkArrow label="MQTT" />

        <div className="rounded-[8px] border border-amber-300/25 bg-amber-300/10 p-5">
          <p className="text-sm font-semibold text-amber-100">IoT и внешние системы</p>
          <div className="mt-4 grid gap-3">
            {['Scooter IoT Module', 'Payment Provider', 'Object Storage', 'Monitoring'].map((item) => (
              <div key={item} className="rounded-[8px] border border-white/10 bg-[#101916] px-4 py-3 text-sm font-medium text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DarkArrow({ label }: { label: string }) {
  return (
    <div className="hidden items-center justify-center lg:flex">
      <div className="relative h-px w-full bg-white/25">
        <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rotate-45 border-r-2 border-t-2 border-white/45" />
        <span className="absolute left-1/2 top-2 -translate-x-1/2 rounded-[8px] border border-white/10 bg-[#101916] px-2 py-1 text-xs text-zinc-300">
          {label}
        </span>
      </div>
    </div>
  );
}

function SequenceDiagram() {
  return (
    <div className="overflow-x-auto rounded-[8px] border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="min-w-[1120px]">
        <div className="grid grid-cols-7 gap-3">
          {sequenceLanes.map((lane) => (
            <div key={lane} className="rounded-[8px] border border-zinc-200 bg-zinc-50 px-3 py-3 text-center text-sm font-semibold text-zinc-900">
              {lane}
            </div>
          ))}
        </div>

        <div className="relative mt-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 grid grid-cols-7 gap-3 px-0">
            {sequenceLanes.map((lane) => (
              <div key={lane} className="flex justify-center">
                <div className="h-full w-px border-l border-dashed border-zinc-300/70" />
              </div>
            ))}
          </div>

          <div className="relative grid gap-3 py-2">
            {sequenceMessages.map((message) => (
              <SequenceRow key={message.step} message={message} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SequenceRow({ message }: { message: (typeof sequenceMessages)[number] }) {
  const start = Math.min(message.from, message.to) + 1;
  const span = Math.abs(message.to - message.from) + 1;
  const reverse = message.from > message.to;
  const accent = accentClasses[message.accent];

  return (
    <div className="grid min-h-24 grid-cols-7 gap-3">
      <div
        className={`relative z-10 self-center rounded-[8px] border ${accent.card} p-3 shadow-sm`}
        style={{ gridColumn: `${start} / span ${span}` }}
      >
        <div className="flex items-start gap-3">
          <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-[8px] ${accent.fill} text-xs font-semibold text-white`}>
            {message.step}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              {reverse ? <ArrowRightIcon /> : null}
              <p className="text-sm font-semibold text-zinc-950">{message.title}</p>
              {!reverse ? <ArrowRightIcon /> : null}
            </div>
            <p className="mt-1 text-xs leading-5 text-zinc-600">{message.detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NfrCard({ requirement }: { requirement: (typeof requirements)[number] }) {
  const accent = accentClasses[requirement.accent];

  return (
    <article className={`rounded-[8px] border ${accent.card} p-5 shadow-sm`}>
      <div className="mb-4 flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-[8px] ${accent.fill} text-white`}>
          <ShieldIcon />
        </span>
        <h3 className="text-xl font-semibold text-zinc-950">{requirement.title}</h3>
      </div>
      <div className="grid gap-3">
        {requirement.items.map((item) => (
          <div key={item} className="rounded-[8px] border border-white bg-white px-4 py-3 text-sm leading-6 text-zinc-700 shadow-sm">
            {item}
          </div>
        ))}
      </div>
    </article>
  );
}

function ClosingFlow() {
  return (
    <div className="rounded-[8px] border border-zinc-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="grid gap-4 lg:grid-cols-[1fr_48px_1fr_48px_1fr_48px_1fr]">
        {closingFlow.map((item, index) => (
          <div key={item} className="contents">
            <div className="rounded-[8px] border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-xs font-semibold text-teal-700">Шаг {String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 text-lg font-semibold leading-7 text-zinc-950">{item}</h3>
            </div>
            {index < closingFlow.length - 1 ? (
              <div className="hidden items-center lg:flex">
                <div className="relative h-px w-full bg-zinc-300">
                  <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rotate-45 border-r-2 border-t-2 border-zinc-400" />
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Kays2Page() {
  return (
    <main className="min-h-screen bg-[#f6f8f2] text-zinc-950">
      <section className="bg-[linear-gradient(135deg,#101916_0%,#183327_48%,#2d2417_100%)] px-5 py-10 text-white sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-[8px] border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-sm font-semibold text-lime-100">
              <ScooterIcon />
              Кейс №2 · Highload · Geo · Microservices
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              Микросервисная платформа для шеринга электросамокатов
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
              Страница показывает декомпозицию монолита, поток бронирования и разблокировки по QR-коду,
              старт посекундной тарификации и требования к надежной работе под высокой нагрузкой.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#decomposition"
                className="inline-flex h-11 items-center gap-2 rounded-[8px] bg-lime-300 px-5 text-sm font-semibold text-zinc-950 transition hover:bg-lime-200"
              >
                Декомпозиция
                <ArrowRightIcon />
              </a>
              <a
                href="#sequence"
                className="inline-flex h-11 items-center gap-2 rounded-[8px] border border-white/20 bg-white/[0.06] px-5 text-sm font-semibold text-white transition hover:border-amber-200/60 hover:bg-amber-200/10"
              >
                <QrIcon />
                Sequence Diagram
              </a>
              <a
                href="#nfr"
                className="inline-flex h-11 items-center gap-2 rounded-[8px] border border-white/20 bg-white/[0.06] px-5 text-sm font-semibold text-white transition hover:border-teal-200/60 hover:bg-teal-200/10"
              >
                <ShieldIcon />
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
          <div className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-rose-700">Описание ситуации</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-zinc-950">
              Сервис должен выдерживать карту, аренду и оплату одновременно
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-700">
              Пользователь ищет ближайший самокат, бронирует его, сканирует QR-код, начинает поездку,
              а система параллельно обновляет геопозицию, статус устройства, биллинг и события поездки.
            </p>
          </div>

          <div className="rounded-[8px] border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-teal-700">Бизнес-цель</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-zinc-950">
              Гибкая платформа без общего отказа
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-700">
              Каждый домен масштабируется и падает отдельно. Например, если платежный провайдер
              временно недоступен, пользователь все равно может войти в приложение и посмотреть карту.
            </p>
          </div>
        </div>
      </Section>

      <Section id="decomposition" tone="mint">
        <SectionHeader
          label="1. Декомпозиция монолита"
          title="От единого приложения к независимым сервисам"
          description="Разделение идет по владению данными и критическим бизнес-процессам: пользователи, геолокация, самокаты и биллинг живут в отдельных сервисах со своими хранилищами."
        />
        <MonolithSplitDiagram />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          label="Архитектурная диаграмма"
          title="Команды через API, события через брокер"
          description="Синхронные запросы используются для действий пользователя, а события разгружают длинные процессы: биллинг, уведомления, фото парковки и аналитику."
        />
        <ArchitectureDiagram />
      </Section>

      <Section id="sequence" tone="white">
        <SectionHeader
          label="2. Sequence Diagram"
          title="Пользователь бронирует самокат, открывает QR, начинается списание"
          description="Диаграмма показывает сквозной поток от выбора самоката на карте до события RideStarted, после которого Billing Service запускает посекундную тарификацию."
        />
        <SequenceDiagram />
      </Section>

      <Section tone="light">
        <SectionHeader
          label="Контекст завершения аренды"
          title="Фотоподтверждение парковки закрывает поездку"
          description="В кейсе завершение аренды тоже критично: система проверяет геозону, принимает фото парковки и только после этого финализирует стоимость поездки."
        />
        <ClosingFlow />
      </Section>

      <Section id="nfr" tone="mint">
        <SectionHeader
          label="3. Нефункциональные требования"
          title="Надежность, доступность и безопасность геоданных"
          description="Платформа проектируется так, чтобы частичные сбои не ломали весь пользовательский путь, а чувствительные координаты передавались и хранились защищенно."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {requirements.map((requirement) => (
            <NfrCard key={requirement.title} requirement={requirement} />
          ))}
        </div>
      </Section>

      <footer className="border-t border-zinc-200 bg-white px-5 py-8 text-center text-sm text-zinc-500 sm:px-8">
        Scooter Sharing · фронтенд-страница для кейса №2
      </footer>
    </main>
  );
}

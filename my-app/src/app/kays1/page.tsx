import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Кейс №1 | Smart City Air Monitoring',
  description:
    'Фронтенд-страница кейса Smart City: экологический мониторинг, Activity Diagram и Deployment Diagram.',
};

type Accent = 'emerald' | 'cyan' | 'amber' | 'rose' | 'slate';

const accentClasses: Record<
  Accent,
  {
    soft: string;
    border: string;
    text: string;
    fill: string;
  }
> = {
  emerald: {
    soft: 'bg-emerald-50',
    border: 'border-emerald-300',
    text: 'text-emerald-800',
    fill: 'bg-emerald-600',
  },
  cyan: {
    soft: 'bg-cyan-50',
    border: 'border-cyan-300',
    text: 'text-cyan-800',
    fill: 'bg-cyan-600',
  },
  amber: {
    soft: 'bg-amber-50',
    border: 'border-amber-300',
    text: 'text-amber-800',
    fill: 'bg-amber-500',
  },
  rose: {
    soft: 'bg-rose-50',
    border: 'border-rose-300',
    text: 'text-rose-800',
    fill: 'bg-rose-600',
  },
  slate: {
    soft: 'bg-slate-50',
    border: 'border-slate-300',
    text: 'text-slate-800',
    fill: 'bg-slate-700',
  },
};

const actors = [
  {
    name: 'Эколог',
    accent: 'emerald' as const,
    role: 'Контролирует состояние воздуха и принимает экологические решения.',
    responsibilities: ['видит AQI и карту районов', 'подтверждает критичные события', 'готовит рекомендации акимату'],
  },
  {
    name: 'Аналитик',
    accent: 'cyan' as const,
    role: 'Работает с данными, качеством показаний и прогнозными моделями.',
    responsibilities: ['проверяет аномалии датчиков', 'сравнивает фактические и прогнозные значения', 'обучает ML-модель'],
  },
  {
    name: 'Житель',
    accent: 'amber' as const,
    role: 'Получает понятные предупреждения и советы по поведению.',
    responsibilities: ['получает push-уведомления', 'смотрит прогноз на 24 часа', 'выбирает район проживания'],
  },
  {
    name: 'IoT-датчик',
    accent: 'rose' as const,
    role: 'Передает измерения качества воздуха в режиме реального времени.',
    responsibilities: ['измеряет PM2.5, PM10, NO2, CO', 'отправляет телеметрию', 'передает статус батареи и связи'],
  },
];

const metrics = [
  { label: 'Посты мониторинга', value: '128', tone: 'emerald' as const },
  { label: 'Прогноз вперед', value: '24 ч', tone: 'cyan' as const },
  { label: 'Критичный AQI', value: '156', tone: 'rose' as const },
  { label: 'Задержка данных', value: '< 5 c', tone: 'amber' as const },
];

const architecture = [
  {
    title: 'Сбор телеметрии',
    description: 'Датчики передают показания через MQTT/HTTPS с отметкой времени, геопозицией и статусом устройства.',
  },
  {
    title: 'Потоковая обработка',
    description: 'Сервер проверяет формат, убирает дубли, нормализует единицы измерения и отмечает аномалии.',
  },
  {
    title: 'Временные ряды',
    description: 'PostgreSQL + TimescaleDB хранит измерения, агрегаты по районам и историю прогнозов.',
  },
  {
    title: 'AI/ML прогноз',
    description: 'ML-модуль строит прогноз смога на 24 часа с учетом погоды, ветра и прошлых загрязнений.',
  },
  {
    title: 'Оповещение',
    description: 'Notification Service отправляет push жителям и выводит тревоги на панель эколога.',
  },
];

const activitySteps = [
  {
    owner: 'IoT-датчик',
    title: 'Измерить качество воздуха',
    text: 'PM2.5, PM10, NO2, CO, температура, влажность, координаты.',
    accent: 'rose' as const,
  },
  {
    owner: 'IoT Gateway',
    title: 'Передать пакет данных',
    text: 'MQTT/HTTPS, подпись устройства, timestamp и район города.',
    accent: 'cyan' as const,
  },
  {
    owner: 'Data Platform',
    title: 'Проверить и нормализовать',
    text: 'Валидация диапазонов, удаление дублей, расчет AQI.',
    accent: 'slate' as const,
  },
  {
    owner: 'TimescaleDB',
    title: 'Сохранить временной ряд',
    text: 'Сырые показания, агрегаты по 5 минутам, состояние датчика.',
    accent: 'emerald' as const,
  },
  {
    owner: 'ML-модуль',
    title: 'Спрогнозировать смог',
    text: 'Модель строит риск загрязнения на следующие 24 часа.',
    accent: 'amber' as const,
  },
];

const deploymentGroups = [
  {
    title: 'Городская среда',
    subtitle: 'Улицы, районы, промзоны',
    nodes: ['IoT-датчики воздуха', 'Метеостанции', 'Шлюз связи 4G / LoRaWAN'],
    accent: 'rose' as const,
  },
  {
    title: 'Платформа акимата',
    subtitle: 'Облако или городской дата-центр',
    nodes: [
      'MQTT Broker',
      'Ingestion API',
      'PostgreSQL + TimescaleDB',
      'ML Forecast Service',
      'Notification Service',
      'Web Dashboard',
    ],
    accent: 'emerald' as const,
  },
  {
    title: 'Пользователи',
    subtitle: 'Рабочие места и мобильные устройства',
    nodes: ['Панель эколога', 'Панель аналитика', 'Мобильное приложение жителя'],
    accent: 'cyan' as const,
  },
];

function Section({
  id,
  children,
  tone = 'white',
}: {
  id?: string;
  children: ReactNode;
  tone?: 'white' | 'green' | 'dark';
}) {
  const toneClass =
    tone === 'green'
      ? 'bg-[#e8f3ec]'
      : tone === 'dark'
        ? 'bg-slate-950 text-white'
        : 'bg-[#f7faf6]';

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
    <div className="mb-8 max-w-3xl">
      <p className={`text-sm font-semibold tracking-normal ${dark ? 'text-emerald-200' : 'text-emerald-700'}`}>
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

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex min-h-12 items-center justify-center">
      <div className="relative h-px w-full min-w-12 bg-slate-300">
        <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rotate-45 border-r-2 border-t-2 border-slate-400" />
        {label ? (
          <span className="absolute left-1/2 top-2 -translate-x-1/2 whitespace-nowrap rounded-[8px] bg-white px-2 py-1 text-xs font-medium text-slate-600 shadow-sm">
            {label}
          </span>
        ) : null}
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
          <span className="absolute left-4 top-2 whitespace-nowrap rounded-[8px] bg-white px-2 py-1 text-xs font-medium text-slate-600 shadow-sm">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function NodeBox({
  title,
  subtitle,
  accent = 'slate',
  className = '',
}: {
  title: string;
  subtitle?: string;
  accent?: Accent;
  className?: string;
}) {
  const accentClass = accentClasses[accent];

  return (
    <div className={`border ${accentClass.border} ${accentClass.soft} rounded-[8px] p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <span className={`mt-1 h-3 w-3 shrink-0 rounded-[3px] ${accentClass.fill}`} />
        <div>
          <p className={`text-sm font-semibold leading-5 ${accentClass.text}`}>{title}</p>
          {subtitle ? <p className="mt-2 text-xs leading-5 text-slate-600">{subtitle}</p> : null}
        </div>
      </div>
    </div>
  );
}

function CityMapVisual() {
  const districts = [
    { name: 'Север', aqi: 82, color: 'bg-emerald-500', position: 'left-[12%] top-[17%]' },
    { name: 'Центр', aqi: 156, color: 'bg-rose-500', position: 'left-[48%] top-[42%]' },
    { name: 'Запад', aqi: 118, color: 'bg-amber-500', position: 'left-[24%] top-[62%]' },
    { name: 'Восток', aqi: 94, color: 'bg-cyan-500', position: 'left-[72%] top-[25%]' },
  ];

  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm">
      <div className="absolute inset-0 bg-[linear-gradient(#eef2f7_1px,transparent_1px),linear-gradient(90deg,#eef2f7_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute left-7 right-7 top-7 flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <p className="text-sm font-semibold text-slate-950">Air Quality Command Center</p>
          <p className="mt-1 text-xs text-slate-500">онлайн-карта районов и прогноз риска</p>
        </div>
        <div className="rounded-[8px] border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700">
          риск смога 72%
        </div>
      </div>

      <div className="absolute left-9 right-9 top-28 h-52 rounded-[8px] border border-slate-200 bg-[#edf5ef]">
        <div className="absolute left-[8%] top-[42%] h-2 w-[82%] rotate-[-8deg] rounded-[8px] bg-slate-300" />
        <div className="absolute left-[44%] top-[12%] h-[78%] w-2 rotate-[15deg] rounded-[8px] bg-slate-300" />
        <div className="absolute left-[10%] top-[20%] h-16 w-28 rounded-[8px] border border-emerald-200 bg-emerald-100" />
        <div className="absolute right-[11%] top-[18%] h-20 w-32 rounded-[8px] border border-cyan-200 bg-cyan-100" />
        <div className="absolute bottom-[13%] left-[22%] h-20 w-40 rounded-[8px] border border-amber-200 bg-amber-100" />
        <div className="absolute bottom-[18%] right-[24%] h-24 w-32 rounded-[8px] border border-rose-200 bg-rose-100" />

        {districts.map((district) => (
          <div key={district.name} className={`absolute ${district.position}`}>
            <div className={`h-4 w-4 rounded-full ${district.color} shadow-md`} />
            <div className="mt-2 rounded-[8px] border border-slate-200 bg-white px-3 py-2 text-xs shadow-sm">
              <p className="font-semibold text-slate-950">{district.name}</p>
              <p className="text-slate-500">AQI {district.aqi}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-7 left-7 right-7 grid gap-3 sm:grid-cols-3">
        <div className="rounded-[8px] border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs text-slate-500">PM2.5</p>
          <p className="mt-1 text-xl font-semibold text-slate-950">61 мкг/м3</p>
        </div>
        <div className="rounded-[8px] border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs text-slate-500">Ветер</p>
          <p className="mt-1 text-xl font-semibold text-slate-950">2.1 м/с</p>
        </div>
        <div className="rounded-[8px] border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs text-slate-500">Событий</p>
          <p className="mt-1 text-xl font-semibold text-slate-950">14</p>
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
            <NodeBox
              title={step.title}
              subtitle={`${step.owner}: ${step.text}`}
              accent={step.accent}
              className="w-full max-w-2xl"
            />
            <VerticalArrow />
          </div>
        ))}

        <div className="my-2 grid h-40 w-40 rotate-45 place-items-center border-2 border-amber-300 bg-amber-50 shadow-sm">
          <div className="-rotate-45 px-4 text-center">
            <p className="text-sm font-semibold leading-5 text-amber-900">Риск смога выше порога?</p>
          </div>
        </div>

        <div className="grid w-full gap-5 pt-6 md:grid-cols-[1fr_80px_1fr]">
          <div className="flex flex-col items-center">
            <p className="mb-3 rounded-[8px] bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700">Да</p>
            <NodeBox
              title="Создать тревожное событие"
              subtitle="Сформировать уровень риска, район, прогноз и рекомендации для жителей."
              accent="rose"
              className="w-full"
            />
            <VerticalArrow label="оповещение" />
            <NodeBox
              title="Отправить push и обновить дашборд"
              subtitle="Жители получают предупреждение, эколог видит событие в панели."
              accent="emerald"
              className="w-full"
            />
          </div>

          <div className="hidden items-start justify-center pt-16 md:flex">
            <div className="h-px w-full bg-slate-200" />
          </div>

          <div className="flex flex-col items-center">
            <p className="mb-3 rounded-[8px] bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">Нет</p>
            <NodeBox
              title="Обновить индекс качества воздуха"
              subtitle="Сохранить расчет и показать спокойный статус по району."
              accent="cyan"
              className="w-full"
            />
            <VerticalArrow label="мониторинг" />
            <NodeBox
              title="Продолжить сбор данных"
              subtitle="Следующая порция телеметрии снова проходит поток обработки."
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

function DeploymentDiagram() {
  return (
    <div className="overflow-x-auto rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="min-w-[1060px]">
        <div className="grid grid-cols-[1fr_72px_1.45fr_72px_1fr] items-stretch gap-0">
          {deploymentGroups.map((group, index) => {
            const accent = accentClasses[group.accent];

            return (
              <div key={group.title} className="contents">
                <div className={`rounded-[8px] border ${accent.border} ${accent.soft} p-5`}>
                  <p className={`text-base font-semibold ${accent.text}`}>{group.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{group.subtitle}</p>
                  <div className="mt-5 grid gap-3">
                    {group.nodes.map((node) => (
                      <div key={node} className="rounded-[8px] border border-white bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm">
                        {node}
                      </div>
                    ))}
                  </div>
                </div>
                {index < deploymentGroups.length - 1 ? (
                  <Arrow label={index === 0 ? 'MQTT / HTTPS' : 'REST / Push'} />
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-7 grid grid-cols-[1fr_1fr_1fr] gap-4">
          <NodeBox
            title="Протоколы"
            subtitle="MQTT для телеметрии, HTTPS для API, WebSocket для live-панели."
            accent="cyan"
          />
          <NodeBox
            title="Хранилище"
            subtitle="PostgreSQL + TimescaleDB: hypertables, индексы по времени и району."
            accent="emerald"
          />
          <NodeBox
            title="ML-сервис"
            subtitle="Отдельный контейнер с моделью прогноза и версионированием экспериментов."
            accent="amber"
          />
        </div>
      </div>
    </div>
  );
}

export default function Kays1Page() {
  return (
    <main className="min-h-screen bg-[#f7faf6] text-slate-900">
      <section className="border-b border-slate-200 bg-[#eef5ef] px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-[8px] border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
              Кейс №1 · Smart City · IoT + Data + AI/ML
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-5xl">
              Система экологического мониторинга и прогнозирования загрязнения воздуха
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Единая цифровая платформа для акимата: собирает данные с городских IoT-датчиков,
              прогнозирует риск смога на 24 часа вперед и отправляет предупреждения жителям.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#actors"
                className="inline-flex h-11 items-center justify-center rounded-[8px] bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Акторы
              </a>
              <a
                href="#activity"
                className="inline-flex h-11 items-center justify-center rounded-[8px] border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 hover:text-emerald-800"
              >
                Activity Diagram
              </a>
              <a
                href="#deployment"
                className="inline-flex h-11 items-center justify-center rounded-[8px] border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-800"
              >
                Deployment Diagram
              </a>
            </div>
          </div>

          <CityMapVisual />
        </div>
      </section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => {
            const accent = accentClasses[metric.tone];
            return (
              <div key={metric.label} className={`rounded-[8px] border ${accent.border} ${accent.soft} p-5 shadow-sm`}>
                <p className={`text-3xl font-semibold ${accent.text}`}>{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{metric.label}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-rose-700">Описание ситуации</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-950">
              Данные поступают хаотично, решения запаздывают
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Посты мониторинга отправляют показания в разном формате и с разной периодичностью.
              Аналитикам трудно быстро увидеть район с ухудшением качества воздуха, а жители узнают
              о смоге слишком поздно.
            </p>
          </div>

          <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">Бизнес-цель</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight text-slate-950">
              Архитектура платформы реального времени
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Платформа должна принимать поток телеметрии, хранить временные ряды, строить прогноз
              смога на 24 часа и запускать push-уведомления при превышении порогов риска.
            </p>
          </div>
        </div>
      </Section>

      <Section id="actors" tone="green">
        <SectionHeader
          label="1. Идентификация акторов"
          title="Кто участвует в системе"
          description="Акторы разделены на людей, которые принимают решения или получают уведомления, и устройство, которое создает первичный поток данных."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {actors.map((actor) => {
            const accent = accentClasses[actor.accent];
            return (
              <article key={actor.name} className={`rounded-[8px] border ${accent.border} bg-white p-5 shadow-sm`}>
                <div className="mb-4 flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-[8px] ${accent.fill} text-sm font-semibold text-white`}>
                    {actor.name.slice(0, 2)}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-950">{actor.name}</h3>
                    <p className={`text-sm font-medium ${accent.text}`}>актор системы</p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-slate-700">{actor.role}</p>
                <div className="mt-4 grid gap-2">
                  {actor.responsibilities.map((item) => (
                    <div key={item} className="rounded-[8px] border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeader
          dark
          label="Архитектурный поток"
          title="От датчика до предупреждения"
          description="Поток строится так, чтобы сырые измерения быстро превратились в понятный риск для эколога, аналитика и жителя."
        />

        <div className="grid gap-4 lg:grid-cols-[1fr_48px_1fr_48px_1fr_48px_1fr_48px_1fr]">
          {architecture.map((item, index) => (
            <div key={item.title} className="contents">
              <div className="rounded-[8px] border border-white/15 bg-white/[0.06] p-5">
                <p className="text-sm font-semibold text-emerald-200">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
              {index < architecture.length - 1 ? (
                <div className="hidden items-center lg:flex">
                  <div className="relative h-px w-full bg-emerald-300/40">
                    <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rotate-45 border-r-2 border-t-2 border-emerald-200" />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section id="activity">
        <SectionHeader
          label="2. Activity Diagram"
          title="Сбор данных → анализ → оповещение"
          description="Диаграмма показывает основной процесс: телеметрия проходит проверку, сохраняется в базу временных рядов, затем ML-модуль рассчитывает риск смога и запускает ветку оповещения."
        />
        <ActivityDiagram />
      </Section>

      <Section id="deployment" tone="green">
        <SectionHeader
          label="3. Deployment Diagram"
          title="Развертывание IoT-платформы"
          description="Датчики отправляют поток данных на серверную платформу, где работают брокер сообщений, база PostgreSQL + TimescaleDB, ML-модуль и сервис уведомлений."
        />
        <DeploymentDiagram />
      </Section>

      <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-sm text-slate-500 sm:px-8">
        Smart City Air Monitoring · фронтенд-страница для кейса №1
      </footer>
    </main>
  );
}

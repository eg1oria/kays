import Image from "next/image";

const architecture = [
  {
    title: "Camera",
    label: "01",
    accent: "cyan",
    description: "захватывает видеопоток",
    detail:
      "Промышленные камеры фиксируют каждый продукт на линии и передают кадры в потоковом режиме.",
  },
  {
    title: "Edge AI Module",
    label: "02",
    accent: "violet",
    description: "анализирует кадры и ищет дефекты",
    detail:
      "ИИ-модель рядом с конвейером выполняет inference без задержек облачной передачи.",
  },
  {
    title: "Robot Manipulator",
    label: "03",
    accent: "blue",
    description: "удаляет бракованный продукт",
    detail:
      "Манипулятор получает команду и синхронно убирает товар с дефектом с движущейся линии.",
  },
  {
    title: "Central Database",
    label: "04",
    accent: "cyan",
    description: "хранит события, фото дефектов и статистику",
    detail:
      "База данных сохраняет историю проверок, изображения брака, типы ошибок и производственные метрики.",
  },
  {
    title: "Operator Dashboard",
    label: "05",
    accent: "violet",
    description: "показывает состояние линии и уведомления",
    detail:
      "Веб-интерфейс помогает оператору контролировать линию, отчеты и критические уведомления.",
  },
];

const useCaseActors = [
  {
    actor: "Камера",
    role: "Внешний источник данных",
    cases: ["Передать видеопоток"],
  },
  {
    actor: "ИИ-модуль",
    role: "Интеллектуальная обработка",
    cases: ["Проанализировать изображение", "Обнаружить дефект"],
  },
  {
    actor: "Робот-манипулятор",
    role: "Исполнительное устройство",
    cases: ["Отправить команду роботу", "Удалить товар с конвейера"],
  },
  {
    actor: "Оператор",
    role: "Контроль и отчетность",
    cases: ["Просмотреть отчёт"],
  },
];

const sequence = [
  {
    step: "01",
    source: "Камера",
    title: "Камера фиксирует продукт",
    description: "Сенсор получает четкий кадр товара в зоне контроля качества.",
  },
  {
    step: "02",
    source: "Camera Stream",
    title: "Изображение передаётся в ИИ-модуль",
    description: "Кадр отправляется на edge-узел по локальной сети линии.",
  },
  {
    step: "03",
    source: "Edge AI",
    title: "ИИ анализирует кадр",
    description: "Модель Computer Vision выделяет признаки, контуры и аномалии поверхности.",
  },
  {
    step: "04",
    source: "Defect Detection",
    title: "ИИ обнаруживает дефект",
    description: "Система присваивает класс дефекта и уровень уверенности модели.",
  },
  {
    step: "05",
    source: "Robot Command",
    title: "Команда отправляется роботу",
    description: "Контроллер получает точное время и позицию удаления товара.",
  },
  {
    step: "06",
    source: "Manipulator",
    title: "Робот удаляет продукт с конвейера",
    description: "Манипулятор синхронизируется со скоростью линии и убирает брак.",
  },
  {
    step: "07",
    source: "Database",
    title: "Событие записывается в базу данных",
    description: "Сохраняются фото, тип дефекта, время, линия и результат действия.",
  },
  {
    step: "08",
    source: "Dashboard",
    title: "Оператор получает уведомление",
    description: "На панели появляется событие, статус линии и ссылка на отчет.",
  },
];

const deployment = [
  "Production Line Cameras",
  "Edge Server",
  "AI Inference Service",
  "Robot Controller",
  "Central Database",
  "Operator Web Dashboard",
];

const plantUmlDiagrams = [
  {
    title: "Use Case Diagram",
    label: "Use Case",
    image: "/puml/use-case.svg",
    width: 1465,
    height: 336,
    description:
      "Отображает взаимодействие камеры, ИИ-модуля, робота-манипулятора и оператора с системой мониторинга.",
  },
  {
    title: "Sequence Diagram",
    label: "Sequence",
    image: "/puml/sequence.svg",
    width: 1487,
    height: 551,
    description:
      "Показывает процесс от фиксации продукта камерой до удаления брака и уведомления оператора.",
  },
  {
    title: "Deployment Diagram",
    label: "Deployment",
    image: "/puml/deployment.svg",
    width: 840,
    height: 887,
    description:
      "Описывает связь камер, edge-сервера, AI inference, контроллера робота, базы данных и веб-панели.",
  },
];

const benefits = [
  "Снижение человеческих ошибок",
  "Проверка в реальном времени",
  "Быстрое удаление брака",
  "Сбор статистики дефектов",
  "Повышение качества продукции",
  "Масштабируемость на несколько линий",
];

const stats = [
  { value: "< 80 ms", label: "целевая задержка inference" },
  { value: "24/7", label: "контроль без ручных смен" },
  { value: "Edge", label: "обработка рядом с линией" },
];

const accentClasses = {
  cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-cyan-500/20",
  violet:
    "border-violet-300/25 bg-violet-300/10 text-violet-100 shadow-violet-500/20",
  blue: "border-blue-300/25 bg-blue-300/10 text-blue-100 shadow-blue-500/20",
};

function Section({
  id,
  children,
  className = "",
  delay = 0,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <section
      id={id}
      className={`fade-up mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[8px] border border-white/10 bg-white/[0.045] shadow-2xl shadow-cyan-950/20 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

function Chevron() {
  return (
    <span className="mx-auto hidden h-px w-10 bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 lg:block" />
  );
}

function HeroVisual() {
  return (
    <Panel className="relative overflow-hidden p-4 sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(139,92,246,0.24),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0),rgba(8,13,32,0.9))]" />
      <div className="relative rounded-[8px] border border-cyan-200/10 bg-slate-950/80 p-4">
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
              Hyper Technology
            </p>
            <p className="mt-1 text-sm text-slate-300">Line A3 Vision Core</p>
          </div>
          <div className="flex items-center gap-2 rounded-[8px] border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" />
            LIVE
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[320px] overflow-hidden rounded-[8px] border border-cyan-300/15 bg-slate-900">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.07)_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="absolute left-6 right-6 top-10 h-36 rounded-[8px] border border-cyan-200/15 bg-cyan-950/20 shadow-[0_0_45px_rgba(34,211,238,0.14)]">
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 shadow-[0_0_35px_rgba(34,211,238,0.28)]" />
              <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/50" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(125,249,255,0.95)]" />
            </div>

            <div className="absolute bottom-12 left-5 right-5 h-20 rounded-[8px] border border-white/10 bg-slate-950/80">
              <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-cyan-400/20 via-cyan-300 to-violet-400/20" />
              <div className="absolute left-[12%] top-1/2 h-12 w-16 -translate-y-1/2 rounded-[6px] border border-cyan-300/25 bg-cyan-300/10" />
              <div className="absolute left-[42%] top-1/2 h-12 w-16 -translate-y-1/2 rounded-[6px] border border-red-300/40 bg-red-400/10 shadow-[0_0_30px_rgba(248,113,113,0.2)]">
                <span className="absolute -right-2 -top-2 h-5 w-5 rounded-full border border-red-200 bg-red-500/80 shadow-[0_0_22px_rgba(248,113,113,0.7)]" />
              </div>
              <div className="absolute left-[72%] top-1/2 h-12 w-16 -translate-y-1/2 rounded-[6px] border border-blue-300/25 bg-blue-300/10" />
            </div>

            <div className="absolute right-6 top-28 h-28 w-28 rounded-full border border-violet-300/30 bg-violet-500/10">
              <div className="absolute left-1/2 top-1/2 h-3 w-16 origin-left -rotate-[35deg] rounded-full bg-violet-200/80 shadow-[0_0_18px_rgba(196,181,253,0.8)]" />
              <div className="absolute bottom-4 left-8 h-8 w-8 rounded-[6px] border border-violet-200/40 bg-violet-200/10" />
            </div>
          </div>

          <div className="grid gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
            <div className="rounded-[8px] border border-red-300/20 bg-red-400/10 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-200">
                Problem signal
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Ручная проверка брака медленная и неточная, особенно при высокой
                скорости конвейера.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function ArchitectureCard({
  item,
}: {
  item: (typeof architecture)[number];
}) {
  return (
    <div
      className={`rounded-[8px] border p-5 shadow-2xl ${accentClasses[item.accent as keyof typeof accentClasses]}`}
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
          {item.label}
        </span>
        <span className="h-2.5 w-2.5 rounded-full bg-current shadow-[0_0_18px_currentColor]" />
      </div>
      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-sm font-medium text-cyan-100/90">
        {item.description}
      </p>
      <p className="mt-4 text-sm leading-6 text-slate-300">{item.detail}</p>
    </div>
  );
}

function UseCaseDiagram() {
  return (
    <Panel className="p-5 sm:p-7">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.4fr_0.8fr] lg:items-center">
        <div className="grid gap-4">
          {useCaseActors.slice(0, 2).map((item) => (
            <ActorCard key={item.actor} {...item} />
          ))}
        </div>

        <div className="relative rounded-[8px] border border-cyan-300/15 bg-slate-950/70 p-5 sm:p-7">
          <div className="absolute inset-4 rounded-full border border-cyan-300/10" />
          <div className="relative mx-auto mb-6 w-fit rounded-[8px] border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
            AI Vision Monitoring System
          </div>
          <div className="relative grid gap-3 sm:grid-cols-2">
            {useCaseActors.flatMap((actor) =>
              actor.cases.map((useCase) => (
                <div
                  key={useCase}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-4 py-3 text-center text-sm font-medium text-slate-100 shadow-[0_0_26px_rgba(34,211,238,0.08)]"
                >
                  {useCase}
                </div>
              )),
            )}
          </div>
        </div>

        <div className="grid gap-4">
          {useCaseActors.slice(2).map((item) => (
            <ActorCard key={item.actor} {...item} />
          ))}
        </div>
      </div>
    </Panel>
  );
}

function ActorCard({
  actor,
  role,
}: {
  actor: string;
  role: string;
  cases: string[];
}) {
  return (
    <div className="rounded-[8px] border border-violet-300/20 bg-violet-300/10 p-4">
      <div className="mb-3 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-violet-200/30 bg-slate-950 text-xs font-semibold text-violet-100">
          {actor.slice(0, 2)}
        </span>
        <div>
          <p className="font-semibold text-white">{actor}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-violet-300/40 to-transparent" />
    </div>
  );
}

function SequenceDiagram() {
  return (
    <Panel className="p-5 sm:p-7">
      <div className="relative">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-300 via-blue-400 to-violet-400 sm:left-7" />
        <div className="grid gap-5">
          {sequence.map((item) => (
            <div key={item.step} className="relative pl-14 sm:pl-20">
              <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border border-cyan-200/30 bg-slate-950 text-xs font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.25)] sm:h-14 sm:w-14">
                {item.step}
              </span>
              <div className="rounded-[8px] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
                  {item.source}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function DeploymentDiagram() {
  return (
    <Panel className="p-5 sm:p-7">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
        {deployment.map((node, index) => (
          <div key={node} className="contents">
            <div className="rounded-[8px] border border-blue-300/20 bg-blue-300/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Node {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-base font-semibold text-white">{node}</p>
            </div>
            {index < deployment.length - 1 ? <Chevron /> : null}
          </div>
        ))}
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <div className="rounded-[8px] border border-cyan-300/20 bg-cyan-300/10 p-5">
          <h3 className="text-lg font-semibold text-white">
            Почему Edge Computing
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Edge Computing нужен для минимальной задержки и обработки видео рядом
            с производственной линией. Кадры не ждут отправки в удаленное облако,
            поэтому робот получает команду вовремя.
          </p>
        </div>
        <div className="rounded-[8px] border border-violet-300/20 bg-violet-300/10 p-5">
          <h3 className="text-lg font-semibold text-white">
            Роль центральной базы
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Центральная база хранит историю дефектов, аналитику и отчёты. Эти
            данные помогают находить проблемные партии, смены, линии и типы
            производственных отклонений.
          </p>
        </div>
      </div>
    </Panel>
  );
}

function PlantUmlSource() {
  return (
    <div className="grid gap-8">
      {plantUmlDiagrams.map((diagram) => (
        <Panel key={diagram.title} className="overflow-hidden">
          <div className="border-b border-white/10 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {diagram.label}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {diagram.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {diagram.description}
            </p>
          </div>
          <div className="bg-slate-950/50 p-4 sm:p-6">
            <div className="rounded-[8px] border border-white/10 bg-white p-3 sm:p-5">
              <Image
                src={diagram.image}
                alt={`${diagram.title} PlantUML diagram`}
                width={diagram.width}
                height={diagram.height}
                unoptimized
                className="mx-auto h-auto w-full max-w-full"
              />
            </div>
          </div>
          <div className="border-t border-white/10 p-5">
            <a
              href={diagram.image}
              className="inline-flex h-10 items-center justify-center rounded-[8px] bg-cyan-300 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Открыть SVG
            </a>
          </div>
        </Panel>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(28px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .fade-up {
            animation: fadeUp 760ms ease both;
          }

          @media (prefers-reduced-motion: reduce) {
            .fade-up {
              animation: none;
            }
          }
        `}
      </style>

      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(124,58,237,0.19),transparent_32%),linear-gradient(180deg,#030712_0%,#08111f_48%,#030712_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <Section className="relative grid min-h-screen items-center gap-12 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
            AI + Industrial Automation
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            AI Vision Conveyor Monitoring System
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Система компьютерного зрения для автоматического обнаружения
            дефектов на производственном конвейере
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#architecture"
              className="inline-flex h-12 items-center justify-center rounded-[8px] bg-cyan-300 px-6 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.35)] transition hover:bg-cyan-200"
            >
              Посмотреть архитектуру
            </a>
            <a
              href="#diagrams"
              className="inline-flex h-12 items-center justify-center rounded-[8px] border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:border-violet-300/50 hover:bg-violet-300/10"
            >
              Диаграммы
            </a>
          </div>

          <div className="mt-8 rounded-[8px] border border-red-300/20 bg-red-400/10 p-5 shadow-2xl shadow-red-950/10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-200">
              Ключевая проблема
            </p>
            <p className="mt-3 text-base leading-7 text-slate-200">
              Ручная проверка брака медленная и неточная: оператор может устать,
              пропустить дефект или неправильно оценить качество изделия.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <HeroVisual />
        </div>
      </Section>

      <Section delay={100}>
        <div className="grid gap-5 lg:grid-cols-2">
          <Panel className="p-6 sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Situation
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Problem / Situation
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              На заводе товары проверяются вручную, из-за человеческого фактора
              возникают ошибки. Камеры уже установлены, но они только записывают
              видео и не умеют автоматически находить дефекты.
            </p>
          </Panel>

          <Panel className="p-6 sm:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
              Business Goal
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Реальная цель системы
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Система должна обрабатывать видеопоток в реальном времени,
              распознавать дефекты с помощью Computer Vision / AI и передавать
              команды роботу-манипулятору для удаления бракованного товара.
            </p>
          </Panel>
        </div>
      </Section>

      <Section id="architecture" delay={180}>
        <SectionHeader
          eyebrow="System Architecture"
          title="Поток от камеры до операторской панели"
          description="Архитектура построена вокруг быстрой локальной обработки видео и надежной записи событий для дальнейшей аналитики."
        />
        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {architecture.map((item, index) => (
            <div key={item.title} className="contents">
              <ArchitectureCard item={item} />
              {index < architecture.length - 1 ? <Chevron /> : null}
            </div>
          ))}
        </div>
      </Section>

      <Section id="diagrams" delay={260}>
        <SectionHeader
          eyebrow="Use Case Diagram"
          title="Кто взаимодействует с системой"
          description="Псевдо-диаграмма показывает основных акторов и действия, которые выполняются в рамках автоматического контроля качества."
        />
        <UseCaseDiagram />
      </Section>

      <Section delay={340}>
        <SectionHeader
          eyebrow="Sequence Diagram"
          title="Последовательность обработки дефекта"
          description="Каждый шаг показывает, как обнаружение брака превращается в физическое действие робота и уведомление оператора."
        />
        <SequenceDiagram />
      </Section>

      <Section delay={420}>
        <SectionHeader
          eyebrow="Deployment Diagram"
          title="Развертывание на производственной линии"
          description="Компоненты разделены так, чтобы критичная обработка оставалась рядом с конвейером, а аналитика и отчеты были доступны централизованно."
        />
        <DeploymentDiagram />
      </Section>

      <Section delay={460}>
        <SectionHeader
          eyebrow="PlantUML Diagrams"
          title="Готовые диаграммы"
          description="Ниже показаны отрисованные диаграммы Use Case, Sequence и Deployment. Каждую можно открыть отдельно в SVG."
        />
        <PlantUmlSource />
      </Section>

      <Section delay={500}>
        <SectionHeader
          eyebrow="Benefits"
          title="Бизнес-эффект для Hyper Technology"
          description="Система помогает стабилизировать качество, ускорить реакцию на дефекты и сделать контроль производства измеримым."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-cyan-950/10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Benefit {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-white">
                {benefit}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400 sm:px-8">
        Hyper Technology · AI + Industrial Automation Case Study
      </footer>
    </main>
  );
}

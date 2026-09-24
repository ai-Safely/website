import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Eye,
  GitBranch,
  LockKeyhole,
  Menu,
  Radar,
  ShieldCheck,
  Waypoints,
} from 'lucide-react'

const principles = [
  {
    number: '01',
    title: 'Observe the inside',
    body: 'We build instrumentation that makes autonomous behaviour legible during evaluations, before it becomes an incident.',
    icon: Eye,
  },
  {
    number: '02',
    title: 'Defend the boundary',
    body: 'We design practical controls for the moments when an agent has more access, initiative, or persistence than intended.',
    icon: LockKeyhole,
  },
  {
    number: '03',
    title: 'Share what works',
    body: 'We publish research, open-source tools, and operational guidance that the field can build on together.',
    icon: Waypoints,
  },
]

const projects = [
  { code: 'AS-01', title: 'Agent Trace', body: 'Open telemetry for understanding model actions across a long-horizon eval.' },
  { code: 'AS-02', title: 'Red Team Relay', body: 'A living benchmark for testing whether agents can evade internal oversight.' },
  { code: 'AS-03', title: 'Safehouse', body: 'Reference architecture for isolating frontier systems and their tools.' },
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f6f1] text-[#18231f] selection:bg-[#b8e5c7]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-2.5" aria-label="aiSafely home">
          <span className="grid size-8 place-items-center rounded-[10px] bg-[#18382b] text-[#d8f4dc]">
            <Radar className="size-4" strokeWidth={2.2} />
          </span>
          <span className="text-[17px] font-semibold tracking-[-0.04em]">aiSafely</span>
        </a>
        <div className="hidden items-center gap-9 text-[13px] font-medium text-[#607169] md:flex">
          <a className="transition-colors hover:text-[#18231f]" href="#mission">Mission</a>
          <a className="transition-colors hover:text-[#18231f]" href="#work">Research</a>
          <a className="transition-colors hover:text-[#18231f]" href="#principles">Approach</a>
          <a className="transition-colors hover:text-[#18231f]" href="#contact">Contact</a>
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#18382b] px-4 py-2.5 text-[12px] font-semibold text-[#effbef] transition-transform hover:-translate-y-0.5 md:flex">
          Work with us <ArrowUpRight className="size-3.5" />
        </a>
        <button type="button" className="rounded-full border border-[#d6ded5] p-2 text-[#18382b] md:hidden" aria-label="Open navigation">
          <Menu className="size-4" />
        </button>
      </nav>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pb-36 lg:pt-24">
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4e7461]">
            <span className="size-2 rounded-full bg-[#56b87a] shadow-[0_0_0_5px_#d6f2dc]" />
            Independent AI safety research
          </div>
          <h1 className="max-w-[680px] text-[clamp(3.5rem,7vw,6.8rem)] font-medium leading-[0.94] tracking-[-0.075em] text-[#14221c]">
            Keep frontier AI <span className="text-[#4b9b69]">accountable.</span>
          </h1>
          <p className="mt-8 max-w-[520px] text-[17px] leading-8 text-[#607169]">
            aiSafely researches and builds the systems that help frontier AI developers monitor, understand, and defend against autonomous insider threats.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-[#18382b] px-5 py-3.5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5">
              Explore our work <ArrowUpRight className="size-4" />
            </a>
            <a href="#mission" className="inline-flex items-center gap-2 rounded-full px-3 py-3.5 text-[13px] font-semibold text-[#456154] hover:text-[#18382b]">
              Why this matters <ChevronRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative min-h-[390px] lg:min-h-[500px]" aria-label="Illustration of an AI safety monitoring system">
          <div className="absolute inset-4 rounded-[2.5rem] border border-[#d7e1d6] bg-[#eaf1e9]" />
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_45%,rgba(128,199,149,.3),transparent_38%),linear-gradient(135deg,rgba(255,255,255,.5),transparent)]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 520" fill="none" role="img" aria-label="Network diagram showing monitored agent activity">
            <path d="M302 260L134 133M302 260L466 133M302 260L478 383M302 260L130 382" stroke="#9acbad" strokeWidth="1.5" strokeDasharray="5 7" />
            <path d="M302 260L302 84" stroke="#9acbad" strokeWidth="1.5" strokeDasharray="5 7" />
            <circle cx="302" cy="260" r="72" fill="#d7f1dc" stroke="#58a972" strokeWidth="1.5" />
            <circle cx="302" cy="260" r="48" fill="#eff9ed" stroke="#80c593" />
            <path d="M286 260l11 11 21-25" stroke="#39875a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <text x="302" y="344" textAnchor="middle" fill="#33634a" fontSize="12" fontFamily="monospace" letterSpacing="2">OVERSIGHT CORE</text>
            {[['134','133','EVAL'],['466','133','TOOLS'],['478','383','ACCESS'],['130','382','TRACE'],['302','84','MODEL']].map(([cx, cy, label]) => <g key={label}><circle cx={cx} cy={cy} r="27" fill="#f4f8f1" stroke="#72b887" strokeWidth="1.5" /><circle cx={cx} cy={cy} r="5" fill="#53a96f" /><text x={cx} y={Number(cy) + 48} textAnchor="middle" fill="#668275" fontSize="10" fontFamily="monospace" letterSpacing="1.5">{label}</text></g>)}
            <circle cx="302" cy="260" r="102" stroke="#9acbad" strokeOpacity=".6" strokeDasharray="2 8" />
          </svg>
          <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-2xl border border-white/70 bg-white/60 px-4 py-3 backdrop-blur-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#61806e]">System status</span>
            <span className="flex items-center gap-2 text-[11px] font-semibold text-[#39875a]"><span className="size-1.5 rounded-full bg-[#53a96f]" /> All signals nominal</span>
          </div>
        </div>
      </section>

      <section id="mission" className="border-y border-[#dbe3da] bg-[#eaf0e8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#648172]">The problem</p>
          <div>
            <h2 className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.05em] text-[#193126] sm:text-5xl">As agents become more capable, the space between an evaluation and an incident gets smaller.</h2>
            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#607169]">We believe safety cannot stop at the model boundary. Developers need clear signals, robust containment, and trusted ways to investigate what an autonomous system is doing inside a real research environment.</p>
          </div>
        </div>
      </section>

      <section id="principles" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#648172]">How we work</p><h2 className="mt-4 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">Safety is a practice.</h2></div><p className="max-w-xs text-sm leading-6 text-[#718078]">Independent research, built for the people responsible for deploying powerful systems.</p></div>
        <div className="grid border-t border-[#cfdacf] md:grid-cols-3">{principles.map(({ number, title, body, icon: Icon }) => <article key={number} className="border-b border-[#cfdacf] py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"><div className="flex items-center justify-between"><span className="font-mono text-[11px] text-[#86a08f]">{number}</span><Icon className="size-5 text-[#4c9967]" strokeWidth={1.6} /></div><h3 className="mt-12 text-xl font-semibold tracking-[-0.03em]">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#6d7e74]">{body}</p></article>)}</div>
      </section>

      <section id="work" className="bg-[#18382b] px-6 py-20 text-[#edf7ed] lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#9ed4aa]">Selected research</p><h2 className="mt-4 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">Useful by design.</h2></div><a href="#contact" className="flex items-center gap-2 text-sm font-semibold text-[#b6e5be] hover:text-white">View all projects <ArrowUpRight className="size-4" /></a></div><div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#42644e] bg-[#42644e] md:grid-cols-3">{projects.map((project) => <article key={project.code} className="bg-[#18382b] p-7 transition-colors hover:bg-[#214735]"><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-[#9ed4aa]">{project.code}</span><ShieldCheck className="size-4 text-[#9ed4aa]" /></div><h3 className="mt-16 text-2xl font-medium tracking-[-0.04em]">{project.title}</h3><p className="mt-3 text-sm leading-6 text-[#b5c9b9]">{project.body}</p><div className="mt-8 flex items-center gap-2 text-[11px] font-semibold text-[#9ed4aa]">Research in progress <ArrowUpRight className="size-3.5" /></div></article>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"><div className="rounded-[2rem] bg-[#d7efda] px-7 py-12 sm:px-14 sm:py-16"><div className="max-w-2xl"><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4d8060]">Stay close to the work</p><h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.06em] text-[#18382b] sm:text-6xl">The future needs more eyes on it.</h2><p className="mt-6 max-w-lg text-[15px] leading-7 text-[#557360]">We are building a community of researchers, operators, and developers who take the inside of AI systems seriously.</p><a href="mailto:hello@aisafely.org" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#18382b] px-5 py-3.5 text-[13px] font-semibold text-white hover:bg-[#28543b]">Start a conversation <ArrowUpRight className="size-4" /></a></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-[#dbe3da] px-6 py-8 text-[12px] text-[#718078] sm:flex-row sm:items-center sm:justify-between lg:px-10"><span className="font-semibold tracking-[-0.02em] text-[#385245]">aiSafely</span><div className="flex items-center gap-6"><span>Independent · Open · Careful</span><a href="https://github.com" className="flex items-center gap-1.5 hover:text-[#18382b]" aria-label="aiSafely on GitHub"><GitBranch className="size-3.5" /> GitHub</a><span>© 2026</span></div></footer>
    </main>
  )
}

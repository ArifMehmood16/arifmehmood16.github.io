import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo-mark.png";
import {
  profile,
  stats,
  skillGroups,
  roles,
  projects,
  education,
} from "@/lib/cv-data";

const CV_HREF = "/Arif-Mehmood-CV.pdf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arif Mehmood — AI Engineer, LLM Applications & Backend" },
      {
        name: "description",
        content:
          "AI engineer in Redditch, UK. LLM applications, Python backends and cloud delivery, with production systems since 2018. Full UK right to work, no sponsorship required.",
      },
      {
        property: "og:title",
        content: "Arif Mehmood — AI Engineer, LLM Applications & Backend",
      },
      {
        property: "og:description",
        content:
          "Production systems since 2018: LLM applications, Python and FastAPI backends, AWS and Azure delivery. Currently AI and backend lead on a consumer health app.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "AI Engineer",
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          address: { "@type": "PostalAddress", addressLocality: "Redditch", addressCountry: "GB" },
          sameAs: [profile.linkedin],
        }),
      },
    ],
  }),
  component: Home,
});

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-4">
      <span className="label-mono">{index}</span>
      <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-2.5">
            <img
              src={logoAsset}
              alt="AM logo"
              width={32}
              height={32}
              className="h-8 w-8"
              loading="eager"
            />
            <span className="font-mono text-sm font-semibold tracking-[0.18em] uppercase">
              Arif&nbsp;Mehmood
            </span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-base text-muted-foreground transition-colors hover:text-accent"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={CV_HREF}
            download="Arif_Mehmood_CV.pdf"
            className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5">
        {/* Hero */}
        <section className="hero-glow relative py-16 sm:py-24">
          <p className="label-mono text-accent">Hello, I&rsquo;m</p>
          <h1 className="gradient-name mt-4 font-sans text-5xl leading-[1.02] font-bold tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 label-mono">{profile.tagline}</p>
          <p className="mt-4 max-w-2xl text-xl font-medium text-accent">{profile.title}</p>
          <p className="mt-6 max-w-3xl font-sans text-xl leading-relaxed text-foreground">
            {profile.summary}
          </p>
          <p className="mt-4 max-w-3xl font-sans text-lg leading-relaxed text-muted-foreground">
            {profile.summary2}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <span className="chip-accent">{profile.location}</span>
            <span className="chip">{profile.rightToWork}</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border-firm bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={CV_HREF}
              download="Arif_Mehmood_CV.pdf"
              className="rounded-md border border-border-firm bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Download CV (PDF)
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-5">
                <dt className="font-sans text-xl leading-tight font-bold text-accent">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Experience */}
        <section id="experience" className="rule-top py-16">
          <SectionHeading index="01" title="Experience" />
          <div className="space-y-6">
            {roles.map((role) => (
              <article key={role.company + role.dates} className="surface-card card-hover p-6 sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-sans text-2xl font-bold tracking-tight">
                    {role.title}
                    <span className="text-accent"> · {role.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground">
                    {role.dates}
                    {role.location ? ` · ${role.location}` : ""}
                  </p>
                </div>

                <p className="mt-4 font-sans text-lg leading-relaxed text-foreground">
                  <span className="label-mono mr-2">Product</span>
                  {role.product}
                </p>
                <p className="mt-2 inline-block chip-accent">{role.status}</p>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  <span className="label-mono mr-2">My scope</span>
                  {role.scope}
                </p>

                <ul className="mt-6 space-y-4">
                  {role.bullets.map((b) => (
                    <li key={b.lead} className="border-l-2 border-accent-soft pl-4">
                      <span className="font-semibold">{b.lead} </span>
                      <span className="text-muted-foreground">{b.rest}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {role.technologies.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="rule-top py-16">
          <SectionHeading index="02" title="Core skills" />
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.title} className="surface-card p-6">
                <h3 className="font-sans text-xl font-bold">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <span key={i} className="chip">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="rule-top py-16">
          <SectionHeading index="03" title="Selected work" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <article key={p.name} className="surface-card card-hover flex flex-col p-6">
                <h3 className="font-sans text-xl leading-snug font-bold">
                  {p.name}
                </h3>
                <p className="mt-1 font-mono text-sm text-faint">{p.org}</p>
                {"link" in p && p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 font-mono text-sm break-all text-accent hover:underline"
                  >
                    {p.linkLabel} ↗
                  </a>
                ) : null}
                {"extraLinks" in p && p.extraLinks
                  ? p.extraLinks.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 font-mono text-sm break-all text-accent hover:underline"
                      >
                        {l.label}
                      </a>
                    ))
                  : null}
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <p className="mt-3 text-base leading-relaxed">{p.outcome}</p>
                <p className="mt-4 chip-accent self-start">{p.status}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="rule-top py-16">
          <SectionHeading index="04" title="Education & certification" />
          <div className="space-y-px overflow-hidden rounded-lg border border-border bg-border">
            {education.map((e) => (
              <div
                key={e.title}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 bg-card p-6"
              >
                <div className="max-w-2xl">
                  <h3 className="font-sans text-xl font-bold">{e.title}</h3>
                  <p className="mt-1 text-base text-accent">{e.org}</p>
                  {e.detail ? (
                    <p className="mt-2 text-base text-muted-foreground">{e.detail}</p>
                  ) : null}
                </div>
                <p className="font-mono text-sm text-muted-foreground">{e.dates}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="rule-top py-16">
          <SectionHeading index="05" title="Get in touch" />
          <div className="surface-card p-8 sm:p-10">
            <p className="max-w-2xl font-sans text-xl leading-relaxed">
              Open to AI engineering and senior backend roles in the UK.{" "}
              <span className="text-accent">
                Full UK right to work, no sponsorship required.
              </span>
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <dt className="label-mono">Email</dt>
                <dd className="mt-1">
                  <a
                    className="text-base break-all hover:text-accent"
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label-mono">Phone</dt>
                <dd className="mt-1">
                  <a
                    className="text-base hover:text-accent"
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  >
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label-mono">LinkedIn</dt>
                <dd className="mt-1">
                  <a
                    className="text-base break-all hover:text-accent"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {profile.linkedinLabel}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="rule-top">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-5 py-8">
          <p className="font-mono text-sm text-faint">
            © {new Date().getFullYear()} Arif Mehmood · Redditch, UK
          </p>
          <a
            href={CV_HREF}
            download="Arif_Mehmood_CV.pdf"
            className="font-mono text-sm text-muted-foreground hover:text-accent"
          >
            Download CV (PDF)
          </a>
        </div>
      </footer>
    </div>
  );
}

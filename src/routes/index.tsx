import { createFileRoute } from "@tanstack/react-router";

import workRetail from "@/assets/work-retail.jpg";
import workChurn from "@/assets/work-churn.jpg";
import workMargin from "@/assets/work-margin.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Josh ANalytics | Business Analyst · Microsoft Stack" },
      {
        name: "description",
        content:
          "Josh ANalytics helps teams untangle messy numbers with Power BI, Excel, Teams and SharePoint. Clear dashboards, honest insight, no black boxes.",
      },
      { property: "og:title", content: "Josh ANalytics | Business Analyst · Microsoft Stack" },
      {
        property: "og:description",
        content:
          "Josh ANalytics helps teams untangle messy numbers with Power BI, Excel, Teams and SharePoint. Clear dashboards, honest insight, no black boxes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 -right-28 h-[560px] w-[560px] rounded-full bg-secondary/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <header>
          <nav className="flex items-center justify-between py-6">
            <a
              href="#"
              className="flex items-center gap-3"
              aria-label="Josh ANalytics home"
            >
              <div className="grid size-9 place-items-center rounded-xl border border-card/60 bg-card/70 shadow-sm backdrop-blur-xl">
                <span className="font-display text-sm font-bold text-primary">J</span>
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">
                Josh ANalytics
              </span>
            </a>
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#work"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
              >
                Work
              </a>
              <a
                href="#capabilities"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
              >
                Capabilities
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary"
              >
                About
              </a>
              <a
                href="#contact"
                className="rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
              >
                Let's talk
              </a>
            </div>
          </nav>
        </header>

        <main>
          <section className="grid items-center gap-10 pb-16 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-card/60 bg-card/60 px-3 py-1.5 shadow-sm backdrop-blur-xl">
                <span className="size-2 rounded-full bg-secondary" />
                <span className="font-mono text-xs font-medium tracking-wide text-foreground/70">
                  Business Analyst · Microsoft Stack
                </span>
              </div>
              <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl">
                Turning raw data into
                <span className="text-primary"> decisions</span> you can act on.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/60">
                I help teams untangle messy numbers with Power BI, Excel and a
                healthy dose of business sense. Clear dashboards, honest insight,
                no black boxes.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
                >
                  View case studies
                </a>
                <div className="flex items-center gap-2 rounded-full border border-card/60 bg-card/50 px-4 py-3 shadow-sm backdrop-blur-xl">
                  <span className="font-mono text-xs text-foreground/60">
                    hello@joshanalytics.io
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-card/60 bg-card/50 p-5 shadow-xl backdrop-blur-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-foreground/50">
                    revenue_forecast / live
                  </span>
                  <span className="rounded bg-secondary/10 px-2 py-0.5 font-mono text-xs font-medium text-secondary">
                    +12.4%
                  </span>
                </div>
                <div className="mb-1 font-display text-4xl font-bold tracking-tight">
                  $2.41M
                </div>
                <div className="mb-5 text-xs text-foreground/50">
                  Q3 run-rate, modeled in Power BI
                </div>
                <div className="flex h-24 items-end gap-1.5">
                  <div
                    className="flex-1 rounded-t bg-primary/25"
                    style={{ height: "40%" }}
                    aria-hidden="true"
                  />
                  <div
                    className="flex-1 rounded-t bg-primary/35"
                    style={{ height: "55%" }}
                    aria-hidden="true"
                  />
                  <div
                    className="flex-1 rounded-t bg-primary/45"
                    style={{ height: "48%" }}
                    aria-hidden="true"
                  />
                  <div
                    className="flex-1 rounded-t bg-primary/55"
                    style={{ height: "70%" }}
                    aria-hidden="true"
                  />
                  <div
                    className="flex-1 rounded-t bg-primary/70"
                    style={{ height: "62%" }}
                    aria-hidden="true"
                  />
                  <div
                    className="flex-1 rounded-t bg-secondary/70"
                    style={{ height: "85%" }}
                    aria-hidden="true"
                  />
                  <div
                    className="flex-1 rounded-t bg-secondary"
                    style={{ height: "100%" }}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-foreground/40">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-foreground/90 px-4 py-3 shadow-lg backdrop-blur-xl">
                <span className="size-2 rounded-full bg-secondary" />
                <span className="font-mono text-xs text-primary-foreground/80">
                  SQL query · 1,204 rows returned in 0.3s
                </span>
              </div>
            </div>
          </section>

          <section id="capabilities" className="pb-16">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary/70">
                  Capabilities
                </span>
                <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight">
                  What I bring to the table
                </h2>
              </div>
              <span className="hidden font-mono text-xs text-foreground/40 sm:block">
                03 disciplines
              </span>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              <CapabilityCard
                letter="B"
                color="primary"
                title="Business Analysis"
                description="Mapping processes, sizing problems and framing the questions worth answering before a single chart is built."
              />
              <CapabilityCard
                letter="P"
                color="secondary"
                title="Power BI Dashboards"
                description="Self-serve reports and live boards that turn a warehouse of tables into a single, shareable source of truth."
              />
              <CapabilityCard
                letter="E"
                color="foreground"
                title="Excel Automation"
                description="Repeatable Excel models, Power Query workflows and SharePoint-connected reports that stop the Friday-afternoon spreadsheet scramble."
              />
            </div>
          </section>

          <section id="work" className="pb-20">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary/70">
                  Selected work
                </span>
                <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight">
                  Recent projects
                </h2>
              </div>
              <a
                href="#work"
                className="hidden items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2 sm:inline-flex"
              >
                All projects →
              </a>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              <ProjectCard
                image={workRetail}
                alt="Retail demand forecasting dashboard with revenue line chart and KPI tiles"
                year="FY24"
                tags="Power BI"
                title="Retail demand forecasting"
                description="Cut stockouts 31% with a rolling forecast board for a 40-store chain."
              />
              <ProjectCard
                image={workChurn}
                alt="SaaS churn cohort heatmap showing monthly retention patterns"
                year="FY23"
                tags="Excel · SharePoint"
                title="SaaS churn model"
                description="Scored client accounts to focus save campaigns on at-risk revenue using Excel and SharePoint lists."
              />
              <ProjectCard
                image={workMargin}
                alt="Sales funnel and margin waterfall chart on a frosted glass dashboard"
                year="FY24"
                tags="Power BI"
                title="Margin &amp; pricing board"
                description="Gave a procurement team a live view of margin by supplier and region."
              />
            </div>
          </section>

          <section id="contact" className="pb-16">
            <div className="relative overflow-hidden rounded-3xl bg-foreground/95 px-8 py-12 shadow-xl backdrop-blur-2xl md:px-14">
              <div
                className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-widest text-secondary">
                  Available Q3
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                  Have a dataset that deserves better answers?
                </h2>
                <p className="mt-4 leading-relaxed text-primary-foreground/60">
                  Let's map your data, find the signal, and build the board your
                  team actually opens every morning.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <a
                    href="mailto:hello@joshanalytics.io"
                    className="rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary-foreground"
                  >
                    Book a discovery call
                  </a>
                  <a
                    href="mailto:hello@joshanalytics.io"
                    className="px-2 py-3 text-sm font-semibold text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    or email me directly
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="pb-10">
          <div className="flex flex-col items-center justify-between gap-3 border-t border-foreground/10 pt-6 sm:flex-row">
            <span className="font-display font-semibold tracking-tight">
              Josh ANalytics
            </span>
            <span className="font-mono text-xs text-foreground/40">
              Built with Power BI · Excel · Teams · SharePoint — © 2026
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

function CapabilityCard({
  letter,
  color,
  title,
  description,
}: {
  letter: string;
  color: "primary" | "secondary" | "foreground";
  title: string;
  description: string;
}) {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    foreground: "bg-foreground/10 text-foreground",
  };

  return (
    <div className="rounded-2xl border border-card/60 bg-card/55 p-6 shadow-sm backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`grid size-11 place-items-center rounded-xl mb-5 ${colorClasses[color]}`}
      >
        <span className="font-display text-lg font-bold">{letter}</span>
      </div>
      <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-foreground/60">{description}</p>
    </div>
  );
}

function ProjectCard({
  image,
  alt,
  year,
  tags,
  title,
  description,
}: {
  image: string;
  alt: string;
  year: string;
  tags: string;
  title: string;
  description: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-card/60 bg-card/55 shadow-sm backdrop-blur-xl">
      <img
        src={image}
        alt={alt}
        width={1024}
        height={640}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover"
      />
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[10px] text-foreground/40">{year}</span>
          <span className="font-mono text-[10px] text-secondary">{tags}</span>
        </div>
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {title}
        </h3>
        <p className="mt-1 text-sm text-foreground/55">{description}</p>
      </div>
    </article>
  );
}

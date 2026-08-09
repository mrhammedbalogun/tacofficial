import { engagements } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { CardVisual } from "@/components/CardVisual";
import type { Metadata } from "next";

export function generateStaticParams() {
  return engagements.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = engagements.find((x) => x.slug === slug);
  if (!e) return { title: "Our Work | TAC" };
  return { title: `${e.title} | TAC`, description: e.outcome, openGraph: { title: `${e.title} | TAC`, description: e.outcome } };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = engagements.find((x) => x.slug === slug);
  if (!e) notFound();

  return (
    <div className="bg-white min-h-screen">
      <section className="relative bg-neutral-dark text-white">
        <CardVisual index={0} icon={e.icon} className="opacity-25" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/our-work" className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All work
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {e.tags.map((t) => (<span key={t} className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded-sm">{t}</span>))}
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{e.title}</h1>
          <p className="text-lg text-gray-300 mb-2">{e.client}</p>
          <p className="flex items-center gap-2 text-gray-400 text-sm"><MapPin className="w-4 h-4" /> {e.region}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {/* Outcome metrics band */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {e.metrics.map((m) => (
            <div key={m} className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center">
              <p className="text-lg font-bold text-primary">{m}</p>
            </div>
          ))}
        </div>

        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-4">The context</h2>
          <p className="text-gray-700 leading-relaxed">{e.context}</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-5">What we did</h2>
          <ul className="space-y-4">
            {e.whatWeDid.map((w, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{w}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-neutral-dark text-white rounded-2xl p-8">
          <h2 className="text-2xl font-serif font-bold mb-4">The outcome</h2>
          <p className="text-gray-200 leading-relaxed">{e.outcomeDetail}</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-4">What this unlocks for similar clients</h2>
          <p className="text-gray-700 leading-relaxed">{e.unlocks}</p>
        </section>

        <section className="text-center pt-2">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-dark transition-colors">
            Bring this kind of work to your organisation <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        <p className="text-xs text-gray-400 border-t border-gray-100 pt-6">
          Client and host organisations are described by role and sector pending consent to be named. Outcome metrics are reported as published in our faculty&rsquo;s public track record.
        </p>
      </div>
    </div>
  );
}

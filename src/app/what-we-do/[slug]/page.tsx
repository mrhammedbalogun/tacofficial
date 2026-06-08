import { services } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Layers, Handshake } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Services | TAC" };
  return {
    title: `${service.title} | TAC`,
    description: service.whatItMeans,
    openGraph: { title: `${service.title} | TAC`, description: service.whatItMeans },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-neutral-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/what-we-do" className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All services
          </Link>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed">{service.whatItMeans}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        <section>
          <h2 className="flex items-center gap-2 text-2xl font-serif font-bold text-neutral-dark mb-6"><Users className="w-5 h-5 text-accent" /> Who it&rsquo;s for</h2>
          <div className="flex flex-wrap gap-3">
            {service.whoFor.map((w) => (
              <span key={w} className="text-sm font-medium text-neutral-dark bg-neutral-light border border-gray-200 rounded-full px-4 py-2">{w}</span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-serif font-bold text-neutral-dark mb-6"><Layers className="w-5 h-5 text-accent" /> How TAC delivers</h2>
          <ul className="space-y-4">
            {service.howWeDeliver.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="flex items-center gap-2 text-2xl font-serif font-bold text-neutral-dark mb-6"><Handshake className="w-5 h-5 text-accent" /> Ways to engage</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {service.waysToEngage.map((w, i) => {
              const [head, ...rest] = w.split(":");
              return (
                <div key={i} className="p-5 rounded-xl bg-neutral-light border border-gray-100">
                  <p className="font-semibold text-primary mb-1">{head}</p>
                  <p className="text-sm text-gray-600 leading-snug">{rest.join(":").trim()}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-neutral-light rounded-2xl p-8 border border-gray-100 text-center">
          <h2 className="text-xl font-serif font-bold text-neutral-dark mb-3">Explore this service with us</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">Our faculty brings global standards credentials and a sustained delivery record across Africa to every engagement.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors">Discuss this service <ArrowRight className="w-5 h-5" /></Link>
            <Link href="/our-work" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-neutral-dark px-6 py-3 rounded-md font-semibold hover:border-primary/40 transition-colors">See our work</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

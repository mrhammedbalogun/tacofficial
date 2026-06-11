import { sectors, services, engagements } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Handshake } from "lucide-react";

export const metadata = {
  title: "Who We Serve | TAC",
  description: "Tailored accreditation and quality systems for regulators, health institutions, and development partners across Africa.",
};

export default function WhoWeServe() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">Who We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored accreditation and quality systems for the entire healthcare value chain &mdash; written for the people
            accountable for quality, not a generic service list.
          </p>
        </div>

        <div className="space-y-28">
          {sectors.map((sector, index) => {
            const sectorServices = sector.serviceIds
              .map((id) => services.find((s) => s.id === id))
              .filter(Boolean) as typeof services;
            const sectorEngagements = engagements.filter((e) => e.tags.includes(sector.tag));

            return (
              <section id={sector.id} key={sector.id} className="scroll-mt-24">
                <div className={`flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-start`}>
                  {/* Visual */}
                  <div className="w-full lg:w-2/5 relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl shrink-0">
                    <Image src={sector.image} alt={sector.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/70 to-transparent" />
                    <h2 className="absolute bottom-6 left-6 right-6 text-3xl font-serif font-bold text-white">{sector.title}</h2>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-3/5">
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">{sector.intro}</p>
                    <p className="text-gray-600 leading-relaxed mb-8">{sector.approach}</p>

                    <h3 className="text-sm font-bold uppercase tracking-wider text-accent-strong mb-4">What we bring to this sector</h3>
                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                      {sectorServices.map((s) => (
                        <Link href={`/what-we-do#${s.id}`} key={s.id} className="group p-4 rounded-xl bg-neutral-light border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
                          <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                          <p className="text-sm font-semibold text-neutral-dark group-hover:text-primary transition-colors leading-snug">{s.title}</p>
                        </Link>
                      ))}
                    </div>

                    {sectorEngagements.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-accent-strong mb-4">Engagements in this sector</h3>
                        <div className="flex flex-wrap gap-3">
                          {sectorEngagements.map((e) => (
                            <Link href={`/our-work#${e.id}`} key={e.id} className="inline-flex items-center gap-2 text-sm font-medium text-neutral-dark bg-white border border-gray-200 rounded-full px-4 py-2 hover:border-primary/40 hover:text-primary transition-colors">
                              {e.client} <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3 bg-primary/5 border border-primary/10 rounded-xl p-5 mb-8">
                      <Handshake className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 leading-relaxed"><span className="font-semibold text-neutral-dark">What we look for in a partnership: </span>{sector.partnership}</p>
                    </div>

                    <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors">
                      Start a conversation <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

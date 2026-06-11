import { engagements } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata = {
  title: "Our Work | TAC",
  description: "Evidence of impact across the African healthcare ecosystem — accreditation systems, workforce programmes, and quality certification at scale.",
};

export default function OurWork() {
  return (
    <div className="py-24 bg-neutral-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Proven delivery at scale. Engagements drawn from our faculty&rsquo;s delivery record across Africa, with
            measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagements.map((e) => (
            <Link id={e.id} href={`/our-work/${e.slug}`} key={e.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col scroll-mt-24">
              <div className="relative h-56 overflow-hidden">
                <Image src={e.image} alt={e.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {e.region}
                </div>
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {e.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-accent-strong uppercase tracking-wider bg-accent/10 px-2 py-1 rounded-sm">{tag}</span>
                  ))}
                </div>
                <h2 className="text-xl font-bold text-neutral-dark mb-1 group-hover:text-primary transition-colors">{e.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{e.client}</p>
                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {e.metrics.map((m) => (
                    <span key={m} className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{m}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">Read the case <ArrowRight className="w-4 h-4" /></span>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-12 max-w-3xl">
          Client and host organisations are described by role and sector pending consent to be named. Outcome metrics are
          reported as published in our faculty&rsquo;s public track record.
        </p>
      </div>
    </div>
  );
}

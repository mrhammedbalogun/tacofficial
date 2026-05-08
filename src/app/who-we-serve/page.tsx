import { sectors } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Who We Serve | TAC",
  description: "Tailored accreditation and quality systems for the entire healthcare value chain.",
};

export default function WhoWeServe() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">Who We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored accreditation and quality systems for the entire healthcare value chain.
          </p>
        </div>

        <div className="space-y-24">
          {sectors.map((sector, index) => (
            <div id={sector.slug} key={sector.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="w-full md:w-1/2 relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/case_study_hospital.png" alt={sector.title} fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold font-serif text-neutral-dark mb-6">{sector.title}</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We provide specialized infrastructure, tools, and strategic guidance to {sector.title.toLowerCase()}, ensuring that quality standards are not just met, but exceeded with sustainable frameworks.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors">
                  Discuss your needs <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

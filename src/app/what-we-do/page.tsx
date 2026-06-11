import { services } from "@/lib/data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "What We Do | TAC",
  description: "Specialist accreditation and quality infrastructure services — standards development, eAMS, assessor training, preparedness, and more.",
};

export default function WhatWeDo() {
  return (
    <div className="py-24 bg-neutral-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">What We Do</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            We build the infrastructure for healthcare quality, operating at every layer of the accreditation ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              id={service.id}
              href={`/what-we-do/${service.slug}`}
              key={service.id}
              className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all flex flex-col scroll-mt-24"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-neutral-dark group-hover:text-primary transition-colors">{service.title}</h2>
              <p className="text-gray-600 mb-6 flex-grow">{service.summary}</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

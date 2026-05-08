import { services } from "@/lib/data";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "What We Do | TAC",
  description: "Specialist accreditation and quality infrastructure services.",
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
          {services.map(service => (
            <div id={service.id} key={service.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-neutral-dark">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.summary}</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Evidence-based methodology</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Aligned with global standards (ISO, ISQua)</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors">
                Discuss this service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { services, sectors, engagements } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const topServices = services.slice(0, 3);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-dark text-white pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_bg.png" 
            alt="Healthcare professionals discussing quality" 
            fill 
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark via-neutral-dark/90 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Africa's accreditation infrastructure partner
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed font-sans">
              Standards, systems, and surveyors for the regulators and institutions shaping healthcare quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/who-we-serve#regulators" 
                className="bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-md font-semibold text-lg transition-all text-center flex items-center justify-center gap-2 group"
              >
                See how we work with regulators
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/our-work" 
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-md font-semibold text-lg transition-all text-center"
              >
                Explore our engagements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-primary text-white py-8 border-y border-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center text-sm md:text-base font-medium opacity-90">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent"/> ISO 7101 Technical Group</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent"/> ISQua Expert</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent"/> International Academy of Quality</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent"/> JCI Delivery Partner</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent"/> USAID HWM Alumni</div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-dark mb-4">Specialist Pillars</h2>
            <p className="text-lg text-gray-600 max-w-2xl">We build the infrastructure for healthcare quality, operating at every layer of the accreditation ecosystem.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topServices.map(service => (
              <Link href={`/what-we-do#${service.id}`} key={service.id} className="group p-8 rounded-xl bg-neutral-light border border-gray-100 hover:shadow-xl transition-all hover:border-primary/20 flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-neutral-dark group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.summary}</p>
              </Link>
            ))}
            <Link href="/what-we-do" className="group p-8 rounded-xl bg-primary text-white hover:shadow-xl transition-all hover:bg-primary-dark flex flex-col items-center justify-center h-full text-center min-h-[250px]">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">And more ways we support health quality</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-dark mb-4">Who We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Tailored accreditation and quality systems for the entire healthcare value chain.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map(sector => (
              <Link href={`/who-we-serve#${sector.id}`} key={sector.id} className="relative overflow-hidden rounded-xl group h-80">
                <Image src="/images/case_study_hospital.png" alt={sector.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/90 via-neutral-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                  <h3 className="text-2xl font-bold text-white">{sector.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Engagements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-dark mb-4">Selected Engagements</h2>
              <p className="text-lg text-gray-600 max-w-2xl">Proven delivery at scale across Africa.</p>
            </div>
            <Link href="/our-work" className="hidden md:flex items-center gap-2 font-semibold text-primary hover:text-primary-dark transition-colors">
              View all case studies <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagements.slice(0, 3).map(engagement => (
              <Link href={`/our-work#${engagement.id}`} key={engagement.id} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <Image src={engagement.image} alt={engagement.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex gap-2 mb-3">
                  {engagement.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-accent uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-neutral-dark mb-2 group-hover:text-primary transition-colors">{engagement.client}</h3>
                <p className="text-gray-600">{engagement.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Spotlight */}
      <section className="py-24 bg-neutral-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">World-Class Faculty</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed font-sans">
            Our faculty brings together contributors to global healthcare quality standards and veteran operators of national verification platforms &mdash; senior practitioners convened to deliver at the standard our clients require.
          </p>
          <Link href="/our-faculty" className="inline-flex items-center gap-2 bg-white text-neutral-dark hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-colors">
            Meet the team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

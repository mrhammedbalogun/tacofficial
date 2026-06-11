import { faculty } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, MapPin, CheckCircle2, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export function generateStaticParams() {
  return faculty.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const member = faculty.find((m) => m.slug === slug);
  if (!member) return { title: "Faculty | TAC" };
  return {
    title: `${member.name} | TAC Faculty`,
    description: member.summary,
    openGraph: { title: `${member.name} — ${member.role}`, description: member.summary, type: "profile" },
  };
}

export default async function FacultyProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = faculty.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-neutral-dark text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/our-faculty" className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All faculty
          </Link>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="relative w-44 h-56 md:w-52 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 shrink-0">
              <Image src={member.image} alt={member.name} fill className="object-cover" sizes="208px" priority />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">{member.name}</h1>
              <p className="text-lg text-accent font-semibold mb-4">{member.role}</p>
              <p className="flex items-center gap-2 text-gray-300 text-sm mb-6">
                <MapPin className="w-4 h-4" /> {member.location}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.signalCredentials.map((c) => (
                  <span key={c} className="text-xs font-semibold text-white bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {/* Profile */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-5">Profile</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {member.profile.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* Role at TAC */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-5">Role at TAC</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {member.roleAtTac.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </section>

        {/* Signature Experience */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-5">Signature Experience</h2>
          <ul className="space-y-4">
            {member.experience.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-neutral-dark">{item.lead}.</span> {item.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Credentials */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-5">Credentials</h2>
          <ul className="space-y-3">
            {member.credentials.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                <span>{c}</span>
              </li>
            ))}
            <li className="flex items-start gap-3 text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
              <span>Based in {member.location}</span>
            </li>
          </ul>
        </section>

        {/* Publications (optional) */}
        {member.publications && member.publications.length > 0 && (
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-serif font-bold text-neutral-dark mb-5">
              <BookOpen className="w-5 h-5 text-accent" /> Selected Publications
            </h2>
            <ul className="space-y-3">
              {member.publications.map((c, i) => (
                <li key={i} className="text-sm text-gray-600 leading-relaxed border-l-2 border-gray-100 pl-4">{c}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Beyond (optional) */}
        {member.beyond && (
          <section>
            <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-5">Beyond TAC</h2>
            <p className="text-gray-700 leading-relaxed">{member.beyond}</p>
          </section>
        )}

        {/* Contribution callout */}
        <section className="bg-neutral-light rounded-2xl p-8 border border-gray-100">
          <h2 className="text-xl font-serif font-bold text-neutral-dark mb-3">What {member.name.split(" ")[0]} brings to TAC&rsquo;s clients</h2>
          <p className="text-gray-700 leading-relaxed">{member.contribution}</p>
        </section>

        {/* CTA */}
        <section className="text-center pt-2">
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-dark transition-colors">
            Engage our faculty <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}

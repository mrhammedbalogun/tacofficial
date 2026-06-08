import { faculty } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export const metadata = {
  title: "Our Faculty | TAC",
  description:
    "TAC is built around a faculty of senior practitioners — contributors to global healthcare quality standards with a sustained delivery record across Nigeria and Africa.",
};

export default function OurFaculty() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">Our Faculty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TAC is built around a faculty of senior practitioners, convened per engagement, with a core team providing
            continuity. Our faculty brings contributions to global healthcare quality standards and a sustained delivery
            record across Nigeria and Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {faculty.map((member) => (
            <Link
              key={member.id}
              href={`/our-faculty/${member.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-light">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold font-serif text-neutral-dark group-hover:text-primary transition-colors">
                  {member.name}
                </h2>
                <h3 className="text-sm font-semibold text-accent mt-1 mb-4">{member.role}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{member.summary}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {member.signalCredentials.map((c) => (
                    <span key={c} className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {c}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-semibold mt-6 group-hover:gap-3 transition-all">
                  View profile <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-28 bg-neutral-light p-12 rounded-2xl text-center border border-gray-100">
          <Star className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-2xl font-bold font-serif text-neutral-dark mb-4">Want to engage our faculty?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you need strategic advisory, standards development, or assessor training, our faculty is ready to
            support your organization&rsquo;s quality journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-dark transition-colors"
          >
            Start a conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

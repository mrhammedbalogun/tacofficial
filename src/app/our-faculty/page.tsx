import { faculty } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export const metadata = {
  title: "Our Faculty | TAC",
  description: "Meet the world-class faculty behind The Arete Connoisseurs.",
};

export default function OurFaculty() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">Our Faculty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our bench consists of global healthcare quality standards contributors and veteran operators of national verification platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {faculty.map(member => (
            <div key={member.id} className="flex flex-col items-center text-center group">
              <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 shadow-xl border-4 border-white group-hover:border-primary/20 transition-colors">
                <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h2 className="text-3xl font-bold font-serif text-neutral-dark mb-2 group-hover:text-primary transition-colors">{member.name}</h2>
              <h3 className="text-lg font-semibold text-accent mb-4">{member.role}</h3>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-neutral-light p-12 rounded-2xl text-center border border-gray-100">
          <Star className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-2xl font-bold font-serif text-neutral-dark mb-4">Want to engage our faculty?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you need strategic advisory, standards development, or assessor training, our faculty is ready to support your organization's quality journey.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-dark transition-colors">
            Start a conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

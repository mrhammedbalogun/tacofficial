import { engagements } from "@/lib/data";
import Image from "next/image";

export const metadata = {
  title: "Our Work | TAC",
  description: "Evidence of our impact across the African healthcare ecosystem.",
};

export default function OurWork() {
  return (
    <div className="py-24 bg-neutral-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Proven delivery at scale. See how we've helped institutions and regulators across Africa achieve global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagements.map(engagement => (
            <div id={engagement.id} key={engagement.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <div className="relative h-64 overflow-hidden">
                <Image src={engagement.image} alt={engagement.client} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  Completed
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {engagement.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded-sm">{tag}</span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-neutral-dark mb-2">{engagement.client}</h2>
                <h3 className="text-lg font-medium text-gray-800 mb-4">{engagement.title}</h3>
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <span className="block text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Outcome</span>
                  <p className="text-gray-700 font-medium">{engagement.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

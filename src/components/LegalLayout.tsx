import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function LegalLayout({
  title,
  lastUpdated,
  intro,
  children,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-neutral-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">{title}</h1>
          <p className="text-sm text-gray-400">Last updated: {lastUpdated}</p>
          <p className="text-gray-300 mt-5 leading-relaxed">{intro}</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 [&_h2]:text-xl [&_h2]:font-serif [&_h2]:font-bold [&_h2]:text-neutral-dark [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-gray-700 [&_li]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline">
        {children}
      </div>
    </div>
  );
}

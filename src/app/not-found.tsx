import Link from "next/link";
import { Home } from "lucide-react";

export const metadata = {
  title: "Page Not Found | TAC",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-neutral-light px-4">
      <div className="text-center max-w-xl">
        <p className="text-7xl md:text-8xl font-serif font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-neutral-dark mb-4">
          This page could not be found
        </h1>
        <p className="text-gray-600 mb-10">
          The page you&rsquo;re looking for may have moved, or never existed. Let&rsquo;s get you back to solid ground.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors">
            <Home className="w-5 h-5" /> Back to home
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-neutral-dark px-6 py-3 rounded-md font-semibold hover:border-primary/40 transition-colors">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

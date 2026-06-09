import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 overflow-hidden rounded-md bg-white">
                <Image src="/favicon.png" alt="TAC Logo" fill className="object-contain" />
              </div>
              <span className="font-serif font-bold text-xl text-white">
                The Arete Connoisseurs
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-md mt-4">
              Africa's accreditation infrastructure partner - standards, systems, and surveyors for the regulators and institutions shaping healthcare quality.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/what-we-do" className="hover:text-accent transition-colors">What We Do</Link></li>
              <li><Link href="/who-we-serve" className="hover:text-accent transition-colors">Who We Serve</Link></li>
              <li><Link href="/our-work" className="hover:text-accent transition-colors">Our Work</Link></li>
              <li><Link href="/our-faculty" className="hover:text-accent transition-colors">Our Faculty</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-accent transition-colors">Get in touch</Link></li>
              <li className="mt-4">
                <a href="/contact" className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium transition-colors">
                  Request Capability Statement
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Arete Connoisseurs. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

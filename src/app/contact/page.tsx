import { Mail, MapPin, Phone } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>
    </svg>
  );
}
import { services } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | TAC",
  description: "Tell us about the accreditation, quality, or systems challenge you are working on. We respond within two business days.",
};

export default function Contact() {
  return (
    <div className="py-24 bg-neutral-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-dark mb-6">Start a conversation</h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Tell us about the accreditation, quality, or systems challenge you are working on. We will respond within two business days.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0"><MapPin className="w-5 h-5" /></div>
                <div><h3 className="font-bold text-neutral-dark mb-1">Office Address</h3><p className="text-gray-600">Lagos, Nigeria</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0"><Mail className="w-5 h-5" /></div>
                <div><h3 className="font-bold text-neutral-dark mb-1">Email</h3><p className="text-gray-600">hello@theareteconnoisseurs.org</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0"><Phone className="w-5 h-5" /></div>
                <div><h3 className="font-bold text-neutral-dark mb-1">Phone</h3><p className="text-gray-600">Available on request</p></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0"><LinkedinIcon className="w-5 h-5" /></div>
                <div><h3 className="font-bold text-neutral-dark mb-1">LinkedIn</h3><p className="text-gray-600">The Arete Connoisseurs</p></div>
              </div>
            </div>
          </div>

          <ContactForm serviceOptions={services.map((s) => s.title)} />
        </div>
      </div>
    </div>
  );
}

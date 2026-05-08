import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | TAC",
  description: "Get in touch with The Arete Connoisseurs.",
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
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-dark mb-1">Office Address</h3>
                  <p className="text-gray-600">Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-dark mb-1">Email</h3>
                  <p className="text-gray-600">hello@theareteconnoisseurs.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Jane Doe" required />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                  <input type="text" id="role" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Quality Director" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input type="text" id="organization" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Institution Name" required />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                  <input type="text" id="country" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Nigeria" required />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                <select id="inquiryType" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white" required>
                  <option value="">Select an option</option>
                  <option value="regulator">Regulator</option>
                  <option value="institution">Institution</option>
                  <option value="partner">Development Partner</option>
                  <option value="media">Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">Brief description of the opportunity</label>
                <textarea id="description" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="How can we help?" required></textarea>
              </div>

              <button type="button" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-md transition-colors shadow-sm">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const CONTACT_EMAIL = "hello@theareteconnoisseurs.org";
const ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export default function ContactForm({ serviceOptions }: { serviceOptions: string[] }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (s: string) =>
    setServices((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = {
      _subject: "New inquiry — TAC website",
      _template: "table",
      services: services.join(", "),
    };
    data.forEach((v, k) => (payload[k] = String(v)));

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setServices([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center min-h-[400px] justify-center">
        <CheckCircle2 className="w-14 h-14 text-primary mb-5" />
        <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-3">Thank you — your inquiry is in.</h2>
        <p className="text-gray-600 max-w-sm">We will respond within two business days. For anything urgent, email us directly at {CONTACT_EMAIL}.</p>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input type="text" id="name" name="name" className={inputCls} placeholder="Jane Doe" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input type="email" id="email" name="email" className={inputCls} placeholder="jane@organisation.org" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">Role</label>
          <input type="text" id="role" name="role" className={inputCls} placeholder="Quality Director" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone <span className="text-gray-400">(optional)</span></label>
          <input type="tel" id="phone" name="phone" className={inputCls} placeholder="+234 ..." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
          <input type="text" id="organization" name="organization" className={inputCls} placeholder="Institution Name" required />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <input type="text" id="country" name="country" className={inputCls} placeholder="Nigeria" required />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
          <select id="inquiryType" name="inquiryType" className={`${inputCls} bg-white`} required defaultValue="">
            <option value="" disabled>Select an option</option>
            <option value="Regulator">Regulator</option>
            <option value="Institution">Institution</option>
            <option value="Development Partner">Development Partner</option>
            <option value="Media">Media</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-2">Preferred contact method</label>
          <select id="contactMethod" name="contactMethod" className={`${inputCls} bg-white`} defaultValue="Email">
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-700 mb-3">Services of interest <span className="text-gray-400">(optional)</span></span>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((s) => {
            const active = services.includes(s);
            return (
              <button type="button" key={s} onClick={() => toggleService(s)}
                className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${active ? "bg-primary text-white border-primary" : "bg-white text-gray-700 border-gray-300 hover:border-primary/40"}`}>
                {s}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Brief description of the opportunity</label>
        <textarea id="message" name="message" rows={4} className={`${inputCls} resize-none`} placeholder="How can we help?" required></textarea>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong sending your message. Please try again, or email us directly at {CONTACT_EMAIL}.</p>
      )}

      <button type="submit" disabled={status === "submitting"}
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-md transition-colors shadow-sm disabled:opacity-70 flex items-center justify-center gap-2">
        {status === "submitting" ? (<><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>) : "Submit Inquiry"}
      </button>
    </form>
  );
}

import Link from "next/link";
import { ArrowRight, Globe2, Layers, ShieldCheck, Users } from "lucide-react";

export const metadata = {
  title: "About | TAC",
  description:
    "The Arete Connoisseurs (TAC) is Africa's accreditation infrastructure partner — a specialist faculty building the standards, systems, and surveyors that make healthcare quality measurable.",
};

const beliefs = [
  { icon: Globe2, title: "Global standards, African delivery", text: "We bring international healthcare quality standards — ISO 7101, ISQua, the leading accreditors — and make them work in African operating environments." },
  { icon: Layers, title: "The full accreditation stack", text: "We work at every layer: standards development for regulators, assessor training, digital accreditation systems, and preparedness for institutions." },
  { icon: ShieldCheck, title: "Evidence over assertion", text: "We lead with measurable outcomes and credentialled practitioners — the proof procurement teams are right to demand." },
  { icon: Users, title: "Systems that outlast us", text: "We architect, co-build, and leave behind capability — not dependency. Our work should still be running long after the engagement ends." },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-neutral-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About The Arete Connoisseurs</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            TAC is Africa&rsquo;s accreditation infrastructure partner — a specialist faculty building the standards,
            systems, and surveyors that make healthcare quality measurable and credible across the continent.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-5">Our story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Arete Connoisseurs began as a management consulting firm and has deliberately sharpened its focus to a
              single specialism: accreditation and health quality infrastructure for regulators, accreditation bodies,
              and health institutions across Nigeria and Africa.
            </p>
            <p>
              That repositioning brought together a faculty of senior practitioners — contributors to global healthcare
              quality standards and veteran operators of national verification platforms — under one enhanced TAC brand.
              The result is a bench that pairs international quality credentials with a sustained delivery record on the
              ground.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-5">Our mission</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            To build the standards, systems, and surveyor capability that make healthcare quality measurable,
            auditable, and credible — so that regulators can regulate with confidence and institutions can deliver safe,
            reliable care.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-8">What we believe</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {beliefs.map((b) => (
              <div key={b.title} className="p-6 rounded-xl bg-neutral-light border border-gray-100">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-neutral-dark mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-5">How we work</h2>
          <p className="text-gray-700 leading-relaxed">
            TAC operates as a faculty, convened per engagement, with a core team providing continuity. Senior
            practitioners are brought in where their domain matches the work — so each client gets depth matched to the
            task, not a fixed team stretched to fit. Explore the people behind the work on{" "}
            <Link href="/our-faculty" className="text-primary underline">our faculty</Link> page.
          </p>
        </section>

        <section className="bg-neutral-light rounded-2xl p-10 text-center border border-gray-100">
          <h2 className="text-2xl font-serif font-bold text-neutral-dark mb-4">Work with TAC</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-7">
            Tell us about the accreditation, quality, or systems challenge you are working on. We respond within two
            business days.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-dark transition-colors">
            Start a conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </div>
    </div>
  );
}

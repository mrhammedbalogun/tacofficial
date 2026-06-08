// CMS placeholder data

export const services = [
  {
    id: "standards-development",
    title: "Accreditation Standards Development",
    slug: "accreditation-standards-development",
    summary: "Context-aware quality standards for regulators and ministries of health.",
    icon: "ClipboardCheck",
  },
  {
    id: "eams",
    title: "Electronic Accreditation Management Systems (eAMS)",
    slug: "electronic-accreditation-management-systems",
    summary: "Digital platforms for managing the end-to-end accreditation lifecycle.",
    icon: "MonitorCheck",
  },
  {
    id: "assessor-training",
    title: "Assessor & Surveyor Training",
    slug: "assessor-and-surveyor-training",
    summary: "Rigorous training programs for healthcare quality assessors.",
    icon: "GraduationCap",
  },
  {
    id: "accreditation-preparedness",
    title: "Accreditation Preparedness",
    slug: "accreditation-preparedness",
    summary: "Readiness programs for hospitals pursuing local or JCI accreditation.",
    icon: "Award",
  },
  {
    id: "lms",
    title: "Learning & Performance Management",
    slug: "learning-and-performance-management",
    summary: "Systems to track continuous professional development.",
    icon: "LineChart",
  },
  {
    id: "advisory",
    title: "Advisory & Capacity Building",
    slug: "advisory-capacity-building",
    summary: "Strategic consulting for health quality improvement.",
    icon: "Users",
  }
];

export const sectors = [
  {
    id: "regulators",
    title: "Regulators & Accreditation Bodies",
    slug: "regulators",
  },
  {
    id: "institutions",
    title: "Health Institutions",
    slug: "health-institutions",
  },
  {
    id: "partners",
    title: "Development Partners",
    slug: "development-partners",
  }
];

export type Engagement = {
  id: string;
  slug: string;
  client: string;
  title: string;
  region: string;
  image: string;
  tags: string[];
  outcome: string;
  metrics: string[];
  context: string;
  whatWeDid: string[];
  outcomeDetail: string;
  unlocks: string;
};

export const engagements: Engagement[] = [
  {
    id: "national-eams",
    slug: "national-accreditation-ecosystem",
    client: "A national health-training regulator",
    title: "National Electronic Accreditation Ecosystem",
    region: "West Africa",
    image: "/images/hero_bg.png",
    tags: ["eAMS", "Regulators"],
    outcome: "600+ training institutions brought under consistent, auditable oversight.",
    metrics: ["600+ institutions overseen", "500+ tutors networked"],
    context:
      "A national regulator needed to bring hundreds of pre-service health training institutions under one consistent, auditable accreditation process \u2014 replacing fragmented, paper-based oversight that could not scale or be defended.",
    whatWeDid: [
      "Designed and deployed a role-based electronic accreditation management system (eAMS) covering the full accreditation lifecycle",
      "Built a companion mobile application so surveyors could work in the field, including where connectivity is unreliable",
      "Revised accreditation standards and embedded them into the platform's assessment workflow",
      "Established a parallel professional-learning network for the institutions' tutor workforce",
    ],
    outcomeDetail:
      "More than 600 institutions were brought under a single, auditable oversight regime, and over 500 tutors were connected through the professional-learning network \u2014 turning scattered, manual processes into a defensible national system.",
    unlocks:
      "Any regulator overseeing many institutions can move from manual, inconsistent review to a digital, auditable accreditation programme \u2014 with the standards, the platform, and the assessor capability built to reinforce one another.",
  },
  {
    id: "national-cpd",
    slug: "national-cpd-programme",
    client: "A donor-funded health workforce programme",
    title: "National Continuing-Education Programme \u2014 Healthcare Workforce",
    region: "West Africa",
    image: "/images/case_study_hospital.png",
    tags: ["Learning & Performance", "Development Partners"],
    outcome: "500,000+ healthcare workers reached through national CPD infrastructure.",
    metrics: ["500,000+ workers reached", "Multiple jurisdictions"],
    context:
      "A donor-funded programme set out to raise the baseline competency of a national healthcare workforce \u2014 at a scale and consistency rarely achieved in workforce-development work.",
    whatWeDid: [
      "Designed national continuing professional development (CPD) infrastructure and delivery model",
      "Developed and deployed learning and certification systems built for real operating conditions",
      "Aligned the programme with revised accreditation standards so learning translated into practice",
      "Brought monitoring-and-evaluation rigour and donor-reporting fluency to delivery",
    ],
    outcomeDetail:
      "The programme reached more than 500,000 healthcare workers across multiple jurisdictions, raising workforce competency at a scale rarely achieved in workforce-development programmes.",
    unlocks:
      "Development partners can deliver workforce capability that is measurable, audit-ready, and durable \u2014 not a one-off training event, but standing CPD infrastructure.",
  },
  {
    id: "regional-quality-cert",
    slug: "regional-quality-certification",
    client: "A regional health quality certification programme",
    title: "Regional Health Quality Certification Programme",
    region: "Sub-Saharan Africa",
    image: "/images/case_study_hospital.png",
    tags: ["Standards Development", "Health Institutions"],
    outcome: "2,000,000+ lives reached; 50+ facilities certified.",
    metrics: ["2,000,000+ lives reached", "50+ facilities certified"],
    context:
      "A regional initiative aimed to lift and certify quality across dozens of facilities while materially expanding care coverage in underserved areas.",
    whatWeDid: [
      "Implemented a region-wide quality certification model across 50+ facilities",
      "Paired certification with a community-reach approach that expanded coverage",
      "Embedded quality standards and improvement methods into routine facility practice",
    ],
    outcomeDetail:
      "Quality certification was achieved across more than 50 facilities, and the paired community-reach model contributed to improved care for over two million people.",
    unlocks:
      "Health systems and institutions can pursue quality certification in a way that also widens access \u2014 quality and reach advancing together rather than competing.",
  },
  {
    id: "jci-prep",
    slug: "jci-accreditation-preparedness",
    client: "A leading tertiary hospital",
    title: "JCI Accreditation Preparedness",
    region: "Nigeria",
    image: "/images/case_study_hospital.png",
    tags: ["Accreditation Preparedness", "Health Institutions"],
    outcome: "Achieved and maintained Joint Commission International accreditation.",
    metrics: ["JCI accreditation achieved", "Sustained compliance"],
    context:
      "A leading tertiary hospital pursued Joint Commission International (JCI) accreditation \u2014 one of the most demanding international standards \u2014 and needed to be genuinely ready, not just hopeful.",
    whatWeDid: [
      "Ran a baseline gap assessment against the JCI standard",
      "Delivered quality-improvement coaching and patient-safety programme development across clinical and non-clinical teams",
      "Directed root-cause-analysis investigations and built a culture of incident reporting and learning",
      "Conducted mock surveys and rigorous compliance management ahead of the formal survey",
    ],
    outcomeDetail:
      "The hospital achieved and maintained Joint Commission International accreditation \u2014 evidence of accreditation readiness translated into a sustained operating discipline.",
    unlocks:
      "Hospitals can approach JCI or local accreditation as a programme that leaves durable patient-safety systems behind, not a one-off scramble for a certificate.",
  },
];

export const faculty = [
  {
    id: "emmanuel",
    name: "Emmanuel [Surname]",
    role: "Founder & Health Quality Leader",
    bio: "Emmanuel is a global healthcare quality standard advocate, contributing to ISO 7101 and leading health quality engineering systems.",
    image: "/images/faculty_male.png",
  },
  {
    id: "fatima",
    name: "Fatima [Surname]",
    role: "Director of Quality Systems",
    bio: "Fatima leads the operational implementation of accreditation infrastructure across various states.",
    image: "/images/faculty_female.png",
  }
];

// CMS placeholder data

export type Service = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  icon: string;
  whatItMeans: string;
  whoFor: string[];
  howWeDeliver: string[];
  waysToEngage: string[];
};

export const services: Service[] = [
  {
    id: "standards-development",
    title: "Accreditation Standards Development",
    slug: "accreditation-standards-development",
    summary: "Context-aware quality standards for regulators and ministries of health.",
    icon: "ClipboardCheck",
    whatItMeans:
      "We help regulators and accreditation bodies write the standards a health system is measured against \u2014 turning policy intent into clear, assessable, context-appropriate requirements.",
    whoFor: ["National and state regulators", "Accreditation bodies", "Professional councils"],
    howWeDeliver: [
      "Ground standards in international references (ISO 7101, ISQua, JCI) adapted to local operating realities",
      "Draft assessable criteria with clear evidence requirements and scoring",
      "Run multi-stakeholder validation so standards are owned, not imposed",
      "Revise and version standards as programmes mature",
    ],
    waysToEngage: ["Project: develop or revise a standards set end-to-end", "Advisory: technical review of existing standards", "Retainer: ongoing standards stewardship"],
  },
  {
    id: "eams",
    title: "Electronic Accreditation Management Systems (eAMS)",
    slug: "electronic-accreditation-management-systems",
    summary: "Digital platforms for managing the end-to-end accreditation lifecycle.",
    icon: "MonitorCheck",
    whatItMeans:
      "We design, build, and run the electronic accreditation management systems that make an accreditation programme auditable at scale \u2014 the web portal, the surveyor\u2019s mobile companion, and the data behind both.",
    whoFor: ["Regulators running accreditation at scale", "Accreditation bodies digitising paper processes", "Professional regulators managing assessor workflows"],
    howWeDeliver: [
      "Role-based web platform covering the full accreditation lifecycle",
      "Companion mobile application for surveyors working in the field",
      "Built for real operating conditions, not just demos \u2014 resilient where connectivity is patchy",
      "Dashboards and audit trails that make oversight defensible",
    ],
    waysToEngage: ["Project: design and deploy a new eAMS", "Build-and-operate: we run it while your team ramps up", "Advisory: architecture and procurement review"],
  },
  {
    id: "assessor-training",
    title: "Assessor & Surveyor Training",
    slug: "assessor-and-surveyor-training",
    summary: "Rigorous training programs for healthcare quality assessors.",
    icon: "GraduationCap",
    whatItMeans:
      "We train and certify the assessors and surveyors who carry standards into the field \u2014 so judgments are consistent, defensible, and fair across an entire programme.",
    whoFor: ["Regulators building an assessor corps", "Accreditation bodies standardising survey quality", "Institutions developing internal auditors"],
    howWeDeliver: [
      "Structured curricula grounded in the standards being assessed",
      "Mentored assessment and calibration so scoring is consistent between surveyors",
      "Train-the-trainer models that build local faculty",
      "Practical, workshop-based delivery across multiple cities",
    ],
    waysToEngage: ["Project: design and run an assessor training and certification programme", "Workshops: targeted skills sessions", "Retainer: ongoing assessor development and recertification"],
  },
  {
    id: "accreditation-preparedness",
    title: "Accreditation Preparedness",
    slug: "accreditation-preparedness",
    summary: "Readiness programs for hospitals pursuing local or JCI accreditation.",
    icon: "Award",
    whatItMeans:
      "We bring hospitals and health institutions through accreditation readiness \u2014 quality-improvement coaching, mock surveys, and the operating discipline that turns a survey from an event into a standard of practice.",
    whoFor: ["Hospital groups and tertiary institutions", "Quality directors and executives", "Institutions pursuing JCI or local accreditation"],
    howWeDeliver: [
      "Baseline gap assessment against the target standard",
      "Quality-improvement coaching for clinical and non-clinical teams",
      "Mock surveys that rehearse the real thing",
      "Readiness packages that leave durable systems behind",
    ],
    waysToEngage: ["Project: end-to-end accreditation preparedness", "Mock survey: a focused readiness check", "Advisory: quality-improvement coaching retainer"],
  },
  {
    id: "lms",
    title: "Learning & Performance Management",
    slug: "learning-and-performance-management",
    summary: "Systems to track continuous professional development.",
    icon: "LineChart",
    whatItMeans:
      "We build the learning and performance systems that keep a health workforce competent over time \u2014 tracking continuing professional development and turning training into measurable practice change.",
    whoFor: ["Regulators mandating CPD", "Training institutions", "Development partners running workforce programmes"],
    howWeDeliver: [
      "Learning management platforms designed for the contexts they serve",
      "CPD tracking and certification",
      "Blended and online programme design",
      "Reporting that connects learning to outcomes",
    ],
    waysToEngage: ["Project: design and deploy an LMS/CPD platform", "Programme design: curriculum and delivery model", "Advisory: CPD strategy"],
  },
  {
    id: "advisory",
    title: "Advisory & Capacity Building",
    slug: "advisory-capacity-building",
    summary: "Strategic consulting for health quality improvement.",
    icon: "Users",
    whatItMeans:
      "We provide strategic advisory and capacity building for organisations on a quality journey \u2014 from accreditation strategy to monitoring and evaluation to digital-health planning.",
    whoFor: ["Regulators and ministries of health", "Hospital leadership", "Development partners"],
    howWeDeliver: [
      "Senior practitioners who have done the work, not just advised on it",
      "Strategy grounded in what is implementable",
      "Monitoring-and-evaluation rigour and results-framework alignment",
      "Capacity building that transfers skills to your team",
    ],
    waysToEngage: ["Advisory: strategic engagements and reviews", "Retainer: ongoing advisory partnership", "Project: scoped capacity-building initiatives"],
  },
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

export const engagements = [
  {
    id: "iwosan",
    client: "Iwosan Lagoon Hospital",
    title: "JCI Accreditation Preparedness",
    image: "/images/case_study_hospital.png",
    outcome: "Successfully achieved JCI accreditation readiness.",
    tags: ["Accreditation Preparedness", "Health Institutions"]
  },
  {
    id: "hefamaa",
    client: "HEFAMAA",
    title: "Standards Work & Assessor Training",
    image: "/images/hero_bg.png",
    outcome: "Trained 300+ quality officers and assessors.",
    tags: ["Assessor Training", "Regulators"]
  },
  {
    id: "sqhn",
    client: "SQHN",
    title: "Quality Standard Delivery",
    image: "/images/case_study_hospital.png",
    outcome: "Implemented nationwide quality standards.",
    tags: ["Standards Development", "Development Partners"]
  }
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

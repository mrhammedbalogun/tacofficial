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

export type Sector = {
  id: string;
  title: string;
  slug: string;
  tag: string;
  image: string;
  intro: string;
  approach: string;
  serviceIds: string[];
  partnership: string;
};

export const sectors: Sector[] = [
  {
    id: "regulators",
    title: "Regulators & Accreditation Bodies",
    slug: "regulators",
    tag: "Regulators",
    image: "/images/hero_bg.png",
    intro:
      "If you are a regulator or accreditation body, you are responsible for the standards an entire health system is measured against \u2014 and for proving, credibly, that those standards are applied consistently. That is exacting work, and the tools to do it well are rarely available off the shelf.",
    approach:
      "TAC supports regulators across the full accreditation stack: developing context-aware standards, building the electronic accreditation management systems (eAMS) that make programmes auditable at scale, and training the assessors and surveyors who carry the standards into the field. Our faculty includes contributors to ISO 7101, ISQua Experts, and members of the International Academy of Quality and Safety \u2014 global credentials applied to African regulatory realities.",
    serviceIds: ["standards-development", "eams", "assessor-training"],
    partnership:
      "We work best with regulators ready to invest in systems that outlast a single accreditation cycle \u2014 where standards, digital infrastructure, and assessor capability are built to reinforce one another.",
  },
  {
    id: "institutions",
    title: "Health Institutions",
    slug: "health-institutions",
    tag: "Health Institutions",
    image: "/images/case_study_hospital.png",
    intro:
      "If you lead a hospital or health institution, accreditation is not a certificate on the wall \u2014 it is the operating discipline that keeps patients safe and teams aligned. Preparing for it, and sustaining it, is a programme, not an event.",
    approach:
      "TAC brings institutions through accreditation readiness with quality-improvement coaching, mock surveys, and preparedness packages \u2014 including JCI-level preparedness, where our faculty has supported a leading Nigerian hospital to readiness. We speak the language of hospital executives and quality directors because our faculty has held those roles.",
    serviceIds: ["accreditation-preparedness", "lms", "advisory"],
    partnership:
      "We partner with institutions that treat quality as a leadership priority, not a compliance chore \u2014 and want frameworks their teams will still be using long after the survey.",
  },
  {
    id: "partners",
    title: "Development Partners",
    slug: "development-partners",
    tag: "Development Partners",
    image: "/images/case_study_hospital.png",
    intro:
      "If you are a development partner, you need implementing teams who deliver measurable results and report them with the rigour your funders expect \u2014 across complex, multi-jurisdiction programmes.",
    approach:
      "TAC\u2019s faculty brings a sustained track record on donor-funded health programmes \u2014 including technical leadership touching more than 600 pre-service health training institutions, national CPD infrastructure, and pan-African quality and patient-safety delivery. We bring monitoring-and-evaluation rigour, results-framework alignment, and donor-reporting fluency to every engagement.",
    serviceIds: ["assessor-training", "lms", "advisory"],
    partnership:
      "We work well with partners who value depth over breadth \u2014 senior practitioners who have implemented at scale, with the compliance discipline that audit-ready, multi-year programmes demand.",
  },
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

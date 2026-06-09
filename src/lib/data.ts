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

export type FacultyExperience = { lead: string; text: string };

export type Faculty = {
  id: string;
  slug: string;
  name: string;
  role: string;
  location: string;
  image: string;
  summary: string;
  signalCredentials: string[];
  profile: string[];
  roleAtTac: string[];
  experience: FacultyExperience[];
  credentials: string[];
  publications?: string[];
  beyond?: string;
  contribution: string;
};

export const faculty: Faculty[] = [
  {
    id: "ayodeji-samuels",
    slug: "ayodeji-emmanuel-samuels",
    name: "Ayodeji Emmanuel Samuels",
    role: "Senior Partner \u2014 Global Standards & Accreditation",
    location: "Calgary, Canada \u00b7 working across Canada, Nigeria & sub-Saharan Africa",
    image: "/images/faculty/ayodeji.jpg",
    summary:
      "Healthcare quality and accreditation specialist working at the intersection of regulatory policy, institutional accreditation, and digital health infrastructure.",
    signalCredentials: ["ISO 7101 Contributor", "ISQua Expert", "PMP", "Lean Six Sigma Black Belt"],
    profile: [
      "Ayodeji Emmanuel Samuels is a healthcare quality and accreditation specialist whose work sits at the intersection of regulatory policy, institutional accreditation, and digital health infrastructure across Nigeria, sub-Saharan Africa, and North America. He anchors TAC\u2019s Global Standards and Accreditation practice, combining a healthcare quality background with the engineering literacy to specify, commission, and govern the digital systems modern accreditation programmes depend on.",
      "His career has been defined by a single preoccupation: translating global healthcare quality standards into systems that work in African operating environments. He has contributed to accreditation standards development for national regulators, led the design and operation of electronic accreditation management platforms, and supported assessor and surveyor training programmes that have reached hundreds of quality professionals.",
    ],
    roleAtTac: [
      "As Senior Partner, Ayodeji co-leads TAC\u2019s positioning as Africa\u2019s accreditation infrastructure partner \u2014 the firm that delivers standards, systems, and surveyors to the regulators and institutions shaping healthcare quality on the continent. He provides strategic and technical direction across TAC\u2019s specialist lines of work: accreditation standards development, electronic accreditation management systems (eAMS), assessor and surveyor training, and accreditation preparedness for health institutions.",
      "Within TAC\u2019s faculty model, he is the lead partner on engagements that require the integration of global standards with locally adapted delivery, and the technical anchor on the firm\u2019s eAMS portfolio.",
    ],
    experience: [
      { lead: "Founder & Chief Executive, Ruavira Collective Inc. (Calgary, Canada)", text: "directs an international healthcare quality consultancy supporting regulators, hospital groups, and development partners on accreditation, quality improvement, and digital health systems." },
      { lead: "National-scale eAMS leadership", text: "product owner and technical lead on electronic accreditation management systems \u2014 including a live eAMS supporting a national healthcare accreditation body, comprising a web portal and a mobile surveyor companion application, and a second eAMS in development for a national professional regulator." },
      { lead: "Donor-funded national health workforce programmes", text: "led technical work touching more than 600 pre-service health training institutions across Nigeria, including revisions to accreditation standards adopted by national regulators of medical and nursing education." },
      { lead: "Accreditation standards & assessor training", text: "contributor to acute-care hospital accreditation standards for a state-level regulator, a national standards guidebook revision, and a flagship national certificate course in quality and patient safety; faculty contributions to the training of more than 300 assessors and quality officers." },
      { lead: "Pan-African instructional design", text: "designed and delivered virtual training on quality and patient safety in primary healthcare for frontline health workers across multiple African countries." },
    ],
    credentials: [
      "Contributor to ISO 7101 \u2014 the international standard for healthcare organisation quality management systems",
      "ISQua Expert, International Society for Quality in Healthcare",
      "Project Management Professional (PMP)",
      "Lean Six Sigma Black Belt",
      "Specialised credentials in healthcare quality management and patient safety",
    ],
    contribution:
      "Ayodeji\u2019s distinctive contribution is the rare combination of three capabilities in a single partner: fluency in global accreditation standards and how they are interpreted by ISQua, ISO, and the leading international accreditors; sustained experience supporting institutions through accreditation cycles; and the engineering depth to specify, commission, and govern the digital systems that make accreditation programmes auditable at scale.",
  },
  {
    id: "mariam-bashir",
    slug: "mariam-bashir",
    name: "Dr. Mariam A. Bashir",
    role: "Partner \u2014 Clinical Standards & Quality of Care",
    location: "Lagos, Nigeria",
    image: "/images/faculty/mariam.jpg",
    summary:
      "Consultant Clinical and Radiation Oncologist who brings frontline clinical credibility to TAC\u2019s standards, quality, and assessor-training work.",
    signalCredentials: ["FWACS", "FMCR", "MBBS", "Antimicrobial Stewardship"],
    profile: [
      "Dr. Mariam A. Bashir is a Consultant Clinical and Radiation Oncologist whose work sits where clinical excellence, multidisciplinary coordination, and patient safety meet \u2014 the daily reality of delivering complex, high-stakes cancer care. A Fellow of the West African College of Surgeons and of the Medical College of Radiology (Radiation and Clinical Oncology), she has practised at the front line of one of medicine\u2019s most exacting specialities, where the margin for error is small and the discipline of standards is not optional but lifesaving.",
      "She partners with The Arete Connoisseurs as the firm\u2019s clinical anchor \u2014 bringing the voice of the practising specialist into TAC\u2019s standards, quality, and training work. Her career has been defined by translating evidence into reliable, protocol-driven care: building clinical services from the ground up, developing the guidelines and stewardship frameworks that protect patients, and mentoring the next generation of specialists.",
    ],
    roleAtTac: [
      "As Partner, Dr. Bashir ensures that the standards, assessor training, and quality-improvement frameworks TAC delivers to regulators and institutions are clinically sound and implementable at the bedside \u2014 not just defensible on paper. Accreditation systems succeed or fail on whether frontline clinicians can actually work with them; her contribution is to keep TAC\u2019s work grounded in that test.",
      "Within TAC\u2019s faculty model, she anchors the firm\u2019s clinical standards and quality-of-care perspective, with particular depth in cancer care service design, multidisciplinary team working, clinical guideline development, and antimicrobial stewardship.",
    ],
    experience: [
      { lead: "Consultant Clinical & Radiation Oncologist", text: "Currently at Lagos University Teaching Hospital (LUTH) / MedServe LUTH Cancer Centre, managing head & neck, breast, and pelvic malignancies and sarcomas; previously at General Hospital, Ikorodu, where she helped to establish a new oncology department \u2014 from service model through to patient-management protocols." },
      { lead: "Clinical leadership as Chief Resident", text: "led a team of 9\u201310 residents \u2014 organising supervision rotas and driving exam-focused training, drills, and mentorship across a radiation and clinical oncology department." },
      { lead: "Clinical guideline development & patient safety", text: "member of the LUTH Antimicrobial Stewardship Committee and contributor to the LUTH antibiotic guideline, including provisions specific to cancer patients \u2014 hands-on clinical-governance and patient-safety standard-setting." },
      { lead: "Multidisciplinary cancer care", text: "routine tumour-board participation and the contouring and review of Three-Dimensional Conformal Radiation Therapy (3D-CRT), Intensity-Modulated Radiation Therapy (IMRT), and Volumetric Modulated Arc Therapy (VMAT) radiotherapy plans \u2014 coordinated, protocolised, peer-reviewed practice." },
      { lead: "Research & academic leadership", text: "chaired the LUTH Association of Resident Doctors (ARD-LUTH) Research & Medical Committee and authored multiple peer-reviewed oncology publications, with sustained work in research conception, data management, and manuscript writing." },
    ],
    credentials: [
      "Fellow, West African College of Surgeons \u2014 Radiation and Clinical Oncology (FWACS)",
      "Fellow, Medical College of Radiology \u2014 Radiation and Clinical Oncology (FMCR)",
      "MBBS, College of Medicine, University of Lagos",
      "Best Graduating Student, Radiation and Clinical Oncology, NPMCN Part II examinations",
      "Member, LUTH Antimicrobial Stewardship Committee",
      "Member, Scientific Committee, Association of Radiation and Clinical Oncologists of Nigeria (ARCON)",
    ],
    publications: [
      "Aje E.A, Sowunmi A, Alabi A, \u2026 Bashir M.A, et al. Vitamin D receptor polymorphism and its relevance in prostate and colon cancer patients. J Radiat Cancer Res, 2025.",
      "Onyeodi IA, Fagbenro GT, Bashir MA, Awofeso OM, Joseph AO. The path to becoming a clinical or radiation oncologist in Nigeria. ecancermedicalscience, 2022.",
      "Adeniji AA, Dawodu OO, Habeebu MY, Oyekan AO, Bashir MA, et al. Distribution of Breast Cancer Subtypes Among Nigerian Women. World J Oncol, 2020.",
    ],
    contribution:
      "Dr. Bashir\u2019s distinctive contribution is the credibility of a practising consultant who has both delivered complex, high-stakes care and built the systems that support it \u2014 clinical guidelines, antimicrobial stewardship, outcome data, and specialist training. For TAC\u2019s regulator and institution clients, she is the assurance that quality standards and accreditation frameworks are clinically valid and workable where care is actually given.",
  },
  {
    id: "shakira-bashir",
    slug: "shakira-bashir",
    name: "Shakira Bashir",
    role: "Faculty Lead \u2014 Quality Management & Patient Safety",
    location: "Abuja, Nigeria",
    image: "/images/faculty/shakira.jpg",
    summary:
      "Public health practitioner and healthcare quality architect specialising in patient safety, accreditation readiness, and quality systems.",
    signalCredentials: ["CPHQ", "CPPS", "PMP", "B.Pharm"],
    profile: [
      "Shakira Bashir is a public health practitioner and healthcare quality architect with deep experience making health systems work better. A pharmacist by training, with triple certification in project management, healthcare quality, and patient safety, she brings a rare mix of clinical depth and systems thinking to complex problems across supply-chain management, quality management, process improvement, and accreditation readiness.",
      "She works with individuals, teams, and organisations across sectors to design solutions that are practical, context-sensitive, and built to last. A skilled facilitator, copywriter, and sought-after speaker, she translates complexity into clarity and designs capacity-building experiences that deliver real, measurable impact.",
    ],
    roleAtTac: [
      "Shakira anchors TAC\u2019s quality-improvement and patient-safety practice. She supports the development of comprehensive patient-safety programmes and quality-improvement initiatives across client organisations, leads multidisciplinary teams of quality specialists and patient-safety officers, and directs root-cause-analysis investigations that turn incidents into durable preventive action.",
      "Her work spans the full accreditation arc TAC is built around: developing evidence-based safety protocols and quality standards aligned to international best practice, leading internal audits and inspections, reporting quality and patient-safety performance at board level, and supporting healthcare accreditation bodies in standards development and review.",
    ],
    experience: [
      { lead: "Quality Management & Patient Safety, The Arete Connoisseurs", text: "designs and implements patient-safety and QI programmes, leads RCA investigations and preventive-action planning, runs internal audits, and reports quality and patient-safety performance to boards." },
      { lead: "JCI accreditation delivery", text: "a key player in achieving and maintaining Joint Commission International accreditation for a leading tertiary hospital through rigorous compliance management and evidence-based standard implementation." },
      { lead: "Quality Improvement / Patient Safety consulting", text: "led clinical-audit and quality-enhancement programmes across multiple healthcare facilities; developed and monitored compliance with clinical guidelines and standards; and trained staff at every organisational level." },
      { lead: "Pharmacy & supply-chain, public-health programmes", text: "built documentation systems for regulatory compliance and supported the transition of 6,200+ patients to updated treatment regimens across 24 sites; established pharmacovigilance committees across 20+ facilities." },
      { lead: "Facilitation, training & communication", text: "a sought-after facilitator and speaker who designs capacity-building experiences and translates complex quality and safety concepts into clear, practical learning \u2014 directly relevant to TAC\u2019s assessor and surveyor training." },
    ],
    credentials: [
      "Certified Professional in Patient Safety (CPPS) \u2014 Certification Board for Professionals in Patient Safety",
      "Certified Professional in Healthcare Quality (CPHQ) \u2014 National Association for Healthcare Quality",
      "Project Management Professional (PMP) \u2014 Project Management Institute",
      "Bachelor of Pharmacy (B.Pharm) \u2014 University of Lagos",
      "Foundations of Healthcare Quality Management (World Bank Group); Lean & Improvement Fundamentals (NHS England); IHI Open School certifications",
    ],
    beyond:
      "A committed mental-health advocate, Shakira has led community initiatives advancing mental-health awareness. A lifelong learner with a love for the arts, she finds equal inspiration in literature, writing, nature photography, and music.",
    contribution:
      "Shakira\u2019s distinctive contribution is the rare combination of pharmaceutical and supply-chain depth, certified quality-and-patient-safety practice, and project-management discipline \u2014 applied to the decisive work of making safe, compliant care reproducible. For TAC\u2019s clients she is the practitioner who can stand up a patient-safety programme, drive an organisation through JCI-level accreditation, and leave behind a culture of continuous improvement that outlasts the engagement.",
  },
];

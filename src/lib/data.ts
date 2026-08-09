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

export type Sector = {
  id: string;
  title: string;
  slug: string;
  tag: string;
  icon: string;
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
    icon: "Landmark",
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
    icon: "Building2",
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
    icon: "Globe2",
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

export type Engagement = {
  id: string;
  slug: string;
  client: string;
  title: string;
  region: string;
  icon: string;
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
    icon: "MonitorCheck",
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
    icon: "LineChart",
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
    icon: "Award",
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
    icon: "ClipboardCheck",
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
      "Shakira Bashir is a public health practitioner and healthcare quality architect with over a decade of experience making health systems work better. A pharmacist by training, with triple certification in project management, healthcare quality, and patient safety, she brings a rare mix of clinical depth and systems thinking to complex problems across supply chain management, quality management, process improvement, and accreditation readiness.",
      "She works with individuals, teams, and organisations across sectors to design solutions that are practical, context-sensitive, and built to last. A skilled facilitator, copywriter, and sought-after speaker, she translates complexity into clarity and designs capacity-building experiences that deliver real, measurable impact.",
    ],
    roleAtTac: [
      "Shakira has served as Quality Management and Patient Safety lead at The Arete Connoisseurs, where she anchors the firm\u2019s quality improvement and patient safety practice. She supports the development of comprehensive patient safety programmes and quality improvement initiatives across client organisations, leads multidisciplinary teams of quality specialists and patient safety officers, and directs root cause analysis investigations that turn incidents into durable preventive action.",
      "Her work spans the full accreditation arc TAC is built around: developing evidence-based safety protocols and quality standards aligned with international best practice, leading internal audits and inspections, providing strategic quality and patient safety updates at Board level, and supporting healthcare accreditation bodies in standards development and review. She was a key contributor to achieving and maintaining Joint Commission International (JCI) accreditation for a leading tertiary hospital \u2014 front-line evidence of TAC\u2019s accreditation-preparedness capability.",
    ],
    experience: [
      { lead: "Quality Management & Patient Safety, The Arete Connoisseurs", text: "designs and implements patient-safety and QI programmes, leads RCA investigations and preventive-action planning, runs internal audits, and reports quality and patient-safety performance to boards." },
      { lead: "JCI accreditation delivery", text: "a key player in achieving and maintaining Joint Commission International accreditation for a leading tertiary hospital through rigorous compliance management and evidence-based standard implementation." },
      { lead: "Lead Associate, Quality Improvement / Patient Safety, Mesites Consulting", text: "led clinical-audit and quality-enhancement programmes across multiple healthcare facilities; developed and monitored compliance with clinical guidelines and standards; trained staff at every organisational level; and coordinated with regulatory bodies during inspections and audits." },
      { lead: "Technical Associate, Pharmacy & Supply Chain, APIN Public Health Initiatives (PEPFAR/CDC-funded)", text: "built documentation systems for regulatory compliance and supported the transition of 6,200+ adult and paediatric patients to updated HIV/AIDS treatment regimens across 24 sites in six months." },
      { lead: "Associate Pharmacy Officer, Howard University Global Initiative Nigeria (SIDHAS / FHI360)", text: "established pharmacovigilance committees across 20+ facilities and helped devolve 1,500+ patients into a community-pharmacy ARV refill programme across 115+ community pharmacies in Lagos State." },
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
      "Shakira\u2019s distinctive contribution is the rare combination of pharmaceutical and supply-chain depth, certified quality-and-patient-safety practice, and project-management discipline \u2014 applied to the unglamorous, decisive work of making safe, compliant care reproducible. For TAC\u2019s regulator and institutional clients, she is the practitioner who can establish a patient-safety programme, drive an organisation through JCI-level accreditation, and leave behind a culture of incident reporting and continuous improvement that outlasts the engagement.",
  },];

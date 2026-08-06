import { Roadmap } from "../types/roadmap";

export const forensicScientistRoadmap: Roadmap = {
  id: "forensic-scientist",
  title: "Forensic Scientist",
  description: "Analyze physical and digital evidence to support criminal investigations and legal proceedings.",
  introduction:
    "Forensic science combines analytical chemistry, biology, and criminal justice to solve crimes through physical evidence. Master crime scene investigation, DNA analysis, toxicology, digital forensics, and expert courtroom testimony to become a key contributor to the justice system.",
  icon: "🔬",
  category: "Science",
  difficulty: "Expert",
  estimatedTime: "10-16 months",
  steps: [
    {
      id: "step-1",
      label: "Crime Scene Investigation",
      tool: "Evidence Collection Kits",
      description:
        "Learn to secure, document, and process crime scenes using systematic search patterns and chain-of-custody protocols. Master the collection of biological fluids, trace evidence, firearms residue, and impression evidence while preserving scene integrity. Proper crime scene management is the foundation of every successful forensic investigation, as contaminated or mishandled evidence can derail a case entirely.",
      url: "https://www.nij.gov/topics/law-enforcement/investigations/Pages/crime-scene-investigation.aspx",
    },
    {
      id: "step-2",
      label: "Forensic Biology",
      tool: "PCR / Capillary Electrophoresis",
      description:
        "Extract, quantify, and amplify DNA from blood, saliva, hair follicils, and touch DNA using polymerase chain reaction techniques. Interpret STR profiles and compare them against CODIS databases to identify or exclude suspects with high statistical confidence. Proficiency in biological evidence handling ensures that even trace amounts of genetic material can produce actionable investigative leads.",
      url: "https://www.fbi.gov/about-us/laboratories/biometric-analysis/codis",
    },
    {
      id: "step-3",
      label: "Forensic Chemistry",
      tool: "Gas Chromatography-Mass Spectrometry",
      description:
        "Identify controlled substances, explosives residues, accelerants, and unknown chemical compounds using instrumental analysis methods. Operate GC-MS, FTIR, and HPLC systems to separate, identify, and quantify chemical components in evidence samples with extreme precision. Forensic chemists play a critical role in drug enforcement, arson investigation, and poisoning cases by providing definitive chemical identification.",
      url: "https://www.sciencedirect.com/topics/chemistry/forensic-chemistry",
    },
    {
      id: "step-4",
      label: "Digital Forensics",
      tool: "Autopsy / FTK",
      description:
        "Acquire and examine data from hard drives, mobile phones, cloud accounts, and IoT devices to reconstruct timelines of criminal activity. Use write blockers, forensic imaging, and tools like Autopsy or FTK to recover deleted files, analyze browser history, and extract messaging data. Digital forensics is one of the fastest-growing specialties as nearly every modern crime leaves a digital footprint somewhere in the investigation.",
      url: "https://www.sleuthkit.org/autopsy/",
    },
    {
      id: "step-5",
      label: "Forensic Pathology",
      tool: "Autopsy Suite",
      description:
        "Perform medicolegal autopsies to determine cause and manner of death through external examination, organ dissection, and tissue sampling. Correlate wound patterns, decomposition stages, and internal injuries with scene findings to reconstruct the events leading to death. Forensic pathologists serve as medical examiners whose findings often form the central pillar of homicide and suspicious death investigations.",
      url: "https://www.name-us.org/",
    },
    {
      id: "step-6",
      label: "Toxicology",
      tool: "LC-MS / Immunoassay",
      description:
        "Analyze blood, urine, vitreous humor, and tissue samples to detect drugs, alcohol, poisons, and metabolites that may have contributed to impairment or death. Use immunoassay screening followed by confirmatory LC-MS/MS analysis to quantify substances at therapeutic, recreational, and lethal levels. Toxicological findings are essential in DUI cases, overdose investigations, poisoning deaths, and workplace drug testing programs.",
      url: "https://www.toxicology.org/",
    },
    {
      id: "step-7",
      label: "Questioned Documents",
      tool: "Video Spectral Comparator",
      description:
        "Examine handwriting, signatures, ink composition, and printing methods to detect forgeries, alterations, and counterfeit currency. Use tools like the Video Spectral Comparator and ESDA to analyze indented writing, erasures, and paper authenticity under various light wavelengths. Document examination provides critical evidence in fraud cases, ransom note analysis, and authentication disputes involving wills or contracts.",
      url: "https://www.questioneddocuments.com/",
    },
    {
      id: "step-8",
      label: "Forensic Psychology",
      tool: "Psychological Assessment Tools",
      description:
        "Apply psychological principles to evaluate criminal behavior, competency to stand trial, and the mental state of defendants at the time of an offense. Conduct risk assessments, psychosexual evaluations, and competency hearings that inform judicial decision-making. Forensic psychologists bridge the gap between clinical psychology and the legal system, helping courts understand the mental dimensions of criminal responsibility.",
      url: "https://www.apa.org/topics/forensic-psychology",
    },
    {
      id: "step-9",
      label: "Evidence Processing",
      tool: "Luminol / Alternate Light Sources",
      description:
        "Process latent fingerprints, bloodstain patterns, and biological stains using chemical development techniques such as ninhydrin, cyanoacrylate fuming, and luminol application. Operate alternate light sources and electrostatic detection equipment to reveal evidence invisible to the naked eye. Meticulous evidence processing transforms an empty-looking crime scene into a rich source of probative material that can make or break a prosecution.",
      url: "https://www.nij.gov/topics/evidence/pages/forensic-techniques.aspx",
    },
    {
      id: "step-10",
      label: "Forensic Photography",
      tool: "DSLR / Macro Lens",
      description:
        "Document crime scenes, evidence items, and autopsy findings using high-resolution photography that meets courtroom admissibility standards. Master lighting, composition, macro detail, and scale reference placement to create images that accurately represent spatial relationships and physical characteristics. Forensic photographs serve as a permanent visual record that jurors and attorneys rely upon when evaluating the strength of physical evidence.",
      url: "https://www.theiari.org/",
    },
    {
      id: "step-11",
      label: "Expert Testimony",
      tool: "Courtroom Presentation",
      description:
        "Communicate complex scientific findings clearly and persuasively to judges, attorneys, and juries during direct and cross-examination. Prepare written reports, exhibits, and demonstratives that translate technical analysis into accessible language without oversimplifying or overstating conclusions. Credible expert testimony can establish the weight and reliability of forensic evidence while withstanding rigorous adversarial scrutiny in court.",
      url: "https://www.nafi.com/",
    },
    {
      id: "step-12",
      label: "Lab Management",
      tool: "ISO 17025 / Quality Assurance",
      description:
        "Implement quality management systems, accreditation standards, and proficiency testing programs to ensure laboratory results are reliable and defensible. Manage caseload workflows, maintain instrument calibration, train junior analysts, and oversee compliance with agency and international standards such as ISO 17025. Strong lab management ensures that the scientific integrity of every analysis holds up under legal scrutiny and maintains public trust in forensic science.",
      url: "https://www.anab.org/",
    },
  ],
};

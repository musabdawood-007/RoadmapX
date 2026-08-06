import { Roadmap } from "../types/roadmap";

export const clinicalDataManagerRoadmap: Roadmap = {
  id: "clinical-data-manager",
  title: "Clinical Data Manager",
  description: "Manage and validate clinical trial data for regulatory compliance.",
  introduction:
    "Clinical data management ensures trial data meets regulatory standards. Learn GCP, CDISC standards, EDC systems, data validation, and biostatistics.",
  icon: "🏥",
  category: "Science",
  difficulty: "Expert",
  estimatedTime: "6-10 months",
  steps: [
    {
      id: "step-1",
      label: "Clinical Research Fundamentals",
      tool: "ICH Guidelines",
      description:
        "Master the core principles of clinical research, including trial phases, study designs, and the roles of stakeholders in the drug development lifecycle. Understand how research questions translate into protocols and how data needs flow from hypothesis to collection.",
      url: "https://www.ich.org/page/efficacy-guidelines",
    },
    {
      id: "step-2",
      label: "GCP & Regulatory Compliance",
      tool: "ICH-GCP",
      description:
        "Gain deep expertise in Good Clinical Practice (GCP) guidelines as defined by ICH E6(R2), ensuring data integrity, patient safety, and regulatory compliance across all trial activities. Learn to interpret and apply FDA, EMA, and ICH regulations to everyday data management decisions.",
      url: "https://www.ich.org/page/efficacy-guidelines",
    },
    {
      id: "step-3",
      label: "EDC Systems",
      tool: "Medidata Rave",
      description:
        "Configure and administer electronic data capture systems such as Medidata Rave, Oracle Clinical, or REDCap to build eCRFs and manage real-time clinical data. Understand system validation, user access controls, audit trails, and the workflow of data entry, query management, and edit checks.",
      url: "https://www.medidata.com/",
    },
    {
      id: "step-4",
      label: "CDISC Standards",
      tool: "CDISC",
      description:
        "Apply CDISC standards including CDASH for data collection, SDTM for data tabulation, and ADaM for analysis datasets to ensure consistent, submission-ready data structures. Learn to map source data to standard domains and understand how these standards facilitate regulatory review and cross-study comparisons.",
      url: "https://www.cdisc.org/",
    },
    {
      id: "step-5",
      label: "Data Validation & Cleaning",
      tool: "SAS / SQL",
      description:
        "Perform comprehensive data validation by writing and executing edit checks, range checks, consistency checks, and cross-form validations to identify discrepancies in clinical datasets. Develop proficiency in writing data queries, managing query resolution workflows, and documenting cleaning activities in a systematic audit-ready manner.",
      url: "https://www.sas.com/en_us/software.html",
    },
    {
      id: "step-6",
      label: "Medical Coding",
      tool: "MedDRA / WHODrug",
      description:
        "Apply medical coding dictionaries such as MedDRA for adverse events and WHO Drug Global for concomitant medications to standardize and classify clinical terminology across sites and studies. Understand coding conventions, update cycles, and how accurate coding supports safety reporting and regulatory submissions.",
      url: "https://www.meddra.org/",
    },
    {
      id: "step-7",
      label: "Database Design & Build",
      tool: "eCRF Design",
      description:
        "Design clinical databases from scratch, translating protocols and CRFs into well-structured eCRFs with appropriate data types, derivations, edit checks, and conditional logic. Learn to plan version-controlled database builds, manage amendments, and ensure the database supports both data collection and downstream statistical analysis needs.",
      url: "https://www.cdisc.org/",
    },
    {
      id: "step-8",
      label: "Data Quality Management",
      tool: "KRI Dashboards",
      description:
        "Implement robust data quality frameworks including risk-based monitoring, Key Risk Indicators (KRIs), and central statistical monitoring to proactively detect data quality issues. Build dashboards and reports that track data completeness, timeliness, and error rates across study sites to drive continuous improvement.",
      url: "https://www.transceleratebiopharma.com/",
    },
    {
      id: "step-9",
      label: "Trial Master File",
      tool: "eTMF Systems",
      description:
        "Manage the Trial Master File using electronic TMF systems such as Veeva Vault or Florence, ensuring all essential documents are filed, current, and inspection-ready. Understand TMF classification, document retention policies, and how a well-maintained TMF demonstrates regulatory compliance during audits and inspections.",
      url: "https://www.vaultintegration.com/",
    },
    {
      id: "step-10",
      label: "Pharmacovigilance & Safety Data",
      tool: "Argus Safety",
      description:
        "Understand the intersection of clinical data management and pharmacovigilance, including the processing of SAEs, SUSARs, and safety database reconciliation. Learn to code adverse events using MedDRA, reconcile safety data between EDC and safety systems, and support expedited regulatory reporting requirements.",
      url: "https://www.oracle.com/industries/life-sciences/",
    },
    {
      id: "step-11",
      label: "Project Management",
      tool: "MS Project / Smartsheet",
      description:
        "Apply project management principles to clinical data management activities, including timeline creation, resource allocation, vendor management, and milestone tracking across study start-up, maintenance, and close-out phases. Develop skills in stakeholder communication, risk mitigation planning, and cross-functional coordination with biostatistics, regulatory, and clinical operations teams.",
      url: "https://www.smartsheet.com/",
    },
    {
      id: "step-12",
      label: "Leadership & Communication",
      tool: "Soft Skills",
      description:
        "Develop leadership capabilities to manage data management teams, mentor junior staff, and drive process improvements across the data management function. Build strong communication skills for presenting data management strategies to senior leadership, negotiating with vendors, and fostering collaborative relationships with study teams and sponsors.",
      url: "https://www.clinical-data-management.org/",
    },
  ],
};

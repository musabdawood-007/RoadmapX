import { Roadmap } from "../types/roadmap";

export const cybersecurityAnalystRoadmap: Roadmap = {
  id: "cybersecurity-analyst",
  title: "Cybersecurity Analyst",
  description: "Monitor, detect, and respond to security incidents across enterprise networks.",
  introduction:
    "Cybersecurity analysts monitor and respond to security incidents in real-time. Learn SIEM tools, threat intelligence, incident response, and digital forensics to protect organizations.",
  icon: "🔍",
  category: "Security",
  difficulty: "Intermediate",
  estimatedTime: "4-8 months",
  steps: [
    {
      id: "step-1",
      label: "Networking",
      tool: "Wireshark",
      description:
        "Master TCP/IP, DNS, HTTP, and subnetting to understand how data flows across enterprise environments. Capture live traffic with Wireshark to identify protocol anomalies, suspicious connections, and lateral movement patterns. A strong networking foundation is the bedrock for every detection and response activity that follows.",
      url: "https://www.wireshark.org/docs/",
    },
    {
      id: "step-2",
      label: "Linux",
      tool: "Linux",
      description:
        "Become proficient with the Linux command line, file system hierarchy, and permission model used by most servers and security appliances. Learn to parse system and application logs with tools like grep, awk, and journalctl to trace indicators of compromise. Understanding bash scripting and cron scheduling enables you to automate routine monitoring tasks.",
      url: "https://linuxjourney.com/",
    },
    {
      id: "step-3",
      label: "SIEM",
      tool: "Splunk",
      description:
        "Deploy and configure Splunk to aggregate logs from firewalls, endpoints, and cloud services into a centralized analytics platform. Write SPL queries to build correlation rules that surface brute-force attempts, data exfiltration, and other attack behaviors in near real-time. Splunk dashboards and alerts give analysts the visibility needed to triage alerts quickly.",
      url: "https://docs.splunk.com/",
    },
    {
      id: "step-4",
      label: "Threat Intelligence",
      tool: "MITRE ATT&CK",
      description:
        "Study the MITRE ATT&CK framework to catalog adversary tactics, techniques, and procedures across the entire attack lifecycle. Map observed IOC patterns to specific ATT&CK techniques so detections are grounded in real-world threat actor behavior. Leverage threat intel feeds and platforms like MISP to enrich investigations with context about threat groups and their tooling.",
      url: "https://attack.mitre.org/",
    },
    {
      id: "step-5",
      label: "Incident Response",
      tool: "SANS",
      description:
        "Follow the NIST and SANS incident response lifecycle: preparation, identification, containment, eradication, recovery, and lessons learned. Develop and rehearse playbooks for common scenarios such as ransomware, phishing, and insider threats so the team can respond under pressure. Proper documentation during each phase preserves evidence integrity and supports post-incident reporting.",
      url: "https://www.sans.org/white-papers/incident-handlers-handbook/",
    },
    {
      id: "step-6",
      label: "Digital Forensics",
      tool: "Autopsy",
      description:
        "Acquire and analyze disk images, memory dumps, and browser artifacts to reconstruct the timeline of a compromise. Use Autopsy and The Sleuth Kit to recover deleted files, examine registry hives, and extract persistence mechanisms from Windows and Linux systems. Forensic skills ensure that investigations produce court-admissible evidence and actionable root-cause findings.",
      url: "https://www.sleuthkit.org/autopsy/",
    },
    {
      id: "step-7",
      label: "Malware Analysis",
      tool: "Cuckoo Sandbox",
      description:
        "Perform static and dynamic analysis on suspicious binaries to determine their capabilities, communication protocols, and persistence techniques. Use sandboxing tools like Cuckoo and reverse-engineering utilities such as Ghidra to dissect packed or obfuscated samples safely. Understanding malware internals helps analysts write precise signatures and improve detection coverage.",
      url: "https://cuckoosandbox.org/",
    },
    {
      id: "step-8",
      label: "Vulnerability Management",
      tool: "Nessus",
      description:
        "Scan networks and applications regularly with Nessus or OpenVAS to identify unpatched software, misconfigurations, and known CVEs. Prioritize remediation based on exploitability scores, asset criticality, and exposure to active threat campaigns. Integrate vulnerability data into ticketing workflows so fixes are tracked from discovery through verification.",
      url: "https://www.tenable.com/products/nessus",
    },
    {
      id: "step-9",
      label: "Threat Hunting",
      tool: "Velociraptor",
      description:
        "Go beyond alerts by proactively searching for stealthy threats using hypotheses driven by threat intel and environment anomalies. Leverage endpoint telemetry with Velociraptor to query process trees, registry changes, and network connections across thousands of hosts at scale. Threat hunting uncovers adversaries who evade signature-based detections and reduces dwell time significantly.",
      url: "https://docs.velociraptor.app/",
    },
    {
      id: "step-10",
      label: "Compliance",
      tool: "NIST Frameworks",
      description:
        "Understand regulatory and industry standards such as NIST CSF, ISO 27001, GDPR, and HIPAA that shape an organization's security posture. Align security controls with compliance requirements to satisfy auditors while still providing meaningful protection against real threats. Document policies, procedures, and evidence artifacts to demonstrate continuous compliance during assessments.",
      url: "https://www.nist.gov/cyberframework",
    },
    {
      id: "step-11",
      label: "Security Automation",
      tool: "Python",
      description:
        "Write Python scripts to automate repetitive tasks like log parsing, IOC enrichment, and alert triage across multiple data sources. Build integrations with APIs from Splunk, VirusTotal, and AbuseIPDB to streamline investigation workflows and reduce manual effort. Automation frees analyst time for deeper investigation and scales detection capabilities across large environments.",
      url: "https://docs.python.org/3/tutorial/",
    },
    {
      id: "step-12",
      label: "Risk Assessment",
      tool: "FAIR Framework",
      description:
        "Quantify cyber risk in business terms using frameworks like FAIR to help leadership make informed investment decisions. Conduct threat modeling exercises with STRIDE or PASTA to identify attack surfaces before adversaries do. Communicate risk posture clearly to executives through heat maps, financial impact estimates, and prioritized mitigation roadmaps.",
      url: "https://www.fairinstitute.org/",
    },
  ],
};

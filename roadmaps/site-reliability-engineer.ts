import { Roadmap } from "../types/roadmap";

export const siteReliabilityEngineerRoadmap: Roadmap = {
  id: "site-reliability-engineer",
  title: "Site Reliability Engineer",
  description: "Ensure uptime, reliability, and performance of production systems at scale.",
  introduction: "SRE ensures production systems stay reliable and performant at scale. Learn monitoring with Prometheus, incident response, chaos engineering, and capacity planning to keep systems running.",
  icon: "📡",
  category: "Infrastructure",
  difficulty: "Advanced",
  estimatedTime: "6-10 months",
  steps: [
    {
      id: "step-1",
      label: "Linux Systems",
      tool: "Linux",
      description: "Master Linux system administration including process management, file systems, and kernel tuning. Develop deep expertise in networking concepts such as TCP/IP, DNS, load balancing, and firewall configuration. Understand shell scripting and command-line tools for rapid troubleshooting and system diagnostics.",
      url: "https://linuxjourney.com/"
    },
    {
      id: "step-2",
      label: "Programming",
      tool: "Python / Go",
      description: "Write automation scripts and build internal tooling in Python or Go to reduce manual toil. Develop CLI utilities, health check services, and deployment scripts that integrate with your infrastructure. Understand concurrency patterns and performance optimization for high-throughput production tools.",
      url: "https://www.python.org/doc/"
    },
    {
      id: "step-3",
      label: "Monitoring",
      tool: "Prometheus",
      description: "Instrument applications and infrastructure to export meaningful time-series metrics. Configure Prometheus scraping, retention, and alerting rules to detect anomalies before they impact users. Build dashboards that visualize key signals like latency percentiles, error rates, and saturation indicators.",
      url: "https://prometheus.io/docs/"
    },
    {
      id: "step-4",
      label: "Log Management",
      tool: "ELK Stack",
      description: "Aggregate structured and unstructured logs from distributed services using Elasticsearch, Logstash, and Kibana. Design log schemas and retention policies that balance debuggability with storage costs. Use log correlation and full-text search to trace requests across service boundaries during investigations.",
      url: "https://www.elastic.co/guide/en/elastic-stack/current/index.html"
    },
    {
      id: "step-5",
      label: "Incident Response",
      tool: "PagerDuty",
      description: "Establish a structured incident response process covering detection, triage, mitigation, and resolution. Define severity levels and escalation paths so the right people are engaged at the right time. Run blameless post-mortems after every major incident to extract lessons and improve runbooks.",
      url: "https://support.pagerduty.com/docs"
    },
    {
      id: "step-6",
      label: "On-Call Practices",
      tool: "PagerDuty",
      description: "Design sustainable on-call rotations that prevent burnout while maintaining rapid response times. Create comprehensive runbooks and playbooks that guide responders through common failure modes. Measure and optimize mean time to detect and mean time to resolve to continuously improve operational readiness.",
      url: "https://support.pagerduty.com/docs"
    },
    {
      id: "step-7",
      label: "Chaos Engineering",
      tool: "Chaos Monkey",
      description: "Proactively inject failures into production and staging environments to validate resilience. Simulate network partitions, resource exhaustion, and service outages to discover hidden dependencies. Use game days and failure injection experiments to build confidence that systems degrade gracefully under stress.",
      url: "https://netflix.github.io/chaosmonkey/"
    },
    {
      id: "step-8",
      label: "Capacity Planning",
      tool: "Grafana",
      description: "Forecast infrastructure growth by analyzing historical usage trends and projected demand. Model cost scenarios and right-size compute, storage, and network resources to avoid over-provisioning. Build capacity dashboards that surface headroom and saturation metrics for informed decision-making.",
      url: "https://grafana.com/docs/"
    },
    {
      id: "step-9",
      label: "SLOs & SLIs",
      tool: "Prometheus",
      description: "Define Service Level Indicators that quantify the user-perceived reliability of each service. Set realistic Service Level Objectives and error budgets that balance reliability goals with feature velocity. Track error budget consumption to make data-driven decisions about when to prioritize reliability work.",
      url: "https://prometheus.io/docs/"
    },
    {
      id: "step-10",
      label: "Automation",
      tool: "Terraform",
      description: "Codify infrastructure provisioning and configuration to eliminate manual drift and reduce human error. Write reusable Terraform modules for common patterns like networking stacks, Kubernetes clusters, and database deployments. Integrate infrastructure-as-code pipelines with version control and peer review for auditability and safety.",
      url: "https://www.terraform.io/docs/"
    },
    {
      id: "step-11",
      label: "Container Orchestration",
      tool: "Kubernetes",
      description: "Deploy, scale, and manage containerized workloads across clusters with Kubernetes. Understand pods, services, deployments, and persistent volumes along with resource requests, limits, and autoscaling policies. Implement health probes, network policies, and RBAC to secure and stabilize production workloads.",
      url: "https://kubernetes.io/docs/"
    },
    {
      id: "step-12",
      label: "Post-Incident Reviews",
      tool: "Internal Tools",
      description: "Facilitate blameless post-incident reviews that focus on systemic causes rather than individual mistakes. Document root causes, contributing factors, and corrective actions in a shared, searchable format. Track action items to completion and update monitoring, alerting, and runbooks to prevent recurrence.",
      url: "https://sre.google/sre-book/postmortem-culture/"
    },
  ],
};

import { Roadmap } from "../types/roadmap";

export const customerSuccessManagerRoadmap: Roadmap = {
  id: "customer-success-manager",
  title: "Customer Success Manager",
  description: "Drive customer retention, satisfaction, and long-term product adoption.",
  introduction: "Customer success management drives retention and product adoption. Learn onboarding, health metrics, CRM, renewals, and reporting.",
  icon: "🤝",
  category: "Business",
  difficulty: "Beginner",
  estimatedTime: "2-4 months",
  steps: [
    {
      id: "step-1",
      label: "Customer Onboarding",
      tool: "Gainsight",
      description:
        "Guide new customers through a structured onboarding journey from contract signature to first value. Define clear milestones, timelines, and success criteria to ensure customers are set up for long-term adoption. Use onboarding playbooks to standardize the experience across customer segments and drive time-to-value.",
      url: "https://www.gainsight.com/",
    },
    {
      id: "step-2",
      label: "Health Metrics (NPS/CSAT)",
      tool: "Qualtrics",
      description:
        "Implement and track Net Promoter Score and Customer Satisfaction surveys to quantify customer sentiment over time. Correlate health scores with product usage data and support ticket trends to identify at-risk accounts early. Build automated alerting workflows so the team can intervene before churn signals escalate.",
      url: "https://www.qualtrics.com/blog/measuring-customer-satisfaction/",
    },
    {
      id: "step-3",
      label: "Relationship Building",
      tool: "CRM",
      description:
        "Build and maintain trusted advisor relationships with key stakeholders across multiple customer organizations. Map internal influence networks to identify decision-makers, champions, and blockers within each account. Leverage a CRM system to log every touchpoint, ensuring continuity across team transitions and proactive engagement.",
      url: "https://www.salesforce.com/crm/",
    },
    {
      id: "step-4",
      label: "Renewals",
      tool: "Contract Management",
      description:
        "Own the renewal process end-to-end, starting preparation at least 90 days before contract expiration. Quantify the ROI customers have received and present data-driven renewal proposals that align with their evolving business goals. Negotiate expansion opportunities by mapping product capabilities to unmet customer needs and demonstrating measurable value.",
      url: "https://www.contractsafe.com/blog/contract-management-basics",
    },
    {
      id: "step-5",
      label: "Product Knowledge",
      tool: "Internal Docs",
      description:
        "Develop deep expertise in every product feature, integration, and roadmap item to serve as a credible technical advisor. Stay current on product releases by attending sprint demos and reviewing changelogs before customers ask about them. Translate complex product capabilities into business outcomes that resonate with different stakeholder personas.",
      url: "https://www.intercom.com/effortless",
    },
    {
      id: "step-6",
      label: "Reporting",
      tool: "Looker",
      description:
        "Build executive dashboards that surface adoption rates, health trends, and revenue metrics for both internal leadership and customer-facing reviews. Analyze cohort behavior patterns to identify what separates high-usage accounts from those at risk of disengagement. Use data storytelling to turn raw metrics into compelling narratives that drive strategic decisions.",
      url: "https://cloud.google.com/looker-studio",
    },
    {
      id: "step-7",
      label: "Customer Education",
      tool: "Intercom",
      description:
        "Create and deliver enablement content including webinars, tutorials, and best-practice guides that accelerate product adoption. Develop role-based learning paths tailored to end users, administrators, and executive sponsors within each account. Measure engagement with educational resources and iterate on content based on where customers struggle most.",
      url: "https://www.intercom.com/",
    },
    {
      id: "step-8",
      label: "Escalation Management",
      tool: "Jira",
      description:
        "Establish a clear escalation framework with defined severity levels, response SLAs, and communication protocols for critical issues. Act as the customer advocate internally during outages or bugs, ensuring engineering provides timely updates and root-cause analyses. Conduct post-incident reviews with customers to rebuild confidence and document preventive measures for the future.",
      url: "https://www.atlassian.com/software/jira",
    },
    {
      id: "step-9",
      label: "Advocacy Programs",
      tool: "UserVoice",
      description:
        "Identify and nurture customer champions who can serve as reference accounts, case study participants, and community speakers. Build a structured advocacy program with tiered benefits that incentivize long-term participation and public endorsement. Channel advocacy insights back to product teams to influence the roadmap with real customer pain points and requests.",
      url: "https://www.uservoice.com/",
    },
    {
      id: "step-10",
      label: "Quarterly Business Reviews (QBRs)",
      tool: "Google Slides",
      description:
        "Prepare and deliver Quarterly Business Reviews that showcase measurable outcomes, adoption progress, and strategic alignment with customer goals. Use QBRs to reset expectations, introduce new product capabilities, and co-create an action plan for the upcoming quarter. Transform QBRs from status updates into strategic advisory sessions that reinforce your role as a trusted partner.",
      url: "https://slides.google.com/",
    },
    {
      id: "step-11",
      label: "Voice of Customer",
      tool: "Dovetail",
      description:
        "Systematically capture qualitative feedback from customer conversations, support tickets, and survey responses to surface recurring themes. Synthesize voice-of-customer insights into actionable recommendations for product, marketing, and engineering teams. Close the feedback loop by communicating back to customers how their input shaped product decisions and improvements.",
      url: "https://dovetail.com/",
    },
    {
      id: "step-12",
      label: "Cross-functional Collaboration",
      tool: "Slack",
      description:
        "Partner with Sales, Product, Marketing, and Support teams to deliver a cohesive customer experience across every stage of the lifecycle. Establish regular syncs and shared metrics with adjacent teams to eliminate silos and ensure consistent messaging. Lead internal advocacy for customer needs by translating field insights into business cases that influence company strategy.",
      url: "https://slack.com/",
    },
  ],
};

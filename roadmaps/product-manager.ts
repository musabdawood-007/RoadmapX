import { Roadmap } from "../types/roadmap";

export const productManagerRoadmap: Roadmap = {
  id: "product-manager",
  title: "Product Manager",
  description: "Define product vision, prioritize features, and drive cross-team execution.",
  introduction: "Product management sits at the intersection of business, design, and engineering. Master user research, market analysis, roadmapping, prioritization frameworks, agile delivery, analytics, and strategic communication to build products users love.",
  icon: "🎯",
  category: "Business",
  difficulty: "Intermediate",
  estimatedTime: "6-9 months",
  steps: [
    {
      id: "step-1",
      label: "Product Thinking",
      tool: "Jobs to Be Done",
      description: "Product thinking is the foundation of building meaningful products. Frame problems around customer needs, desired outcomes, and the jobs they are trying to accomplish rather than jumping straight to solutions. Develop the ability to challenge assumptions, ask the right questions, and think from the user's perspective before defining feature requirements.",
      url: "https://jtbd.info/"
    },
    {
      id: "step-2",
      label: "User Research",
      tool: "Maze",
      description: "User research reveals the underlying motivations, pain points, and behaviors that drive customer decisions. Conduct structured user interviews, surveys, and usability tests to gather qualitative and quantitative insights. Synthesize findings into personas, journey maps, and actionable problem statements that inform product decisions.",
      url: "https://maze.co/"
    },
    {
      id: "step-3",
      label: "Market Analysis",
      tool: "CB Insights",
      description: "Market analysis helps you understand the competitive landscape, industry trends, and market sizing before committing to a product direction. Research competitors, identify market gaps, and validate demand using tools like TAM/SAM/SOM frameworks. Stay informed about emerging technologies and shifting customer expectations that could create new opportunities or threats.",
      url: "https://www.cbinsights.com/"
    },
    {
      id: "step-4",
      label: "Roadmapping",
      tool: "Productboard",
      description: "A product roadmap communicates the strategic vision, priorities, and timeline for product development over quarters and years. Build roadmaps that align features with business goals and customer outcomes rather than just listing feature requests. Use visual roadmap tools to maintain multiple views for executives, engineering, and customers while keeping a single source of truth.",
      url: "https://productboard.com/"
    },
    {
      id: "step-5",
      label: "Prioritization",
      tool: "RICE/MoSCoW",
      description: "Prioritization ensures you are building the highest-value features with the resources available. Use frameworks like RICE (Reach, Impact, Confidence, Effort) or MoSCoW (Must-have, Should-have, Could-have, Won't-have) to make objective trade-off decisions. Balance short-term quick wins with long-term strategic bets while managing stakeholder expectations around scope and timeline.",
      url: "https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/"
    },
    {
      id: "step-6",
      label: "Agile Delivery",
      tool: "Jira",
      description: "Agile delivery enables teams to shipIncremental value through short, iterative cycles. Adopt Scrum for structured sprint planning, daily standups, and retrospectives, or Kanban for continuous flow with visual work-in-progress limits. As a product manager, collaborate closely with engineering leads to manage the backlog, remove blockers, and ensure sprint goals align with product priorities.",
      url: "https://www.atlassian.com/software/jira"
    },
    {
      id: "step-7",
      label: "Analytics",
      tool: "Amplitude",
      description: "Product analytics transforms user behavior data into actionable insights that guide feature development and optimization. Track key metrics like activation rates, retention cohorts, feature adoption, and conversion funnels using tools like Amplitude or Mixpanel. Build dashboards that surface trends over time and enable data-informed decisions rather than relying on gut instinct alone.",
      url: "https://amplitude.com/"
    },
    {
      id: "step-8",
      label: "A/B Testing",
      tool: "LaunchDarkly",
      description: "A/B testing provides rigorous evidence for which product changes actually move the needle on your key metrics. Design experiments with clear hypotheses, appropriate sample sizes, and statistically significant measurement periods. Use feature flags to safely roll out changes to subsets of users and measure the impact before committing to a full launch.",
      url: "https://launchdarkly.com/"
    },
    {
      id: "step-9",
      label: "Stakeholder Communication",
      tool: "Loom",
      description: "Effective stakeholder communication keeps leadership, engineering, design, marketing, and sales aligned on product direction. Tailor your message for different audiences, using executive summaries for leadership and detailed technical briefs for engineering teams. Practice translating complex trade-offs into clear narratives that build buy-in and manage expectations around scope, timeline, and resource allocation.",
      url: "https://www.loom.com/"
    },
    {
      id: "step-10",
      label: "Product Strategy",
      tool: "Strategyzer",
      description: "Product strategy defines how your product will compete, grow, and deliver value over the long term. Develop positioning statements, value propositions, and business model canvases that clarify your target market and competitive differentiation. Revisit your strategy quarterly as market conditions evolve and new data emerges from user research and analytics.",
      url: "https://www.strategyzer.com/"
    },
    {
      id: "step-11",
      label: "Go-to-Market",
      tool: "Notion",
      description: "A go-to-market strategy outlines how you will launch, position, and distribute your product to reach target customers effectively. Coordinate cross-functional launch plans across marketing, sales, customer success, and support teams. Define launch tiers, messaging frameworks, and success metrics to ensure each release is delivered with maximum impact and minimal friction.",
      url: "https://www.notion.so/"
    },
    {
      id: "step-12",
      label: "Pricing & Monetization",
      tool: "Paddle",
      description: "Pricing strategy directly impacts revenue, adoption, and perceived product value in the market. Experiment with pricing models such as freemium, tiered subscriptions, usage-based, or one-time purchases depending on your customer segments. Continuously test price sensitivity through surveys, willingness-to-pay research, and controlled pricing experiments to optimize for sustainable growth.",
      url: "https://www.paddle.com/"
    },
    {
      id: "step-13",
      label: "OKRs",
      tool: "Lattice",
      description: "Objectives and Key Results (OKRs) create alignment between product goals and measurable business outcomes. Set ambitious but achievable quarterly objectives with 2-4 key results that quantify success in concrete terms. Review OKR progress in regular check-ins and use the results to inform roadmap decisions, resource allocation, and strategic pivots when targets are at risk.",
      url: "https://www.lattice.com/"
    }
  ],
};

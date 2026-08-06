import { Roadmap } from "../types/roadmap";

export const uxResearcherRoadmap: Roadmap = {
  id: "ux-researcher",
  title: "UX Researcher",
  description: "Investigate user behaviors and needs to inform product design decisions.",
  introduction: "UX research investigates user behaviors to inform design decisions. Learn qualitative and quantitative methods, usability testing, personas, and journey mapping.",
  icon: "🔬",
  category: "Design",
  difficulty: "Beginner",
  estimatedTime: "2-5 months",
  steps: [
    {
      id: "step-1",
      label: "Research Methods",
      tool: "Qualitative Research",
      description: "Master the core qualitative and quantitative research methodologies that form the foundation of UX practice. Conduct interviews, focus groups, diary studies, and contextual inquiries to uncover deep user insights. Learn when to apply each method based on your research questions and constraints.",
      url: "https://www.nngroup.com/articles/which-ux-research-methods/"
    },
    {
      id: "step-2",
      label: "Usability Testing",
      tool: "UserTesting",
      description: "Observe real users completing real tasks to identify friction points and usability issues before they reach production. Design effective test protocols with clear scenarios, tasks, and think-aloud procedures. Analyze session recordings and synthesize findings into actionable recommendations for your design team.",
      url: "https://www.usertesting.com/how-it-works"
    },
    {
      id: "step-3",
      label: "Surveys & Analytics",
      tool: "Google Analytics",
      description: "Collect quantitative data at scale to measure user satisfaction, task completion rates, and behavioral patterns. Craft well-structured survey questions that avoid leading bias and capture meaningful metrics. Combine survey results with analytics tools to triangulate quantitative insights and validate qualitative findings.",
      url: "https://analytics.google.com/analytics/academy/"
    },
    {
      id: "step-4",
      label: "Card Sorting & Tree Testing",
      tool: "Optimal Workshop",
      description: "Evaluate how users mentally organize information and navigate content structures through card sorting exercises. Run open and closed sorts to discover intuitive category groupings and labeling preferences. Validate your information architecture with tree testing to ensure users can find what they need without relying on visual design cues.",
      url: "https://www.optimalworkshop.com/"
    },
    {
      id: "step-5",
      label: "Personas & Archetypes",
      tool: "Miro",
      description: "Synthesize research findings into representative user archetypes that capture goals, behaviors, and pain points across segments. Build detailed personas grounded in real data rather than assumptions to guide design and development priorities. Use these profiles throughout the product lifecycle to align cross-functional teams around user needs.",
      url: "https://www.nngroup.com/articles/persona/"
    },
    {
      id: "step-6",
      label: "Journey Mapping",
      tool: "Miro",
      description: "Visualize the complete end-to-end user experience across every touchpoint, channel, and interaction moment. Identify emotional highs and lows, pain points, and opportunities for improvement at each stage of the journey. Collaborate with stakeholders to co-create maps that reveal systemic issues and prioritize design interventions.",
      url: "https://miro.com/guide/user-journey-mapping/"
    },
    {
      id: "step-7",
      label: "A/B Testing",
      tool: "Optimizely",
      description: "Design and analyze controlled experiments that compare two or more variations to determine which performs better against key metrics. Formulate testable hypotheses and define success criteria before launching experiments to avoid p-hacking. Interpret results with statistical rigor and translate findings into design decisions that measurably improve user outcomes.",
      url: "https://www.optimizely.com/optimization-glossary/ab-testing/"
    },
    {
      id: "step-8",
      label: "Accessibility Research",
      tool: "WAVE",
      description: "Conduct inclusive research with participants who have diverse abilities to ensure your products serve everyone. Learn WCAG guidelines and apply them throughout your research process to identify barriers early. Use assistive technologies firsthand and recruit participants with disabilities to uncover issues that automated tools cannot detect.",
      url: "https://www.w3.org/WAI/test-evaluate/"
    },
    {
      id: "step-9",
      label: "Competitive Analysis",
      tool: "Heuristic Evaluation",
      description: "Systematically evaluate competitor products using established heuristics and benchmarking frameworks to understand market positioning. Identify strengths, weaknesses, and gaps in competitor experiences that represent opportunities for differentiation. Present competitive insights to stakeholders in ways that inform strategic product decisions and design direction.",
      url: "https://www.nngroup.com/articles/competitor-analysis/"
    },
    {
      id: "step-10",
      label: "Research Operations",
      tool: "Dovetail",
      description: "Build scalable research operations that streamline participant recruitment, scheduling, and repository management across your organization. Establish consistent templates, protocols, and quality standards that make research repeatable and reliable. Create a centralized research repository so insights remain accessible and actionable long after studies conclude.",
      url: "https://dovetail.com/research-operations/"
    },
    {
      id: "step-11",
      label: "Reporting & Communication",
      tool: "Research Repository",
      description: "Transform raw research data into compelling narratives that resonate with designers, engineers, product managers, and executive stakeholders. Use storytelling techniques to make findings memorable and drive organizational action on user insights. Develop research repositories and regular insight-sharing rituals that embed evidence-based thinking into your company culture.",
      url: "https://www.nngroup.com/articles/building-research-repository/"
    },
  ],
};

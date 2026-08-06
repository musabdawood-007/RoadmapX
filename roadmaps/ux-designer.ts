import { Roadmap } from "../types/roadmap";

export const uxDesignerRoadmap: Roadmap = {
  id: "ux-designer",
  title: "UX Designer",
  description: "Design intuitive, accessible, and delightful user experiences for digital products.",
  introduction: "UX design is the practice of creating meaningful and relevant experiences for users. It involves the entire process of acquiring and integrating a product, including aspects of branding, design, usability, and function. Master design thinking, research methods, wireframing, prototyping, visual design, and accessibility to craft experiences that delight and empower users.",
  icon: "✏️",
  category: "Design",
  difficulty: "Beginner",
  estimatedTime: "3-6 months",
  steps: [
    {
      id: "step-1",
      label: "Design Principles",
      tool: "Design Thinking",
      description: "Design principles are the foundational rules that guide every design decision. They include concepts like consistency, hierarchy, feedback, and simplicity that help create coherent and usable interfaces. Understanding these principles gives you a reliable framework to approach problems systematically and produce designs that feel intentional rather than arbitrary.",
      url: "https://www.designcouncil.org.uk/design-thinking/"
    },
    {
      id: "step-2",
      label: "User Research",
      tool: "Maze",
      description: "User research is the process of understanding your target users, their behaviors, needs, and motivations through observation and feedback. Methods include interviews, surveys, contextual inquiries, and diary studies that uncover real-world pain points. Strong research habits prevent costly redesigns later and ensure that decisions are grounded in evidence rather than assumptions.",
      url: "https://www.nngroup.com/articles/user-research-methods/"
    },
    {
      id: "step-3",
      label: "Information Architecture",
      tool: "Optimal Workshop",
      description: "Information architecture is the structural design of shared information environments, focusing on how content is organized, labeled, and connected. It uses tools like card sorting and tree testing to create navigational structures that users can predict and understand. A well-structured information architecture reduces cognitive load and helps users find what they need without friction.",
      url: "https://www.nngroup.com/articles/information-architecture/"
    },
    {
      id: "step-4",
      label: "Wireframing",
      tool: "Balsamiq",
      description: "Wireframes are low-fidelity, grayscale layouts that map out the skeletal structure of a screen or page. They strip away visual polish to focus purely on content placement, hierarchy, and user flow so that feedback stays focused on structure. Sketching wireframes early allows rapid iteration and alignment between designers, developers, and stakeholders before investing in detailed visuals.",
      url: "https://balsamiq.com/learn/"
    },
    {
      id: "step-5",
      label: "Prototyping",
      tool: "Figma",
      description: "Prototypes are interactive, clickable models of a product that simulate the real user experience before any code is written. They range from simple click-through mockups to complex, animated simulations that test specific interactions and transitions. Building prototypes helps validate design decisions quickly, reduce development waste, and communicate intent clearly to engineering teams.",
      url: "https://help.figma.com/hc/en-us/articles/360040451373"
    },
    {
      id: "step-6",
      label: "Visual Design",
      tool: "Figma",
      description: "Visual design translates wireframes and prototypes into polished interfaces by applying layout, imagery, iconography, and spacing. It balances aesthetic appeal with clarity to create interfaces that are both beautiful and easy to scan. A strong visual designer understands how to use contrast, alignment, and repetition to guide the user's eye and reinforce brand identity.",
      url: "https://help.figma.com/hc/en-us"
    },
    {
      id: "step-7",
      label: "Typography",
      tool: "Google Fonts",
      description: "Typography is the art of arranging type to make written language legible, readable, and visually compelling. It involves choosing typefaces, setting font sizes and line heights, and establishing a typographic hierarchy that signals importance and grouping. Thoughtful typography improves comprehension, sets the tone of a product, and ensures that content remains accessible across devices and screen sizes.",
      url: "https://fonts.google.com/knowledge"
    },
    {
      id: "step-8",
      label: "Color Theory",
      tool: "Coolors",
      description: "Color theory explores how colors interact, evoke emotions, and communicate meaning within a design system. It covers concepts like the color wheel, complementary and analogous schemes, saturation, and contrast ratios for readability. Applying color theory intentionally creates visual harmony, reinforces brand recognition, and ensures that interfaces meet accessibility standards for all users.",
      url: "https://coolors.co/"
    },
    {
      id: "step-9",
      label: "Accessibility (WCAG)",
      tool: "WAVE",
      description: "Accessibility ensures that digital products can be used by people with a wide range of abilities, including those with visual, auditory, motor, or cognitive impairments. The Web Content Accessibility Guidelines provide specific criteria for perceivable, operable, understandable, and robust content. Designing with accessibility in mind from the start is both an ethical responsibility and a legal requirement in many jurisdictions.",
      url: "https://www.w3.org/WAI/WCAG21/quickref/"
    },
    {
      id: "step-10",
      label: "Interaction Design",
      tool: "Principle",
      description: "Interaction design focuses on how a product responds to user actions through animations, transitions, hover states, and feedback loops. It defines the behavior of buttons, forms, menus, and other interactive elements to create intuitive and predictable experiences. Well-crafted interaction design reduces confusion, provides clear system status, and gives users a sense of control over the interface.",
      url: "https://www.nngroup.com/articles/interaction-design/"
    },
    {
      id: "step-11",
      label: "Design Systems",
      tool: "Storybook",
      description: "A design system is a collection of reusable components, guidelines, and standards that ensure consistency across an entire product or suite of products. It documents patterns for typography, color, spacing, buttons, forms, and more so that teams can build cohesively without reinventing the wheel. Maintaining a design system accelerates development, reduces design debt, and creates a shared language between design and engineering.",
      url: "https://designsystems.com/"
    },
    {
      id: "step-12",
      label: "User Testing",
      tool: "UserTesting",
      description: "User testing is the practice of observing real people as they interact with your product to identify usability issues and validate design assumptions. It includes methods like moderated usability testing, A/B testing, and remote unmoderated sessions that generate actionable insights. Regular testing throughout the design process ensures that your product solves real problems and that improvements are measured rather than guessed.",
      url: "https://www.usertesting.com/"
    },
    {
      id: "step-13",
      label: "Responsive Design",
      tool: "Chrome DevTools",
      description: "Responsive design ensures that interfaces adapt fluidly to different screen sizes, orientations, and device types from mobile phones to large desktop monitors. It uses techniques like flexible grids, scalable images, and media queries to reflow content appropriately at every breakpoint. Designing responsively is essential in a multi-device world where users expect seamless experiences regardless of how they access your product.",
      url: "https://developer.chrome.com/docs/devtools/device-mode/"
    }
  ],
};

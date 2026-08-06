import { Roadmap } from "../types/roadmap";

export const solutionsArchitectRoadmap: Roadmap = {
  id: "solutions-architect",
  title: "Solutions Architect",
  description: "Design end-to-end technical solutions that align with business requirements.",
  introduction: "Solutions architecture designs end-to-end technical systems aligned with business needs. Master microservices, cloud services, APIs, data architecture, and IaC.",
  icon: "🏗️",
  category: "Infrastructure",
  difficulty: "Intermediate",
  estimatedTime: "6-10 months",
  steps: [
    {
      id: "step-1",
      label: "Architecture Patterns",
      tool: "Microservices",
      description: "Decompose monolithic systems into independently deployable, loosely coupled services organized around business capabilities. Apply patterns such as API Gateway, Service Mesh, and Event-Driven Architecture to manage inter-service communication and ensure resilience. Evaluate trade-offs between consistency, latency, and operational complexity when deciding service boundaries.",
      url: "https://microservices.io/patterns/"
    },
    {
      id: "step-2",
      label: "Cloud Services",
      tool: "AWS",
      description: "Map business requirements to cloud-native service offerings across compute, storage, networking, and managed platforms. Design highly available multi-AZ deployments with auto-scaling policies that respond to real-time demand patterns. Leverage managed services such as RDS, S3, and Lambda to reduce operational overhead while maintaining performance and reliability targets.",
      url: "https://docs.aws.amazon.com/gettingstarted/latest/welcome/"
    },
    {
      id: "step-3",
      label: "API Design",
      tool: "REST / GraphQL",
      description: "Design APIs that are versioned, well-documented, and follow consistent naming conventions across all services. Choose between REST for resource-oriented communication and GraphQL for flexible client-driven queries depending on consumption patterns. Implement rate limiting, authentication, and pagination to protect services and ensure predictable performance under load.",
      url: "https://graphql.org/learn/"
    },
    {
      id: "step-4",
      label: "Data Architecture",
      tool: "Polyglot Persistence",
      description: "Select the most appropriate database technology for each workload, from relational stores for transactional data to document or graph databases for unstructured and relationship-heavy datasets. Design data flows that respect consistency boundaries, including event sourcing, CQRS, and eventual consistency patterns. Establish data governance policies covering lineage, retention, encryption at rest, and regulatory compliance.",
      url: "https://martinfowler.com/bliki/PolyglotPersistence.html"
    },
    {
      id: "step-5",
      label: "Security Design",
      tool: "OWASP Top 10",
      description: "Apply secure design principles including least privilege, defense in depth, and zero-trust networking across all system components. Perform threat modeling using STRIDE or similar frameworks to identify attack surfaces early in the design phase. Implement authentication via OAuth 2.0 and OIDC, enforce mTLS between services, and integrate secrets management into CI/CD pipelines.",
      url: "https://owasp.org/www-project-top-ten/"
    },
    {
      id: "step-6",
      label: "Infrastructure as Code",
      tool: "Terraform",
      description: "Automate infrastructure provisioning using declarative configuration files that version control every resource definition. Organize Terraform modules by environment and region to enable consistent multi-account deployments with shared state backends. Implement plan-review-apply workflows with drift detection to prevent configuration inconsistencies across production environments.",
      url: "https://developer.hashicorp.com/terraform/docs"
    },
    {
      id: "step-7",
      label: "Architecture Documentation",
      tool: "C4 Model",
      description: "Create multi-level architecture diagrams using the C4 model to communicate system design from high-level context down to individual components. Maintain documentation as code in version-controlled repositories so diagrams evolve alongside the system they describe. Use architecture decision records (ADRs) to capture rationale behind key design choices and provide context for future maintainers.",
      url: "https://c4model.com/"
    },
    {
      id: "step-8",
      label: "Distributed Systems",
      tool: "Consensus & Fault Tolerance",
      description: "Understand the CAP theorem and apply appropriate consistency models—strong, eventual, or causal—based on business requirements. Design for failure by implementing circuit breakers, retries with exponential backoff, and bulkhead isolation to prevent cascading failures across service boundaries. Leverage distributed tracing with OpenTelemetry to diagnose latency bottlenecks and correlate requests across multiple hops.",
      url: "https://distributed.systems/"
    },
    {
      id: "step-9",
      label: "Performance Optimization",
      tool: "Profiling & Caching",
      description: "Profile applications end-to-end to identify CPU, memory, and I/O bottlenecks before they reach production workloads. Implement multi-layer caching strategies including CDN edge caching, in-memory caches like Redis, and database query result caching to reduce latency. Use load testing tools such as k6 or Locust to establish performance baselines and validate that systems meet SLA targets under expected peak traffic.",
      url: "https://k6.io/docs/"
    },
    {
      id: "step-10",
      label: "Cost Modeling",
      tool: "FinOps",
      description: "Build cost models that project monthly infrastructure spend based on anticipated workload patterns and growth trajectories. Implement tagging strategies and cost allocation dashboards to track spending by team, project, and environment for accountability. Apply optimization techniques such as reserved instances, spot capacity, right-sizing, and auto-scaling to reduce waste without sacrificing reliability.",
      url: "https://www.finops.org/introduction-to-finops/"
    },
    {
      id: "step-11",
      label: "Migration Strategies",
      tool: "6 Rs Framework",
      description: "Evaluate workloads against the six migration strategies—rehost, replatform, repurchase, refactor, retain, and retire—to determine the optimal path for each application. Plan phased migration waves that minimize risk by running parallel environments with automated validation between source and target systems. Use strangler fig patterns to incrementally decompose legacy monoliths into modern services without disrupting ongoing business operations.",
      url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/migration-strategy/overview.html"
    },
    {
      id: "step-12",
      label: "Stakeholder Communication",
      tool: "Technical Leadership",
      description: "Translate complex technical concepts into business language that enables informed decision-making by non-technical stakeholders. Facilitate architecture review boards and design sessions that balance engineering constraints with product roadmaps and budget limitations. Present trade-off analyses using visual artifacts such as ADR summaries, cost comparisons, and risk matrices to align cross-functional teams on the chosen direction.",
      url: "https://www.thoughtworks.com/radar/techniques/lightweight-architecture-documentation"
    },
  ],
};

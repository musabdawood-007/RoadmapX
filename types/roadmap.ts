export interface RoadmapStep {
  id: string;
  label: string;
  tool: string;
  description: string;
  url?: string;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  introduction: string;
  icon: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  estimatedTime: string;
  steps: RoadmapStep[];
}

export interface RoadmapMeta {
  id: string;
  title: string;
  description: string;
  introduction: string;
  icon: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  estimatedTime: string;
  stepCount: number;
}

import { Roadmap } from "../types/roadmap";

export const appDevelopmentRoadmap: Roadmap = {
  id: "app-development",
  title: "App Development",
  description: "Build cross-platform mobile applications for iOS and Android.",
  introduction: "App development lets you build mobile experiences used by billions. This roadmap teaches you to create cross-platform apps with React Native, handle state, and publish to both app stores.",
  icon: "📱",
  category: "Engineering",
  difficulty: "Intermediate",
  estimatedTime: "4-8 months",
  steps: [
    { id: "step-1", label: "Programming Basics", tool: "JavaScript", description: "Learn core programming concepts with JavaScript or Dart.", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
    { id: "step-2", label: "Cross-Platform Framework", tool: "React Native", description: "Build native mobile UIs using JavaScript and React patterns.", url: "https://reactnative.dev/docs/getting-started" },
    { id: "step-3", label: "UI Components", tool: "React Native Paper", description: "Use pre-built Material Design components for fast UI development.", url: "https://callstack.github.io/react-native-paper/" },
    { id: "step-4", label: "State Management", tool: "Zustand", description: "Manage application state with a lightweight, scalable store.", url: "https://zustand-demo.pmnd.rs/" },
    { id: "step-5", label: "Navigation", tool: "React Navigation", description: "Handle screen transitions, tabs, and deep linking.", url: "https://reactnavigation.org/docs/getting-started" },
    { id: "step-6", label: "Backend Integration", tool: "Firebase", description: "Add authentication, databases, and cloud functions.", url: "https://firebase.google.com/docs" },
    { id: "step-7", label: "Testing & Publishing", tool: "Jest", description: "Write tests and publish to App Store and Google Play.", url: "https://jestjs.io/docs/getting-started" },
  ],
};

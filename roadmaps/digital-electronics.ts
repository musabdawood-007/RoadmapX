import { Roadmap } from "../types/roadmap";

export const digitalElectronicsRoadmap: Roadmap = {
  id: "digital-electronics",
  title: "Digital Electronics",
  description: "Understand logic gates, circuits, and digital systems design.",
  introduction: "Digital electronics is the foundation of all modern computing hardware. Learn logic gates, Boolean algebra, and FPGA prototyping to understand how digital systems process information.",
  icon: "⚡",
  category: "Engineering",
  difficulty: "Beginner",
  estimatedTime: "2-4 months",
  steps: [
    { id: "step-1", label: "Number Systems", tool: "Binary", description: "Convert between binary, decimal, and hexadecimal number systems.", url: "https://www.electronics-tutorials.ws/boolean/bool_1.html" },
    { id: "step-2", label: "Logic Gates", tool: "Logic Gates", description: "Build circuits using AND, OR, NOT, NAND, and NOR gates.", url: "https://www.electronics-tutorials.ws/boolean/bool_2.html" },
    { id: "step-3", label: "Boolean Algebra", tool: "Boolean Algebra", description: "Simplify digital circuits using Boolean expressions and laws.", url: "https://www.electronics-tutorials.ws/boolean/bool_3.html" },
    { id: "step-4", label: "Combinational Logic", tool: "Multiplexers", description: "Design decoders, multiplexers, and adders from logic gates.", url: "https://www.electronics-tutorials.ws/boolean/bool_4.html" },
    { id: "step-5", label: "Sequential Logic", tool: "Flip-Flops", description: "Build memory elements like latches and flip-flops for state.", url: "https://www.electronics-tutorials.ws/sequential/seq_1.html" },
    { id: "step-6", label: "FPGA Prototyping", tool: "Verilog", description: "Describe and simulate digital circuits using hardware description languages.", url: "https://www.chipverify.com/verilog/verilog-tutorial" },
    { id: "step-7", label: "Microcontrollers", tool: "Arduino", description: "Program microcontrollers to interface with physical hardware.", url: "https://www.arduino.cc/en/Tutorial/HomePage" },
  ],
};

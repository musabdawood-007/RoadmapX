import { Roadmap } from "../types/roadmap";

export const electricalEngineerRoadmap: Roadmap = {
  id: "electrical-engineer",
  title: "Electrical Engineer",
  description: "Design circuits, power systems, and electronic devices.",
  introduction:
    "Electrical engineering spans circuit design, power distribution, signal processing, and embedded systems. This roadmap covers the core disciplines from fundamental circuit theory through advanced power electronics and electromagnetic analysis.",
  icon: "⚡",
  category: "Engineering",
  difficulty: "Advanced",
  estimatedTime: "12-18 months",
  steps: [
    {
      id: "step-1",
      label: "Circuit Theory",
      tool: "Circuit Analysis",
      description:
        "Circuit theory forms the foundation of all electrical engineering disciplines. Learn to analyze voltage, current, and resistance in both DC and AC circuits using Ohm's law, Kirchhoff's laws, and mesh and nodal analysis. Understanding impedance, phasors, and frequency-domain analysis is essential for progressing to electronics and signal processing.",
      url: "https://www.allaboutcircuits.com/textbook/",
    },
    {
      id: "step-2",
      label: "Electronics",
      tool: "LTspice",
      description:
        "Electronics deals with the behavior of semiconductors, diodes, transistors, and operational amplifiers. Use LTspice to simulate analog and digital circuits before committing to physical prototypes, reducing design errors and iteration time. Practice designing amplifiers, filters, and oscillator circuits to build intuition about component interactions.",
      url: "https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html",
    },
    {
      id: "step-3",
      label: "Power Systems",
      tool: "Power Grids",
      description:
        "Power systems engineering covers the generation, transmission, and distribution of electrical energy across utility-scale grids. Study three-phase power, transformer design, load flow analysis, and fault analysis to understand how electricity reaches end users reliably. Familiarity with power quality standards and grid stability is critical for modern infrastructure.",
      url: "https://www.energy.gov/oe/electric-power-systems",
    },
    {
      id: "step-4",
      label: "PCB Design",
      tool: "KiCad",
      description:
        "Printed circuit board design translates schematic diagrams into manufacturable physical layouts. KiCad provides a complete open-source toolchain for schematic capture, PCB routing, and generating Gerber files for fabrication. Pay careful attention to trace routing, copper pour management, impedance matching, and thermal considerations to ensure signal integrity and reliability.",
      url: "https://docs.kicad.org/",
    },
    {
      id: "step-5",
      label: "Control Systems",
      tool: "MATLAB",
      description:
        "Control systems theory enables engineers to design stable, responsive feedback loops for industrial and robotic applications. Use MATLAB and Simulink to model dynamic systems, design PID controllers, and analyze stability through root locus and Bode plot techniques. Understanding state-space representation and transfer functions is key to controlling everything from motors to aerospace systems.",
      url: "https://www.mathworks.com/help/simulink/",
    },
    {
      id: "step-6",
      label: "Signal Processing",
      tool: "DSP",
      description:
        "Signal processing techniques allow you to filter, transform, and extract meaningful information from raw electrical signals. Master the Fourier transform, Z-transform, and digital filter design to manipulate signals in both time and frequency domains. These skills are indispensable for communications systems, audio processing, and sensor data analysis.",
      url: "https://www.dsprelated.com/",
    },
    {
      id: "step-7",
      label: "Digital Logic",
      tool: "Digital Design",
      description:
        "Digital logic is the backbone of all modern computing and embedded systems. Study Boolean algebra, combinational and sequential logic, flip-flops, counters, and state machines to design everything from simple controllers to complex processors. Hands-on experience with HDL languages like Verilog or VHDL bridges the gap between theory and FPGA implementation.",
      url: "https://www.nand2tetris.org/",
    },
    {
      id: "step-8",
      label: "Microcontrollers",
      tool: "Embedded C",
      description:
        "Microcontrollers integrate a processor, memory, and peripherals into a single chip for embedded applications. Program devices like the STM32 or Arduino in C to interact with sensors, actuators, communication buses like I2C and SPI, and real-time interrupts. Understanding memory architecture, timing, and peripheral configuration is essential for building reliable embedded products.",
      url: "https://www.st.com/en/microcontrollers-microprocessors.html",
    },
    {
      id: "step-9",
      label: "Electromagnetics",
      tool: "EM Theory",
      description:
        "Electromagnetics provides the theoretical framework for understanding how electric and magnetic fields interact with materials and space. Study Maxwell's equations, wave propagation, transmission lines, and antenna design to grasp how signals travel through different media. These concepts underpin RF engineering, wireless communications, and high-speed circuit design.",
      url: "https://www.falstad.com/cplane/",
    },
    {
      id: "step-10",
      label: "Renewable Energy",
      tool: "Energy Systems",
      description:
        "Renewable energy engineering focuses on harnessing solar, wind, and other sustainable sources for grid and off-grid power systems. Learn about photovoltaic cell design, wind turbine generators, maximum power point tracking (MPPT), and battery energy storage integration. Understanding grid-tie inverters and energy management is increasingly vital as the world shifts toward clean energy.",
      url: "https://www.irena.org/",
    },
    {
      id: "step-11",
      label: "Power Electronics",
      tool: "Power Conversion",
      description:
        "Power electronics deals with the efficient conversion and control of electrical power using semiconductor switches. Study DC-DC converters, rectifiers, inverters, and motor drive topologies to manage voltage and current for diverse applications. Mastery of switching losses, thermal management, and magnetic component design is critical for building efficient power systems.",
      url: "https://www.ti.com/power-management/overview.html",
    },
    {
      id: "step-12",
      label: "Testing & Measurement",
      tool: "Lab Instruments",
      description:
        "Testing and measurement validate that designs meet performance specifications under real-world conditions. Proficiency with oscilloscopes, multimeters, spectrum analyzers, and logic analyzers enables precise characterization of circuit behavior and debugging of complex systems. Developing systematic test plans and understanding measurement uncertainty ensures results are both accurate and reproducible.",
      url: "https://www.keysight.com/us/en/products.html",
    },
  ],
};

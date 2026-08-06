import { Roadmap } from "../types/roadmap";

export const renewableEnergyEngineerRoadmap: Roadmap = {
  id: "renewable-energy-engineer",
  title: "Renewable Energy Engineer",
  description: "Design and deploy solar, wind, and sustainable energy systems.",
  introduction: "Renewable energy engineering designs solar, wind, and sustainable systems. Master energy fundamentals, PV design, wind energy, battery storage, and grid integration.",
  icon: "☀️",
  category: "Engineering",
  difficulty: "Advanced",
  estimatedTime: "6-10 months",
  steps: [
    { id: "step-1", label: "Fundamentals of Energy", tool: "Physics", description: "Understand thermodynamics, electromagnetism, and the principles of energy conversion. Study the laws of thermodynamics and how they govern the efficiency of energy systems across different scales.", url: "https://www.energy.gov/eere/energy-basics" },
    { id: "step-2", label: "Solar PV Systems", tool: "PVsyst", description: "Design and simulate photovoltaic solar panel installations using industry-standard tools. Learn to perform site assessments, shade analysis, and system sizing to maximize solar energy capture.", url: "https://www.pvsyst.com/help/index.html" },
    { id: "step-3", label: "Wind Energy", tool: "Wind Turbines", description: "Design wind farm layouts and calculate energy output using computational fluid dynamics. Analyze wind resource data, turbine selection, and wake effects to optimize power generation.", url: "https://www.energy.gov/eere/wind/wind-energy-technologies-office" },
    { id: "step-4", label: "Energy Storage", tool: "Battery Systems", description: "Integrate lithium-ion, flow batteries, and emerging storage technologies for grid applications. Understand battery management systems, state of charge monitoring, and degradation modeling for long-term reliability.", url: "https://www.energy.gov/eere/vehicles/electric-batteries" },
    { id: "step-5", label: "Grid Integration", tool: "Power Grid", description: "Connect renewable sources to electrical distribution networks while maintaining grid stability. Study power quality, frequency regulation, and interconnection standards for seamless energy delivery.", url: "https://www.energy.gov/oe/electric-power-systems" },
    { id: "step-6", label: "Power Electronics", tool: "Inverters", description: "Master the design and application of inverters, converters, and power conditioning equipment. Learn to select and configure power electronics that efficiently convert DC solar output to grid-compatible AC power.", url: "https://www.energy.gov/eere/vehicles/power-electronics" },
    { id: "step-7", label: "Energy Economics", tool: "HOMER", description: "Model microgrids and evaluate project economics using financial analysis tools. Calculate levelized cost of energy, return on investment, and perform sensitivity analysis for renewable projects.", url: "https://www.homerenergy.com/" },
    { id: "step-8", label: "Environmental Impact", tool: "LCA", description: "Assess the lifecycle environmental impacts of renewable energy systems from manufacturing to decommissioning. Evaluate carbon footprint reduction, land use considerations, and ecological trade-offs of energy installations.", url: "https://www.energy.gov/eere/energy-basics" },
    { id: "step-9", label: "Project Management", tool: "Agile", description: "Plan, execute, and deliver renewable energy projects on time and within budget. Develop skills in stakeholder coordination, risk mitigation, and quality assurance for large-scale installations.", url: "https://www.energy.gov/eere/vehicles/project-management" },
    { id: "step-10", label: "Policy & Regulations", tool: "Compliance", description: "Navigate federal, state, and local regulations governing renewable energy development. Understand tax incentives, renewable portfolio standards, and permitting requirements that shape project viability.", url: "https://www.energy.gov/eere/vehicles/regulatory-compliance" },
    { id: "step-11", label: "Smart Grids", tool: "IoT", description: "Deploy advanced metering infrastructure and demand response systems for intelligent grid management. Learn to implement real-time monitoring, predictive analytics, and automated control for optimized energy distribution.", url: "https://www.energy.gov/oe/smart-grid" },
    { id: "step-12", label: "Emerging Technologies", tool: "Innovation", description: "Explore cutting-edge developments in perovskite solar cells, floating offshore wind, and green hydrogen production. Stay current with research breakthroughs that are reshaping the future of sustainable energy generation.", url: "https://www.energy.gov/eere/vehicles/emerging-technologies" },
  ],
};

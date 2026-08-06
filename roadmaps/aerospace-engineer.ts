import { Roadmap } from "../types/roadmap";

export const aerospaceEngineerRoadmap: Roadmap = {
  id: "aerospace-engineer",
  title: "Aerospace Engineer",
  description: "Design aircraft, spacecraft, and propulsion systems for flight and orbit.",
  introduction:
    "Aerospace engineering combines aerodynamics, structural mechanics, propulsion, and systems integration to design vehicles that operate in atmosphere and space. This roadmap covers CFD, FEA, avionics, orbital mechanics, and mission design — the core disciplines every aerospace engineer needs to master.",
  icon: "✈️",
  category: "Engineering",
  difficulty: "Expert",
  estimatedTime: "10-16 months",
  steps: [
    {
      id: "step-1",
      label: "Fluid Dynamics",
      tool: "Ansys Fluent",
      description:
        "Master computational fluid dynamics (CFD) to simulate airflow over wings, fuselages, and control surfaces. Learn the Navier-Stokes equations, turbulence modeling (RANS, LES, DNS), and mesh generation techniques. CFD is the backbone of aerodynamic design — it lets you predict lift, drag, and thermal loads before any wind tunnel test.",
      url: "https://www.ansys.com/products/fluids",
    },
    {
      id: "step-2",
      label: "Structural Analysis",
      tool: "Ansys Mechanical",
      description:
        "Use finite element analysis (FEA) to evaluate stress, strain, and deformation in aircraft and spacecraft structures. Learn to model composite laminates, bolted joints, and fatigue life under cyclic loading. Structural integrity is non-negotiable — a single undetected stress concentration can lead to catastrophic failure in flight.",
      url: "https://www.ansys.com/",
    },
    {
      id: "step-3",
      label: "Propulsion",
      tool: "Rocket Propulsion",
      description:
        "Study rocket engines, turbofans, turboprops, and electric propulsion systems. Understand the Tsiolkovsky rocket equation, specific impulse, and thrust-to-weight ratios. Propulsion is the most energy-dense subsystem in any vehicle — even small efficiency gains translate into massive payload or range improvements.",
      url: "https://www.nasa.gov/mission_pages/nmsc/main/index.html",
    },
    {
      id: "step-4",
      label: "Avionics",
      tool: "Flight Software",
      description:
        "Design and program onboard computers, inertial measurement units (IMUs), GPS receivers, and flight management systems. Learn real-time operating systems, sensor fusion algorithms, and redundant architectures. Avionics are the brain and nervous system of any vehicle — they must operate flawlessly under extreme vibration, radiation, and temperature swings.",
      url: "https://www.nasa.gov/mission/near-earth-object-camera/",
    },
    {
      id: "step-5",
      label: "CAD/CAM",
      tool: "CATIA",
      description:
        "Build parametric 3D models of complex aerospace geometries using CATIA, SolidWorks, or NX. Learn surface modeling, lofting, and toolpath generation for CNC machining. CAD/CAM bridges design and manufacturing — a well-structured model saves hundreds of hours on the shop floor.",
      url: "https://www.3ds.com/products/catia",
    },
    {
      id: "step-6",
      label: "Materials",
      tool: "Composites",
      description:
        "Select and characterize aerospace-grade materials including carbon fiber composites, titanium alloys, inconel superalloys, and thermal protection systems. Understand weight-to-strength ratios, fatigue behavior, and corrosion resistance. Material selection is a balancing act — the wrong choice adds weight, increases cost, or shortens service life.",
      url: "https://www.compositesworld.com/",
    },
    {
      id: "step-7",
      label: "Testing",
      tool: "Wind Tunnel",
      description:
        "Validate computational predictions with physical testing in wind tunnels, structural test rigs, and thermal chambers. Plan test matrices, instrument models with strain gauges and pressure taps, and analyze results against CFD/FEA predictions. Testing is where theory meets reality — it catches the failure modes that simulations miss.",
      url: "https://www.nasa.gov/centers-and-facilities/armstrong/nasa-armstrong-fact-sheet/",
    },
    {
      id: "step-8",
      label: "Orbital Mechanics",
      tool: "GMAT",
      description:
        "Learn Keplerian orbits, Hohmann transfers, gravity assists, and constellation geometry. Use tools like GMAT or STK to plan and optimize trajectories. Orbital mechanics governs everything in spaceflight — a single miscalculation in delta-v can strand a spacecraft in the wrong orbit for years.",
      url: "https://www.gmatcentral.org/",
    },
    {
      id: "step-9",
      label: "Flight Dynamics",
      tool: "MATLAB/Simulink",
      description:
        "Model six-degree-of-freedom (6-DOF) flight dynamics including translational motion, rotational attitudes, and aerodynamic coefficients. Simulate takeoff, cruise, approach, and landing phases with realistic atmospheric models. Flight dynamics connects aerodynamics to control — it tells you how the vehicle actually responds to pilot or autopilot inputs.",
      url: "https://www.mathworks.com/products/simulink.html",
    },
    {
      id: "step-10",
      label: "Space Systems",
      tool: "STK",
      description:
        "Understand the full lifecycle of a space mission: launch vehicle selection, payload integration, satellite bus design, and ground operations. Learn radiation hardening, thermal control, power budgets, and communication link analysis. Space systems engineering is the art of making hundreds of subsystems work together in an environment where repair is impossible.",
      url: "https://www.agi.com/products/stk",
    },
    {
      id: "step-11",
      label: "Control Systems",
      tool: "Autopilot (PX4)",
      description:
        "Design PID, LQR, and model predictive controllers for aircraft attitude, rocket thrust vectoring, and satellite pointing. Learn state estimation with Kalman filters and implement control loops on embedded hardware. Control systems are the bridge between design intent and real-world behavior — they keep a vehicle stable when the environment is trying to tear it apart.",
      url: "https://px4.io/",
    },
    {
      id: "step-12",
      label: "Mission Design",
      tool: "Python (poliastro)",
      description:
        "Integrate all disciplines to plan end-to-end missions from launch through operational life to disposal. Optimize launch windows, fuel budgets, ground station passes, and collision avoidance. Mission design is the capstone skill — it requires you to see the vehicle, its environment, and its objectives as one interconnected system.",
      url: "https://docs.poliastro.space/en/stable/",
    },
  ],
};

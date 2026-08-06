import { Roadmap } from "../types/roadmap";

export const embeddedSystemsEngineerRoadmap: Roadmap = {
  id: "embedded-systems-engineer",
  title: "Embedded Systems Engineer",
  description: "Program resource-constrained hardware devices with firmware and real-time OS.",
  introduction: "Embedded systems programming runs software on resource-constrained hardware. Master C, microcontrollers, RTOS, communication protocols, and PCB design.",
  icon: "🔌",
  category: "Engineering",
  difficulty: "Intermediate",
  estimatedTime: "5-9 months",
  steps: [
    { id: "step-1", label: "C Programming", tool: "C", description: "Master low-level programming for memory and hardware control.", url: "https://devdocs.io/c/" },
    { id: "step-2", label: "Microcontrollers", tool: "STM32", description: "Program ARM microcontrollers with registers and peripherals.", url: "https://www.st.com/en/embedded-software/stm32cube-mcu-mpu-packages.html" },
    { id: "step-3", label: "RTOS", tool: "FreeRTOS", description: "Schedule concurrent tasks with a real-time operating system.", url: "https://www.freertos.org/Documentation/02-Kernel/02-Kernel-Ports/00-Kernel-Ports" },
    { id: "step-4", label: "Communication Protocols", tool: "SPI/I2C/UART", description: "Interconnect sensors and modules with serial communication.", url: "https://www.terraelectronica.ru/pdf/files/ATMEL_AN4215.pdf" },
    { id: "step-5", label: "Hardware Debugging", tool: "Oscilloscope", description: "Trace signals and diagnose hardware-level issues.", url: "https://www.tek.com/en/products/oscilloscopes" },
    { id: "step-6", label: "PCB Design", tool: "KiCad", description: "Design circuit boards and route components for manufacturing.", url: "https://docs.kicad.org/" },
    { id: "step-7", label: "Linux on Embedded", tool: "Yocto", description: "Build custom Linux distributions for embedded targets.", url: "https://docs.yoctoproject.org/" },
  ],
};

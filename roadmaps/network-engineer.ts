import { Roadmap } from "../types/roadmap";

export const networkEngineerRoadmap: Roadmap = {
  id: "network-engineer",
  title: "Network Engineer",
  description: "Design, configure, and maintain enterprise network infrastructure.",
  introduction: "Network engineering designs and maintains enterprise communication infrastructure. Master OSI model, routing protocols, VLANs, firewalls, and network monitoring.",
  icon: "🌐",
  category: "Infrastructure",
  difficulty: "Intermediate",
  estimatedTime: "4-8 months",
  steps: [
    {
      id: "step-1",
      label: "Networking Basics",
      tool: "OSI Model",
      description: "Learn the seven layers of the OSI model and how data flows from application to physical transmission. Understand protocols at each layer including HTTP, TCP, IP, and Ethernet. Master the encapsulation and de-encapsulation process that enables interoperable network communication.",
      url: "https://www.cloudflare.com/learning/osi-model/"
    },
    {
      id: "step-2",
      label: "IP Addressing",
      tool: "IPv4/IPv6",
      description: "Master subnetting, CIDR notation, and how to design IP addressing schemes for enterprise environments. Learn to calculate subnet masks, determine broadcast domains, and allocate address blocks efficiently. Understand IPv6 addressing and the transition strategies between IPv4 and IPv6.",
      url: "https://www.cloudflare.com/learning/networking/what-is-a-ip-address/"
    },
    {
      id: "step-3",
      label: "Routing",
      tool: "OSPF/BGP",
      description: "Configure dynamic routing protocols including OSPF for internal gateway routing and BGP for inter-domain path selection. Understand link-state algorithms, route convergence, and how autonomous systems exchange routing information. Design scalable routing topologies with redundancy and failover mechanisms.",
      url: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/"
    },
    {
      id: "step-4",
      label: "Switching",
      tool: "VLANs",
      description: "Segment networks using VLANs and 802.1Q trunking to isolate broadcast domains and improve performance. Configure trunk links, inter-VLAN routing with Layer 3 switches, and port-based access control. Implement Spanning Tree Protocol to prevent loops while maintaining redundant paths.",
      url: "https://www.cisco.com/c/en/us/support/docs/lan-switching-8021q/"
    },
    {
      id: "step-5",
      label: "Firewall",
      tool: "pfSense",
      description: "Deploy and configure pfSense as a perimeter firewall to filter traffic and enforce security policies. Create access control lists, NAT rules, and stateful packet inspection to protect internal networks. Set up DMZ zones and configure VPN tunnels for secure remote access.",
      url: "https://docs.netgate.com/pfsense/en/latest/"
    },
    {
      id: "step-6",
      label: "Network Monitoring",
      tool: "Nagios",
      description: "Use Nagios or similar tools to monitor device uptime, bandwidth utilization, and network health in real time. Configure SNMP polling, set up alert thresholds, and create dashboards for proactive issue detection. Analyze traffic patterns to identify bottlenecks and plan capacity upgrades.",
      url: "https://www.nagios.org/documentation/"
    },
    {
      id: "step-7",
      label: "Wireless Networking",
      tool: "Wi-Fi 6",
      description: "Design and deploy enterprise wireless networks using Wi-Fi 6 and 802.11ax standards. Plan AP placement for optimal coverage, configure SSIDs with WPA3 authentication, and manage RF interference. Implement wireless controllers for centralized management and seamless roaming across large facilities.",
      url: "https://www.cisco.com/c/en/us/solutions/what-is-wi-fi-6.html"
    },
    {
      id: "step-8",
      label: "Network Security",
      tool: "IDS/IPS",
      description: "Implement intrusion detection and prevention systems to monitor and block malicious network activity. Deploy network access control (NAC) to enforce endpoint compliance before granting network access. Harden network devices with secure management protocols, access controls, and regular vulnerability assessments.",
      url: "https://www.sans.org/white-papers/intrusion-detection-prevention-systems/"
    },
    {
      id: "step-9",
      label: "Software-Defined Networking",
      tool: "OpenFlow",
      description: "Explore how SDN decouples the control plane from the data plane to enable programmable network management. Learn controller-based architectures using OpenFlow and understand centralized traffic engineering. Evaluate SD-WAN solutions that simplify branch connectivity and reduce operational costs.",
      url: "https://opennetworking.org/sdn-definition/"
    },
    {
      id: "step-10",
      label: "Network Automation",
      tool: "Ansible",
      description: "Automate repetitive network configuration tasks using Ansible, Python, and NETCONF/YANG models. Build playbooks to push changes across hundreds of devices simultaneously and ensure configuration consistency. Integrate automation into CI/CD pipelines for infrastructure-as-code workflows.",
      url: "https://www.ansible.com/use-cases/network-automation"
    },
    {
      id: "step-11",
      label: "VPN Technologies",
      tool: "IPSec/OpenVPN",
      description: "Configure site-to-site and remote access VPNs using IPSec, WireGuard, or OpenVPN protocols. Understand encryption standards, key exchange mechanisms, and tunnel establishment processes. Design VPN architectures that balance security requirements with performance and scalability needs.",
      url: "https://www.cloudflare.com/learning/access-management/what-is-a-vpn/"
    },
    {
      id: "step-12",
      label: "Certifications",
      tool: "CCNA",
      description: "Validate your networking expertise with industry-recognized certifications starting with the Cisco CCNA. Progress to advanced credentials like CCNP, JNCIA, or CompTIA Network+ to specialize in specific vendor ecosystems. Certification prepares you for real-world troubleshooting scenarios and opens doors to senior engineering roles.",
      url: "https://www.cisco.com/c/en/us/training-events/training-certifications/ccna.html"
    },
  ],
};

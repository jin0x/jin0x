// Hero's Journey Stages
export const stages = [
  {
    id: 1,
    year: "2018",
    title: "THE SPARK",
    subtitle: "The Ordinary World",
    description:
      "What began as a modest web studio was fueled by one audacious belief: that with craft, clarity, and resilience, even small teams could shape extraordinary digital experiences.",
    status: "[INIT] RSH founded — Limassol, Cyprus",
    lesson: "Comfort is not clarity. You were meant for more.",
    type: "echo",
  },
  {
    id: 2,
    year: "2019",
    title: "PROVING THE VISION",
    subtitle: "Call to Adventure",
    description:
      "By earning the trust of forward-thinking clients, we turned bold ideas into measurable outcomes—delivering high-caliber work alongside world-renowned creative teams.",
    status: "[SYNC] Allied systems detected: Mozilla, Washington Post, Spotify",
    lesson: "The code doesn't call everyone. But it called you.",
    type: "glitch",
  },
  {
    id: 3,
    year: "2020",
    title: "FORGED BY PRESSURE",
    subtitle: "The Ordeal Begins",
    description:
      "In a world shifting beneath our feet, we became more than builders—we became translators of ambiguity, turning urgent problems into adaptive, resilient solutions.",
    status: "[ALERT] Global disruption detected\n[RESPONSE] Antifragility protocols engaged",
    lesson: "Every hero doubts before they begin.",
    type: "doubt",
  },
  {
    id: 4,
    year: "2021",
    title: "THE QUIET REINVENTION",
    subtitle: "The Inmost Cave",
    description:
      "While others watched AI from afar, we turned inward. We experimented relentlessly—augmenting our own workflows, testing limits, and preparing for a shift that would soon redefine everything.",
    status: "[PROCESS] AI research threads initiated\n[PROCESS] Workflow augmentation: 47% efficiency gain",
    lesson: "Truth isn't given. It's remembered.",
    type: "mirror",
  },
  {
    id: 5,
    year: "2022",
    title: "BECOMING RADIANT",
    subtitle: "Crossing the Threshold",
    description:
      "Emerging from reinvention, we shed our old skin and became Radiant Synergy Hub—an idea, a system, a force powered by transformation, clarity, and a new mythology of what's possible.",
    status: "[THREAD_1] RSH: Founder & Head of Development — ACTIVE\n[THREAD_2] Wynter: Head of Engineering — INITIALIZED",
    lesson: "Beyond the firewall lies your real self.",
    type: "trust",
  },
  {
    id: 6,
    year: "2023",
    title: "AUGMENTED BY DESIGN",
    subtitle: "The Reward",
    description:
      "AI didn't replace us—it extended us. Our capabilities expanded, our clarity sharpened, and suddenly we were operating at a scale far beyond our size. This wasn't automation—it was amplification.",
    status: "[UPGRADE] Wynter role: Head of AI Engineering\n[DEPLOY] AI systems across product lines",
    lesson: "Clarity isn't given. It's claimed.",
    type: "source",
  },
  {
    id: 7,
    year: "2024",
    title: "PROOF IN THE PARTNERSHIPS",
    subtitle: "The Road Back",
    description:
      "From global brands like Spotify, Mozilla, Patreon, and The Washington Post to visionary studios and founders, our work spoke louder than our name. This was the era of quiet excellence—strategic, intentional, and unmistakably world-class.",
    status: "[SCAN] Portfolio nodes: Visa, Smartsheet, Nike, Patreon, BMC, Teradata",
    lesson: "Wisdom isn't what you say. It's what you sense.",
    type: "signal",
  },
  {
    id: 8,
    year: "2025",
    title: "IGNITION",
    subtitle: "Resurrection",
    description:
      "This is the ignition point. Stepping into the light—not to scale indiscriminately, but to illuminate what's next. Armed with wisdom, craft, and an augmented edge.",
    status: "[THREAD_1] RSH: Founder & Head of Development — RADIANT\n[THREAD_2] Wynter: Chief AI Officer — ACTIVE",
    lesson: "You are not the hero. You are the path.",
    type: "radiant",
  },
  {
    id: 9,
    year: "2025+",
    title: "THE OPEN LOOP",
    subtitle: "Return with the Elixir",
    description:
      "The story doesn't end. It compiles at runtime. Every challenge is a spark. Every solution, a signal forward.",
    status: "[FUTURE] MSc in Artificial Intelligence — University of Essex [IN PROGRESS]\n[FUTURE] The next chapter writes itself through action",
    lesson: "Give it freely. Light the next mind.",
    type: "ignite",
  },
];

// Identity data
export const identity = {
  name: "John Leskas",
  archetype: "The Architect",
  class: "Meta-Engineer",
  threads: {
    RSH: {
      role: "Founder & Head of Development",
      essence: "Boutique software house crafting bespoke digital experiences",
      philosophy: "CRAFT. CREATIVITY. CLARITY.",
      url: "https://rsh.studio",
    },
    Wynter: {
      role: "Chief AI Officer",
      essence: "AI leadership for B2B's leading message testing platform",
      philosophy: "EMPOWER. TRANSFORM. RADIATE.",
      url: "https://wynter.com",
    },
  },
  operatingPrinciples: [
    "First principles thinking — decompose everything to fundamentals",
    "System design mindset — build compounding systems, not one-off solutions",
    "Perfection first, speed second — quality over velocity, but both matter",
    "Calm operator — depth, clarity, durability over hype",
  ],
  currentState: "The spark that reignites systems",
};

// Skills data
export const skills = {
  "AI & MACHINE LEARNING": [
    { name: "RAG Pipelines", level: 100 },
    { name: "LLM Integration", level: 100 },
    { name: "Vector Search", level: 100 },
    { name: "ML Systems Design", level: 90 },
  ],
  LANGUAGES: [
    { name: "TypeScript / JS", level: 100 },
    { name: "PHP", level: 100 },
    { name: "Python", level: 90 },
    { name: "CSS / SCSS", level: 100 },
  ],
  "FRAMEWORKS & PLATFORMS": [
    { name: "React / Next.js", level: 100 },
    { name: "Node.js / Express", level: 100 },
    { name: "Laravel / Statamic", level: 100 },
    { name: "WordPress Mastery", level: 100 },
  ],
  "DATA & INFRASTRUCTURE": [
    { name: "PostgreSQL / MySQL", level: 100 },
    { name: "MongoDB", level: 100 },
    { name: "GraphQL", level: 100 },
    { name: "Docker / K8s", level: 100 },
  ],
  "DESIGN & CRAFT": [
    { name: "Figma", level: 100 },
    { name: "GSAP / Three.js", level: 100 },
    { name: "Motion Design", level: 100 },
  ],
};

// Philosophy content
export const philosophy = {
  method: {
    R: {
      title: "RECOGNIZE",
      description:
        "Identify inefficiencies and untapped opportunities through first principles",
    },
    S: {
      title: "SHAPE",
      description:
        "Craft bespoke strategy aligning cutting-edge technology with vision",
    },
    H: {
      title: "HARNESS",
      description:
        "Deploy solutions that transform ecosystems into high-performing engines",
    },
  },
  mantra: "Work hard in silence; let your success be your noise.",
  docstring: `Not just building software—redefining how technology transforms business.
Merging innovative AI with human-centered design.
Crafting agile, bespoke digital solutions that drive measurable change.`,
};

// Wisdom logs
export const wisdomLogs = [
  "Work hard in silence; let your success be your noise.",
  "You are the result of every choice you didn't run away from.",
  "Comfort is not clarity. You were meant for more.",
  "The test is not survival. It's alignment.",
  "Give it freely. Light the next mind.",
];

// Connections
export const connections = [
  {
    name: "RSH — Radiant Synergy Hub",
    url: "https://rsh.studio",
    description:
      '"Break Free from the Old. Embrace the Future." Bespoke digital experiences through strategy, creativity, and precision.',
  },
  {
    name: "Wynter",
    url: "https://wynter.com",
    description:
      "B2B message testing platform. AI-powered audience intelligence.",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/john-leskas",
    description: "Professional signal transmission.",
  },
  {
    name: "Email",
    url: "mailto:john@rsh.studio",
    description: "Direct channel. No noise.",
  },
];

// Available commands
export const availableCommands = [
  { cmd: "help", description: "Show available commands" },
  { cmd: "whoami", description: "Display identity and current roles" },
  { cmd: "journey", description: "Experience the Hero's Journey timeline" },
  { cmd: "journey --stage [1-9]", description: "Jump to a specific stage" },
  { cmd: "skills", description: "Display the technical toolbox" },
  { cmd: "philosophy", description: "Read the operating principles" },
  { cmd: "connect", description: "Show connection channels" },
  { cmd: "wisdom", description: "Stream wisdom logs" },
  { cmd: "clear", description: "Clear the terminal" },
  { cmd: "about", description: "About this experience" },
];

// Hidden commands (easter eggs)
export const hiddenCommands = [
  "sudo",
  "hack",
  "matrix",
  "ignite",
  "spark",
  "radiate",
  "ember",
];

// Boot sequence messages
export const bootSequence = [
  "[BOOT] Initializing consciousness...",
  "[LOAD] Experience matrix: 20+ years compiled",
  "[SYNC] Dual-thread execution: RSH ◈ Wynter",
  "[STATUS] Current epoch: THE IGNITION POINT",
  "",
  "System ready. Type 'help' to begin.",
];

// ASCII art header
export const asciiHeader = `
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║   ███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗         ║
║   ██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║         ║
║   ███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║         ║
║   ╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║         ║
║   ███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║         ║
║   ╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝         ║
║                                                                  ║
║   ██╗     ███████╗███████╗██╗  ██╗ █████╗ ███████╗              ║
║   ██║     ██╔════╝██╔════╝██║ ██╔╝██╔══██╗██╔════╝              ║
║   ██║     █████╗  ███████╗█████╔╝ ███████║███████╗              ║
║   ██║     ██╔══╝  ╚════██║██╔═██╗ ██╔══██║╚════██║              ║
║   ███████╗███████╗███████║██║  ██╗██║  ██║███████║              ║
║   ╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝              ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝`;

// Creator message (easter egg)
export const creatorMessage = `
════════════════════════════════════════════════════════════════════

                    MESSAGE FROM THE CREATOR

════════════════════════════════════════════════════════════════════

I built this experience because I lived it.

Every detour, every crash, every late-night compile—was part of my
own hero's journey. The hardest battles weren't against bugs or
bosses, but against doubt and inertia.

If you've made it this far, know this:
You don't need permission to become the hero.
You already are.

This was never about escape.
It was always about becoming.

                                        — John Leskas
                                           The Architect

════════════════════════════════════════════════════════════════════
`;

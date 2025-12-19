// ═══════════════════════════════════════════════════════════════════════════
//                         THE RSH ARCANE SYSTEM
//                    Terminal Gateway - Content Library
// ═══════════════════════════════════════════════════════════════════════════

// Sigils - Sacred symbols collected during the journey
export const sigils = {
  ember: {
    symbol: "🜂",
    name: "The Ember",
    meaning: "The spark within. The beginning of all fire.",
    ascii: `
      ╭───────────────╮
      │     . * .     │
      │    * 🜂 *    │
      │     ' * '     │
      ╰───────────────╯`,
  },
  forge: {
    symbol: "⚒",
    name: "The Forge",
    meaning: "Where pressure becomes diamond. Where chaos becomes craft.",
    ascii: `
      ╭───────────────╮
      │    ╱ ⚒ ╲    │
      │   ╱─────╲   │
      │  ▓▓▓▓▓▓▓▓▓  │
      ╰───────────────╯`,
  },
  mirror: {
    symbol: "◈",
    name: "The Mirror",
    meaning: "Reflect inward. Truth isn't given—it's remembered.",
    ascii: `
      ╭───────────────╮
      │   ╱╲   ╱╲   │
      │  ╱  ◈  ╲  │
      │   ╲╱   ╲╱   │
      ╰───────────────╯`,
  },
  threshold: {
    symbol: "⌘",
    name: "The Threshold",
    meaning: "The doorway between what was and what will be.",
    ascii: `
      ╭───────────────╮
      │  ┌─────────┐  │
      │  │    ⌘    │  │
      │  └────┴────┘  │
      ╰───────────────╯`,
  },
  crown: {
    symbol: "♔",
    name: "The Crown",
    meaning: "Mastery earned, not given. The reward of persistence.",
    ascii: `
      ╭───────────────╮
      │    ╱│♔│╲    │
      │   ╱ ─┼─ ╲   │
      │  ▔▔▔▔▔▔▔▔▔  │
      ╰───────────────╯`,
  },
  spiral: {
    symbol: "◎",
    name: "The Spiral",
    meaning: "The journey never ends. Each return brings new depth.",
    ascii: `
      ╭───────────────╮
      │    ╭──◎──╮    │
      │   ╭╯     ╰╮   │
      │   ╰───────╯   │
      ╰───────────────╯`,
  },
  radiant: {
    symbol: "☀",
    name: "The Radiant",
    meaning: "Full illumination. The architect revealed.",
    ascii: `
      ╭───────────────╮
      │   ╲ │ ╱   │
      │   ──☀──   │
      │   ╱ │ ╲   │
      ╰───────────────╯`,
  },
  oracle: {
    symbol: "⊛",
    name: "The Oracle",
    meaning: "The voice that speaks from within the code.",
    ascii: `
      ╭───────────────╮
      │    ◯⊛◯    │
      │   ◯   ◯   │
      │    ◯─◯    │
      ╰───────────────╯`,
  },
  key: {
    symbol: "⚿",
    name: "The Master Key",
    meaning: "Opens all doors. Unlocks all realms.",
    ascii: `
      ╭───────────────╮
      │     ╭─╮     │
      │     │⚿│     │
      │     ╰┬╯     │
      │      │      │
      ╰───────────────╯`,
  },
};

// Hero's Journey Stages - Enhanced with interactivity
export const stages = [
  {
    id: 1,
    year: "2002-2006",
    title: "THE ORDINARY WORLD",
    subtitle: "Before the Spark",
    sigil: sigils.ember,
    description:
      "In the quiet hum of late-night terminals, a pattern emerged. Not just code, but curiosity. Not just work, but wonder.",
    prompt: "What calls to you from beyond the comfortable?",
    hint: "The answer lies in what keeps you awake at night...",
    answer: "purpose",
    altAnswers: ["meaning", "more", "growth", "something", "change"],
    revelation: `
  ┌─────────────────────────────────────────────────────────────────┐
  │  SIGIL UNLOCKED: 🜂 THE EMBER                                  │
  └─────────────────────────────────────────────────────────────────┘

  The first flame ignites. You have recognized the spark within.

  "Comfort is not clarity. You were meant for more."

  ─────────────────────────────────────────────────────────────────
  ARTIFACT CLAIMED: ember-token-001
  This key may unlock hidden passages in other RSH portals.
  ─────────────────────────────────────────────────────────────────`,
    status: "[ORIGIN] Self-taught developer, Athens, Greece\n[PROCESS] First lines of code written in the silence between certainties",
    lesson: "Comfort is not clarity. You were meant for more.",
    type: "echo",
  },
  {
    id: 2,
    year: "2006",
    title: "THE CALL TO ADVENTURE",
    subtitle: "The Whisper of Code",
    sigil: sigils.forge,
    description:
      "The call came not as thunder, but as whisper. An opportunity in the UK. A chance to leave the known world behind.",
    prompt: "When the call comes, what do you do?",
    hint: "Heroes don't wait for permission...",
    answer: "answer",
    altAnswers: ["respond", "go", "leap", "jump", "accept", "follow"],
    revelation: `
  ┌─────────────────────────────────────────────────────────────────┐
  │  SIGIL UNLOCKED: ⚒ THE FORGE                                   │
  └─────────────────────────────────────────────────────────────────┘

  You chose to answer. The forge awaits those who dare.

  "The code doesn't call everyone. But it called you."

  ─────────────────────────────────────────────────────────────────
  ARTIFACT CLAIMED: forge-token-002
  The forge remembers those who enter willingly.
  ─────────────────────────────────────────────────────────────────`,
    status: "[MIGRATION] Greece → United Kingdom\n[STATUS] The Ordinary World ends. The journey begins.",
    lesson: "The code doesn't call everyone. But it called you.",
    type: "glitch",
  },
  {
    id: 3,
    year: "2007-2010",
    title: "CROSSING THE THRESHOLD",
    subtitle: "Into the Unknown",
    sigil: sigils.threshold,
    description:
      "London. Manchester. Every city a classroom. Every project a teacher. The point of no return had been crossed.",
    prompt: "What must you leave behind to move forward?",
    hint: "Sometimes the heaviest weight is certainty itself...",
    answer: "fear",
    altAnswers: ["doubt", "comfort", "safety", "certainty", "past", "old"],
    revelation: `
  ┌─────────────────────────────────────────────────────────────────┐
  │  SIGIL UNLOCKED: ⌘ THE THRESHOLD                               │
  └─────────────────────────────────────────────────────────────────┘

  You crossed. There is no going back—only forward.

  "Beyond the firewall lies your real self."

  ─────────────────────────────────────────────────────────────────
  ARTIFACT CLAIMED: threshold-token-003
  The doorway recognizes you now.
  ─────────────────────────────────────────────────────────────────`,
    status: "[IMMERSION] UK tech ecosystem fully engaged\n[GROWTH] From junior to architect in 3 years",
    lesson: "Beyond the firewall lies your real self.",
    type: "trust",
  },
  {
    id: 4,
    year: "2010-2018",
    title: "TESTS, ALLIES, ENEMIES",
    subtitle: "The Long Road",
    sigil: sigils.forge,
    description:
      "Eight years of building. Clients became allies. Challenges became teachers. Each project forged new capabilities.",
    prompt: "What transforms an obstacle into an ally?",
    hint: "The alchemist's secret is perspective...",
    answer: "perspective",
    altAnswers: ["mindset", "attitude", "learning", "growth", "wisdom", "patience"],
    revelation: `
  ┌─────────────────────────────────────────────────────────────────┐
  │  SIGIL ENHANCED: ⚒ THE FORGE (LEVEL II)                        │
  └─────────────────────────────────────────────────────────────────┘

  The forge burns brighter. You've learned to see gifts in disguise.

  "Every hero doubts before they begin."

  ─────────────────────────────────────────────────────────────────
  ALLIES RECORDED: Mozilla, Washington Post, Spotify, Made Studios
  The network strengthens with each authentic connection.
  ─────────────────────────────────────────────────────────────────`,
    status: "[ALLIES] Global agencies, world-class brands\n[FORGED] Senior Engineer → Lead → Architect",
    lesson: "Every hero doubts before they begin.",
    type: "doubt",
  },
  {
    id: 5,
    year: "2018-2019",
    title: "THE ORDEAL",
    subtitle: "RSH Is Born",
    sigil: sigils.mirror,
    description:
      "The deepest cave holds the greatest treasure. RSH was born not from abundance, but from a single audacious belief: small teams can shape extraordinary experiences.",
    prompt: "What do you find in the deepest darkness?",
    hint: "The cave hides what you've been seeking all along...",
    answer: "self",
    altAnswers: ["truth", "purpose", "identity", "power", "light", "clarity", "yourself"],
    revelation: `
  ┌─────────────────────────────────────────────────────────────────┐
  │  SIGIL UNLOCKED: ◈ THE MIRROR                                  │
  └─────────────────────────────────────────────────────────────────┘

  The mirror reveals: you were the treasure all along.

  "Truth isn't given. It's remembered."

  ─────────────────────────────────────────────────────────────────
  ARTIFACT CLAIMED: mirror-token-005
  [INIT] RSH founded — Limassol, Cyprus
  The reflection now guides others.
  ─────────────────────────────────────────────────────────────────`,
    status: "[INIT] RSH founded — Limassol, Cyprus\n[VISION] CRAFT. CREATIVITY. CLARITY.",
    lesson: "Truth isn't given. It's remembered.",
    type: "mirror",
  },
  {
    id: 6,
    year: "2019-2022",
    title: "THE TRANSFORMATION",
    subtitle: "Forged by Fire",
    sigil: sigils.forge,
    description:
      "The world shifted. A global disruption tested everything. But pressure creates diamonds. RSH emerged antifragile, augmented, ready.",
    prompt: "What is the gift hidden within crisis?",
    hint: "The phoenix knows this secret...",
    answer: "transformation",
    altAnswers: ["change", "growth", "rebirth", "evolution", "opportunity", "renewal"],
    revelation: `
  ┌─────────────────────────────────────────────────────────────────┐
  │  SIGIL ENHANCED: ⚒ THE FORGE (LEVEL III)                       │
  └─────────────────────────────────────────────────────────────────┘

  From the crucible, something new emerges. Stronger. Clearer.

  "Clarity isn't given. It's claimed."

  ─────────────────────────────────────────────────────────────────
  [ALERT] Global disruption detected
  [RESPONSE] Antifragility protocols engaged
  [RESULT] Workflow augmentation: 47% efficiency gain
  ─────────────────────────────────────────────────────────────────`,
    status: "[PROCESS] AI research threads initiated\n[UPGRADE] Wynter: Head of Engineering → Head of AI Engineering",
    lesson: "Clarity isn't given. It's claimed.",
    type: "source",
  },
  {
    id: 7,
    year: "2022-2024",
    title: "THE RETURN",
    subtitle: "Dual-Thread Execution",
    sigil: sigils.crown,
    description:
      "Two paths. One pattern. RSH and Wynter run in parallel—each thread strengthening the other. The architect emerges.",
    prompt: "How do many paths become one journey?",
    hint: "The answer is in the pattern, not the paths...",
    answer: "pattern",
    altAnswers: ["synthesis", "integration", "unity", "harmony", "synergy", "purpose"],
    revelation: `
  ┌─────────────────────────────────────────────────────────────────┐
  │  SIGIL UNLOCKED: ♔ THE CROWN                                   │
  └─────────────────────────────────────────────────────────────────┘

  Mastery is not perfection—it's integration. You wear the crown.

  "Wisdom isn't what you say. It's what you sense."

  ─────────────────────────────────────────────────────────────────
  [THREAD_1] RSH: Founder & Head of Development — RADIANT
  [THREAD_2] Wynter: Chief AI Officer — ACTIVE
  [STATUS] The Architect emerges.
  ─────────────────────────────────────────────────────────────────`,
    status: "[SCAN] Portfolio: Visa, Smartsheet, Nike, Patreon, BMC, Teradata\n[MODE] Dual-thread execution active",
    lesson: "Wisdom isn't what you say. It's what you sense.",
    type: "signal",
  },
  {
    id: 8,
    year: "2025",
    title: "IGNITION",
    subtitle: "Resurrection",
    sigil: sigils.radiant,
    description:
      "This is the ignition point. Chief AI Officer at Wynter. Founder at RSH. Not to scale indiscriminately, but to illuminate what's next.",
    prompt: "What ignites when you stop hiding?",
    hint: "The sun doesn't ask permission to shine...",
    answer: "radiance",
    altAnswers: ["light", "power", "truth", "potential", "self", "everything"],
    revelation: `
  ┌─────────────────────────────────────────────────────────────────┐
  │  SIGIL UNLOCKED: ☀ THE RADIANT                                 │
  └─────────────────────────────────────────────────────────────────┘

  Full illumination achieved. The Architect is online.

  "You are not the hero. You are the path."

  ─────────────────────────────────────────────────────────────────
  RESURRECTION COMPLETE
  All systems radiant. All threads aligned.
  ─────────────────────────────────────────────────────────────────`,
    status: "[THREAD_1] RSH: Founder & Head of Development — RADIANT\n[THREAD_2] Wynter: Chief AI Officer — ACTIVE",
    lesson: "You are not the hero. You are the path.",
    type: "radiant",
  },
  {
    id: 9,
    year: "2025+",
    title: "THE SPIRAL CONTINUES",
    subtitle: "Return with the Elixir",
    sigil: sigils.spiral,
    description:
      "The story doesn't end. It compiles at runtime. The Hero's Journey is not a circle—it's a spiral. Each return brings new depth.",
    prompt: "What do you carry forward to share with others?",
    hint: "The true treasure was never for keeping...",
    answer: "wisdom",
    altAnswers: ["knowledge", "light", "experience", "gift", "truth", "guidance"],
    revelation: `
  ┌─────────────────────────────────────────────────────────────────┐
  │  SIGIL UNLOCKED: ◎ THE SPIRAL                                  │
  └─────────────────────────────────────────────────────────────────┘

  The spiral recognizes you. Each revolution brings new understanding.

  "Give it freely. Light the next mind."

  ─────────────────────────────────────────────────────────────────
  [FUTURE] MSc in Artificial Intelligence — University of Essex [IN PROGRESS]
  [FUTURE] The next chapter writes itself through action

  The journey never ends. Only spirals deeper.
  ─────────────────────────────────────────────────────────────────`,
    status: "[SPIRAL] Each return brings new depth\n[ELIXIR] The wisdom gained is meant to be shared",
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

// The Archives - Transmissions
export const transmissions = [
  {
    id: "tx-001",
    title: "AI Has No Soul",
    excerpt: "What AI reveals about our fears, projections, and insecurities.",
    type: "philosophical",
    unlocked: true,
  },
  {
    id: "tx-002",
    title: "The Builder's Guilt",
    excerpt: "Lessons from building RSH inside scarcity. Pain of creation, pressure as alchemy.",
    type: "reflective",
    unlocked: true,
  },
  {
    id: "tx-003",
    title: "The Future Isn't Built. It's Remembered.",
    excerpt: "Reframing 'future' as mythic return, not invention.",
    type: "philosophical",
    unlocked: false,
  },
];

// The Ember Logs
export const emberLogs = [
  {
    timestamp: "2024.12.15 03:42",
    entry: "Three hours past midnight. The code finally compiled. Not the syntax—the meaning.",
  },
  {
    timestamp: "2024.11.28 23:17",
    entry: "We build mirrors, not funnels. The user should see themselves reflected, not directed.",
  },
  {
    timestamp: "2024.10.03 01:33",
    entry: "Myth is infrastructure. Every feature is a symbol. Every symbol, a doorway.",
  },
  {
    timestamp: "2024.09.19 04:12",
    entry: "The quietest moments hold the loudest truths. Keep building in the silence.",
  },
];

// Wisdom logs
export const wisdomLogs = [
  "Work hard in silence; let your success be your noise.",
  "You are the result of every choice you didn't run away from.",
  "Comfort is not clarity. You were meant for more.",
  "The test is not survival. It's alignment.",
  "Give it freely. Light the next mind.",
  "Myth is the OS. Clarity is the protocol. You are the architect.",
  "Every word is a glyph. Every interaction, an initiation.",
  "We don't design interactions. We design thresholds.",
  "The oracle doesn't answer. It mirrors.",
  "You don't have a portfolio. You have portals.",
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

// Available commands - Extended
export const availableCommands = [
  { cmd: "help", description: "Show available commands" },
  { cmd: "whoami", description: "Display identity and current roles" },
  { cmd: "journey", description: "Begin the interactive Hero's Journey" },
  { cmd: "journey --stage [1-9]", description: "Jump to a specific stage" },
  { cmd: "skills", description: "Display the technical toolbox" },
  { cmd: "philosophy", description: "Read the operating principles" },
  { cmd: "connect", description: "Show connection channels" },
  { cmd: "wisdom", description: "Stream wisdom logs" },
  { cmd: "archives", description: "Access The Archives (transmissions)" },
  { cmd: "ember", description: "Read The Ember Logs" },
  { cmd: "sigils", description: "View collected sigils" },
  { cmd: "codex", description: "Access The Codex" },
  { cmd: "signal", description: "Subscribe to The Signal" },
  { cmd: "oracle", description: "Consult The Oracle" },
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
  "creator",
  "cave",
  "inmost",
  "decrypt",
  "resonance",
  "archetype",
  "ritual",
  "awaken",
  "portal",
];

// Boot sequence messages
export const bootSequence = [
  "[BOOT] Initializing consciousness...",
  "[LOAD] Experience matrix: 20+ years compiled",
  "[SYNC] Dual-thread execution: RSH ◈ Wynter",
  "[PORTAL] Terminal gateway active",
  "[STATUS] Current epoch: THE IGNITION POINT",
  "",
  "System ready. Type 'help' to begin.",
  "",
  "  ─── HINT ───",
  "  Not all commands are visible.",
  "  Some paths reveal themselves to those who seek.",
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
║   ─────────────────────────────────────────────────────────────  ║
║               T E R M I N A L   G A T E W A Y                    ║
║           One Portal of the RSH Arcane System                    ║
║   ─────────────────────────────────────────────────────────────  ║
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

                    SECRET TOKEN UNLOCKED

  CREATOR-KEY-JL-2025

  This key grants access to hidden realms across RSH portals.
  Present it where you find other terminals.

════════════════════════════════════════════════════════════════════
`;

// The Inmost Cave (deepest easter egg)
export const inmostCave = `
═══════════════════════════════════════════════════════════════════

                     T H E   I N M O S T   C A V E

═══════════════════════════════════════════════════════════════════

                              ╭──────╮
                             ╱        ╲
                            ╱    🜂    ╲
                           ╱            ╲
                          ╱      ◈       ╲
                         ╱                ╲
                        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

You've found the deepest chamber.

This is where transformation happens.
Not in the light—but in the darkness we choose to enter.

The cave asks only one thing:
What will you become when you leave?

─────────────────────────────────────────────────────────────────

"The cave you fear to enter holds the treasure you seek."
                                        — Joseph Campbell

─────────────────────────────────────────────────────────────────

SACRED ARTIFACT UNLOCKED: CAVE-SIGIL-∞

This is the master key. It opens all doors.
Carry it forward. Use it wisely.

═══════════════════════════════════════════════════════════════════
`;

// Oracle responses
export const oracleResponses = [
  "The glyph you seek was once carved in silence. Let your stillness be louder.",
  "What you're building is already complete. You're simply remembering it.",
  "The fork in the path is an illusion. Both roads lead inward.",
  "Your next breakthrough hides in the code you're afraid to delete.",
  "The signal isn't weak. Your receiver is tuned to the wrong frequency.",
  "Stop optimizing. Start originating.",
  "The architecture of tomorrow is built with the patience of today.",
  "You're not stuck. You're composting. Growth follows decay.",
  "The answer isn't in the next framework. It's in the last mistake.",
  "Clarity comes not from more information, but from fewer attachments.",
  "The path forward is the path you've been avoiding.",
  "What feels like resistance is often redirection.",
];

// Codex entries
export const codexEntries = [
  {
    title: "The Principle of Ritual",
    content: "Ritual represents intention layered into experience. Nothing happens by accident. Every interaction is a ceremony.",
  },
  {
    title: "The Principle of Resonance",
    content: "Resonance reflects harmony—psychological, emotional, aesthetic. Everything must feel right at the frequency of archetypal truth.",
  },
  {
    title: "The Principle of Radiance",
    content: "Radiance is the outward expression of inner clarity. It is pure signal emerging from internal alignment.",
  },
];

// Archetype test hint
export const archetypeHint = `
═══════════════════════════════════════════════════════════════════
                  ARCHETYPE RESONANCE PROTOCOL
═══════════════════════════════════════════════════════════════════

The full Archetype Resonance Test awaits at the main RSH portal.

This terminal can reveal fragments of your archetype through
the journey you take, the answers you give, and the paths
you choose to explore.

Complete the full test at: https://rsh.studio/resonance

─────────────────────────────────────────────────────────────────
Current detected resonance patterns:

  • Builder tendencies: STRONG
  • Seeker frequencies: ACTIVE
  • Architect signatures: EMERGING

═══════════════════════════════════════════════════════════════════
`;

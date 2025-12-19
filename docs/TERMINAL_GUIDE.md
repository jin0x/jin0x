# Terminal Gateway - User Guide

The Terminal Gateway is one portal of the RSH Arcane System. It's an interactive experience that tells John Leskas's story through the Hero's Journey narrative.

## Available Commands

### Core Commands
| Command | Description |
|---------|-------------|
| `help` | Show all available commands |
| `whoami` | Display identity and current roles |
| `journey` | Begin the interactive Hero's Journey |
| `journey --stage [1-9]` | Jump to a specific stage |
| `skills` | Display the technical toolbox |
| `philosophy` | Read the operating principles |
| `connect` | Show connection channels |
| `wisdom` | Stream a random wisdom log |
| `wisdom --all` | Show all wisdom logs |

### RSH Arcane System Commands
| Command | Description |
|---------|-------------|
| `archives` | Access The Archives (transmissions) |
| `ember` | Read The Ember Logs |
| `sigils` | View collected sigils and artifacts |
| `codex` | Access The Codex |
| `signal` | Subscribe to The Signal |
| `oracle` | Consult The Oracle |

### Utility Commands
| Command | Description |
|---------|-------------|
| `clear` | Clear the terminal |
| `about` | About this experience |

## Hidden Commands (Easter Eggs)

Discover these by exploring:

- `sudo` - Try root access
- `matrix` - Red pill or blue pill?
- `ignite` / `spark` / `radiate` - RSH mantras
- `creator` - Message from the creator + secret token
- `cave` / `inmost` - The Inmost Cave (deepest secret)
- `portal` / `map` - View the portal map
- `awaken` / `wake` - Start transformation
- `ritual` - View ritual progress
- `resonance` / `archetype` - Archetype resonance test info

## The Interactive Journey

When you type `journey`, you enter an interactive mode:

1. **9 Stages of the Hero's Journey** - Each based on real career milestones
2. **Interactive Prompts** - Each stage asks a question
3. **Answers** - Type your answer to unlock the sigil
4. **Hints** - Type `hint` if you're stuck
5. **Skip** - Type `skip` to move to next stage (sigil remains hidden)
6. **Exit** - Type `exit` to leave journey mode

### Stages

1. **The Ordinary World** (2002-2006) - Before the Spark
2. **The Call to Adventure** (2006) - The Whisper of Code
3. **Crossing the Threshold** (2007-2010) - Into the Unknown
4. **Tests, Allies, Enemies** (2010-2018) - The Long Road
5. **The Ordeal** (2018-2019) - RSH Is Born
6. **The Transformation** (2019-2022) - Forged by Fire
7. **The Return** (2022-2024) - Dual-Thread Execution
8. **Ignition** (2025) - Resurrection
9. **The Spiral Continues** (2025+) - Return with the Elixir

### Sigils

Each stage has an associated sigil that can be unlocked by answering correctly:

- 🜂 **The Ember** - The spark within
- ⚒ **The Forge** - Where pressure becomes diamond
- ⌘ **The Threshold** - The doorway between what was and will be
- ◈ **The Mirror** - Reflect inward
- ♔ **The Crown** - Mastery earned, not given
- ☀ **The Radiant** - Full illumination
- ◎ **The Spiral** - The journey never ends
- ⊛ **The Oracle** - The voice from within the code
- ⚿ **The Master Key** - Opens all doors

### Artifacts

Artifacts are tokens collected during the journey and through easter eggs. They can be used to unlock hidden areas in other RSH portals:

- `ember-token-001` through `spiral-token-009` - Journey artifacts
- `IGNITE-KEY-001` - From the ignite easter egg
- `CREATOR-KEY-JL-2025` - From the creator easter egg
- `CAVE-SIGIL-∞` - From the inmost cave
- `CONSCIOUS-KEY-∞` - From the awaken easter egg

## The Spiral Philosophy

The Hero's Journey in this terminal is designed as a **spiral, not a circle**:

> "The Hero's Journey is not a circle—it's a spiral. Each return brings new depth, new understanding."

This means:
- The journey can be repeated
- Each time may yield new insights
- Progress is remembered
- Depth is rewarded over speed

## Connection to RSH Arcane System

This terminal is connected to the broader RSH mythic architecture:

- **The Archives** - Long-form transmissions and chronicles
- **The Codex** - Sacred doctrine and philosophy
- **The Signal** - Encrypted newsletter
- **The Oracle** - AI-powered mythic guidance
- **The Inmost Cave** - Deepest transformation space

Artifacts collected here may unlock hidden passages in these other portals.

## Technical Notes

- Built with Next.js 16 + TypeScript
- Tailwind CSS for styling
- JetBrains Mono font
- No external dependencies for terminal functionality
- State persisted in session (refreshing resets progress)

---

*"Myth is the OS. Clarity is the protocol. You are the architect."*

"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  stages,
  identity,
  skills,
  philosophy,
  wisdomLogs,
  connections,
  availableCommands,
  bootSequence,
  asciiHeader,
  creatorMessage,
} from "@/lib/content";

export interface TerminalLine {
  id: string;
  type: "input" | "output" | "ascii" | "error" | "system" | "stage";
  content: string;
  timestamp: number;
}

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBooting, setIsBooting] = useState(true);
  const [currentJourneyStage, setCurrentJourneyStage] = useState(0);
  const [isJourneyMode, setIsJourneyMode] = useState(false);
  const lineIdRef = useRef(0);

  const generateId = () => {
    lineIdRef.current += 1;
    return `line-${lineIdRef.current}-${Date.now()}`;
  };

  const addLine = useCallback(
    (
      content: string,
      type: TerminalLine["type"] = "output"
    ): void => {
      setLines((prev) => [
        ...prev,
        { id: generateId(), type, content, timestamp: Date.now() },
      ]);
    },
    []
  );

  const addLines = useCallback(
    (contents: string[], type: TerminalLine["type"] = "output"): void => {
      const newLines = contents.map((content) => ({
        id: generateId(),
        type,
        content,
        timestamp: Date.now(),
      }));
      setLines((prev) => [...prev, ...newLines]);
    },
    []
  );

  // Boot sequence
  useEffect(() => {
    if (!isBooting) return;

    const bootLines = async () => {
      addLine(asciiHeader, "ascii");
      await new Promise((r) => setTimeout(r, 500));

      for (const msg of bootSequence) {
        addLine(msg, "system");
        await new Promise((r) => setTimeout(r, 200));
      }

      setIsBooting(false);
    };

    bootLines();
  }, [isBooting, addLine]);

  const handleHelp = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                        AVAILABLE COMMANDS");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    availableCommands.forEach((cmd) => {
      addLine(`  ${cmd.cmd.padEnd(25)} ${cmd.description}`);
    });
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
  }, [addLine]);

  const handleWhoami = useCallback(() => {
    addLine("");
    addLine("┌──────────────────────────────────────────────────────────────────┐");
    addLine("│  IDENTITY MATRIX                                                 │");
    addLine("└──────────────────────────────────────────────────────────────────┘");
    addLine("");
    addLine(`  Name:       ${identity.name}`);
    addLine(`  Archetype:  ${identity.archetype}`);
    addLine(`  Class:      ${identity.class}`);
    addLine("");
    addLine("  ─── DUAL-THREAD EXECUTION ───");
    addLine("");
    addLine("  ◈ RSH");
    addLine(`    Role:       ${identity.threads.RSH.role}`);
    addLine(`    Essence:    ${identity.threads.RSH.essence}`);
    addLine(`    Philosophy: ${identity.threads.RSH.philosophy}`);
    addLine("");
    addLine("  ◈ Wynter");
    addLine(`    Role:       ${identity.threads.Wynter.role}`);
    addLine(`    Essence:    ${identity.threads.Wynter.essence}`);
    addLine(`    Philosophy: ${identity.threads.Wynter.philosophy}`);
    addLine("");
    addLine("  ─── OPERATING PRINCIPLES ───");
    addLine("");
    identity.operatingPrinciples.forEach((p) => {
      addLine(`    • ${p}`);
    });
    addLine("");
    addLine(`  Current State: "${identity.currentState}"`);
    addLine("");
  }, [addLine]);

  const handleJourney = useCallback(
    (stageNum?: number) => {
      if (stageNum !== undefined && stageNum >= 1 && stageNum <= stages.length) {
        const stage = stages[stageNum - 1];
        addLine("");
        addLine("═══════════════════════════════════════════════════════════════════");
        addLine(`                    [${stage.year}] ─ ${stage.title}`);
        addLine(`                         ${stage.subtitle}`);
        addLine("═══════════════════════════════════════════════════════════════════");
        addLine("");
        addLine(`  "${stage.description}"`);
        addLine("");
        stage.status.split("\n").forEach((s) => addLine(`  ${s}`));
        addLine("");
        addLine(`  ─── LESSON ───`);
        addLine(`  "${stage.lesson}"`);
        addLine("");
        return;
      }

      // Start journey mode
      setIsJourneyMode(true);
      setCurrentJourneyStage(0);
      addLine("");
      addLine("═══════════════════════════════════════════════════════════════════");
      addLine("");
      addLine("                     T H E   H E R O ' S   J O U R N E Y");
      addLine("                  ─────────────────────────────────────────");
      addLine("                     From Constraint to Creative Mastery");
      addLine("");
      addLine("═══════════════════════════════════════════════════════════════════");
      addLine("");
      addLine("  Press [ENTER] to advance through each stage...");
      addLine("  Type 'exit' to leave the journey at any time.");
      addLine("");

      // Show first stage
      const stage = stages[0];
      addLine("───────────────────────────────────────────────────────────────────");
      addLine(`  [${stage.year}] ─ ${stage.title}`);
      addLine(`  ${stage.subtitle}`);
      addLine("───────────────────────────────────────────────────────────────────");
      addLine("");
      addLine(`  "${stage.description}"`);
      addLine("");
      stage.status.split("\n").forEach((s) => addLine(`  ${s}`));
      addLine("");
      addLine(`  Lesson: "${stage.lesson}"`);
      addLine("");
      addLine(`  [Stage 1/${stages.length}] Press ENTER to continue...`);
    },
    [addLine]
  );

  const advanceJourney = useCallback(() => {
    const nextStage = currentJourneyStage + 1;

    if (nextStage >= stages.length) {
      setIsJourneyMode(false);
      setCurrentJourneyStage(0);
      addLine("");
      addLine("═══════════════════════════════════════════════════════════════════");
      addLine("");
      addLine("  The cursor blinks.");
      addLine("  The story compiles at runtime.");
      addLine("");
      addLine("  Every challenge is a spark.");
      addLine("  Every solution, a signal forward.");
      addLine("");
      addLine("  ─────────────────────────────────────────────────────────────────");
      addLine("");
      addLine("  You've reached the end of the visible path.");
      addLine("  But not every journey follows the map.");
      addLine("");
      addLine("  Some detours lead to discovery.");
      addLine("  To insight.");
      addLine("  To the quiet ember that lives beneath the interface.");
      addLine("");
      addLine("═══════════════════════════════════════════════════════════════════");
      addLine("");
      addLine("  Journey complete. Type 'help' for more commands.");
      addLine("");
      return;
    }

    setCurrentJourneyStage(nextStage);
    const stage = stages[nextStage];
    addLine("");
    addLine("───────────────────────────────────────────────────────────────────");
    addLine(`  [${stage.year}] ─ ${stage.title}`);
    addLine(`  ${stage.subtitle}`);
    addLine("───────────────────────────────────────────────────────────────────");
    addLine("");
    addLine(`  "${stage.description}"`);
    addLine("");
    stage.status.split("\n").forEach((s) => addLine(`  ${s}`));
    addLine("");
    addLine(`  Lesson: "${stage.lesson}"`);
    addLine("");
    addLine(`  [Stage ${nextStage + 1}/${stages.length}] Press ENTER to continue...`);
  }, [currentJourneyStage, addLine]);

  const handleSkills = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                           T H E   T O O L B O X");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");

    Object.entries(skills).forEach(([category, items]) => {
      addLine(`  ┌─ ${category} ${"─".repeat(50 - category.length)}┐`);
      items.forEach((skill) => {
        const filled = Math.floor(skill.level / 2.5);
        const empty = 40 - filled;
        const bar = "▓".repeat(filled) + "░".repeat(empty);
        addLine(`  │  ${bar}  ${skill.name.padEnd(18)} │`);
      });
      addLine(`  └${"─".repeat(60)}┘`);
      addLine("");
    });
  }, [addLine]);

  const handlePhilosophy = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                      THE OPERATING SYSTEM");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine('  """');
    philosophy.docstring.split("\n").forEach((line) => {
      addLine(`  ${line}`);
    });
    addLine('  """');
    addLine("");
    addLine("  ─── THE R-S-H METHOD ───");
    addLine("");
    addLine("  ┌─────────────────────────────────────────────────────────────┐");
    Object.entries(philosophy.method).forEach(([key, value]) => {
      addLine(`  │  ${key} - ${value.title.padEnd(12)} │ ${value.description.slice(0, 40)}...`);
    });
    addLine("  └─────────────────────────────────────────────────────────────┘");
    addLine("");
    addLine("  ─── MANTRA ───");
    addLine(`  "${philosophy.mantra}"`);
    addLine("");
  }, [addLine]);

  const handleConnect = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                        E S T A B L I S H E D");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    connections.forEach((conn) => {
      addLine(`  ◈ ${conn.name}`);
      addLine(`    └─→ ${conn.url}`);
      addLine(`        ${conn.description}`);
      addLine("");
    });
  }, [addLine]);

  const handleWisdom = useCallback(() => {
    addLine("");
    addLine("┌──────────────────────────────────────────────────────────────────┐");
    addLine("│  tail -f /var/log/wisdom.log                                     │");
    addLine("└──────────────────────────────────────────────────────────────────┘");
    addLine("");
    wisdomLogs.forEach((log) => {
      addLine(`  [LOG] "${log}"`);
      addLine("");
    });
  }, [addLine]);

  const handleAbout = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                    ABOUT THIS EXPERIENCE");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine("  This interactive terminal is a journey through the Hero's Path—");
    addLine("  a narrative experience that mirrors the evolution of The Architect.");
    addLine("");
    addLine("  Built with:");
    addLine("    • Next.js + TypeScript");
    addLine("    • Tailwind CSS");
    addLine("    • Campbell's Monomyth");
    addLine("    • 20+ years of accumulated wisdom");
    addLine("");
    addLine("  The terminal is more than an interface.");
    addLine("  It's a philosophy made interactive.");
    addLine("");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("  RADIATE. EMPOWER. TRANSFORM.");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("");
  }, [addLine]);

  const handleClear = useCallback(() => {
    setLines([]);
    addLine(asciiHeader, "ascii");
    addLine("");
    addLine("[SYSTEM] Terminal cleared. Type 'help' for commands.");
    addLine("");
  }, [addLine]);

  // Easter eggs
  const handleSudo = useCallback(() => {
    addLine("");
    addLine("  [ACCESS DENIED]");
    addLine("  Nice try. The Architect doesn't need sudo.");
    addLine("  The system bends to intention, not permission.");
    addLine("");
  }, [addLine]);

  const handleMatrix = useCallback(() => {
    addLine("");
    addLine("  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
    addLine("  ░ The Matrix has you, Neo.                                   ░");
    addLine("  ░ But The Architect... The Architect shapes the Matrix.      ░");
    addLine("  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░");
    addLine("");
  }, [addLine]);

  const handleIgnite = useCallback(() => {
    addLine("");
    addLine("  ════════════════════════════════════════════════════════════");
    addLine("");
    addLine("          ██╗ ██████╗ ███╗   ██╗██╗████████╗███████╗");
    addLine("          ██║██╔════╝ ████╗  ██║██║╚══██╔══╝██╔════╝");
    addLine("          ██║██║  ███╗██╔██╗ ██║██║   ██║   █████╗  ");
    addLine("          ██║██║   ██║██║╚██╗██║██║   ██║   ██╔══╝  ");
    addLine("          ██║╚██████╔╝██║ ╚████║██║   ██║   ███████╗");
    addLine("          ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝   ╚══════╝");
    addLine("");
    addLine("  This is the ignition point.");
    addLine("  You've unlocked the spark.");
    addLine("");
    addLine("  ════════════════════════════════════════════════════════════");
    addLine("");
  }, [addLine]);

  const handleEmber = useCallback(() => {
    addLine(creatorMessage);
  }, [addLine]);

  const processCommand = useCallback(
    (cmd: string) => {
      const trimmedCmd = cmd.trim().toLowerCase();
      const parts = trimmedCmd.split(" ");
      const mainCmd = parts[0];

      // Add input line
      addLine(`guest@leskas.system ~ $ ${cmd}`, "input");

      // Handle journey mode
      if (isJourneyMode) {
        if (trimmedCmd === "exit") {
          setIsJourneyMode(false);
          setCurrentJourneyStage(0);
          addLine("");
          addLine("  [Journey interrupted. The path remains open.]");
          addLine("");
          return;
        }
        if (trimmedCmd === "" || trimmedCmd === "next") {
          advanceJourney();
          return;
        }
      }

      // Parse journey --stage N
      if (mainCmd === "journey" && parts.includes("--stage")) {
        const stageIndex = parts.indexOf("--stage");
        const stageNum = parseInt(parts[stageIndex + 1], 10);
        if (!isNaN(stageNum)) {
          handleJourney(stageNum);
          return;
        }
      }

      // Command routing
      switch (mainCmd) {
        case "help":
          handleHelp();
          break;
        case "whoami":
          handleWhoami();
          break;
        case "journey":
          handleJourney();
          break;
        case "skills":
          handleSkills();
          break;
        case "philosophy":
          handlePhilosophy();
          break;
        case "connect":
          handleConnect();
          break;
        case "wisdom":
          handleWisdom();
          break;
        case "about":
          handleAbout();
          break;
        case "clear":
          handleClear();
          break;
        case "sudo":
          handleSudo();
          break;
        case "matrix":
          handleMatrix();
          break;
        case "ignite":
        case "spark":
        case "radiate":
          handleIgnite();
          break;
        case "ember":
        case "creator":
          handleEmber();
          break;
        case "":
          break;
        default:
          addLine("");
          addLine(`  Command not found: ${mainCmd}`);
          addLine("  Type 'help' to see available commands.");
          addLine("");
          break;
      }
    },
    [
      addLine,
      isJourneyMode,
      advanceJourney,
      handleHelp,
      handleWhoami,
      handleJourney,
      handleSkills,
      handlePhilosophy,
      handleConnect,
      handleWisdom,
      handleAbout,
      handleClear,
      handleSudo,
      handleMatrix,
      handleIgnite,
      handleEmber,
    ]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        if (currentInput.trim() || isJourneyMode) {
          processCommand(currentInput);
          if (currentInput.trim()) {
            setCommandHistory((prev) => [...prev, currentInput]);
          }
          setCurrentInput("");
          setHistoryIndex(-1);
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length > 0) {
          const newIndex =
            historyIndex < commandHistory.length - 1
              ? historyIndex + 1
              : historyIndex;
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
        } else if (historyIndex === 0) {
          setHistoryIndex(-1);
          setCurrentInput("");
        }
      }
    },
    [currentInput, commandHistory, historyIndex, processCommand, isJourneyMode]
  );

  return {
    lines,
    currentInput,
    setCurrentInput,
    handleKeyDown,
    isBooting,
    isJourneyMode,
  };
}

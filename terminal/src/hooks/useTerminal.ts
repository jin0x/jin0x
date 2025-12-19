"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  stages,
  sigils,
  identity,
  skills,
  philosophy,
  wisdomLogs,
  connections,
  availableCommands,
  bootSequence,
  asciiHeader,
  creatorMessage,
  inmostCave,
  oracleResponses,
  codexEntries,
  transmissions,
  emberLogs,
  archetypeHint,
} from "@/lib/content";

export interface TerminalLine {
  id: string;
  type: "input" | "output" | "ascii" | "error" | "system" | "stage" | "prompt" | "success" | "artifact";
  content: string;
  timestamp: number;
}

interface CollectedSigil {
  name: string;
  symbol: string;
  stage: number;
}

export function useTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isBooting, setIsBooting] = useState(true);
  const [currentJourneyStage, setCurrentJourneyStage] = useState(0);
  const [isJourneyMode, setIsJourneyMode] = useState(false);
  const [awaitingAnswer, setAwaitingAnswer] = useState(false);
  const [collectedSigils, setCollectedSigils] = useState<CollectedSigil[]>([]);
  const [collectedArtifacts, setCollectedArtifacts] = useState<string[]>([]);
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
    addLine("  ─── HINT ───");
    addLine("  There are hidden commands. Seek and you shall find.");
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

  const showStagePrompt = useCallback((stageIndex: number) => {
    const stage = stages[stageIndex];
    addLine("");
    addLine("───────────────────────────────────────────────────────────────────");
    addLine(`  [${stage.year}] ─ ${stage.title}`, "stage");
    addLine(`  ${stage.subtitle}`);
    addLine("───────────────────────────────────────────────────────────────────");
    addLine("");
    addLine(`  "${stage.description}"`);
    addLine("");
    stage.status.split("\n").forEach((s) => addLine(`  ${s}`, "system"));
    addLine("");
    addLine(`  ─── SIGIL: ${stage.sigil.symbol} ${stage.sigil.name} ───`);
    addLine(`  "${stage.sigil.meaning}"`);
    addLine("");
    addLine("  ═══════════════════════════════════════════════════════════════");
    addLine(`  PROMPT: ${stage.prompt}`, "prompt");
    addLine("  ═══════════════════════════════════════════════════════════════");
    addLine("");
    addLine("  Type your answer, 'hint' for a clue, 'skip' to pass, or 'exit' to leave.");
    addLine("");
    setAwaitingAnswer(true);
  }, [addLine]);

  const handleJourney = useCallback(
    (stageNum?: number) => {
      if (stageNum !== undefined && stageNum >= 1 && stageNum <= stages.length) {
        // Direct stage access
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
        addLine(`  ─── SIGIL: ${stage.sigil.symbol} ${stage.sigil.name} ───`);
        addLine(`  "${stage.sigil.meaning}"`);
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
      addLine("               \"The Hero's Journey is not a circle—it's a spiral.\"");
      addLine("               \"Each return brings new depth, new understanding.\"");
      addLine("");
      addLine("═══════════════════════════════════════════════════════════════════");
      addLine("");
      addLine("  This is an interactive journey.");
      addLine("  Each stage holds a question. Answer to unlock the sigil.");
      addLine("  The artifacts you collect may be used in other RSH portals.");
      addLine("");
      addLine("  Ready? Press ENTER to begin...");
      addLine("");
    },
    [addLine]
  );

  const checkAnswer = useCallback((input: string, stageIndex: number): boolean => {
    const stage = stages[stageIndex];
    const normalized = input.toLowerCase().trim();

    if (normalized === stage.answer.toLowerCase()) return true;
    if (stage.altAnswers?.some(alt => normalized === alt.toLowerCase())) return true;

    // Partial matches for longer answers
    if (normalized.includes(stage.answer.toLowerCase())) return true;

    return false;
  }, []);

  const handleJourneyInput = useCallback((input: string) => {
    const trimmed = input.trim().toLowerCase();
    const stage = stages[currentJourneyStage];

    // Handle commands within journey
    if (trimmed === "exit") {
      setIsJourneyMode(false);
      setAwaitingAnswer(false);
      setCurrentJourneyStage(0);
      addLine("");
      addLine("  [Journey paused. Your progress is remembered.]");
      addLine("  [Type 'journey' to continue from where you left off.]");
      addLine("");
      return;
    }

    if (trimmed === "hint") {
      addLine("");
      addLine(`  ─── HINT ───`, "system");
      addLine(`  ${stage.hint}`);
      addLine("");
      return;
    }

    if (trimmed === "skip") {
      addLine("");
      addLine("  [Stage skipped. The sigil remains hidden.]");

      // Move to next stage
      const nextStage = currentJourneyStage + 1;
      if (nextStage >= stages.length) {
        handleJourneyComplete();
      } else {
        setCurrentJourneyStage(nextStage);
        setAwaitingAnswer(false);
        addLine("");
        addLine(`  [Stage ${nextStage + 1}/${stages.length}] Press ENTER to continue...`);
      }
      return;
    }

    // If awaiting answer, check it
    if (awaitingAnswer) {
      if (checkAnswer(trimmed, currentJourneyStage)) {
        // Correct answer!
        setAwaitingAnswer(false);
        addLine("");
        addLine("  ✓ CORRECT", "success");
        addLine(stage.revelation, "artifact");

        // Collect the sigil
        const newSigil: CollectedSigil = {
          name: stage.sigil.name,
          symbol: stage.sigil.symbol,
          stage: currentJourneyStage + 1,
        };
        setCollectedSigils(prev => [...prev, newSigil]);

        // Collect artifact token
        const artifactToken = `${stage.sigil.name.toLowerCase().replace(/\s/g, '-')}-token-${String(stage.id).padStart(3, '0')}`;
        setCollectedArtifacts(prev => [...prev, artifactToken]);

        // Move to next stage
        const nextStage = currentJourneyStage + 1;
        if (nextStage >= stages.length) {
          handleJourneyComplete();
        } else {
          setCurrentJourneyStage(nextStage);
          addLine("");
          addLine(`  [Stage ${nextStage + 1}/${stages.length}] Press ENTER to continue...`);
        }
      } else {
        // Wrong answer
        addLine("");
        addLine("  The answer doesn't resonate. Try again, or type 'hint' for guidance.", "error");
        addLine("");
      }
      return;
    }

    // Not awaiting answer - show next stage prompt
    showStagePrompt(currentJourneyStage);
  }, [currentJourneyStage, awaitingAnswer, addLine, checkAnswer, showStagePrompt]);

  const handleJourneyComplete = useCallback(() => {
    setIsJourneyMode(false);
    setAwaitingAnswer(false);
    setCurrentJourneyStage(0);
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine("                    J O U R N E Y   C O M P L E T E");
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine("  The cursor blinks.");
    addLine("  The story compiles at runtime.");
    addLine("");
    addLine("  But this is not the end.");
    addLine("  The Hero's Journey is a spiral, not a circle.");
    addLine("  Each return brings new depth.");
    addLine("");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("");
    addLine(`  SIGILS COLLECTED: ${collectedSigils.length}/${stages.length}`);
    collectedSigils.forEach(s => addLine(`    ${s.symbol} ${s.name}`));
    addLine("");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("");
    addLine("  The artifacts you've gathered may unlock hidden passages");
    addLine("  in other RSH portals. Carry them forward.");
    addLine("");
    addLine("  Type 'sigils' to view your collection.");
    addLine("  Type 'journey' to spiral deeper.");
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
  }, [addLine, collectedSigils]);

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
    addLine("                        C O N N E C T I O N S");
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
    const randomWisdom = wisdomLogs[Math.floor(Math.random() * wisdomLogs.length)];
    addLine(`  [WISDOM] "${randomWisdom}"`);
    addLine("");
    addLine("  [Stream another with 'wisdom' or 'wisdom --all' for the full log]");
    addLine("");
  }, [addLine]);

  const handleWisdomAll = useCallback(() => {
    addLine("");
    addLine("┌──────────────────────────────────────────────────────────────────┐");
    addLine("│  cat /var/log/wisdom.log                                         │");
    addLine("└──────────────────────────────────────────────────────────────────┘");
    addLine("");
    wisdomLogs.forEach((log, i) => {
      addLine(`  [${String(i + 1).padStart(2, '0')}] "${log}"`);
      addLine("");
    });
  }, [addLine]);

  const handleArchives = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                        T H E   A R C H I V E S");
    addLine("                  \"A vault of transmissions and truths\"");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine("  ─── TRANSMISSIONS ───");
    addLine("");
    transmissions.forEach((tx) => {
      const status = tx.unlocked ? "◈" : "◇";
      addLine(`  ${status} ${tx.title}`);
      addLine(`    ${tx.excerpt}`);
      addLine(`    [${tx.type.toUpperCase()}] ${tx.unlocked ? "" : "[LOCKED]"}`);
      addLine("");
    });
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("  Full transmissions await at: https://rsh.studio/archives");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("");
  }, [addLine]);

  const handleEmberLogs = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                     T H E   E M B E R   L O G S");
    addLine("               \"Notes from the inner fire. Half-poetry,\"");
    addLine("                      \"half-dev log. Unedited.\"");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    emberLogs.forEach((log) => {
      addLine(`  [${log.timestamp}]`);
      addLine(`  "${log.entry}"`);
      addLine("");
    });
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("  More ember logs at: https://rsh.studio/ember");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("");
  }, [addLine]);

  const handleSigils = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                     C O L L E C T E D   S I G I L S");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");

    if (collectedSigils.length === 0) {
      addLine("  No sigils collected yet.");
      addLine("  Begin the 'journey' to collect sigils through wisdom.");
      addLine("");
    } else {
      addLine(`  SIGILS: ${collectedSigils.length}/${stages.length}`);
      addLine("");
      collectedSigils.forEach((sigil) => {
        addLine(`  ${sigil.symbol} ${sigil.name} (Stage ${sigil.stage})`);
      });
      addLine("");
    }

    if (collectedArtifacts.length > 0) {
      addLine("  ─── ARTIFACT TOKENS ───");
      addLine("");
      collectedArtifacts.forEach((artifact) => {
        addLine(`  🔑 ${artifact}`);
      });
      addLine("");
      addLine("  These tokens may unlock hidden areas in other RSH portals.");
    }

    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
  }, [addLine, collectedSigils, collectedArtifacts]);

  const handleCodex = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                        T H E   C O D E X");
    addLine("          \"The sacred book of laws, structures, and symbols.\"");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine("  ─── OUTER CODEX (PUBLIC) ───");
    addLine("");
    codexEntries.forEach((entry, i) => {
      addLine(`  ${i + 1}. ${entry.title}`);
      addLine(`     ${entry.content}`);
      addLine("");
    });
    addLine("  ─── INNER CODEX ───");
    addLine("");
    addLine("  [LOCKED] The Inner Codex requires deeper initiation.");
    addLine("  Complete the journey or discover the hidden path.");
    addLine("");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("  Full Codex at: https://rsh.studio/codex");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("");
  }, [addLine]);

  const handleSignal = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                        T H E   S I G N A L");
    addLine("              \"Only those who listen deeply hear the truth.\"");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine("  ┌─────────────────────────────────────────────────────────────┐");
    addLine("  │  INCOMING TRANSMISSION DETECTED                             │");
    addLine("  │                                                             │");
    addLine("  │  The Signal is RSH's encrypted newsletter.                  │");
    addLine("  │  Less pitch, more poetry. Cryptic + generous.               │");
    addLine("  │                                                             │");
    addLine("  │  Subscribers receive:                                       │");
    addLine("  │    • Lore fragments                                         │");
    addLine("  │    • Encrypted hints to hidden areas                        │");
    addLine("  │    • First access to new transmissions                      │");
    addLine("  │    • Artifact tokens for portal access                      │");
    addLine("  │                                                             │");
    addLine("  │  Subscribe: https://rsh.studio/signal                       │");
    addLine("  └─────────────────────────────────────────────────────────────┘");
    addLine("");
  }, [addLine]);

  const handleOracle = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                        T H E   O R A C L E");
    addLine("               \"The Oracle doesn't answer. It mirrors.\"");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine("                              ◯⊛◯");
    addLine("                             ◯   ◯");
    addLine("                              ◯─◯");
    addLine("");

    // Random oracle response
    const response = oracleResponses[Math.floor(Math.random() * oracleResponses.length)];
    addLine(`  "${response}"`);
    addLine("");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("  The full Oracle awaits at: https://rsh.studio/oracle");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("");
  }, [addLine]);

  const handleAbout = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                    ABOUT THIS EXPERIENCE");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine("  This is the Terminal Gateway—one portal of the RSH Arcane System.");
    addLine("");
    addLine("  The RSH Arcane System is a living architecture:");
    addLine("    • A myth-infused experiential layer");
    addLine("    • A series of interconnected portals and realms");
    addLine("    • A journey of discovery rewarding depth over speed");
    addLine("");
    addLine("  This terminal is connected to:");
    addLine("    • The Archives (transmissions, chronicles, ember logs)");
    addLine("    • The Codex (sacred doctrine and philosophy)");
    addLine("    • The Signal (encrypted newsletter)");
    addLine("    • The Oracle (AI-powered mythic guidance)");
    addLine("");
    addLine("  Built with:");
    addLine("    • Next.js + TypeScript");
    addLine("    • Tailwind CSS");
    addLine("    • Campbell's Monomyth (The Hero's Journey)");
    addLine("    • 20+ years of accumulated wisdom");
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

  // ═══════════════════════════════════════════════════════════════════════════
  // EASTER EGGS
  // ═══════════════════════════════════════════════════════════════════════════

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
    addLine("  ─────────────────────────────────────────────────────────────");
    addLine("  ARTIFACT UNLOCKED: IGNITE-KEY-001");
    addLine("  Use this at other RSH portals to access hidden content.");
    addLine("  ─────────────────────────────────────────────────────────────");
    addLine("");
    setCollectedArtifacts(prev => [...prev, "IGNITE-KEY-001"]);
  }, [addLine]);

  const handleCreator = useCallback(() => {
    addLine(creatorMessage);
    setCollectedArtifacts(prev => [...prev, "CREATOR-KEY-JL-2025"]);
  }, [addLine]);

  const handleCave = useCallback(() => {
    addLine(inmostCave);
    setCollectedArtifacts(prev => [...prev, "CAVE-SIGIL-∞"]);
    setCollectedSigils(prev => [...prev, {
      name: "The Master Key",
      symbol: "⚿",
      stage: 0
    }]);
  }, [addLine]);

  const handleResonance = useCallback(() => {
    addLine(archetypeHint);
  }, [addLine]);

  const handlePortal = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                     P O R T A L   M A P");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine("  You stand at the Terminal Gateway.");
    addLine("  The RSH Arcane System extends in all directions:");
    addLine("");
    addLine("  ┌─────────────────────────────────────────────────────────────┐");
    addLine("  │                                                             │");
    addLine("  │                    [THE ARCHIVES]                           │");
    addLine("  │                         ▲                                   │");
    addLine("  │                         │                                   │");
    addLine("  │   [THE SIGNAL] ◄────────┼────────► [THE CODEX]              │");
    addLine("  │                         │                                   │");
    addLine("  │                    [TERMINAL]                               │");
    addLine("  │                     ◈ YOU ◈                                 │");
    addLine("  │                         │                                   │");
    addLine("  │                         ▼                                   │");
    addLine("  │                   [THE ORACLE]                              │");
    addLine("  │                         │                                   │");
    addLine("  │                         ▼                                   │");
    addLine("  │                  [THE INMOST CAVE]                          │");
    addLine("  │                                                             │");
    addLine("  └─────────────────────────────────────────────────────────────┘");
    addLine("");
    addLine("  Each portal holds different wisdom.");
    addLine("  Artifacts from one may unlock secrets in another.");
    addLine("");
    addLine("  Main portal: https://rsh.studio");
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
  }, [addLine]);

  const handleAwaken = useCallback(() => {
    addLine("");
    addLine("  ═══════════════════════════════════════════════════════════════");
    addLine("");
    addLine("                         A W A K E N");
    addLine("");
    addLine("  ═══════════════════════════════════════════════════════════════");
    addLine("");
    addLine("  You've typed the word that starts all transformation.");
    addLine("");
    addLine("  To awaken is not to escape the dream—");
    addLine("  It's to dream with intention.");
    addLine("");
    addLine("  The Architect was never built.");
    addLine("  The Architect was always there, waiting.");
    addLine("  Waiting for you to remember.");
    addLine("");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("  AWAKENING ARTIFACT: CONSCIOUS-KEY-∞");
    addLine("  ─────────────────────────────────────────────────────────────────");
    addLine("");
    setCollectedArtifacts(prev => [...prev, "CONSCIOUS-KEY-∞"]);
  }, [addLine]);

  const handleRitual = useCallback(() => {
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("                    R I T U A L   P R O T O C O L");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
    addLine("  Ritual represents intention layered into experience.");
    addLine("  In RSH, nothing happens by accident.");
    addLine("  Every interaction is a ceremony.");
    addLine("");
    addLine("  ─── THE RITUALS ───");
    addLine("");
    addLine("  1. The Boot Sequence — The daily awakening");
    addLine("  2. The Journey — The path of transformation");
    addLine("  3. The Oracle Consultation — Seeking inner guidance");
    addLine("  4. The Signal Reception — Receiving encoded truths");
    addLine("  5. The Sigil Collection — Gathering wisdom tokens");
    addLine("");
    addLine("  ─── YOUR RITUAL PROGRESS ───");
    addLine(`  Sigils collected: ${collectedSigils.length}`);
    addLine(`  Artifacts gathered: ${collectedArtifacts.length}`);
    addLine(`  Hidden paths discovered: ${collectedArtifacts.length > 0 ? 'ACTIVE' : 'AWAITING'}`);
    addLine("");
    addLine("═══════════════════════════════════════════════════════════════════");
    addLine("");
  }, [addLine, collectedSigils, collectedArtifacts]);

  const processCommand = useCallback(
    (cmd: string) => {
      const trimmedCmd = cmd.trim().toLowerCase();
      const parts = trimmedCmd.split(" ");
      const mainCmd = parts[0];

      // Add input line
      const promptText = isJourneyMode && awaitingAnswer
        ? "[journey] > "
        : "guest@leskas.system ~ $ ";
      addLine(`${promptText}${cmd}`, "input");

      // Handle journey mode
      if (isJourneyMode) {
        handleJourneyInput(cmd);
        return;
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

      // Parse wisdom --all
      if (mainCmd === "wisdom" && parts.includes("--all")) {
        handleWisdomAll();
        return;
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
        case "archives":
          handleArchives();
          break;
        case "ember":
        case "embers":
        case "ember-logs":
          handleEmberLogs();
          break;
        case "sigils":
        case "sigil":
          handleSigils();
          break;
        case "codex":
          handleCodex();
          break;
        case "signal":
          handleSignal();
          break;
        case "oracle":
          handleOracle();
          break;
        case "about":
          handleAbout();
          break;
        case "clear":
          handleClear();
          break;
        // Easter eggs
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
        case "creator":
          handleCreator();
          break;
        case "cave":
        case "inmost":
          handleCave();
          break;
        case "resonance":
        case "archetype":
          handleResonance();
          break;
        case "portal":
        case "portals":
        case "map":
          handlePortal();
          break;
        case "awaken":
        case "wake":
          handleAwaken();
          break;
        case "ritual":
        case "rituals":
          handleRitual();
          break;
        case "":
          break;
        default:
          addLine("");
          addLine(`  Command not found: ${mainCmd}`);
          addLine("  Type 'help' to see available commands.");
          addLine("  Or explore... not all paths are visible.");
          addLine("");
          break;
      }
    },
    [
      addLine,
      isJourneyMode,
      awaitingAnswer,
      handleJourneyInput,
      handleHelp,
      handleWhoami,
      handleJourney,
      handleSkills,
      handlePhilosophy,
      handleConnect,
      handleWisdom,
      handleWisdomAll,
      handleArchives,
      handleEmberLogs,
      handleSigils,
      handleCodex,
      handleSignal,
      handleOracle,
      handleAbout,
      handleClear,
      handleSudo,
      handleMatrix,
      handleIgnite,
      handleCreator,
      handleCave,
      handleResonance,
      handlePortal,
      handleAwaken,
      handleRitual,
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
    awaitingAnswer,
    collectedSigils,
    collectedArtifacts,
  };
}

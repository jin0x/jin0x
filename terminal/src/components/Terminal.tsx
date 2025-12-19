"use client";

import { useEffect, useRef } from "react";
import { useTerminal, TerminalLine } from "@/hooks/useTerminal";

function TerminalLineComponent({ line }: { line: TerminalLine }) {
  const getLineClass = () => {
    switch (line.type) {
      case "input":
        return "text-emerald-400";
      case "ascii":
        return "text-purple-400 whitespace-pre font-bold";
      case "error":
        return "text-red-400";
      case "system":
        return "text-cyan-400";
      case "stage":
        return "text-amber-400";
      default:
        return "text-zinc-300";
    }
  };

  return (
    <div className={`${getLineClass()} whitespace-pre-wrap break-words`}>
      {line.content}
    </div>
  );
}

export default function Terminal() {
  const {
    lines,
    currentInput,
    setCurrentInput,
    handleKeyDown,
    isBooting,
    isJourneyMode,
  } = useTerminal();

  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input on click anywhere in terminal
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="min-h-screen bg-zinc-950 p-4 md:p-8 font-mono text-sm md:text-base"
      onClick={handleTerminalClick}
    >
      <div className="max-w-4xl mx-auto">
        {/* Terminal Window Chrome */}
        <div className="bg-zinc-900 rounded-t-lg border border-zinc-800 border-b-0">
          <div className="flex items-center gap-2 px-4 py-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-zinc-500 text-xs">
                guest@leskas.system — bash — 80×24
              </span>
            </div>
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="bg-zinc-950 border border-zinc-800 rounded-b-lg p-4 md:p-6 h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900"
        >
          {/* Lines */}
          <div className="space-y-0.5">
            {lines.map((line) => (
              <TerminalLineComponent key={line.id} line={line} />
            ))}
          </div>

          {/* Input Line */}
          {!isBooting && (
            <div className="flex items-center mt-2">
              <span className="text-emerald-400 mr-2">
                {isJourneyMode
                  ? "[journey] > "
                  : "guest@leskas.system ~ $ "}
              </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-zinc-100 outline-none caret-emerald-400"
                autoFocus
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <span className="w-2 h-5 bg-emerald-400 animate-pulse ml-0.5" />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-zinc-600 text-xs">
          <p>RADIATE. EMPOWER. TRANSFORM.</p>
          <p className="mt-1">
            <a
              href="https://rsh.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              RSH
            </a>
            {" · "}
            <a
              href="https://linkedin.com/in/john-leskas"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            {" · "}
            <a
              href="https://github.com/jin0x"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

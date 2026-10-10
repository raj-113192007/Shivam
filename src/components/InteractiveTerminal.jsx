import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal as TerminalIcon, 
  X, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  CornerDownLeft, 
  Trash2, 
  Copy, 
  Check 
} from 'lucide-react';
import { TERMINAL_COMMANDS, PROFILE } from '../data/portfolioData';

export const InteractiveTerminal = ({ isOpen, onClose, onOpenResume }) => {
  const [history, setHistory] = useState([
    {
      command: 'welcome',
      output: `Welcome to Shivam's Interactive CLI v2.4 (Shivalik College of Engineering, Dehradun)
Type 'help' to see all available commands or click quick suggestions below.`
    }
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copied, setCopied] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const trimmed = (cmdStr || input).trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'resume') {
      onOpenResume();
    }

    let output = TERMINAL_COMMANDS[trimmed];

    if (!output) {
      output = `Command not found: '${trimmed}'. Type 'help' to see available commands.`;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < cmdHistory.length) {
          setHistoryIndex(nextIdx);
          setInput(cmdHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    }
  };

  const quickCommands = ['help', 'about', 'college', 'skills', 'projects', 'stats', 'sudo hire shivam', 'clear'];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08171E]/80 backdrop-blur-md"
        />

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#08171E] text-[#A1CCDC] rounded-3xl shadow-2xl border border-[#096B90]/60 font-mono text-xs sm:text-sm overflow-hidden z-10 flex flex-col h-[600px] my-8"
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#042B44] border-b border-[#096B90]/40 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#08171E] border border-[#096B90]/60 cursor-pointer" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-[#096B90]" />
              <div className="w-3 h-3 rounded-full bg-[#71B7D5]" />
              <span className="text-xs font-bold text-[#A1CCDC] ml-2">
                shivam@shivalik-dehradun:~$
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#096B90]/25 text-[#71B7D5] border border-[#71B7D5]/30">
                bash / zsh
              </span>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-[#A1CCDC] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Command Chips */}
          <div className="px-4 py-2 bg-[#042B44] border-b border-[#096B90]/40 flex items-center gap-2 overflow-x-auto select-none">
            <span className="text-[10px] text-[#A1CCDC]/70 uppercase font-bold tracking-wider mr-1">
              Quick:
            </span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded-lg bg-[#08171E] hover:bg-[#096B90] text-[#71B7D5] hover:text-white text-xs transition-colors border border-[#096B90]/50 hover:border-[#71B7D5] whitespace-nowrap"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Output History */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 leading-relaxed font-mono">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#71B7D5] font-bold">
                  <span className="text-[#71B7D5]">shivam@shivalik:~$</span>
                  <span className="text-white">{item.command}</span>
                </div>
                <pre className="text-slate-200 whitespace-pre-wrap font-mono text-xs sm:text-sm pl-2 border-l-2 border-[#096B90]/50">
                  {item.output}
                </pre>
              </div>
            ))}

            {/* Current Active Input Prompt */}
            <div className="flex items-center gap-2 text-[#71B7D5] pt-2">
              <span className="text-[#71B7D5] flex-shrink-0 font-bold">shivam@shivalik:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'help', 'skills', 'sudo hire shivam')..."
                className="flex-1 bg-transparent text-white border-none outline-none focus:ring-0 text-xs sm:text-sm placeholder:text-[#A1CCDC]/40 font-mono"
                autoFocus
              />
            </div>

            <div ref={bottomRef} />
          </div>

          {/* Terminal Footer Info */}
          <div className="px-4 py-2 bg-[#042B44] border-t border-[#096B90]/40 flex items-center justify-between text-[11px] text-[#A1CCDC]/70 select-none">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#08171E] text-[#71B7D5] border border-[#096B90]/40">Enter</kbd> to run</span>
            <button
              onClick={() => handleCommand('clear')}
              className="hover:text-[#71B7D5] flex items-center gap-1 transition-colors"
            >
              <Trash2 className="w-3 h-3" /> clear
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InteractiveTerminal;

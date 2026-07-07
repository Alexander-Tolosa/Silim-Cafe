"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const QUESTIONS = [
  {
    id: "hours",
    label: "Opening & Closing Hours",
    question: "What are your opening and closing hours?",
    answer: "We are open daily to serve you:\n\n• **Monday to Friday**: 11:00 AM – 11:00 PM\n• **Saturday to Sunday**: 1:00 PM – 11:00 PM\n\nDrop by for specialty coffee, studies, or coding sessions!"
  },
  {
    id: "location",
    label: "Store Location",
    question: "Where is Silim Café located?",
    answer: "You can find our sanctuary at:\n\n**Ground Floor Block 9 Lot 18, Greengate Homes Phase 3, Malagasang 2-A, Imus, Cavite, Philippines**.\n\nCheck out directions and interactive routing on the [Visit Us](/visit) page!"
  },
  {
    id: "menu",
    label: "Popular Menu Items",
    question: "What are the most popular menu items?",
    answer: "Some of our top-rated favorites include:\n\n• **Spanish Latte** (Rich espresso with sweet condensed milk)\n• **Matcha White Mocha** (Premium green tea with creamy white chocolate)\n• **Cheesy Overload Fries** (Golden fries with abundant cheese sauce)\n• **Chick 'n Crunch** (Crispy breaded chicken poppers and rice/waffles)\n\nCheck out our full collection on the [Menu](/menu) page!"
  },
  {
    id: "foodpanda",
    label: "Partnered by Foodpanda",
    question: "Is Silim Café partnered with Foodpanda?",
    answer: "Yes, we are officially partnered with Foodpanda! \n\nYou can order your favorite coffee and snacks directly through Foodpanda for fast local delivery. Check our [Order Delivery](/delivery) page to start your order!"
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi there! 🌙 Welcome to Silim Café. I'm here to answer any questions you have about our cafe. What would you like to know?"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(true);
  const messagesEndRef = useRef(null);

  // Tooltip hover states
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipLoading, setTooltipLoading] = useState(true);
  const hoverTimerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTooltipLoading(true);
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setTooltipLoading(false);
    }, 600);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTooltipLoading(true);
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
  };

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setUnread(false);
    setIsHovered(false);
  };

  const handleSelectQuestion = (qObj) => {
    if (isTyping) return;

    // Append user question
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: qObj.question
    };
    setMessages((prev) => [...prev, userMsg]);

    // Trigger typing effect
    setIsTyping(true);

    setTimeout(() => {
      // Append bot answer
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: qObj.answer
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const resetChat = () => {
    setMessages([
      {
        id: "welcome",
        sender: "bot",
        text: "Hi there! 🌙 Welcome to Silim Café. I'm here to answer any questions you have about our cafe. What would you like to know?"
      }
    ]);
    setIsTyping(false);
  };

  // Helper to parse links and bold markup
  const formatMessageText = (text) => {
    const parts = [];
    let lastIndex = 0;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <Link
          key={`link-${match.index}`}
          href={match[2]}
          onClick={() => setIsOpen(false)}
          className="underline font-semibold text-white hover:text-zinc-300 transition-colors"
        >
          {match[1]}
        </Link>
      );
      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return (
      <span className="whitespace-pre-line">
        {parts.map((part, partIdx) => {
          if (typeof part !== "string") return part;
          
          const boldRegex = /\*\*([^*]+)\*\*/g;
          const subParts = [];
          let subLastIdx = 0;
          let boldMatch;
          
          while ((boldMatch = boldRegex.exec(part)) !== null) {
            if (boldMatch.index > subLastIdx) {
              subParts.push(part.substring(subLastIdx, boldMatch.index));
            }
            subParts.push(
              <strong key={`bold-${boldMatch.index}`} className="font-extrabold text-white">
                {boldMatch[1]}
              </strong>
            );
            subLastIdx = boldRegex.lastIndex;
          }
          
          if (subLastIdx < part.length) {
            subParts.push(part.substring(subLastIdx));
          }
          
          return <span key={`part-${partIdx}`}>{subParts}</span>;
        })}
      </span>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
      {/* Floating Chat Bubble Button */}
      {!isOpen && (
        <div className="relative flex items-center justify-end">
          {/* Animated Tooltip Bubble */}
          {isHovered && (
            <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-950 text-white text-[11px] font-medium tracking-wide py-2 px-3.5 rounded-xl border border-zinc-900 shadow-2xl flex items-center min-w-[125px] h-[34px] justify-center z-50 animate-fade-in-down">
              {tooltipLoading ? (
                <div className="flex space-x-1 items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1 h-1 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1 h-1 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              ) : (
                <span className="animate-fade-in-up whitespace-nowrap">Ask me a question! 🌙</span>
              )}
              {/* Tooltip triangle tail pointing right */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-zinc-950 border-r border-t border-zinc-900 rotate-45" />
            </div>
          )}

          <button
            onClick={handleOpenToggle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-14 h-14 rounded-full bg-zinc-950 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer relative border border-zinc-900 overflow-hidden"
            aria-label="Ask a question"
          >
            {unread && (
              <span className="absolute top-0.5 right-0.5 w-3 h-3 bg-zinc-300 border border-zinc-950 rounded-full animate-pulse z-10" />
            )}
            <img
              src="/images/logo.png"
              alt="Silim Café Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </button>
        </div>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[350px] sm:w-[380px] h-[480px] max-h-[calc(100vh-100px)] rounded-2xl bg-zinc-950/95 border border-zinc-900 shadow-2xl flex flex-col overflow-hidden animate-fade-in-up transform-gpu">
          {/* Header */}
          <div className="bg-zinc-900/40 px-5 py-4 border-b border-zinc-900/50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-800 bg-zinc-950 flex-shrink-0 flex items-center justify-center">
                <img
                  src="/images/logo.png"
                  alt="Silim Café Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wider uppercase">
                  Silim Assistant
                </h4>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] text-zinc-500 font-semibold tracking-wider uppercase">
                    Ready to help
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              {messages.length > 1 && (
                <button
                  onClick={resetChat}
                  className="text-[10px] font-bold text-zinc-500 hover:text-zinc-300 uppercase tracking-widest px-2 py-1 rounded transition-colors"
                  title="Reset conversation"
                >
                  Reset
                </button>
              )}
              <button
                onClick={handleOpenToggle}
                className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer text-lg leading-none"
                aria-label="Close chat"
              >
                &times;
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-5 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-zinc-900 scrollbar-track-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl text-[12px] leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-white text-black rounded-tr-sm font-medium max-w-[85%]"
                      : "bg-zinc-900/60 border border-zinc-900 text-zinc-200 rounded-tl-sm max-w-[85%]"
                  }`}
                >
                  {msg.sender === "user" ? msg.text : formatMessageText(msg.text)}
                </div>
              </div>
            ))}

            {/* Bouncing Dot Typing Indicator */}
            {isTyping && (
              <div className="flex items-start">
                <div className="p-3.5 rounded-2xl rounded-tl-sm bg-zinc-900/60 border border-zinc-900 flex space-x-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick-Reply Options Footer */}
          <div className="p-4 bg-zinc-900/20 border-t border-zinc-900/50 flex flex-col gap-2">
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest px-1">
              Select a Question:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {QUESTIONS.map((q) => {
                const isSelected = messages.some((m) => m.text === q.question);
                return (
                  <button
                    key={q.id}
                    onClick={() => handleSelectQuestion(q)}
                    disabled={isTyping}
                    className={`px-3 py-2 rounded-xl text-[11px] leading-tight text-left transition-all border font-light tracking-wide flex items-center justify-between ${
                      isSelected
                        ? "border-zinc-800 bg-zinc-900/30 text-zinc-400 cursor-not-allowed"
                        : "border-zinc-800/80 bg-zinc-900/10 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900/50 cursor-pointer"
                    } disabled:opacity-50`}
                  >
                    <span>{q.label}</span>
                    <span className="text-[9px] text-zinc-500 font-bold ml-1">→</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

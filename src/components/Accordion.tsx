import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string | number;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string | number>>(new Set());

  const toggleItem = (id: string | number) => {
    const next = new Set(openIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      if (!allowMultiple) {
        next.clear();
      }
      next.add(id);
    }
    setOpenIds(next);
  };

  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div
            key={item.id}
            className={`transition-all duration-300 rounded-2xl overflow-hidden glass-panel border ${
              isOpen
                ? 'border-brand-500 shadow-premium ring-1 ring-brand-400/20 bg-white'
                : 'border-slate-200/60 shadow-soft hover:shadow-premium hover:border-brand-200 bg-white/70'
            }`}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 select-none focus:outline-none"
            >
              <span className={`text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-200 ${
                isOpen ? 'text-brand-700 font-bold' : 'text-slate-800'
              }`}>
                {item.title}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                className={`p-2 rounded-full transition-colors ${
                  isOpen ? 'bg-brand-50 text-brand-600' : 'bg-slate-50 text-slate-400'
                }`}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                >
                  <div className="px-8 pb-8 pt-3 border-t border-slate-100 text-slate-600 text-base md:text-lg leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

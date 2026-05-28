import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Presentation, BookOpen, FileText, PlayCircle } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'Trang chủ', icon: Presentation },
  { path: '/ly-thuyet', label: 'Lý thuyết', icon: BookOpen },
  { path: '/tinh-huong', label: 'Tình huống', icon: FileText },
  { path: '/video', label: 'Video', icon: PlayCircle },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 py-4 md:px-8">
      <nav className="max-w-5xl mx-auto glass-panel shadow-glass rounded-full px-5 py-2.5 flex items-center justify-between border border-white/60">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 text-brand-700 hover:text-brand-600 transition-colors select-none focus:outline-none"
        >
          <div className="bg-brand-500 text-white p-1.5 rounded-xl shadow-premium">
            <Presentation className="w-5 h-5" />
          </div>
          <span className="font-display font-bold tracking-tight text-base md:text-lg text-slate-800">
            Kinh tế số <span className="text-brand-500 font-normal">& Triết học</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-1 md:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide transition-colors duration-300 select-none focus:outline-none ${
                  isActive ? 'text-brand-600 font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {/* Dynamic Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-brand-50/80 rounded-full border border-brand-100/50 shadow-soft"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                
                <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-brand-500' : 'text-slate-400'}`} />
                <span className="relative z-10 hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

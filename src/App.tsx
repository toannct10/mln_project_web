import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import MainPage from './pages/MainPage';
import TheoryPage from './pages/TheoryPage';
import SituationPage from './pages/SituationPage';
import VideoPage from './pages/VideoPage';
import { Presentation } from 'lucide-react';

function AnimatedApp() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/ly-thuyet" element={<TheoryPage />} />
          <Route path="/tinh-huong" element={<SituationPage />} />
          <Route path="/video" element={<VideoPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500); // fade out preloader screen
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 8;
      });
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex flex-col justify-center items-center bg-slate-900 text-white"
          >
            <motion.div 
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Preloader Logo with dynamic wave ripples */}
              <div className="bg-brand-500 p-4 rounded-3xl shadow-2xl relative">
                <span className="absolute inset-0 rounded-3xl bg-brand-400 animate-ripple pointer-events-none" />
                <Presentation className="w-12 h-12 relative z-10" />
              </div>
              
              <div className="text-center space-y-2">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-display">
                  Đang tải chuyên đề...
                </h2>
                <p className="text-slate-400 text-sm md:text-base font-mono">
                  Phân tích giai cấp trong nền kinh tế số
                </p>
              </div>

              {/* Loader Slider */}
              <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-4 border border-slate-700/50">
                <motion.div 
                  className="h-full bg-brand-500" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
              
              <span className="text-xs font-mono text-slate-500">{progress}%</span>
            </motion.div>
          </motion.div>
        ) : (
          <AnimatedApp />
        )}
      </AnimatePresence>
    </Router>
  );
}

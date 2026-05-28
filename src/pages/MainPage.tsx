import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Play, ArrowRight } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

export default function MainPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const CARDS = [
    {
      to: '/ly-thuyet',
      title: 'Lý thuyết',
      desc: 'Các khái niệm cơ bản của triết học Mác - Lênin về giai cấp, phương thức sản xuất và đấu tranh giai cấp trong nền kinh tế số.',
      icon: BookOpen,
      gradient: 'from-blue-500/10 to-sky-500/10 hover:from-blue-500/20 hover:to-sky-500/20',
      iconBg: 'bg-blue-100 text-blue-600 border border-blue-200/50',
      accentColor: 'text-blue-500',
    },
    {
      to: '/tinh-huong',
      title: 'Tình huống',
      desc: 'Mô tả thực tế và phân tích chuyên sâu về đời sống tài xế công nghệ. Liệu họ là "chủ" hay chỉ là "người làm thuê kiểu mới"?',
      icon: FileText,
      gradient: 'from-sky-500/10 to-cyan-500/10 hover:from-sky-500/20 hover:to-cyan-500/20',
      iconBg: 'bg-sky-100 text-sky-600 border border-sky-200/50',
      accentColor: 'text-sky-500',
    },
    {
      to: '/video',
      title: 'Video tình huống',
      desc: 'Theo dõi video mô phỏng bài giảng, lắng nghe ý kiến tài xế công nghệ và phân tích trực quan về cuộc đấu tranh giai cấp thời đại thuật toán.',
      icon: Play,
      gradient: 'from-cyan-500/10 to-indigo-500/10 hover:from-cyan-500/20 hover:to-indigo-500/20',
      iconBg: 'bg-cyan-100 text-cyan-600 border border-cyan-200/50',
      accentColor: 'text-cyan-500',
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-mesh-gradient pt-24 px-4 pb-12">
      {/* Dynamic Animated Particles Background */}
      <ParticleBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl w-full flex flex-col items-center text-center gap-12"
      >
        {/* Hero Section */}
        <div className="space-y-6 max-w-4xl">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 font-bold text-xs md:text-sm tracking-widest uppercase shadow-soft"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            Triết học chính trị - xã hội
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-display"
          >
            <span className="block text-slate-900 mb-2">Phân tích giai cấp &</span>
            <span className="title-gradient-blue filter drop-shadow-sm">Đấu tranh giai cấp</span>
            <span className="block text-slate-900 mt-2 text-3xl md:text-5xl lg:text-6xl font-bold font-sans">
              trong nền kinh tế số
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-slate-500 max-w-2xl mx-auto tracking-wide pt-2"
          >
            Góc nhìn khoa học từ bản chất <span className="text-brand-600 font-bold">Triết học Mác - Lênin</span>
          </motion.p>
        </div>

        {/* 3 Presentation Nav Cards */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-2"
        >
          {CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.to}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative flex flex-col justify-between p-8 rounded-3xl border border-slate-200/60 shadow-soft bg-white/60 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-premium-card hover:shadow-premium-hover hover:border-brand-300 hover:bg-white"
              >
                {/* Background soft glowing card accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                <div>
                  {/* Card Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-500 group-hover:scale-110 ${card.iconBg}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 tracking-tight group-hover:text-brand-700 transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                    {card.desc}
                  </p>
                </div>

                {/* Navigation Button */}
                <Link
                  to={card.to}
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-700 font-bold group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-300 text-sm md:text-base"
                >
                  Khám phá bài học
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      
      {/* Footer info for presentation */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-slate-400 text-xs font-mono select-none pointer-events-none opacity-60">
        Mác - Lênin trong thế giới phẳng • Đại học 2026
      </div>
    </div>
  );
}

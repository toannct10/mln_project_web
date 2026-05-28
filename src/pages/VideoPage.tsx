import { motion } from 'framer-motion';
import { PlayCircle, ShieldCheck, Cpu, Users } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';

export default function VideoPage() {
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const keyPoints = [
    {
      icon: Cpu,
      title: "Cơ chế 'Bóc lột thuật toán' (Algorithmic Exploitation)",
      desc: "Nền tảng số kiểm soát hành vi người lao động một cách gián tiếp thông qua hệ thống đánh giá sao, tỷ lệ nhận chuyến, và đe dọa tắt tài khoản tự động bằng thuật toán AI, biến áp lực vô hình thành sự tự giác phục tùng."
    },
    {
      icon: Users,
      title: "Liên kết số và Đoàn kết vô sản mới",
      desc: "Mạng xã hội và các hội nhóm trò chuyện trực tuyến đóng vai trò như các 'nghiệp đoàn số' không biên giới, cho phép các tài xế chia sẻ kinh nghiệm, tổ chức hỗ trợ khẩn cấp và kêu gọi đình công đồng loạt."
    },
    {
      icon: ShieldCheck,
      title: "Yêu cầu Địa vị Pháp lý chính thức",
      desc: "Lý thuyết đấu tranh chỉ ra mục tiêu cốt lõi: phải công nhận các 'đối tác' thực chất là 'người làm công ăn lương' có hợp đồng lao động để bảo vệ quyền lợi bảo hiểm, y tế và giới hạn giờ làm việc tối đa."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 px-4 pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Header section */}
        <div className="text-center space-y-4">
          <div className="inline-flex p-3 rounded-2xl bg-brand-50 text-brand-600 border border-brand-100/50 shadow-soft">
            <PlayCircle className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 font-display">
            Video tư liệu & Thuyết minh
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Lắng nghe và quan sát mô phỏng đấu tranh kinh tế của tài xế công nghệ dưới áp lực quản lý thuật toán.
          </p>
          <div className="h-1 w-20 bg-brand-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Video Player Component */}
        <div className="pt-2">
          <VideoPlayer />
        </div>

        {/* Lecture summary notes below the player */}
        <div className="space-y-6 pt-6">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display text-center">
            Nội dung cốt lõi của Bài giảng
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur shadow-soft flex flex-col items-center text-center gap-4 hover:shadow-premium transition-all duration-300"
                >
                  <div className="p-3 bg-brand-50 rounded-xl text-brand-500 border border-brand-100/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-base md:text-lg tracking-tight">
                    {point.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

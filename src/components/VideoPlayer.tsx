import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize } from 'lucide-react';

interface Subtitle {
  start: number;
  end: number;
  text: string;
}

const SUBTITLES: Subtitle[] = [
  { start: 0, end: 4, text: "Chào mừng các bạn đến với chuyên đề: Phân tích giai cấp trong nền kinh tế số." },
  { start: 4, end: 8, text: "Nền kinh tế số đang tái cấu trúc các quan hệ sản xuất truyền thống của xã hội." },
  { start: 8, end: 13, text: "Liệu các tài xế công nghệ có thực sự là 'chủ doanh nghiệp' độc lập như các hãng quảng cáo?" },
  { start: 13, end: 18, text: "Hay họ chỉ là những 'người làm thuê kiểu mới' chịu sự kiểm soát toàn diện của thuật toán?" },
  { start: 18, end: 24, text: "Hãy cùng Triết học Mác - Lênin giải mã hình thức đấu tranh giai cấp trong thời đại số!" },
  { start: 24, end: 28, text: "Sự đoàn kết số, tắt ứng dụng tập thể chính là phiên bản hiện đại của bãi công xưa." },
  { start: 28, end: 32, text: "Cảm ơn các bạn đã theo dõi bài thuyết trình này!" }
];

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(32); // 32 seconds mock video
  const [isMuted, setIsMuted] = useState(false);
  const [activeSubtitle, setActiveSubtitle] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);

  // Synced Subtitles engine
  useEffect(() => {
    const sub = SUBTITLES.find(s => currentTime >= s.start && currentTime < s.end);
    setActiveSubtitle(sub ? sub.text : "");
  }, [currentTime]);

  // Video timer effect
  useEffect(() => {
    if (isPlaying) {
      const interval = 100; // update every 100ms
      timerRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return Math.min(prev + interval / 1000, duration);
        });
      }, interval);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, duration]);

  // Canvas visualizer simulating dynamic digital economy streams
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 450);

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = Math.max(Math.floor(width * (9/16)), 300);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const bars: number[] = Array.from({ length: 40 }, () => Math.random() * 50 + 10);

    const render = () => {
      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#0f172a'); // slate-900
      bgGrad.addColorStop(1, '#0284c7'); // brand-600
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Grid Lines simulating computer networks
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Drawing abstract flowing digital wave
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)'; // light cyan
      ctx.lineWidth = 3;
      for (let x = 0; x < width; x++) {
        const y = height / 2 + 
          Math.sin(x * 0.005 + (isPlaying ? currentTime * 2 : 0)) * 60 +
          Math.cos(x * 0.01 - (isPlaying ? currentTime * 1.5 : 0)) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Digital network flows (flowing binary or glowing dots)
      if (isPlaying) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.font = '10px monospace';
        for (let i = 0; i < 6; i++) {
          const x = (currentTime * 100 + i * 200) % (width + 50) - 50;
          const y = height / 3 + i * 40 + Math.sin(currentTime + i) * 20;
          ctx.fillText("010110", x, y);
          ctx.beginPath();
          ctx.arc(x - 10, y - 3, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.fill();
        }
      }

      // Draw active audio/data visualizer bars at the bottom
      ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
      const barWidth = width / bars.length;
      bars.forEach((barHeight, idx) => {
        let currentHeight = barHeight;
        if (isPlaying) {
          currentHeight = barHeight + Math.sin(currentTime * 10 + idx) * 30 + Math.random() * 10;
        }
        ctx.fillRect(idx * barWidth + 2, height - Math.max(currentHeight, 15), barWidth - 4, Math.max(currentHeight, 15));
      });

      // Animated glowing nodes in center when paused
      if (!isPlaying) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 80 + Math.sin(Date.now() / 400) * 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(14, 165, 233, 0.2)';
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, 60, 0, Math.PI * 2);
        ctx.fill();
      }

      // HUD graphic overlay (Top right)
      ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
      ctx.font = '12px Outfit, sans-serif';
      ctx.fillText("ALGORITHM CONTROL HEGEMONY: ACTIVE", 24, 32);
      ctx.fillText("DIALECTICAL ANALYSIS SYSTEM V1.0", width - 240, 32);

      // Red recording node
      ctx.fillStyle = isPlaying ? '#ef4444' : '#64748b';
      ctx.beginPath();
      ctx.arc(width - 24, 28, 5, 0, Math.PI * 2);
      ctx.fill();

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, currentTime]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* Player Container */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-panel-dark shadow-2xl border border-slate-800">
        
        {/* Canvas Visualizer */}
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Floating Play Overlay Button */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 backdrop-blur-[2px] transition-all duration-300">
            <button
              onClick={handlePlayPause}
              className="relative p-6 bg-brand-500 hover:bg-brand-400 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-premium focus:outline-none group"
            >
              {/* Animated Ripples */}
              <span className="absolute inset-0 rounded-full bg-brand-400 animate-ripple pointer-events-none" />
              <span className="absolute inset-0 rounded-full bg-brand-300 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 pointer-events-none" />
              
              <Play className="w-10 h-10 fill-current relative z-10 translate-x-[2px]" />
            </button>
          </div>
        )}

        {/* Glassmorphic Player Controller */}
        <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent flex flex-col gap-3">
          
          {/* Progress Slider */}
          <div className="relative w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer group">
            <div 
              className="absolute h-full bg-brand-400 rounded-full transition-all duration-100" 
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            <div 
              className="absolute w-3.5 h-3.5 bg-white rounded-full border-2 border-brand-500 -top-1 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ left: `calc(${(currentTime / duration) * 100}% - 7px)` }}
            />
          </div>

          {/* Controls HUD */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <button 
                onClick={handlePlayPause} 
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
              </button>
              <button 
                onClick={handleStop}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
                title="Reset"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <span className="text-sm font-mono tracking-wider opacity-85">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <button className="p-1.5 hover:bg-white/10 rounded-lg transition-colors focus:outline-none" title="Maximize">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtitles Overlay Panel */}
      <div className="w-full mt-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-premium relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-brand-500" />
        <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block mb-2">Phụ đề thuyết minh (Live Sync)</span>
        <div className="h-14 flex items-center justify-center text-center">
          {activeSubtitle ? (
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow">
              "{activeSubtitle}"
            </p>
          ) : (
            <p className="text-slate-500 text-base italic">
              [Nhấn nút phát video để xem phụ đề thuyết minh thuyết trình]
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Zap, 
  Sparkles, 
  Code2, 
  Cpu, 
  Globe,
  ArrowRight,
  Loader2
} from "lucide-react";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });

    // Show animated elements after a delay
    const showTimer = setTimeout(() => {
      setShowElements(true);
    }, 300);

    // Progress bar animation
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    // Complete loading
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setHide(true);
        setTimeout(() => {
          onFinish?.();
        }, 600);
      }, 500);
    }, 2200); // Total loading duration

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      clearTimeout(showTimer);
    };
  }, [onFinish]);

  // Floating tech icons
  const techIcons = [
    { icon: <Code2 className="h-8 w-8" />, delay: "delay-0", position: "top-1/4 left-1/4" },
    { icon: <Cpu className="h-8 w-8" />, delay: "delay-300", position: "top-1/3 right-1/4" },
    { icon: <Globe className="h-8 w-8" />, delay: "delay-600", position: "bottom-1/3 left-1/3" },
    { icon: <Zap className="h-8 w-8" />, delay: "delay-900", position: "bottom-1/4 right-1/3" },
  ];

  // Loading phrases
  const loadingPhrases = [
    "Initializing systems...",
    "Loading components...",
    "Optimizing performance...",
    "Establishing connection...",
    "Ready to launch!"
  ];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-950 to-black transition-all duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,184,166,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Tech Icons */}
        {showElements && techIcons.map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} animate-float ${item.delay}`}
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            <div className="p-3 rounded-2xl bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-teal-500/10">
              <div className="text-teal-400/30">
                {item.icon}
              </div>
            </div>
          </div>
        ))}

        {/* Animated Connection Lines */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0" />
                <stop offset="50%" stopColor="#0d9488" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M20,100 Q200,50 400,150 T800,100"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-dash"
            />
            <path
              d="M100,300 Q300,200 600,250 T900,300"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-dash delay-500"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl px-6">
        <div className="text-center space-y-12">
          {/* Logo/Title */}
          <div className="relative" data-aos="fade-down" data-aos-delay="100">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-xl rounded-full"></div>
            <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter">
              <span className="text-white">VORTECH</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-[length:200%] animate-gradient">
                DEV
              </span>
            </h1>
          </div>

          {/* Progress Container */}
          <div className="space-y-6" data-aos="fade-up" data-aos-delay="300">
            {/* Progress Bar */}
            <div className="relative">
              <div className="h-2 w-full rounded-full bg-gray-800/50 backdrop-blur-sm overflow-hidden">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg shadow-teal-500/50"></div>
                </div>
              </div>
              
              {/* Progress Percentage */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500 font-mono">LOADING</span>
                <span className="text-sm font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            {/* Loading Status */}
            <div className="h-8">
              {showElements && (
                <div className="space-y-2" data-aos="fade-up" data-aos-delay="500">
                  <div className="flex items-center justify-center gap-3">
                    <Loader2 className="h-4 w-4 text-teal-400 animate-spin" />
                    <span className="text-gray-300 font-mono text-sm">
                      {loadingPhrases[Math.min(Math.floor(progress / 20), loadingPhrases.length - 1)]}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Corner Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-teal-400 animate-pulse"></div>
            <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse delay-150"></div>
            <div className="w-1 h-1 rounded-full bg-teal-400 animate-pulse delay-300"></div>
          </div>
          <span>Loading Experience</span>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(10px) rotate(-2deg); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes dash {
          to { stroke-dashoffset: 1000; }
        }
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-dash {
          stroke-dasharray: 10;
          animation: dash 20s linear infinite;
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }
      `}</style>
    </div>
  );
}
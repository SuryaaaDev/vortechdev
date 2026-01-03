import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRight, Sparkles, Zap, Code } from "lucide-react";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <section className="relative pt-10 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 text-white">
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a5c5c' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-teal-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* Floating Elements */}
      <div className="absolute top-28 left-10 animate-float">
        <div className="p-3 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-teal-500/20">
          <Code className="h-6 w-6 text-teal-400" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float delay-1000">
        <div className="p-3 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20">
          <Zap className="h-6 w-6 text-cyan-400" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float delay-500">
        <div className="p-3 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-teal-500/20">
          <Sparkles className="h-6 w-6 text-teal-300" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 mb-8"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <Sparkles className="h-4 w-4 text-teal-400" />
          <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Next-Gen IT Solutions
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="relative">
            <span className="text-white">Vortech</span>
            <span className="absolute -top-4 -right-6 text-xs font-normal px-2 py-1 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500">
              TM
            </span>
          </span>
          <span className="block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-[length:200%] animate-gradient">
              Development
            </span>
          </span>
        </h1>

        {/* Description */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          We craft{" "}
          <span className="text-teal-300 font-semibold">modern, scalable</span>,
          and{" "}
          <span className="text-cyan-300 font-semibold">high-performance</span>{" "}
          digital experiences that drive your business forward in the digital
          era.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 transform hover:-translate-y-1">
            <div className="flex items-center justify-center gap-3">
              <span>Explore Projects</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 rounded-2xl border border-teal-400/30 animate-ping-slow opacity-0 group-hover:opacity-100"></div>
          </a>

          <a href="#getintouch" className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-teal-500/30 hover:border-teal-400/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1">
            <div className="flex items-center justify-center gap-3">
              <span>Get in Touch</span>
              <div className="h-2 w-2 rounded-full bg-teal-400 group-hover:scale-150 transition-transform"></div>
            </div>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-teal-500/30 flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes ping-slow {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}

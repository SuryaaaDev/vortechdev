import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Rocket,
  Code2,
  Palette,
  TrendingUp,
  Users,
  Target,
  Globe,
  Shield,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Fast Development",
      description:
        "Agile development process delivering MVPs in weeks, not months",
      gradient: "from-teal-500 to-cyan-500",
      delay: "100",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Clean Code",
      description:
        "Modular, maintainable code following best practices and standards",
      gradient: "from-teal-600 to-cyan-600",
      delay: "200",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Modern UI/UX",
      description: "Pixel-perfect interfaces with intuitive user experiences",
      gradient: "from-cyan-500 to-teal-500",
      delay: "300",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalable Systems",
      description: "Architecture designed to grow with your business needs",
      gradient: "from-teal-500 to-cyan-500",
      delay: "400",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Transparent communication and regular progress updates",
      gradient: "from-cyan-600 to-teal-600",
      delay: "100",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal-Oriented",
      description: "Focus on delivering measurable business results",
      gradient: "from-teal-500 to-cyan-500",
      delay: "200",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 availability",
      gradient: "from-cyan-500 to-teal-500",
      delay: "300",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security and data protection",
      gradient: "from-teal-600 to-cyan-600",
      delay: "400",
    },
  ];

  // const stats = [
  //   { number: "5+", label: "Years Experience", suffix: "" },
  //   { number: "100", label: "Projects", suffix: "+" },
  //   { number: "50", label: "Clients", suffix: "+" },
  //   { number: "99", label: "Satisfaction", suffix: "%" },
  // ];

  return (
    <section className="relative py-24 overflow-hidden" id="about">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a5c5c' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-teal-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Who We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Crafting Digital </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-[length:200%] animate-gradient">
              Excellence
            </span>
          </h2>

          <p
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="font-semibold text-teal-300">VortechDev</span> is a
            collective of passionate developers, designers, and strategists
            dedicated to building{" "}
            <span className="font-semibold text-cyan-300">
              cutting-edge digital solutions
            </span>{" "}
            that drive business growth and deliver exceptional user experiences.
          </p>
        </div>

        {/* Stats */}
        {/* <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-teal-500/10 hover:border-teal-500/30 transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.number}
                  </span>
                  {stat.suffix && (
                    <span className="text-xl text-cyan-300">{stat.suffix}</span>
                  )}
                </div>
                <div className="text-sm text-gray-400 mt-2 text-center">
                  {stat.label}
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div> */}

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={feature.delay}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-teal-500/10 p-6 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div
                className={`relative inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
              >
                <div className="text-white">{feature.icon}</div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Floating Particles */}
              <div className="absolute top-5 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
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
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Globe,
  Layout,
  Palette,
  Server,
  Smartphone,
  Database,
  Cloud,
  Shield,
  Zap,
  BarChart,
  Code,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description:
        "Modern, performant websites built with cutting-edge technologies like Next.js and React",
      features: ["SPA/PWA", "SEO Optimized", "Performance", "Accessibility"],
      gradient: "from-teal-500 to-cyan-500",
      delay: "100",
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Dashboard System",
      description:
        "Custom admin panels and analytics dashboards for data-driven decision making",
      features: [
        "Real-time Data",
        "Custom Charts",
        "User Management",
        "Export Options",
      ],
      gradient: "from-teal-600 to-cyan-600",
      delay: "150",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "User-centered design that combines aesthetics with exceptional user experience",
      features: [
        "Wireframing",
        "Prototyping",
        "User Testing",
        "Design Systems",
      ],
      gradient: "from-cyan-500 to-teal-500",
      delay: "200",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "API & Backend",
      description:
        "Robust backend systems and RESTful APIs built for scalability and security",
      features: ["Microservices", "GraphQL", "Authentication", "Rate Limiting"],
      gradient: "from-teal-500 to-cyan-500",
      delay: "250",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Responsive",
      description:
        "Fully responsive websites that provide seamless experience across all devices",
      features: [
        "Mobile-First",
        "Touch Optimized",
        "Cross-Browser",
        "Fast Loading",
      ],
      gradient: "from-cyan-600 to-teal-600",
      delay: "300",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Solutions",
      description:
        "Efficient database design, optimization, and migration services",
      features: [
        "SQL/NoSQL",
        "Data Modeling",
        "Backup Strategy",
        "Optimization",
      ],
      gradient: "from-teal-500 to-cyan-500",
      delay: "350",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Deployment",
      description:
        "Scalable cloud infrastructure setup and deployment on AWS, Azure, or Google Cloud",
      features: ["CI/CD", "Auto-scaling", "Monitoring", "Cost Optimization"],
      gradient: "from-cyan-500 to-teal-500",
      delay: "400",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Audit",
      description:
        "Comprehensive security assessment and implementation of best practices",
      features: [
        "Pen Testing",
        "Vulnerability Scan",
        "SSL/TLS",
        "Data Encryption",
      ],
      gradient: "from-teal-600 to-cyan-600",
      delay: "450",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description:
        "Speed optimization and performance tuning for maximum user engagement",
      features: [
        "Lighthouse 100",
        "Core Web Vitals",
        "Caching",
        "Image Optimization",
      ],
      gradient: "from-teal-500 to-cyan-500",
      delay: "500",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your goals and requirements",
    },
    {
      number: "02",
      title: "Planning",
      description: "Creating detailed roadmap and architecture",
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development with regular updates",
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous testing and quality assurance",
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth launch and go-live support",
    },
    {
      number: "06",
      title: "Maintenance",
      description: "Ongoing support and optimization",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a5c5c' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-teal-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              What We Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Full-Cycle </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-[length:200%] animate-gradient">
              Development Services
            </span>
          </h2>

          <p
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            From concept to deployment and beyond, we provide comprehensive
            solutions that
            <span className="font-semibold text-teal-300">
              {" "}
              scale with your business
            </span>{" "}
            and
            <span className="font-semibold text-cyan-300">
              {" "}
              delight your users
            </span>
            .
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={service.delay}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-teal-500/10 p-6 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10"
            >
              {/* Background Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Icon */}
              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="group/btn inline-flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-cyan-400 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-teal-500/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-teal-500/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Process
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A streamlined approach that ensures quality, transparency, and
              timely delivery
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative text-center"
                >
                  <div className="relative z-10">
                    {/* Number Circle */}
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-teal-500/20 group-hover:border-teal-500/40 transition-colors duration-300"></div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center w-full h-full">
                        <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>

                  {/* Connecting Dots for Mobile */}
                  {index < processSteps.length - 1 && (
                    <>
                      <div className="hidden sm:block lg:hidden absolute top-8 -right-3 w-6 h-0.5 bg-teal-500/20"></div>
                      <div className="sm:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-cyan-500/20"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
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

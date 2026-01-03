import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ExternalLink,
  Github,
  Eye,
  Zap,
  Sparkles,
  Globe,
  Smartphone,
  Database,
  Shield,
  Filter,
  X,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Absensi from '../assets/Absensi-RFID.png';
import Nilai from '../assets/E-Nilai.png'
import Peminjaman from '../assets/Peminjaman-Alat.png'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web apps", label: "Web Apps" },
    { id: "dashboard", label: "Dashboards" },
    { id: "rfid", label: "RFID" },
  ];

  const projects = [
    {
      id: 1,
      title: "RFID Attendance System",
      description:
        "A web-based RFID attendance system that automatically records attendance in real time, complete with an admin dashboard for monitoring and structured attendance reports.",
      category: ["web apps", "rfid"],
      tech: ["Laravel", "Tailwind", "Chart.js", "Alpine.js"],
      image: Absensi,
      accent: "from-teal-500 to-cyan-500",
      liveUrl: "https://absensi.vortech.my.id/",
      features: [
        "Automatic RFID Scanning",
        "Daily & Monthly Attendance Reports",
        "Interactive Attendance Dashboard",
        "Export to PDF & Excel",
      ],
    },

    {
      id: 2,
      title: "E-Nilai (Student Grading System)",
      description:
        "A web-based student grading system that helps teachers efficiently manage, calculate, and monitor student scores through a centralized and intuitive dashboard.",
      category: ["dashboard", "web apps"],
      tech: ["Node.js", "React.js", "Tailwind"],
      image: Nilai,
      accent: "from-teal-600 to-cyan-600",
      liveUrl: "https://e-nilai.vortech.my.id/",
      features: [
        "Student Score Input & Management",
        "Automatic Grade Calculation",
        "Teacher & Admin Role Management",
        "Interactive Dashboard Visualization",
      ],
    },

    {
      id: 3,
      title: "Equipment Loan Management System",
      description:
        "A web-based equipment loan management system integrated with RFID technology to track borrowing, returns, and equipment availability in real time.",
      category: ["web apps", "rfid"],
      tech: ["Laravel", "Tailwind", "Alpine.js"],
      image: Peminjaman,
      accent: "from-cyan-500 to-teal-500",
      liveUrl: "#",
      features: [
        "RFID-Based Equipment Borrowing",
        "Real-Time Equipment Availability Tracking",
        "Loan History & Activity Logs",
        "Equipment Data Management",
      ],
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

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  const ProjectCard = ({ project, index }) => (
    <div
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-teal-500/10 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10 flex flex-col h-full"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

        {/* Tech Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-full bg-gray-900/90 text-teal-300 border border-teal-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Category */}
        <div className="absolute bottom-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.accent}`}
          >
            {project.category[0].toUpperCase()}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-6">
        {" "}
        {/* ✅ */}
        <div>
          <div className="flex justify-between mb-3">
            <h3 className="text-xl font-semibold text-white">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-teal-400/60" />
          </div>

          <p className="text-gray-400 text-sm mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.features.map((feature, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          {" "}
          {project.liveUrl !== "#" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              className="inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-medium transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <button
              className="w-full py-2 rounded-xl text-center border border-dashed border-gray-600 text-gray-400 cursor-not-allowed"
            >
              Demo Not Available
            </button>
          )}
        </div>
      </div>
      
      {/* Hover Effects */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
      ></div>
    </div>
  );

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden"
      id="projects"
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a5c5c' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-teal-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-[length:200%] animate-gradient">
              Projects
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Showcasing our expertise through innovative solutions that drive{" "}
            <span className="font-semibold text-teal-300">
              real business impact
            </span>{" "}
            and{" "}
            <span className="font-semibold text-cyan-300">
              exceptional user experiences
            </span>
            .
          </p>
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`group px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/25"
                  : "bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 text-gray-300 hover:text-white hover:border-teal-400/40"
              }`}
            >
              <div className="flex items-center gap-2">
                {filter.id !== "all" && (
                  <Filter className="h-3 w-3 opacity-50 group-hover:opacity-100" />
                )}
                {filter.label}
              </div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
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

        {/* CTA */}
        <div
          className="relative rounded-3xl overflow-hidden"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-gray-900/50 to-cyan-900/10"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(20,184,166,0.05)_25%,rgba(20,184,166,0.05)_50%,transparent_50%,transparent_75%,rgba(34,211,238,0.05)_75%,rgba(34,211,238,0.05))] bg-[length:4rem_4rem]"></div>

          <div className="relative z-10 p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Share your vision, and
              we'll bring it to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#getintouch"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 transform hover:-translate-y-1"
              >
                Start Your Project
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-teal-500/30 hover:border-teal-400/50 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1">
                View All Projects
                <ExternalLink className="h-5 w-5 text-teal-400" />
              </button> */}
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

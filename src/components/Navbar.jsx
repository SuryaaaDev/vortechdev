import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "../assets/VortechDev.png";

export default function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-xl border-b border-teal-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2" data-aos="fade-down">
              <div className="relative">
                <div className="relative px-3 py-1 rounded-lg">
                  <a
                    href="#"
                    className="text-xl font-bold text-white tracking-tight"
                  >
                    <img src={Logo} alt="VortechDev" className="w-40" />
                  </a>
                </div>
              </div>
              {/* <div className="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div> */}
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  data-aos="fade-down"
                  data-aos-delay={index * 100}
                  className="group relative px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-800/50"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 group-hover:w-4/5 group-hover:left-1/10 transition-all duration-300 transform"></span>
                </a>
              ))}
            </div>

            <div
              className="hidden md:flex"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <a
                href="#getintouch"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 transform hover:-translate-y-0.5"
              >
                Get in Touch
                <ChevronRight className="inline ml-2 h-4 w-4" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-teal-400" />
              ) : (
                <Menu className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ paddingTop: "4rem" }}
      >
        <div
          className={`absolute inset-0 bg-gray-900/95 backdrop-blur-xl mt-14 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group flex items-center justify-between p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-gray-300 group-hover:text-white text-lg font-medium">
                  {item.label}
                </span>
                <ChevronRight className="h-5 w-5 text-teal-400/50 group-hover:text-teal-400 transform group-hover:translate-x-1 transition-all" />
              </a>
            ))}
            <a href="#getintouch" className="flex justify-center items-center mt-8 max-w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
              Get in Touch
              <ChevronRight className="inline ml-2 h-4 w-4" />
            </a>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-teal-900/10 to-transparent"></div>
            <div className="absolute top-1/4 right-4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}

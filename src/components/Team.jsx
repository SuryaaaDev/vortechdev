import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Github, Linkedin, Sparkles, User } from "lucide-react";

const teamMembers = [
  {
    name: "Surya Gunsetya Saputra",
    role: "Fullstack Developer",
    socials: {
      github: "https://github.com/suryaaadev",
      linkedin: "https://www.linkedin.com/in/surya-gunsetya-saputra-b06575332/",
    },
  },
  {
    name: "Abhista Kumara Pratama",
    role: "Software Developer",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/abhista-pratama-863247333/",
    },
  },
  {
    name: "Fauzan Aziz Wibrilliant",
    role: "Network Engineer",
    socials: {
      github: "#",
      linkedin: "https://www.linkedin.com/in/fauzan-aziz-wibrilliant-28365b369/",
    },
  },
];

export default function Team() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative py-28 bg-gradient-to-b from-gray-950 to-gray-900 text-white" id="team">
      {/* Glow background */}
      <div className="absolute inset-0 bg-teal-500/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6" data-aos="fade-up">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-down">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-teal-500/20 mb-6">
            <Sparkles className="h-4 w-4 text-teal-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Meet the <span className="text-teal-400">VortechDev</span> Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A passionate team crafting modern digital solutions with innovation
            and precision.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="group relative rounded-3xl bg-gray-900/60 border border-teal-500/10 backdrop-blur-xl hover:border-teal-500/40 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 blur-xl transition-all" />

              <div className="relative p-8 text-center">
                {/* ICON PROFILE */}
                <div className="relative w-28 h-28 mx-auto mb-6 group" data-aos="zoom-in" data-aos-delay={index * 150 + 100}>
                  {/* Outer Glow Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/40 to-cyan-400/40 blur-lg opacity-0 group-hover:opacity-100 transition" />

                  {/* Outer Border */}
                  <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-teal-400/60 to-cyan-400/60">
                    {/* Inner Circle */}
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <User className="w-14 h-14 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-teal-400 text-sm mt-1">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-4 mt-6" data-aos="fade-up" data-aos-delay={index * 150 + 200}>
                  {member.socials.github && (
                    <a
                      href={member.socials.github} target="_blank"
                      className="p-2 rounded-full bg-gray-800 hover:bg-teal-500/20 text-gray-400 hover:text-teal-400 transition"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin} target="_blank"
                      className="p-2 rounded-full bg-gray-800 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {/* {member.socials.email && (
                    <a
                      href={member.socials.email}
                      className="p-2 rounded-full bg-gray-800 hover:bg-teal-500/20 text-gray-400 hover:text-teal-400 transition"
                    >
                      <Mail size={18} />
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

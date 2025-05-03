import React from 'react';
import { Github, Linkedin, Mail, MapPin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteConfig } from './constants/config';

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            {siteConfig.name}
          </motion.h1>
          <nav className="flex gap-6">
            <motion.a
              href={siteConfig.resumeLink}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-blue-600 font-medium underline hover:text-blue-800 transition-colors"
            >
              Resume
            </motion.a>
            {["About", "Experience", "Projects", "Skills"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img
                src={siteConfig.profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto shadow-xl border-4 border-white"
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
            >
              {siteConfig.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-xl text-gray-500 sm:mt-5"
            >
              {siteConfig.title}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 flex justify-center gap-4 text-gray-500"
            >
              <div className="flex items-center gap-1 bg-white px-4 py-2 rounded-full shadow-md">
                <MapPin size={18} className="text-blue-500" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-1 bg-white px-4 py-2 rounded-full shadow-md">
                <Mail size={18} className="text-blue-500" />
                <span>{siteConfig.email}</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex justify-center gap-4"
            >
              {[
                { icon: Github, link: siteConfig.social.github },
                { icon: Linkedin, link: siteConfig.social.linkedin },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="mt-6 text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              {siteConfig.about}
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-12">
              Experience
            </h2>
          </FadeInWhenVisible>
          <div className="max-w-3xl mx-auto">
            {siteConfig.experience.map((exp, index) => (
              <FadeInWhenVisible key={index}>
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg mb-8 border border-gray-100 hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Product Link
                      </a>
                    )}
                  </div>
                  <p className="mt-1 text-blue-600 font-medium">
                    {exp.company} • {exp.duration}
                  </p>
                  <ul>
                    {exp.description.map((desc, i) => (
                      <li
                        key={i}
                        className="mt-2 text-gray-600 leading-relaxed"
                      >
                        • {desc}
                      </li>
                    ))}
                  </ul>
                  {/* <p className="mt-4 text-gray-600 leading-relaxed">{exp.description}</p> */}
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-12">
              Projects
            </h2>
          </FadeInWhenVisible>
          <div className="grid gap-8 md:grid-cols-2">
            {siteConfig.projects.map((project, index) => (
              <FadeInWhenVisible key={index}>
                <motion.a
                  href={project.link}
                  className="block group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                  </div>
                </motion.a>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-12">
              Skills
            </h2>
          </FadeInWhenVisible>
          <div className="grid gap-8 md:grid-cols-3">
            {siteConfig.skills.map((skillGroup, index) => (
              <FadeInWhenVisible key={index}>
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-500"
          >
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
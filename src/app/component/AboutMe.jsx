"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Download, User, Code, Briefcase, GraduationCap } from "lucide-react"

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Skills data
  const skills = [
    { name: "React", level: 85 },
    { name: "Next.js", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "TypeScript", level: 70 },
    { name: "Node.js", level: 85 },
    { name: "Java", level: 85 },
    { name: "Spring Boot", level: 85 },
    { name: "postgres", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Supabase", level: 85 },
  ]

  // Education data
  const education = [
    // {
    //   degree: "Master of Computer Science",
    //   institution: "University of Technology",
    //   year: "2020 - 2022",
    //   description: "Specialized in Web Development and Artificial Intelligence",
    // },
    {
      degree: "Bachelor of Computer Science",
      institution: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology",
      year: "2021 - 2025",
      description: "Graduated with honors, focused on Web Technologies",
    },
  ]

  // Experience data
  const experience = [
    {
      position: "Team Lead-Full Stack Developer",
      company: "Boosts Inc.",
      year: "2024 - Present",
      description:
        "Leading the development team, implementing modern web applications using both frontend and backend technologies",
    },
    {
      position: "Free Lencer Developer",
      company: "Fiver , Upwork",
      year: "2020 - 2022",
      description: "Developed responsive websites and web applications for various clients",
    },
 
  ]

  useEffect(() => {
    if (isInView) {
      setIsVisible(true)
    }
  }, [isInView])

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a")

    // Set the href to the path of your CV file
    link.href = "/Muhammad_ali_Iqbal_CV.pdf"

    // Set the download attribute with the desired filename
    link.download = "Muhammad_ali_Iqbal_CV.pdf"

    // Append to the document
    document.body.appendChild(link)

    // Trigger the click event
    link.click()

    // Clean up
    document.body.removeChild(link)
  }

  return (
    <section className="py-20 px-4 sm:px-6 bg-none text-white" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="relative inline-block">
              Let&apos;s Introduce About Myself
              <motion.span
                className="absolute bottom-2 left-0 h-2 bg-purple-600/30 w-full z-0"
                initial={{ width: 0 }}
                animate={isVisible ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Get to know more about me, my background, and what I do
          </motion.p>
        </motion.div>

        {/* About Content - Two Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Profile Image with Frame */}
              <div className="relative mx-auto md:mx-0 w-64 h-64 md:w-80 md:h-80 mb-8">
                <motion.div
                  className="absolute inset-0 border-2 border-purple-500/30 rounded-xl -rotate-6"
                  animate={{ rotate: isVisible ? -6 : 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.div>
                <motion.div
                  className="absolute inset-0 border-2 border-indigo-500/30 rounded-xl rotate-6"
                  animate={{ rotate: isVisible ? 6 : 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                ></motion.div>
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image src="/profile.jpeg" alt="Muhammad Ali" fill className="object-cover" />
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex flex-col items-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="p-3 bg-purple-600/20 rounded-full mb-2">
                    <Code className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold">2+ Years</h3>
                  <p className="text-sm text-gray-400">Coding Experience</p>
                </motion.div>

                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex flex-col items-center"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="p-3 bg-indigo-600/20 rounded-full mb-2">
                    <Briefcase className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-bold">Production Level Projects</h3>
                  <p className="text-sm text-gray-400">Completed</p>
                </motion.div>
              </div>

              {/* Download CV Button */}
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.button
                  onClick={handleDownloadCV}
                  className="px-8 py-4 bg-none border border-white/20 rounded-xl text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 overflow-hidden relative w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Download CV</span>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Download className="w-5 h-5" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-purple-600/20 w-0"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - About Text and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* About Text */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-purple-400" />
                About Me
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  I am a passionate Full Stack Web Developer with expertise in creating modern, responsive web
                  applications. With over 2 years of experience in the field, I have developed a strong understanding of
                  both frontend and backend technologies.
                </p>
                <p>
                  My journey in web development began during my university years, where I discovered my passion for
                  creating digital experiences. Since then, I have worked on numerous projects, ranging from small
                  business websites to complex enterprise applications.
                </p>
                <p>
                  I specialize in Spring Boot ,React, Next.js, and Node.js, and I am constantly learning new technologies to stay at
                  the forefront of web development. My goal is to create web applications that are not only visually
                  appealing but also performant and user-friendly.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                My Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Education and Experience - Two Columns on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-400" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-6 border-l border-white/10 last:border-0 last:pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-purple-600/40 -translate-x-1/2 border border-purple-500/50"></div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <span className="text-sm text-purple-400">{item.year}</span>
                    <h4 className="text-lg font-bold mt-1">{item.degree}</h4>
                    <p className="text-gray-400">{item.institution}</p>
                    <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-400" />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 pb-6 border-l border-white/10 last:border-0 last:pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-600/40 -translate-x-1/2 border border-indigo-500/50"></div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <span className="text-sm text-indigo-400">{item.year}</span>
                    <h4 className="text-lg font-bold mt-1">{item.position}</h4>
                    <p className="text-gray-400">{item.company}</p>
                    <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ChevronDown, Linkedin, Github, Twitter, Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import Navbar from "../component/Navbar"

// Import tech stack icons directly
import reactIcon from "../../../public/icons/react.png"
import nextjsIcon from "../../../public/icons/nextjs.png"
import nodeIcon from "../../../public/icons/nodejs.png"
import mongodbIcon from "../../../public/icons/mongodb.png"
import tailwindIcon from "../../../public/icons/tailwind.png"
import typescriptIcon from "../../../public/icons/typescript.png"
import javaIcon from "../../../public/icons/java.png"
import springIcon from "../../../public/icons/spring.png"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState({
    title: false,
    subtitle: false,
    image: false,
    cards: false,
  })

  const [isHovering, setIsHovering] = useState(false)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate particles only on the client side
    const newParticles = Array(20)
      .fill(0)
      .map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 5,
      }))
    setParticles(newParticles)

    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible({
        title: true,
        subtitle: true,
        image: true,
        cards: true,
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Tech stack with icons
  const techStack = [
    { name: "React", icon: reactIcon },
    { name: "Next.js", icon: nextjsIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Java", icon: javaIcon },
    { name: "Spring Boot", icon: springIcon },
  ]

  // Tech icons that will float around the profile image (desktop only)
  const techIcons = [
    { icon: reactIcon, top: "10%", left: "0%", delay: 0 },
    { icon: nextjsIcon, top: "70%", left: "10%", delay: 0.5 },
    { icon: tailwindIcon, top: "20%", left: "85%", delay: 1 },
    { icon: nodeIcon, top: "80%", left: "85%", delay: 1.5 },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 bg-none text-white overflow-x-hidden">
      <Navbar />
      {/* Animated background elements */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {/* Grid lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-white/5"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-white/5"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-white/5"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-white/5"></div>

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-700/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-700/20 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Particle effect - Client-side only */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                top: particle.top,
                left: particle.left,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Social Media Links - Fixed position on desktop, relative on mobile */}
        <motion.div
          className="hidden md:flex fixed top-10 right-10 flex-col gap-4 z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[
            {
              icon: <Github className="w-5 h-5" />,
              href: "https://github.com/Ali105111",
              color: "hover:text-purple-400",
            },
            {
              icon: <Linkedin className="w-5 h-5" />,
              href: "https://linkedin.com/in/yourusername",
              color: "hover:text-blue-400",
            },
            {
              icon: <Twitter className="w-5 h-5" />,
              href: "https://twitter.com/yourusername",
              color: "hover:text-sky-400",
            },
            { icon: <Mail className="w-5 h-5" />, href: "mailto:your@email.com", color: "hover:text-indigo-400" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 bg-white/5 rounded-full ${social.color} transition-all duration-300 hover:bg-white/10 hover:scale-110`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Hero Section - Different layout for mobile and desktop */}
        <section className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Mobile Layout - Image first, then text */}
          <div className="flex flex-col md:hidden w-full items-center">
            {/* Profile Image for Mobile */}
            <motion.div
              className="relative z-10 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible.image ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="relative w-64 h-64 mx-auto"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Profile image container */}
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 z-10 opacity-0"
                    animate={{ opacity: isHovering ? 0.6 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Profile image */}
                  <Image src="/profile.jpeg" alt="Muhammad Ali" fill className="object-cover" />
                </motion.div>

                {/* Animated ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full border border-purple-500/30"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  }}
                />

                {/* Animated dots */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-indigo-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1.5,
                  }}
                />
              </div>
            </motion.div>

            {/* Mobile Social Icons */}
            <motion.div
              className="flex md:hidden gap-4 mb-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                {
                  icon: <Github className="w-5 h-5" />,
                  href: "https://github.com/Ali105111",
                  color: "hover:text-purple-400",
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  href: "https://linkedin.com/in/yourusername",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <Twitter className="w-5 h-5" />,
                  href: "https://twitter.com/yourusername",
                  color: "hover:text-sky-400",
                },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:your@email.com", color: "hover:text-indigo-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 rounded-full ${social.color} transition-all duration-300 hover:bg-white/10`}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Text Content for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.title ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-4 text-center"
            >
              <h2 className="text-lg font-medium text-purple-400 mb-2">Hello, I'm</h2>
              <h1 className="text-4xl font-bold text-white mb-4 relative">
                <span className="relative inline-block">
                  <span className="relative z-10">Muhammad Ali</span>
                  <motion.span
                    className="absolute bottom-2 left-0 h-3 bg-purple-600/30 w-full z-0"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.subtitle ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  <TypeAnimation
                    sequence={[
                      "Full Stack Web Developer",
                      2000,
                      // "UI/UX Designer",
                      // 2000,
                      "React Specialist",
                      2000,
                      "Next.js Expert",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                I build modern, responsive web applications with cutting-edge technologies
              </p>
            </motion.div>

            {/* Tech badges for Mobile */}
            <motion.div
              className="flex flex-wrap gap-2 justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 flex items-center gap-2"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                  <div className="w-4 h-4 relative">
                    <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                  </div>
                  {tech.name}
                </motion.div>
              ))}
            </motion.div>

            {/* Button for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible.subtitle ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-none border border-white/20 rounded-xl text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href='/projects'><span className="relative z-10">View My Projects</span></Link>
                <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-purple-600/20 w-0"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Desktop Layout - Text and Image side by side */}
          <div className="hidden md:flex md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
            {/* Text Content for Desktop */}
            <div className="flex-1 text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.title ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="mb-4"
              >
                <h2 className="text-lg font-medium text-purple-400 mb-2">Hello, I'm</h2>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 relative">
                  <span className="relative inline-block">
                    <span className="relative z-10">Muhammad Ali</span>
                    <motion.span
                      className="absolute bottom-2 left-0 h-3 bg-purple-600/30 w-full z-0"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.subtitle ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                    <TypeAnimation
                      sequence={[
                        "Full Stack Web Developer",
                        2000,
                        // "UI/UX Designer",
                        // 2000,
                        "React Specialist",
                        2000,
                        "Next.js Expert",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Number.POSITIVE_INFINITY}
                    />
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl">
                  I build modern, responsive web applications with cutting-edge technologies
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.subtitle ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="px-8 py-4 bg-none border border-white/20 rounded-xl text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href='/projects'><span className="relative z-10">View My Projects</span></Link>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-purple-600/20 w-0"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>

              {/* Tech badges for Desktop */}
              <motion.div
                className="mt-8 flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10 flex items-center gap-2"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <div className="w-4 h-4 relative">
                      <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                    </div>
                    {tech.name}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Profile Image for Desktop */}
            <motion.div
              className="flex-1 relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible.image ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 mx-auto"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {/* Tech stack icons floating around */}
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-10 h-10 rounded-full bg-white/10 flex items-center justify-center p-2 backdrop-blur-sm border border-white/20"
                    style={{ top: tech.top, left: tech.left }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: isHovering ? [0, 10, 0] : 0,
                      y: isHovering ? [0, -10, 0] : 0,
                    }}
                    transition={{
                      duration: 2,
                      delay: tech.delay,
                      x: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                      y: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                    }}
                  >
                    <div className="w-full h-full relative">
                      <Image src={tech.icon || "/placeholder.svg"} alt="Tech icon" fill className="object-contain" />
                    </div>
                  </motion.div>
                ))}

                {/* Profile image container */}
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden border-2 border-white/10 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 z-10 opacity-0"
                    animate={{ opacity: isHovering ? 0.6 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Profile image */}
                  <Image src="/profile.jpeg" alt="Muhammad Ali" fill className="object-cover" />
                </motion.div>

                {/* Animated rings */}
                <motion.div
                  className="absolute -inset-4 rounded-full border border-purple-500/30"
                  animate={{
                    rotate: 360,
                    scale: isHovering ? 1.1 : 1,
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 0.3 },
                  }}
                />

                <motion.div
                  className="absolute -inset-8 rounded-full border border-indigo-500/20"
                  animate={{
                    rotate: -360,
                    scale: isHovering ? 1.1 : 1,
                  }}
                  transition={{
                    rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 0.3 },
                  }}
                />

                {/* Animated dots */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                    x: isHovering ? [0, 10, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    x: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                />
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-indigo-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                    x: isHovering ? [0, -10, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                    x: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                />
                <motion.div
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                    y: isHovering ? [0, 10, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                    y: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                />
                <motion.div
                  className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                    y: isHovering ? [0, -10, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1.5,
                    y: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scroll down indicator - Desktop only */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

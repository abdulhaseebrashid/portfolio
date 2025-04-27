"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Navbar from "../component/Navbar" // Import your Navbar component

// Sample project data - replace with your actual data source
const projectsData = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API", "Hontinger (VPS Server)"],
    image: "/ProjectImages/p4-1.png",
    category: "Web Development",
    date: "April 2025",
  },
  {
    id: "phonebechpk.com",
    title: "phonebechpk.com",
    description:
      "Phone Bech is a dedicated marketplace where users can easily post advertisements for their mobile phones and connect with potential buyers.",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel", "Supabase", "Deployment"],
    image: "/ProjectImages/cover-01.jpg",
    category: "Web Development",
    date: "December 2024",
  },
  {
    id: "Smart-Guardian",
    title: "Smart-Guardian (FYP)",
    description:
      "Smart Guardian is an innovative resource management and security system designed for factories, educational institutions, and healthcare facilities, utilizing geo-fencing, indoor positioning, and computer vision",
    techStack: [
      "Spring Boot",
      "Firebase",
      "Postgresql",
      "Nextjs",
      "Android Studio",
      "Java",
      "Tracking Technologies",
      "GPS",
      "Wi-Fi triangulation",
      "BLE (Bluetooth Low Energy)",
      "Gyroscope",
    ],
    image: "/ProjectImages/fyp1.png",
    category: "Web Developement & Mobile Development",
    date: "October 2024",
  },
  {
    id: "Nifty-Orbit",
    title: "NiftyOrbit.com",
    description:
      "Fully functional e-commerce platform that allows users to browse products, manage their shopping cart, place orders, and receive shipment updates. The backend is designed to be secure, scalable, and efficient for handling business operations like order management, product management, and customer interactions.",

    techStack: ["React", "Nest.js", "postgresql", "Hontinger,Deployment", "VPS Server"],
    image: "/ProjectImages/nifty2.png",
    category: "Web Developement",
    date: "March 2025",
  },
  {
    id: "SparewarePro",
    title: "SparewarePro.com",
    description:
      "A complete e-commerce solution enabling users to explore products, manage carts, checkout securely, and track orders in real time. Built with a robust backend for scalability, it supports critical business functions including inventory management, order processing, and customer engagement—all while ensuring security and performance at scale.",

    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
    image: "/ProjectImages/spare1.png",
    category: "Web Development",
    date: "January 2025",
  },
]

export default function AllProjects() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const pageRef = useRef(null)
  const [particles, setParticles] = useState([])

  // Get all unique categories
  const categories = ["All", ...new Set(projectsData.map((project) => project.category))]

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projectsData : projectsData.filter((project) => project.category === activeCategory)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)

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
  }, [])

  return (
    <div className="min-h-screen bg-none text-white overflow-x-hidden" ref={pageRef}>
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
      {/* Include your Navbar */}
      <Navbar />

      {/* Back button */}
      <motion.div
        className="fixed top-24 left-6 z-40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </motion.button>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Projects
            <motion.span
              className="absolute bottom-2 left-0 h-3 bg-purple-600/30 w-full z-0"
              initial={{ width: 0 }}
              animate={isVisible ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Browse through all my projects and explore the details of each one. Click on any project to view more
            information.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                activeCategory === category
                  ? "bg-purple-600/40 border-purple-500/50 text-white"
                  : "bg-white/5 border-white/10 text-white hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              onClick={() => router.push(`/projects/${project.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600/40 backdrop-blur-sm rounded-full text-xs text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{project.date}</span>
                  <motion.span className="text-purple-400 text-sm font-medium" whileHover={{ x: 5 }}>
                    View Details →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No projects found message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-400">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

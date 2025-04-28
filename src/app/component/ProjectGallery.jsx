"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ProjectGallery() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const galleryRef = useRef(null)

  // Animation when gallery comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (galleryRef.current) {
      observer.observe(galleryRef.current)
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current)
      }
    }
  }, [])

  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
      image: "/ProjectImages/p4-1.png",
      category: "Web Development",
      size: "large", // large, medium, small for different grid sizes
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with Next.js and Framer Motion.",
      image: "/ProjectImages/p4-4.png",
      category: "UI/UX Design",
      size: "medium",
    },
    {
      id: 3,
      title: "Mobile App UI",
      description: "UI/UX design for a fitness tracking mobile application.",
      image: "/ProjectImages/p4-3.png",
      category: "Mobile Development",
      size: "medium",
    },
    {
      id: 4,
      title: "Dashboard Design",
      description: "Interactive dashboard for data visualization and analytics.",
      image: "/placeholder.svg?height=800&width=1000",
      image: "/ProjectImages/p4-2.png",
      size: "large",
    },
    {
      id: 5,
      title: "Social Media App",
      description: "A social networking platform with real-time messaging.",
      image: "/ProjectImages/p4-5.png",
      category: "Web Development",
      size: "small",
    },
    {
      id: 6,
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by machine learning algorithms.",
      image: "/ProjectImages/p4-6.png",
      category: "AI Development",
      size: "medium",
    },
  ]

  // Get all unique categories
  const categories = ["All", ...new Set(projects.map((project) => project.category))]

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  // Get size class based on project size
  const getSizeClass = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
      case "medium":
        return "col-span-1 row-span-2 md:col-span-1 md:row-span-1"
      case "small":
      default:
        return "col-span-1 row-span-1"
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6" id="projects" ref={galleryRef}>
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
              My Projects
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
            Explore my latest work and creative projects. Each project represents my passion for creating beautiful and
            functional digital experiences.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        {/* <motion.div
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
        </motion.div> */}

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative overflow-hidden rounded-xl ${getSizeClass(project.size)}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="w-full h-full min-h-[300px] relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />

                {/* Overlay Gradient */}
                {/* <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 transition-opacity duration-300"
                  style={{
                    opacity: hoveredProject === project.id ? 1 : 0.5,
                  }}
                /> */}

                {/* Project Info on Hover */}
                <motion.div
                  className="absolute inset-0 p-6 flex flex-col justify-end"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredProject === project.id ? 0 : 20,
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="mb-2">
                      <span className="px-3 py-1 bg-purple-600/40 backdrop-blur-sm rounded-full text-xs text-white">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.description}</p>
                  </motion.div>
                </motion.div>
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

        {/* View All Projects Button - Only show if not already showing all */}
       
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              className="px-8 py-4 bg-none border border-white/20 rounded-xl text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 overflow-hidden relative mx-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              // onClick={() => setActiveCategory("All")}
            >
              <Link href='/projects'><span className="relative z-10">View All Projects</span></Link>
              <motion.div
                className="absolute bottom-0 left-0 h-full bg-purple-600/20 w-0"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        )
      </div>
    </section>
  )
}

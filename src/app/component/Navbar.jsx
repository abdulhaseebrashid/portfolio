"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close sidebar when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Cycle through thinking messages
  const thinkingMessages = [
    "You wanna explore",
    "My AI Stuff",
    "Click Me!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        (prevIndex + 1) % thinkingMessages.length
      )
    }, 3000) // Change message every 3 seconds

    return () => clearInterval(interval)
  }, [thinkingMessages.length])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Me", href: "/contact" },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // Robot animation variants
  const robotVariants = {
    animate: {
      y: [0, -10, 0], // Slightly more pronounced floating
      rotate: [-3, 3, -3], // Enhanced tilt for robotic motion
      boxShadow: [
        "0px 0px 15px rgba(192, 132, 252, 0.6)",
        "0px 0px 25px rgba(192, 132, 252, 0.9)",
        "0px 0px 15px rgba(192, 132, 252, 0.6)",
      ],
      transition: {
        y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
        boxShadow: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
      },
    },
    hover: {
      scale: 1.15,
      boxShadow: "0px 0px 30px rgba(192, 132, 252, 1)",
      transition: { duration: 0.4 },
    },
    tap: {
      scale: 0.9,
      boxShadow: "0px 0px 20px rgba(192, 132, 252, 0.7)",
      transition: { duration: 0.2 },
    },
  }

  // Thinking cloud animation variants
  const cloudVariants = {
    animate: {
      y: [-5, 5, -5],
      scale: [1, 1.1, 1],
      boxShadow: [
        "0px 0px 10px rgba(255, 255, 255, 0.3)",
        "0px 0px 20px rgba(255, 255, 255, 0.5)",
        "0px 0px 10px rgba(255, 255, 255, 0.3)",
      ],
      transition: {
        repeat: Infinity,
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  }

  // Text animation variants for sliding effect
  const textVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.6, ease: "easeIn" } },
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between md:justify-center py-4 px-6 transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={toggleSidebar}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="w-6 h-6 text-white" />
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center">
          <ul className="flex space-x-1 sm:space-x-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} passHref>
                  <motion.div
                    className="relative px-4 py-2 text-white cursor-pointer"
                    onHoverStart={() => setActiveItem(item.name)}
                    onClick={() => setActiveItem(item.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Animated background on hover and active */}
                    {activeItem === item.name && (
                      <motion.div
                        className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600/40 to-indigo-600/40"
                        layoutId="navbar-active"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}

                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-purple-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Empty div to balance the layout on mobile */}
        <div className="md:hidden w-6"></div>
      </motion.nav>

      {/* AI Robot with Thinking Cloud */}
      <Link href="/projects/coreAI" passHref>
        <motion.div
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center cursor-pointer"
          variants={robotVariants}
          animate="animate"
          whileHover="hover"
          whileTap="tap"
        >
          {/* Thinking Cloud */}
          <motion.div
            className="relative bg-gray-200/20 backdrop-blur-md rounded-full px-6 py-3 mb-3 w-48 h-12 flex items-center justify-center overflow-hidden border border-gray-300/10"
            variants={cloudVariants}
            animate="animate"
            style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))" }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentMessageIndex}
                className="text-sm text-white font-semibold"
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {thinkingMessages[currentMessageIndex]}
              </motion.span>
            </AnimatePresence>
            {/* Cloud tails */}
            <div className="absolute -bottom-2 left-1/3 w-5 h-5 bg-gray-200/20 rounded-full"></div>
            <div className="absolute -bottom-3 left-2/5 w-3 h-3 bg-gray-200/20 rounded-full"></div>
          </motion.div>

          {/* Robot Head */}
          <motion.div
            className="bg-gradient-to-br from-purple-900 to-purple-600 rounded-lg w-20 h-24 flex flex-col items-center justify-center shadow-xl relative overflow-hidden"
            style={{ background: "linear-gradient(45deg, #4C1D95, #6B21A8)" }}
          >
            {/* Antenna */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gray-300 rounded-sm"
              animate={{ y: [-2, 2, -2], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              {/* Glowing tip on antenna */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full"
                style={{ boxShadow: "0 0 8px rgba(239, 68, 68, 0.8)" }}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
            {/* Face Panel */}
            <div className="relative w-16 h-16 bg-gray-700/30 rounded-md flex flex-col items-center justify-center">
              {/* Glowing Rectangular Eyes */}
              <motion.div
                className="flex space-x-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <motion.div
                  className="w-4 h-3 bg-cyan-400 rounded-sm"
                  style={{ boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)" }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                />
                <motion.div
                  className="w-4 h-3 bg-cyan-400 rounded-sm"
                  style={{ boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)" }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                />
              </motion.div>
              {/* Segmented Mouth (Speaker-like) */}
              <div className="absolute bottom-2 w-10 h-4 bg-gray-800 rounded-sm flex items-center justify-center gap-0.5">
                <div className="w-1 h-3 bg-gray-400 rounded-sm"></div>
                <div className="w-1 h-3 bg-gray-400 rounded-sm"></div>
                <div className="w-1 h-3 bg-gray-400 rounded-sm"></div>
                <div className="w-1 h-3 bg-gray-400 rounded-sm"></div>
              </div>
            </div>
            {/* Bolts on sides */}
            <motion.div
              className="absolute top-2 left-2 w-2 h-2 bg-gray-500 rounded-full"
              animate={{ rotate: [0, 360, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            <motion.div
              className="absolute top-2 right-2 w-2 h-2 bg-gray-500 rounded-full"
              animate={{ rotate: [0, 360, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            <div className="text-xs text-white font-bold mt-2">AI</div>
          </motion.div>
        </motion.div>
      </Link>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-full bg-black/90 backdrop-blur-md z-50 md:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={toggleSidebar}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Mobile menu items */}
              <div className="flex flex-col items-center justify-center flex-1 gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link href={item.href} passHref>
                      <motion.div
                        className="relative text-white text-2xl font-bold cursor-pointer"
                        onClick={() => {
                          setActiveItem(item.name)
                          toggleSidebar()
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">{item.name}</span>

                        {/* Animated underline */}
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                {/* Core AI link in sidebar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/projects/coreAI" passHref>
                    <motion.div
                      className="relative text-white text-2xl font-bold cursor-pointer"
                      onClick={toggleSidebar}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Core AI</span>
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>

              {/* Social links in sidebar */}
              <div className="p-8">
                <div className="w-full h-px bg-white/10 mb-8"></div>
                <div className="text-center text-white/60 text-sm">
                  <p>© 2025 Abdul Haseeb Rashid</p>
                  <p>AI-Driven Web Application Developer</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
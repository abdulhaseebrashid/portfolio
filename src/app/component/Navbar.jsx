"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")
  const [scrolled, setScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "projects" },
    { name: "Contact Me", href: "#contact" },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
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
              </div>

              {/* Social links in sidebar */}
              <div className="p-8">
                <div className="w-full h-px bg-white/10 mb-8"></div>
                <div className="text-center text-white/60 text-sm">
                  <p>© 2023 Muhammad Ali</p>
                  <p>Full Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

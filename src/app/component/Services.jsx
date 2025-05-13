"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Database, Layout, Search, Cpu, Bot } from 'lucide-react'

export default function Services() {
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
  }, [])

  const services = [
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "FRONTEND DEVELOPMENT",
      description: "Creating responsive, interactive user interfaces with modern frameworks like React, Next.js, and cutting-edge animation libraries for exceptional user experiences."
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: "BACKEND DEVELOPMENT",
      description: "Building robust server-side applications with Node.js, Express, and database integration to power your applications with secure, scalable infrastructure."
    },
    {
      icon: <Layout className="w-12 h-12 text-purple-500" />,
      title: "WEB DESIGN",
      description: "Crafting visually stunning, user-centered designs that combine aesthetics with functionality to create memorable digital experiences that engage your audience."
    },
    {
      icon: <Search className="w-12 h-12 text-purple-500" />,
      title: "SEO FRIENDLY",
      description: "Optimizing your web presence for search engines with best practices for content structure, performance, and accessibility to improve visibility and rankings."
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-500" />,
      title: "MACHINE LEARNING ENGINEERING",
      description: "Designing and implementing intelligent systems using machine learning, deep learning, and data analytics to create predictive and automated solutions for real-world problems."
    },
    {
      icon: <Bot className="w-12 h-12 text-purple-500" />,
      title: "AI-POWERED WEB APPLICATIONS",
      description: "Developing smart web applications integrated with AI technologies like chatbots and NLP to provide personalized, efficient, and engaging user experiences."
    }
  ]

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            MY SERVICE
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-purple-600 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-none rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-white">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

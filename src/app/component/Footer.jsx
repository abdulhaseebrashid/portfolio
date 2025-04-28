"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Facebook, Twitter, Dribbble, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate particles only on the client side
    const newParticles = Array(10)
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
    <footer className="relative py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-white/5"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-white/5"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-white/5"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-purple-700/10 blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" className="inline-block">
            <h2 className="text-4xl font-bold text-purple-500 mb-2">
              MUHAMMAD ALI
              <span className="inline-block w-2 h-2 bg-purple-500 rounded-full ml-1 align-top mt-2"></span>
            </h2>
          </Link>
        </motion.div>

        <motion.div
          className="mt-8 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-medium text-white mb-4">FOLLOW ME</h3>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Dribbble className="w-5 h-5" />
              <span className="sr-only">Dribbble</span>
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.443 5.35c.639 0 1.23.05 1.77.198.541.099 1.031.297 1.472.495.442.198.787.495 1.082.89.294.396.491.89.639 1.487.147.594.196 1.287.196 2.08v6.387h-3.293v-5.994c0-.693-.049-1.188-.147-1.584-.098-.297-.294-.594-.54-.693-.246-.099-.639-.198-1.082-.198-.442 0-.787.05-1.032.198-.245.1-.491.297-.638.693-.147.396-.196.891-.196 1.584v5.994H2.38V5.549h3.096v1.386c.393-.594.885-.99 1.475-1.287.587-.297 1.327-.297 2.491-.297zm8.277-.198c.639 0 1.23.099 1.77.297.54.198.984.495 1.377.891.393.396.688.89.885 1.386.196.594.294 1.188.294 1.881v1.683h-5.161c0 .594.049 1.089.196 1.485.098.297.294.594.54.792.246.198.491.297.836.396.344.1.688.1 1.082.1.393 0 .737-.05 1.033-.1.294-.05.54-.1.786-.198.245-.1.442-.198.638-.297.196-.1.344-.198.491-.297h.147v2.477c-.196.099-.442.198-.737.297-.294.1-.639.198-1.033.297-.393.1-.786.1-1.229.1-.737 0-1.426-.1-2.065-.298-.639-.198-1.18-.495-1.672-.891-.491-.396-.884-.99-1.18-1.683-.294-.693-.442-1.485-.442-2.477 0-.891.098-1.683.344-2.376.245-.693.59-1.287 1.033-1.782.442-.495.983-.792 1.622-1.089.688-.198 1.426-.297 2.26-.297zm.049 2.179c-.343 0-.638.05-.884.1-.246.099-.442.198-.639.396-.196.198-.344.396-.442.693-.098.297-.196.594-.196.99h4.227c0-.396-.049-.693-.147-.99-.098-.297-.245-.495-.442-.693-.196-.198-.442-.297-.688-.396-.245-.05-.54-.1-.835-.1z" />
              </svg>
              <span className="sr-only">Behance</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            Copyright ©2025 All rights reserved | This portfolio is made by{" "}
            <Heart className="w-4 h-4 inline-block text-red-500" /> {" "}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Ali
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

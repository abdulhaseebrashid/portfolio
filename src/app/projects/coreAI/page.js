"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function CoreAIPage() {
  // Project data for CoreAIPage
  const project = {
    title: "Feature-Representation-as-Images-with-Neighborhood-Dependencies-for-CNN-Compatibility-Bazgir-et-al",
    description:
      "This project focuses on transforming features into image representations using neighborhood dependencies to ensure compatibility with Convolutional Neural Networks (CNNs). It leverages Multidimensional Scaling (MDS) to reduce feature dimensions, assigns features to pixels for image creation, and trains a CNN to process these images. The project handles datasets like normalized PaDEL features and FDB(2).csv, applying techniques such as data preprocessing, feature normalization, and deep learning for predictive modeling.",
    techStack: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit-learn",
      "PyTorch",
      "SciPy",
      "OS",
      "Math",
    ],
    image: "/ProjectImages/coreai.png",
    github: "https://github.com/abdulhaseebrashid/Feature-Representation-as-Images-with-Neighborhood-Dependencies-for-CNN-Compatibility-Bazgir-et-al.git",
    category: "AI-powered Web Development & Machine Learning",
    date: "May 2025",
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.section
        className="py-20 px-6 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Core AI Projects
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
          Dive into my AI-driven projects, a specialized section of my portfolio showcasing the power of artificial intelligence in web applications.
        </p>
        <Link href="/projects" passHref>
          <motion.a
            className="mt-6 text-purple-500 hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Projects
          </motion.a>
        </Link>
      </motion.section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">AI Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card */}
            <motion.div
              className="bg-white/5 p-6 rounded-lg backdrop-blur-md border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="relative h-48 overflow-hidden rounded-md mb-4">
                <Image
                  src={project.image}
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
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mt-2 text-white/60 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-400">{project.date}</span>
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600/40 rounded-full text-sm text-white hover:bg-purple-600/60 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <Link href="/projects" passHref>
                    <motion.a
                      className="px-4 py-2 bg-indigo-600/40 rounded-full text-sm text-white hover:bg-indigo-600/60 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View All
                    </motion.a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-white/60">
        <p>© 2025 Abdul Haseeb Rashid</p>
        <p>AI-Driven Web Application Developer</p>
      </footer>
    </div>
  )
}
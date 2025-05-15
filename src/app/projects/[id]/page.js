"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  ExternalLink,
} from "lucide-react";
import Navbar from "../../component/Navbar"; // Import your Navbar component

// Updated project data with comprehensive tech stack for HRS Frozen Foods
const projectsData = [
  {
    id: "ai-innovation-hub",
    title: "AI Innovation Hub",
    description:
      "A comprehensive AI-powered web application that integrates multiple machine learning models for practical applications. Features include advanced object detection with real-time processing, an innovative sign language translation system that bridges communication gaps, and a creative AI story generator that produces unique narratives based on user prompts.",
    longDescription:
      "The AI Innovation Hub represents a culmination of cutting-edge artificial intelligence technologies integrated into a single, user-friendly platform. This project was developed to demonstrate the practical applications of AI in solving real-world challenges across various domains.\n\nAt its core, the platform features three main components: an advanced object detection system capable of identifying and tracking multiple objects in real-time with remarkable accuracy; a sign language translation system that uses computer vision to interpret sign language gestures and convert them to text and speech, helping bridge communication gaps for the hearing impaired; and a creative AI story generator that leverages natural language processing to create unique narratives based on user prompts and preferences.\n\nThe object detection module utilizes a custom-trained convolutional neural network that processes video input at 30 frames per second, identifying objects with 94% accuracy even in challenging lighting conditions. The sign language translator employs a combination of pose estimation and gesture recognition algorithms to interpret American Sign Language (ASL) with an 89% accuracy rate for common phrases and words.\n\nThe story generator uses a fine-tuned GPT model that has been specifically trained on a diverse corpus of literature to produce coherent, engaging narratives across multiple genres. Users can specify themes, characters, and plot elements, and the AI will generate a unique story that incorporates these elements while maintaining narrative consistency.",
    techStack: [
      "Python",
      "Django",
      "REST API",
      "PostgreSQL",
      "React",
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "Natural Language Processing",
      "AI Assistant Integration",
    ],
    images: [
      "/ProjectImages/AI 1.png",
      "/ProjectImages/AI 2.png",
      "/ProjectImages/AI 3.png",
      "/ProjectImages/AI 5.png",
      "/ProjectImages/AI 6.png",
      "/ProjectImages/AI 7.png",
      "/ProjectImages/AI 8.png",
      "/ProjectImages/AI 9.png",
    ],
    category: "AI-powered web application",
    date: "May 2025",
    duration: "4 months",
    client: "Research Project",
    role: "Lead AI Developer",
    githubUrl: "https://github.com/yourusername/ai-innovation-hub",
    liveUrl: "https://ai-innovation-hub.example.com",
  },
  {
    id: "phonebechpk.com",
    title: "phonebechpk.com",
    description:
      "Phone Bech is a dedicated marketplace where users can easily post advertisements for their mobile phones and connect with potential buyers.",
    longDescription:
      "A Next.js and Supabase-powered online marketplace for buying and selling mobile phones. The platform offers secure user authentication, streamlined ad management, and advanced search filters with real-time messaging. Its fully responsive design delivers a smooth experience on any device. Additional features include seller verification and optimized image uploads for high-quality listings. Successfully launched with an active user base, enabling seamless phone transactions.",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
    images: [
      "/ProjectImages/cover-01.jpg",
      "/ProjectImages/cover-02.jpg",
      "/ProjectImages/cover-03.jpg",
      "/ProjectImages/cover-04.jpg",
      "/ProjectImages/cover-011.jpg",
    ],
    category: "Web Development",
    date: "December 2024",
    duration: "3 weeks",
    client: "B2B",
    role: "Full Stack Developer",
    githubUrl: "https://github.com/yourusername/phonebech",
    liveUrl: "https://phonebechpk.com",
  },
  {
    id: "Smart-Guardian",
    title: "Smart-Guardian (FYP)",
    description:
      "Smart Guardian is an innovative resource management and security system designed for factories, educational institutions, and healthcare facilities, utilizing geo-fencing, indoor positioning, and computer vision.",
    longDescription:
      "SecuriSense is an innovative security platform integrating geo-fencing, indoor positioning (IPS), and computer vision for automated attendance and access control. Features include multi-factor authentication, real-time alerts, and interactive dashboards. The system combines GPS, Wi-Fi triangulation, BLE, and facial recognition for comprehensive indoor/outdoor tracking. Built with Java Spring Boot, Next.js, and Firebase/PostgreSQL, it provides role-based permissions and real-time monitoring. Successfully addresses security and attendance challenges across factories, schools, and healthcare facilities.",
    techStack: [
      "Spring Boot",
      "Firebase",
      "PostgreSQL",
      "Nextjs",
      "Android Studio",
      "Java",
      "Tracking Technologies",
      "GPS",
      "Wi-Fi triangulation",
      "BLE (Bluetooth Low Energy)",
      "Gyroscope",
    ],
    images: [
      "/ProjectImages/fyp1.png",
      "/ProjectImages/fyp2.png",
      "/ProjectImages/fyp3.png",
      "/ProjectImages/fyp4.png",
      "/ProjectImages/fyp5.png",
      "/ProjectImages/fyp6.png",
      "/ProjectImages/fyp7.png",
    ],
    category: "AI-powered Web Development & Mobile Development",
    date: "October 2024",
    duration: "5 months",
    client: "University Project",
    role: "Full Stack Developer",
    githubUrl: "https://github.com/yourusername/fitness-app",
    liveUrl: "#",
  },
  {
    id: "hrs-frozen-foods",
    title: "HRS Frozen Foods",
    description:
      "A professional frozen food delivery platform where users can order their favorite frozen foods with a seamless user experience, including login, signup with Google, a dashboard with recent orders, recommendations, and location-based features using Leaflet maps.",
    longDescription:
      "HRS Frozen Foods is a modern e-commerce platform designed to provide a seamless frozen food delivery experience. Built with React and Django, the platform offers a user-friendly interface for browsing, ordering, and tracking frozen food deliveries, leveraging a REST API for seamless communication and PostgreSQL for robust data management.\n\nThe landing page showcases a wide variety of frozen food products with detailed descriptions, customer reviews, and high-quality images. Users can sign up or log in using their Google Gmail accounts, with additional features like password reset for enhanced security. Post-login, users are greeted with a personalized dashboard displaying recent orders, new orders, and tailored food recommendations based on their preferences.\n\nA standout feature is the integration of Leaflet maps, which automatically detects the user's current location to streamline the delivery process. The ordering system is intuitive, allowing users to customize their orders, select delivery slots, and receive real-time updates. Once an order is placed, an automated email is sent to the owner via Gmail using Nodemailer, ensuring efficient communication.\n\nThe platform is fully responsive, ensuring a consistent experience across devices, and incorporates modern design principles with Tailwind CSS for a professional look and feel. HRS Frozen Foods successfully delivers a convenient and efficient solution for frozen food enthusiasts.",
    techStack: [
      "React",
      "Django",
      "REST API",
      "PostgreSQL",
      "Tailwind CSS",
      // "Firebase",
      "Leaflet",
      // "Node.js",
      "Google APIs",
      "Nodemailer",
    ],
    images: [
      "/ProjectImages/HRS1.png",
      "/ProjectImages/HRS2.png",
      "/ProjectImages/HRS3.png",
      "/ProjectImages/HRS4.png",
      "/ProjectImages/HRS5.png",
      "/ProjectImages/HRS6.png",
      "/ProjectImages/HRS7.png",
    ],
    category: "Web Development & E-commerce",
    date: "January 2025",
    duration: "3 months",
    client: "Commercial Project",
    role: "Lead Developer",
    githubUrl: "https://github.com/yourusername/hrs-frozen-foods",
    liveUrl: "https://hrsfrozenfoods.example.com",
  },
];

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({
    header: false,
    images: false,
    details: false,
    description: false,
  });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Find the project by ID
    const foundProject = projectsData.find((p) => p.id === id);

    if (foundProject) {
      setProject(foundProject);
      // Trigger animations after a short delay
      setTimeout(() => {
        setIsVisible({
          header: true,
          images: true,
          details: true,
          description: true,
        });
      }, 100);
    } else {
      // Handle project not found
      console.error("Project not found");
    }

    setLoading(false);
  }, [id]);

  useEffect(() => {
    // Generate particles only on the client side
    const newParticles = Array(20)
      .fill(0)
      .map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 5,
      }));
    setParticles(newParticles);
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Restore body scrolling
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-2 border-l-2 border-purple-500 rounded-full animate-spin"></div>
          <p className="mt-4 text-lg">Loading project...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-8">
            Sorry, the project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-purple-600/40 rounded-lg hover:bg-purple-600/60 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-none text-white overflow-x-hidden">
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
          onClick={() => router.push("/projects")}
          className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </motion.button>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        {/* Project Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible.header ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={isVisible.header ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="px-3 py-1 bg-purple-600/40 backdrop-blur-sm rounded-full text-sm text-white">
              {project.category}
            </span>
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{project.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{project.duration}</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.header ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.title}
            <motion.span
              className="absolute bottom-2 left-0 h-3 bg-purple-600/30 w-full z-0"
              initial={{ width: 0 }}
              animate={isVisible.header ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.header ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {project.description}
          </motion.p>
        </motion.div>

        {/* Project Images Gallery */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible.images ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Main large image */}
            <motion.div
              className="md:col-span-2 relative overflow-hidden rounded-xl aspect-video cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openLightbox(0)}
            >
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={`${project.title} - Main Image`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-white"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Side images */}
            <div className="md:col-span-1 grid grid-rows-2 gap-4">
              {project.images.slice(1, 3).map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-xl aspect-video cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openLightbox(index + 1)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional images in a row */}
          {project.images.length > 3 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {project.images.slice(3).map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-xl aspect-video cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openLightbox(index + 3)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 4}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6 text-white"
                      >
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Left column - Project description */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.description ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">
              Project Overview
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right column - Project details */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.details ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-bold mb-6 text-white">
                Project Details
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Client</h3>
                  <p className="text-white">{project.client}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Role</h3>
                  <p className="text-white">{project.role}</p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Timeline</h3>
                  <p className="text-white">
                    {project.date} • {project.duration}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-600/20 rounded-full text-xs text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span>Code</span>
                      </motion.a>
                    )}

                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-600/30 rounded-lg hover:bg-purple-600/50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.button
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            <motion.div
              className="relative w-full max-w-5xl h-[80vh] mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
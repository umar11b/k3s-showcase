"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PlayIcon,
  GithubIcon,
  ExternalLinkIcon,
  CalendarIcon,
  ClockIcon,
} from "lucide-react";

// Sample lab data - you can expand this
const labsData = [
  {
    id: 1,
    title: "Basic Kubernetes Setup with Echo App",
    description:
      "Deployed a simple echo server application with ingress for external access. Learned basic Kubernetes concepts including pods, deployments, services, and ingress.",
    videoUrl: "/videos/lab1-demo.mp4",
    thumbnail: "/images/lab1-thumb.jpg",
    date: "2025-01-15",
    tags: ["Pods", "Deployments", "Services", "Ingress"],
  },
  {
    id: 2,
    title: "Persistent Storage with PVC",
    description:
      "Built storage test application with persistent volumes. Learned about PVs, PVCs, StorageClasses, and how pods access storage with data persistence across restarts.",
    videoUrl: "/videos/lab2-demo.mp4",
    thumbnail: "/images/lab2-thumb.jpg",
    date: "2025-01-20",
    tags: ["Storage", "PVC", "Persistent Volumes"],
  },
  {
    id: 3,
    title: "Monitoring Deep Dive (Prometheus & Grafana)",
    description:
      "Complete monitoring stack with Prometheus and Grafana. Implemented custom alert rules, Node Exporter dashboard, and comprehensive system monitoring.",
    videoUrl: "/videos/lab3-demo.mp4",
    thumbnail: "/images/lab3-thumb.jpg",
    date: "2025-01-25",
    tags: ["Monitoring", "Prometheus", "Grafana", "Alerting"],
  },
];

const LabCard = ({ lab, index }: { lab: any; index: number }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-800/50 hover:border-purple-500/30 overflow-hidden flex flex-col h-full"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      <div className="relative mb-4">
        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          {lab.title}
        </h3>
      </div>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
        {lab.description}
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-3 h-3" />
            {lab.date}
          </div>
        </div>

        <div>
          <p className="text-gray-400 text-xs mb-2">Topics:</p>
          <div className="flex flex-wrap gap-2">
            {lab.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium transform hover:scale-105"
          >
            <PlayIcon className="w-4 h-4" />
            Watch Demo
          </button>
          <a
            href={`https://github.com/umar11b/k3s-showcase/blob/main/README.md#${lab.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9-]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium transform hover:scale-105"
          >
            <ExternalLinkIcon className="w-4 h-4" />
            Documentation
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              ✕ Close
            </button>
            <video
              src={lab.videoUrl}
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      {/* Hero Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            k3s Homelab Showcase
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Documenting my journey learning Kubernetes on Raspberry Pi with
            video demonstrations and detailed technical documentation for each
            lab exercise.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/umar11b/k3s-showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-medium"
            >
              <GithubIcon className="w-5 h-5" />
              View Source
            </a>
            <a
              href="https://umarzaman.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-medium"
            >
              <ExternalLinkIcon className="w-5 h-5" />
              Main Portfolio
            </a>
          </div>
        </motion.div>
      </section>

      {/* Labs Section */}
      <section className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Initial Setup & Practice Labs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labsData.map((lab, index) => (
              <LabCard key={lab.id} lab={lab} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

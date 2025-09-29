"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PlayIcon,
  GithubIcon,
  ExternalLinkIcon,
  CalendarIcon,
  Code2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

// Define the lab data interface
interface LabData {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
  // imageUrl?: string;
  // imageUrls?: string[]; // For multiple images
  thumbnail: string;
  date: string;
  tags: string[];
  mediaType: "video"; // | "image" | "images";
}

// Production Kubernetes homelab achievements
const achievementsData: LabData[] = [
  {
    id: 1,
    title: "Production-Grade Kubernetes Architecture",
    description:
      "Built a complete K3s cluster on Raspberry Pi 5 with enterprise-grade monitoring and Infrastructure as Code using Kustomize overlays and Helm charts. Designed multi-tier architecture with proper separation of concerns for monitoring, applications, and ingress.",
    // imageUrl: "/images/k3s-architecture-screenshot.png",
    thumbnail: "/images/hero-image.png",
    date: "2025-01-15",
    tags: [
      "K3s",
      "Infrastructure as Code",
      "Kustomize",
      "Helm",
      "Multi-tier Architecture",
    ],
    mediaType: "video",
  },
  {
    id: 2,
    title: "Advanced Monitoring & Observability Stack",
    description:
      "Deployed Prometheus + Grafana with custom dashboards and alerting. Implemented custom metrics collection for Minecraft server (player count, TPS, performance) and comprehensive monitoring covering cluster health, application metrics, and resource utilization.",
    videoUrl: "/videos/monitoring-demo.mp4",
    thumbnail: "/images/hero-image.png",
    date: "2025-01-20",
    tags: [
      "Prometheus",
      "Grafana",
      "Custom Metrics",
      "Alerting",
      "Observability",
    ],
    mediaType: "video",
  },
  {
    id: 3,
    title: "Sophisticated Auto-Scaling Implementation",
    description:
      "Built HPA (Horizontal Pod Autoscaler) with multi-metric scaling (CPU, memory, custom metrics). Implemented intelligent scaling policies with aggressive scale-up and conservative scale-down. Custom metrics integration - scaling based on Minecraft player count.",
    // imageUrl: "/images/hpa-scaling-screenshot.png",
    thumbnail: "/images/hero-image.png",
    date: "2025-01-25",
    tags: [
      "HPA",
      "Auto-scaling",
      "Custom Metrics",
      "Scaling Policies",
      "Performance",
    ],
    mediaType: "video",
  },
  {
    id: 4,
    title: "Security-First Approach & DevOps Automation",
    description:
      "Implemented comprehensive security analysis with detailed risk assessment, container security best practices, network policies and RBAC configurations. Created comprehensive Makefile with automated deployment pipelines and backup automation with CronJobs.",
    // imageUrl: "/images/security-rbac-screenshot.png",
    thumbnail: "/images/hero-image.png",
    date: "2025-01-30",
    tags: ["Security", "RBAC", "Network Policies", "Automation", "DevOps"],
    mediaType: "video",
  },
  {
    id: 5,
    title: "Advanced Application Deployment",
    description:
      "Minecraft server with production features: health checks (liveness, readiness, startup probes), resource management (CPU/memory requests and limits), persistent storage with automated backups, and custom metrics exporter integration.",
    // imageUrl: "/images/minecraft-deployment-screenshot.png",
    thumbnail: "/images/hero-image.png",
    date: "2025-02-05",
    tags: [
      "Health Checks",
      "Resource Management",
      "Persistent Storage",
      "Metrics Exporter",
    ],
    mediaType: "video",
  },
  {
    id: 6,
    title: "Virtualization & Multi-Tenancy",
    description:
      "Deployed 3-tier LAMP architecture using VMs in containers. Built interactive port-forwarding scripts with user-friendly menus and created educational lab environments for hands-on learning with proper isolation.",
    // imageUrl: "/images/lamp-virtualization-screenshot.png",
    thumbnail: "/images/hero-image.png",
    date: "2025-02-10",
    tags: ["Virtualization", "LAMP Stack", "Multi-tenancy", "Educational Labs"],
    mediaType: "video",
  },
];

const LabCard = ({ lab, index }: { lab: LabData; index: number }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        <div className="flex justify-center">
          {lab.mediaType === "video" && lab.videoUrl ? (
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium transform hover:scale-105"
            >
              <PlayIcon className="w-4 h-4" />
              Watch Demo
            </button>
          ) : null}
          {/* Commented out image functionality
          {(lab.mediaType === "image" && lab.imageUrl) ||
          (lab.mediaType === "images" &&
            lab.imageUrls &&
            lab.imageUrls.length > 0) ? (
            <button
              onClick={() => {
                setCurrentImageIndex(0); // Reset to first image when opening
                setIsVideoModalOpen(true);
              }}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium transform hover:scale-105"
            >
              <Code2Icon className="w-4 h-4" />
              View Implementation
              {lab.mediaType === "images" &&
                lab.imageUrls &&
                lab.imageUrls.length > 1 && (
                  <span className="ml-1 text-xs opacity-75">
                    ({lab.imageUrls.length})
                  </span>
                )}
            </button>
          ) : null}
          */}
        </div>
      </div>

      {/* Media Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              ✕ Close
            </button>

            {lab.mediaType === "video" && lab.videoUrl ? (
              <video
                src={lab.videoUrl}
                controls
                autoPlay
                className="w-full rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            ) : null}
            {/* Commented out image modal functionality
            {lab.mediaType === "image" && lab.imageUrl ? (
              <img
                src={lab.imageUrl}
                alt={lab.title}
                className="w-full rounded-lg"
              />
            ) : lab.mediaType === "images" &&
              lab.imageUrls &&
              lab.imageUrls.length > 0 ? (
              <div className="relative">
                <img
                  src={lab.imageUrls[currentImageIndex]}
                  alt={`${lab.title} - Image ${currentImageIndex + 1}`}
                  className="w-full rounded-lg"
                />

                {lab.imageUrls.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? lab.imageUrls!.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>

                    <button
                      onClick={() =>
                        setCurrentImageIndex((prev) =>
                          prev === lab.imageUrls!.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {lab.imageUrls.length}
                    </div>
                  </>
                )}
              </div>
            ) : null}
            */}
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
            Production Kubernetes Homelab
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Enterprise-grade Kubernetes infrastructure on Raspberry Pi 5 with
            advanced monitoring, auto-scaling, security hardening, and DevOps
            automation. Featuring 16% memory optimization, multi-metric HPA, and
            comprehensive observability stack.
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
          {/* Key Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl shadow-lg hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 border border-gray-800/50 hover:border-green-500/20 overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="relative text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent mb-3">
                  16%
                </div>
                <div className="text-gray-300 text-lg font-medium mb-2">
                  Memory Optimization
                </div>
                <div className="text-gray-500 text-sm">85% → 69% usage</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl shadow-lg hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-gray-800/50 hover:border-blue-500/20 overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="relative text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 bg-clip-text text-transparent mb-3">
                  1-3
                </div>
                <div className="text-gray-300 text-lg font-medium mb-2">
                  Auto-scaling Replicas
                </div>
                <div className="text-gray-500 text-sm">Multi-metric HPA</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl shadow-lg hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 border border-gray-800/50 hover:border-purple-500/20 overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              <div className="relative text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent mb-3">
                  6
                </div>
                <div className="text-gray-300 text-lg font-medium mb-2">
                  Security Controls
                </div>
                <div className="text-gray-500 text-sm">
                  RBAC + Network Policies
                </div>
              </div>
            </motion.div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Production Achievements & Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementsData.map((lab, index) => (
              <LabCard key={lab.id} lab={lab} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

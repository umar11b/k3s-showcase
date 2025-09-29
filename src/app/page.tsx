"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PlayIcon,
  GithubIcon,
  ExternalLinkIcon,
  CalendarIcon,
} from "lucide-react";

// Define the lab data interface
interface LabData {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
  imageUrl?: string;
  thumbnail: string;
  date: string;
  tags: string[];
  mediaType: "video" | "image";
}

// Production Kubernetes homelab achievements
const achievementsData: LabData[] = [
  {
    id: 1,
    title: "Production-Grade Kubernetes Architecture",
    description:
      "Built a complete K3s cluster on Raspberry Pi 5 with enterprise-grade monitoring and Infrastructure as Code using Kustomize overlays and Helm charts. Designed multi-tier architecture with proper separation of concerns for monitoring, applications, and ingress.",
    imageUrl: "/images/k3s-architecture-screenshot.png",
    thumbnail: "/images/hero-image.png",
    date: "2025-01-15",
    tags: [
      "K3s",
      "Infrastructure as Code",
      "Kustomize",
      "Helm",
      "Multi-tier Architecture",
    ],
    mediaType: "image",
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
    imageUrl: "/images/hpa-scaling-screenshot.png",
    thumbnail: "/images/hero-image.png",
    date: "2025-01-25",
    tags: [
      "HPA",
      "Auto-scaling",
      "Custom Metrics",
      "Scaling Policies",
      "Performance",
    ],
    mediaType: "image",
  },
  {
    id: 4,
    title: "Security-First Approach & DevOps Automation",
    description:
      "Implemented comprehensive security analysis with detailed risk assessment, container security best practices, network policies and RBAC configurations. Created comprehensive Makefile with automated deployment pipelines and backup automation with CronJobs.",
    imageUrl: "/images/security-rbac-screenshot.png",
    thumbnail: "/images/hero-image.png",
    date: "2025-01-30",
    tags: ["Security", "RBAC", "Network Policies", "Automation", "DevOps"],
    mediaType: "image",
  },
  {
    id: 5,
    title: "Advanced Application Deployment",
    description:
      "Minecraft server with production features: health checks (liveness, readiness, startup probes), resource management (CPU/memory requests and limits), persistent storage with automated backups, and custom metrics exporter integration.",
    imageUrl: "/images/minecraft-deployment-screenshot.png",
    thumbnail: "/images/hero-image.png",
    date: "2025-02-05",
    tags: [
      "Health Checks",
      "Resource Management",
      "Persistent Storage",
      "Metrics Exporter",
    ],
    mediaType: "image",
  },
  {
    id: 6,
    title: "Virtualization & Multi-Tenancy",
    description:
      "Deployed 3-tier LAMP architecture using VMs in containers. Built interactive port-forwarding scripts with user-friendly menus and created educational lab environments for hands-on learning with proper isolation.",
    imageUrl: "/images/lamp-virtualization-screenshot.png",
    thumbnail: "/images/hero-image.png",
    date: "2025-02-10",
    tags: ["Virtualization", "LAMP Stack", "Multi-tenancy", "Educational Labs"],
    mediaType: "image",
  },
];

const LabCard = ({ lab, index }: { lab: LabData; index: number }) => {
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
        <div className="flex justify-center">
          {(lab.mediaType === "video" && lab.videoUrl) ||
          (lab.mediaType === "image" && lab.imageUrl) ? (
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium transform hover:scale-105"
            >
              {lab.mediaType === "video" ? (
                <>
                  <PlayIcon className="w-4 h-4" />
                  Watch Demo
                </>
              ) : (
                <>
                  <ExternalLinkIcon className="w-4 h-4" />
                  View Screenshot
                </>
              )}
            </button>
          ) : null}
        </div>
      </div>

      {/* Media Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-200"
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
            ) : lab.mediaType === "image" && lab.imageUrl ? (
              <img
                src={lab.imageUrl}
                alt={lab.title}
                className="w-full rounded-lg"
              />
            ) : null}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20 text-center"
            >
              <div className="text-3xl font-bold text-green-400 mb-2">16%</div>
              <div className="text-gray-300 text-sm">Memory Optimization</div>
              <div className="text-gray-500 text-xs mt-1">85% → 69% usage</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20 text-center"
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">1-3</div>
              <div className="text-gray-300 text-sm">Auto-scaling Replicas</div>
              <div className="text-gray-500 text-xs mt-1">Multi-metric HPA</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20 text-center"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-gray-300 text-sm">Security Controls</div>
              <div className="text-gray-500 text-xs mt-1">
                RBAC + Network Policies
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

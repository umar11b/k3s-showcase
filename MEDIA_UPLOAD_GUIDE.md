# Media Upload Guide for pi.umarzaman.ca

## 📁 **Directory Structure**

```
pi-showcase/
├── public/
│   ├── images/
│   │   ├── k3s-architecture-screenshot.png
│   │   ├── hpa-scaling-screenshot.png
│   │   ├── security-rbac-screenshot.png
│   │   ├── minecraft-deployment-screenshot.png
│   │   └── lamp-virtualization-screenshot.png
│   └── videos/
│       └── monitoring-demo.mp4
```

## 🖼️ **Terminal Screenshots to Upload**

### **1. K3s Architecture Screenshot**

- File: `/images/k3s-architecture-screenshot.png`
- Show: Cluster status, node information, pod distribution
- Command examples: `kubectl get nodes`, `kubectl get pods --all-namespaces`

### **2. HPA Scaling Screenshot**

- File: `/images/hpa-scaling-screenshot.png`
- Show: HPA status, scaling events, metrics
- Command examples: `kubectl get hpa`, `kubectl describe hpa`

### **3. Security & RBAC Screenshot**

- File: `/images/security-rbac-screenshot.png`
- Show: RBAC policies, network policies, security contexts
- Command examples: `kubectl get networkpolicies`, `kubectl get roles`

### **4. Minecraft Deployment Screenshot**

- File: `/images/minecraft-deployment-screenshot.png`
- Show: Deployment status, health checks, resource usage
- Command examples: `kubectl describe deployment minecraft`

### **5. LAMP Virtualization Screenshot**

- File: `/images/lamp-virtualization-screenshot.png`
- Show: VM containers, port forwarding, multi-tier setup
- Command examples: `kubectl get pods -n lamp-stack`

## 📹 **Video Upload**

### **Monitoring Demo Video**

- File: `/videos/monitoring-demo.mp4`
- Content: Grafana dashboards, Prometheus metrics, alerting
- Duration: 2-3 minutes showing key monitoring features

## 🚀 **Upload Commands**

```bash
# Navigate to the pi-showcase directory
cd /Users/zamanu/Documents/Projects/personal-website/pi-showcase

# Create directories if they don't exist
mkdir -p public/images public/videos

# Upload your screenshots (replace with actual file paths)
cp /path/to/your/k3s-screenshot.png public/images/k3s-architecture-screenshot.png
cp /path/to/your/hpa-screenshot.png public/images/hpa-scaling-screenshot.png
cp /path/to/your/security-screenshot.png public/images/security-rbac-screenshot.png
cp /path/to/your/minecraft-screenshot.png public/images/minecraft-deployment-screenshot.png
cp /path/to/your/lamp-screenshot.png public/images/lamp-virtualization-screenshot.png

# Upload your video
cp /path/to/your/monitoring-video.mp4 public/videos/monitoring-demo.mp4
```

## 💡 **Screenshot Tips**

1. **Use a dark terminal theme** for better visual appeal
2. **Capture full terminal windows** showing multiple commands
3. **Include timestamps** in your terminal output
4. **Show before/after comparisons** for memory optimization
5. **Use high resolution** (1920x1080 or higher)

## 🎥 **Video Tips**

1. **Keep it under 3 minutes** for engagement
2. **Show key features**: Grafana dashboards, Prometheus metrics
3. **Use screen recording** with clear narration or captions
4. **Include before/after** memory usage comparisons
5. **Export as MP4** with good quality but reasonable file size

## 📝 **File Naming Convention**

- Screenshots: `{category}-screenshot.png`
- Videos: `{category}-demo.mp4`
- Keep filenames lowercase with hyphens
- Use descriptive names that match the achievement titles

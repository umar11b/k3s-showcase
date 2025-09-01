# Edge Kubernetes Homelab - Learning Journey

This document captures the learning journey and technical concepts explored in building a Kubernetes homelab on a Raspberry Pi.

## 🎯 Project Overview

I built a complete Kubernetes homelab running on a Raspberry Pi 5 with:

- **Hardware**: Pi 5 (8GB RAM) + 512GB SSD (Pre-assembled desktop kit)
- **OS**: Debian 12 (Bookworm) - Raspberry Pi OS Desktop
- **Kubernetes Cluster**: Single-node K3s cluster
- **Monitoring Stack**: Prometheus + Grafana
- **Persistent Storage**: Local SSD storage with PVCs
- **Ingress Controller**: Nginx Ingress for external access
- **Sample Applications**: Echo server and storage test apps

## 📚 Lab Progress & Learning

### [Lab 1: Basic Kubernetes Setup with Echo App](#lab-1-basic-kubernetes-setup-with-echo-app)

**What I Built:**

- Deployed a simple echo server application
- Set up ingress for external access
- Learned basic Kubernetes concepts

**Key Concepts Learned:**

- **Pods**: The smallest deployable units in Kubernetes
- **Deployments**: Manage pod replicas and updates
- **Services**: Expose pods internally and externally
- **Ingress**: Route external traffic to services
- **Namespaces**: Organize resources logically

**Technical Implementation:**

```yaml
# Pod → Deployment → Service → Ingress flow
apiVersion: apps/v1
kind: Deployment
metadata:
  name: echo-server
spec:
  replicas: 2
  selector:
    matchLabels:
      app: echo-server
  template:
    metadata:
      labels:
        app: echo-server
    spec:
      containers:
        - name: echo
          image: hashicorp/http-echo
          args:
            - -text="Hello from Kubernetes!"
          ports:
            - containerPort: 5678
```

**Why This Matters:**

- Understanding the basic Kubernetes resource hierarchy
- Learning how applications are deployed and exposed
- Foundation for more complex deployments

---

### [Lab 2: Persistent Storage with PVC](#lab-2-persistent-storage-with-pvc)

**What I Built:**

- Storage test application with persistent volumes
- Data persistence across pod restarts
- Understanding storage in Kubernetes

**Key Concepts Learned:**

- **PersistentVolume (PV)**: Physical storage resources
- **PersistentVolumeClaim (PVC)**: Storage requests from pods
- **StorageClass**: Dynamic provisioning of storage
- **Volume Mounts**: How pods access storage

**Technical Implementation:**

```yaml
# PVC requests storage
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: storage-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi

# Pod mounts the PVC
spec:
  containers:
  - name: storage-test
    volumeMounts:
    - name: storage-volume
      mountPath: /data
  volumes:
  - name: storage-volume
    persistentVolumeClaim:
      claimName: storage-pvc
```

**Why This Matters:**

- Applications need persistent data storage
- Understanding storage abstraction in Kubernetes
- Foundation for stateful applications

---

### [Lab 3: Monitoring Deep Dive (Prometheus & Grafana)](#lab-3-monitoring-deep-dive-prometheus--grafana)

**What I Built:**

- Complete monitoring stack with Prometheus and Grafana
- Custom alert rules for system health
- Node Exporter dashboard for system metrics
- Comprehensive system monitoring

**Key Concepts Learned:**

- **Metrics Collection**: How Prometheus scrapes metrics
- **Time Series Data**: Storing and querying metrics over time
- **Alerting**: Proactive monitoring with alert rules
- **Dashboards**: Visualizing metrics with Grafana
- **Service Discovery**: Automatic discovery of monitoring targets

**Technical Implementation:**

```yaml
# Prometheus alert rule example
groups:
  - name: node_alerts
    rules:
      - alert: HighCPUUsage
        expr: 100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
        for: 2m
        labels:
          severity: warning
        annotations:
          summary: "High CPU usage on {{ $labels.instance }}"
```

**Metrics Flow:**

```
Node Exporter → Prometheus → Grafana
     ↓              ↓           ↓
System Metrics → Time Series → Dashboards
```

**Why This Matters:**

- Production systems need monitoring
- Understanding system health and performance
- Proactive issue detection and alerting

---

## 🏗️ Architecture Overview

### System Components

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   External      │    │   Ingress       │    │   Applications  │
│   Traffic       │───▶│   Controller    │───▶│   (Echo, etc.)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Monitoring    │    │   Kubernetes    │    │   Storage       │
│   Stack         │◀───│   Cluster       │───▶│   (PVCs)        │
│   (Prometheus   │    │   (K3s)         │    │                 │
│   + Grafana)    │    └─────────────────┘    └─────────────────┘
└─────────────────┘
```

### Data Flow

1. **Application Traffic**: External requests → Ingress → Services → Pods
2. **Metrics Collection**: Node Exporter → Prometheus → Grafana
3. **Storage**: Applications → PVC → Local Storage
4. **Monitoring**: System metrics → Alert rules → Notifications

## 🔧 Key Technologies & Why I Chose Them

### K3s (Lightweight Kubernetes)

- **Why**: Perfect for resource-constrained devices like Raspberry Pi
- **Benefits**: Small footprint, easy installation, full Kubernetes compatibility
- **Learning**: Understanding Kubernetes without overwhelming complexity

### Helm Charts

- **Why**: Package manager for Kubernetes applications
- **Benefits**: Easy deployment, version management, templating
- **Learning**: How to deploy complex applications with configuration

### Prometheus + Grafana

- **Why**: Industry standard monitoring stack
- **Benefits**: Powerful querying, flexible alerting, beautiful dashboards
- **Learning**: Production-grade monitoring concepts

### Nginx Ingress Controller

- **Why**: Most popular ingress controller
- **Benefits**: Load balancing, SSL termination, path-based routing
- **Learning**: How external traffic reaches applications

## 📊 Monitoring & Observability

### What I Monitor

- **System Metrics**: CPU, memory, disk, network
- **Application Metrics**: Pod status, restarts, resource usage
- **Infrastructure**: Node health, cluster status

### Alert Rules Implemented

- High CPU usage (>80% for 2 minutes)
- High memory usage (>85% for 2 minutes)
- High disk usage (>90% for 2 minutes)
- High load average (>2 for 2 minutes)
- Pod restart frequency (>5 in 1 hour)
- Node not ready (critical)

### Dashboard Features

- Node Exporter Full dashboard (ID: 1860)
- System resource utilization
- Network traffic analysis
- Disk I/O monitoring

## 🚀 Production Readiness Lessons

### What Makes This Production-Ready

1. **Monitoring**: Complete observability stack
2. **Alerting**: Proactive issue detection
3. **Persistence**: Data survives pod restarts
4. **Load Balancing**: Ingress controller for traffic management
5. **Resource Management**: Proper CPU/memory limits

### What I'd Add for Production

1. **Backup Strategy**: Regular backups of persistent data
2. **Security**: RBAC, network policies, secrets management
3. **High Availability**: Multiple nodes, anti-affinity rules
4. **CI/CD**: Automated deployment pipelines
5. **Logging**: Centralized log aggregation (ELK stack)

## 🎓 Key Learning Outcomes

### Kubernetes Concepts Mastered

- **Resource Management**: Pods, Deployments, Services, Ingress
- **Storage**: PVs, PVCs, StorageClasses
- **Monitoring**: Metrics, alerting, dashboards
- **Networking**: Services, ingress, load balancing

### DevOps Skills Developed

- **Infrastructure as Code**: YAML manifests for everything
- **Monitoring & Alerting**: Production-grade observability
- **Troubleshooting**: Debugging Kubernetes issues
- **Documentation**: Comprehensive setup and usage guides

### Real-World Applications

- **Microservices**: Deploying and managing multiple services
- **Stateful Applications**: Handling persistent data
- **Monitoring**: Understanding system health and performance
- **Scalability**: Planning for growth and high availability

## 🔮 Next Steps & Advanced Topics

### Potential Lab 4 Topics

1. **Service Mesh**: Istio for advanced traffic management
2. **Security**: RBAC, network policies, secrets
3. **CI/CD**: GitOps with ArgoCD or Flux
4. **Logging**: ELK stack for centralized logging
5. **Backup & Recovery**: Velero for cluster backups

### Advanced Concepts to Explore

- **Multi-cluster Management**: Federation or Karmada
- **Custom Operators**: Building Kubernetes controllers
- **Performance Tuning**: Optimizing resource usage
- **Disaster Recovery**: Backup and restore strategies

---

## 📚 Documentation

This project includes comprehensive documentation to help you understand and manage your homelab:

- **[Installation Guide](INSTALLATION.md)**: Step-by-step setup instructions with hardware specifications
- **[Remote Access Guide](REMOTE_ACCESS.md)**: Access your homelab from anywhere using Tailscale and kubectl
- **[Quick Reference](QUICK_REFERENCE.md)**: Common commands, troubleshooting, and monitoring access

## 📝 Conclusion

This homelab project provides a solid foundation for understanding modern cloud-native technologies. From basic Kubernetes concepts to production-ready monitoring, I've covered the essential skills needed for working with containerized applications in a distributed environment.

The hands-on experience with real hardware (Raspberry Pi) makes the learning more tangible and helps understand the practical challenges of running Kubernetes in resource-constrained environments.

**Key Takeaway**: Kubernetes is not just about containers - it's about building reliable, scalable, and observable systems that can run anywhere.

---

## Video Demonstrations

Each lab includes a 10-second video demonstration showing the key steps and results. Videos are embedded in the showcase website and can be viewed directly from the lab cards.

## Getting Started

1. Clone this repository
2. Follow the lab documentation in order
3. Watch the video demonstrations for visual guidance
4. Practice the commands and configurations

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

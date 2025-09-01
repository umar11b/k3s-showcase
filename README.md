# k3s-showcase

Static site + video showcase of my k3s homelab labs (deployed to pi.umarzaman.ca).

## Overview

This repository contains documentation and video demonstrations for my k3s homelab learning journey on Raspberry Pi 5. Each lab focuses on specific Kubernetes concepts and includes step-by-step instructions, configuration files, and video demonstrations.

## Lab Documentation

### [Initial k3s Installation](#initial-k3s-installation)

**Date:** January 15, 2025  
**Duration:** 10 minutes  
**Topics:** Installation, Raspberry Pi, k3s

Step-by-step installation of k3s on Raspberry Pi 5 with proper networking configuration and systemd service setup.

#### Prerequisites

- Raspberry Pi 5 with 8GB RAM
- MicroSD card with Raspberry Pi OS
- Network connection

#### Installation Steps

1. **Update System**

   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Install k3s**

   ```bash
   curl -sfL https://get.k3s.io | sh -
   ```

3. **Configure Networking**

   ```bash
   sudo nano /etc/systemd/system/k3s.service
   ```

4. **Start k3s Service**
   ```bash
   sudo systemctl enable k3s
   sudo systemctl start k3s
   ```

#### Verification

```bash
kubectl get nodes
kubectl get pods --all-namespaces
```

---

### [Pod Deployment & Management](#pod-deployment--management)

**Date:** January 20, 2025  
**Duration:** 15 minutes  
**Topics:** Pods, kubectl, Deployment

Deploying and managing pods, understanding pod lifecycle, and basic kubectl commands for pod operations.

#### Key Concepts

- Pod lifecycle
- kubectl commands
- Deployment strategies
- Resource management

#### Common Commands

```bash
# Create a pod
kubectl run nginx --image=nginx

# Get pod information
kubectl get pods
kubectl describe pod <pod-name>

# Delete a pod
kubectl delete pod <pod-name>

# Port forwarding
kubectl port-forward <pod-name> 8080:80
```

#### Example Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
```

---

### [Service & Ingress Configuration](#service--ingress-configuration)

**Date:** January 25, 2025  
**Duration:** 12 minutes  
**Topics:** Services, Ingress, Networking

Setting up services for pod communication and configuring ingress controllers for external access.

#### Service Types

- ClusterIP (default)
- NodePort
- LoadBalancer

#### Ingress Setup

1. **Install Ingress Controller**

   ```bash
   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/baremetal/deploy.yaml
   ```

2. **Create Service**

   ```yaml
   apiVersion: v1
   kind: Service
   metadata:
     name: nginx-service
   spec:
     selector:
       app: nginx
     ports:
       - port: 80
         targetPort: 80
     type: ClusterIP
   ```

3. **Configure Ingress**
   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: nginx-ingress
     annotations:
       nginx.ingress.kubernetes.io/rewrite-target: /
   spec:
     rules:
       - host: nginx.local
         http:
           paths:
             - path: /
               pathType: Prefix
               backend:
                 service:
                   name: nginx-service
                   port:
                     number: 80
   ```

## Video Demonstrations

Each lab includes a 10-second video demonstration showing the key steps and results. Videos are embedded in the showcase website and can be viewed directly from the lab cards.

## Getting Started

1. Clone this repository
2. Follow the lab documentation in order
3. Watch the video demonstrations for visual guidance
4. Practice the commands and configurations

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the documentation and demonstrations.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

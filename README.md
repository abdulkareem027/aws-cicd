# 🚀 Automated Deployment of a Static Website to AWS EC2 using GitHub Actions (CI/CD)

## 📌 Project Overview

This project demonstrates the implementation of a **Continuous Integration and Continuous Deployment (CI/CD)** pipeline to automatically deploy a static hospital website to an **AWS EC2** instance using **GitHub Actions**.

Instead of manually uploading website files after every modification, GitHub Actions automatically deploys the latest version of the website whenever code is pushed to the GitHub repository.

---

## 🎯 Project Objectives

- Automate website deployment.
- Eliminate manual deployment steps.
- Reduce deployment time and human errors.
- Learn DevOps concepts using GitHub Actions and AWS EC2.
- Host a static website on a cloud server.

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Actions
- AWS EC2 (Amazon Linux 2023)
- Apache HTTP Server
- SSH
- SCP

---

## 🏗 Project Architecture

```
Developer
    │
    ▼
Visual Studio Code
    │
git push
    ▼
GitHub Repository
    │
GitHub Actions
    │
SSH + SCP
    ▼
AWS EC2
    │
Apache Web Server
    ▼
Hospital Website
```

---

## ⚙ CI/CD Workflow

1. Develop the website using HTML, CSS, and JavaScript.
2. Commit changes using Git.
3. Push code to GitHub.
4. GitHub Actions automatically starts the workflow.
5. The workflow securely connects to AWS EC2 using SSH.
6. Website files are copied using SCP.
7. Existing files inside `/var/www/html` are replaced.
8. Apache is restarted.
9. The updated website becomes live automatically.

---

## 📂 Project Structure

```
AWS-CICD-DEMO
│
├── .github
│   └── workflows
│       └── deploy.yml
│
├── docs
│
├── images
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🔐 GitHub Secrets Used

| Secret | Description |
|---------|-------------|
| EC2_HOST | Public IP Address of EC2 |
| EC2_USERNAME | Linux Username (ec2-user) |
| EC2_SSH_KEY | Private SSH Key |

---

## 🌐 AWS Services Used

- Amazon EC2
- Security Groups

---

## 🔄 GitHub Actions Workflow

The deployment process is triggered whenever code is pushed to the **main** branch.

Workflow Steps:

- Checkout Repository
- Copy Website Files to EC2
- Connect to EC2 via SSH
- Replace Existing Website Files
- Restart Apache

---


## 📖 Key Learning Outcomes

- Git Version Control
- GitHub Repository Management
- GitHub Actions CI/CD
- AWS EC2
- Apache Web Server
- SSH Authentication
- Secure Deployment using GitHub Secrets

---

## 🚀 Future Enhancements

- Docker Containerization
- Kubernetes Deployment
- HTTPS using SSL Certificates
- AWS CodePipeline
- AWS CodeBuild
- AWS CodeDeploy
- Load Balancer
- Auto Scaling

---

GitHub: https://github.com/YasaswiniTadikonda

---

## ⭐ Conclusion

This project successfully demonstrates an automated deployment pipeline using GitHub Actions and AWS EC2. Every code push automatically updates the website without requiring manual deployment, making software delivery faster, more reliable, and more efficient.
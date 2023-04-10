#!/usr/bin/env groovy
pipeline {
    agent {
        any {
            image 'hashicorp/terraform:1.0.8'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    environment {
        AWS_ACCESS_KEY_ID="${'Access Key ID'}"
        AWS_SECRET_ACCESS_KEY="${'Secret Access Key'}"
        AWS_REGION="${'eu-west-1'}"
        DOCKER_USER="${'gladysgodwin'}"
        DOCKER_PASSWORD="${'Helper95.'}"
    }

    stages {
        stage("Create EKS cluster") {
            steps {
                script {
                    dir('terraform') {
                        sh "terraform init -backend-config="${TF_API_TOKEN}""
                        sh "terraform apply --auto-approve"
                    }
                }
            }
        }
        stage("Test Backend") {
            steps {
                script {
                    dir('my-website-portfolio/backend') {
                        sh "npm run dev"
                    }
                }

            }
        }
        stage("Test Frontend") {
            steps {
                script {
                    dir('my-website-portfolio/frontend') {
                        sh "npm install"
                    }       
                }
            }
        }

        stage("Build backend into a docker image") {
            steps {
                container('docker') {
                    script {
                        sh "docker build -t gladysgodwin/project-backend:2024 ./my-website-portfolio/backend"
                        sh "docker login -u ${DOCKER_USER} -p ${DOCKER_PASSWORD}"
                        sh "docker push gladysgodwin/project-backend:2024"

                    }
                }
            }
        }
        stage("Build frontend into a docker image") {
            steps {
                container('docker') {
                    script {
                        sh "docker build -t gladysgodwin/project-frontend:2024 ./my-website-portfolio/frontend"
                        sh "docker login -u ${DOCKER_USER} -p ${DOCKER_PASSWORD}"
                        sh "docker push gladysgodwin/project-frontend:2024"

                    }
                }
            }
        }

        stage("Deploy to EKS cluster") {
            steps {
                dir('kubernetes') {
                    sh "aws eks update-kubeconfig --name my-k8scluster"
                    sh "kubectl apply -f deployment.yaml"
                    sh "kubectl apply -f service.yaml"
                }

            }
        }
    }
}
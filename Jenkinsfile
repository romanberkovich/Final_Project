
pipeline {
    agent any
    environment {
    DOCKERHUB_CREDENTIALS = credentials('docker-hub-romanberkovich')
    }
    stages{
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/romanberkovich/Final_Project.git'
            }
        }
        stage('Build docker image') {
            steps{
                sh 'docker build -t roman'
            }
        }
        stage('test'){
            steps{
                sh 'echo test'
            }
        }
        stage('deploy'){
            steps{
                sh 'ls -a'
            }
        }
    }
}

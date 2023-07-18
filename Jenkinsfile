
pipeline {
    agent any
    environment {
    DOCKERHUB_CREDENTIALS = credentials('docker-hub-romanberkovich')
    }
    stages {
        stage('SCM Checkout') {
            steps{
            git 'https://github.com/romanberkovich/Final_Project.git'
            }
        }

        stage('Build docker image') {
            steps {
                sh 'docker build -t romanberkovich/reactapp:$BUILD_NUMBER .'
            }
        }
        stage('login to dockerhub') {
            steps{
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage('push image') {
            steps{
                sh 'docker push romanberkovich/reactapp:$BUILD_NUMBER'
            }
        }
}
post {
        always {
            sh 'docker logout'
        }
    }
}

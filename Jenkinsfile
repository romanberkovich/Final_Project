
pipeline {
    agent any
    environment {
    DOCKERHUB_CREDENTIALS = credentials
    stages{
        stage('checkout'){
            steps{
                sh 'echo hello '
            }
        }
        stage('build'){
            steps{
                sh 'date'
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
    


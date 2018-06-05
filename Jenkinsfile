pipeline {
    agent none
    stages {
        stage('Build') {
            agent any
            steps {
                bat 'npm i'
                bat 'npm run build'
            }
        }
        stage('Test') {
            agent any
            steps {
                bat 'npm run test'
            }
        }
    }
}
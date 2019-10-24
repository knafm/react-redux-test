pipeline {
    agent none
    stages {
        stage('Build') {
            agent any
            steps {
                sh 'npm i'
                sh 'npm run build'
            }
        }
        stage('Test') {
            agent any
            input 'run tests ?'
            steps {
                sh 'npm run test'
            }
        }
    }
}
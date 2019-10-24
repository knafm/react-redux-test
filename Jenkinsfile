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
            steps {
                input 'run tests ?'
                sh 'npm run test'
            }
        }
    }
}
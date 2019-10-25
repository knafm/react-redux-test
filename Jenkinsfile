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
                sh 'jest --env-jsdom -ci'
            }
        }
    }
    post { 
        success { 
            echo 'I will always say Hello again!'
        }
    }
}
pipeline {
    agent none
    triggers {
        upstream (upstreamProjects: delivery/build )
    }
    stages {

    }
}
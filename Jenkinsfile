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
            imput 'test input'
            steps {
                sh 'CI=true npm test'
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
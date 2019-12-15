pipeline {
  agent any

  tools {
    nodejs 'node-js-12'
  }
  stages {
    stage('Startup') {
      steps {
        script {
          sh 'npm install'
          sh 'ls -la'
        }
      }
    }
    stage('Test') {
      steps {
        script {
        try{
          sh 'npm run test'
          } catch (err) {
          currentBuild.result = 'UNSTABLE'
          }
        }
      }
      post {
        always {
          junit './coverage/junit/junit.xml'
        }
      }
    }
    stage('Build') {
      steps {
        script {
          sh 'npm start'
          sh 'npm pack'
        }
      }
    }
    stage('Deploy') {
      when {
        expression {
          currentBuild.result == null || currentBuild.result == 'SUCCESS'
        }
      }
      steps {
        script {
          def server = Artifactory.server 'My_Artifactory'
          uploadArtifact(server)
        }
      }
    }
  }
}
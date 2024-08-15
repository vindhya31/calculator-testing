pipeline {
    agent any
    stages {
        stage("install") {
            steps {
                sh "npm install"
            }
        }
        stage("unit test") {
            steps {
                sh "npm run test:unit"
            }
        }
        stage("integration test") {
            steps {
                sh "npm run test:integration"
            }
        }
        stage("deploy") {

        }
    }
}
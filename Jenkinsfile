pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'ls -a'
            }
        }
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Docker Status') {
            steps {
                sh "sudo systemctl status docker"
            }
        }
    }
}

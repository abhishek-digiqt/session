pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "ls"
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

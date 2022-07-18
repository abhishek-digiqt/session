pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Build Started.............."
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

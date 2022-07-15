pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Build Started..............111111"
                echo "Build Started"
                sh "for i in `sudo docker image list | grep web | grep -v latest | awk '{print $3}'`; do sudo docker rmi $i -f ; done"
                sh "sudo docker stop $(sudo -S docker ps -q --filter ancestor=jenkins-test)"
                sh "sudo docker build . -t jenkins-test"
                sh "sudo docker run -d -it  jenkins-test"
                sh "sudo docker ps"
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

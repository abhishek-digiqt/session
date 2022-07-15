pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Build Started"
                for i in `sudo docker image list | grep web | grep -v latest | awk '{print $3}'`; do sudo docker rmi $i -f ; done
                sudo docker stop $(sudo -S docker ps -q --filter ancestor=jenkins-test)
                sudo docker build . -t jenkins-test
                sudo docker run -d -it  jenkins-test
                sudo docker ps
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}

pipeline {
    agent any

    stages {
        stage('Verify Node.js') {
            steps {
                sh '''
                    node --version
                    npm --version
                '''
            }
        }
    }
}
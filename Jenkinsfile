pipeline {
    agent any
    

    tools {
        nodejs 'node24'
    }

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
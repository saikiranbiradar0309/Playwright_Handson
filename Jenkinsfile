pipeline{
    agent any

    stage('Verify Node.js') {
        steps {
            sh '''
                node --version
                npm --version
            '''
        }
    }
}
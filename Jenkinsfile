
pipeline {
    agent any

    environment {
        ENVIRONMENT = 'ppd'
        BASE_URL = 'https://api.practicesoftwaretesting.com'
        PROXY_URL = 'http://rb-proxy-in.bosch.com:8080'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run API Smoke Tests') {
            steps {
                bat 'npx playwright test tests/smoke/UsersApi'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**',
                             allowEmptyArchive: true
        }
    }
}

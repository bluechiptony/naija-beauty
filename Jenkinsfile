node {
    def commit_id
    stage('prepare'){
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"
        commit_id = readFile('.git/commit-id').trim()
    }

    stage('build-image/push'){
        docker.withRegistry('https://index.docker.io/v1/', 'bluechip-docker'){
            def app = docker.build("bluechiptony/naija-beauty:latest", '.').push()
        }

    }



}
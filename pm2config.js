module.exports = {
    apps: [{
        name: "note-server",
        script: "npm run dev",
        env: {
            NODE_ENV: "development",
            PORT: 3000
        },
        env_test: {
            NODE_ENV: "test",
        },
        env_staging: {
            NODE_ENV: "staging",
        },
        env_production: {
            NODE_ENV: "production",
            PORT: 6666
        }
    }]
}

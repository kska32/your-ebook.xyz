module.exports = {
    apps : [{
        name: "ebook-server",
        script: "./index.js",
        env: {
            NODE_ENV: "development"
        },
        env_production: {
            NODE_ENV: "production"
        }
    }]
}
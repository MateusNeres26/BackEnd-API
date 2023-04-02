module.exports = {
    reporter: 'allure-mocha',
    timeout: 60000,
    reporterOptions: 'json=false,reportDir=report,reportFilename=index',
    require: 'utils/global.js',
    spec: ["test/**/*.tests.js"]
}
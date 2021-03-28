exports.config = {
  runner: 'local',
  specs: [
    './test/specs/**/*.js'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    //
    browserName: 'chrome',
    acceptInsecureCerts: true,
  }],
  logLevel: 'error',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 999999
  },
}
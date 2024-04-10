const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  onPrepare: function() {          
    browser.ignoreSynchronization = true;
  },

  e2e: {

    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportWidth: 1000,
    viewportHeight: 660,
    defaultCommandTimeout: 30000,
    execTimeout:60000,
    taskTimeout:60000,
    pageLoadTimeout: 80000,
    requestTimeout: 5000,        
    responseTimeout: 300000,
    testIsolation: false,
    
    

  },
  chromeWebSecurity:false
});

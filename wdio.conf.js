/** *************************************************************
 * On any platform including Travis-CI
 ************************************************************** */

let capabilities = [
    {
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instance available you can make sure that not more than
        // 5 instance gets started at a time.
        maxInstances: 5,
        // The following are the default drivers installed with selenium-standalone
        // browserName: 'chrome'
        // browserName: 'firefox' // gecko
        // browserName: 'internet explorer'
        // The following driver is installed with phantomjs-brebuilt
        browserName: 'phantomjs'
    }
];
let seleniumArgs = {};

/** **************************************************************
 * In our Windows environment
 *************************************************************** */

if (/^win/.test(process.platform)) {
    seleniumArgs = {
        // Drivers can be downloaded at http://docs.seleniumhq.org/download/
        javaArgs: [
            // Add Microsoft Edge driver
            // `-Dwebdriver.edge.driver=${path.join(__dirname, './test/bin/MicrosoftWebDriver.exe')}`,
            '-Dwebdriver.edge.driver=C:\\Users\\jlche\\AppData\\Roaming\\npm\\node_modules\\selenium-standalone\\.selenium\\edgedriver\\16299-MicrosoftEdgeDriver.exe',

            // Add opera driver
            // `-Dwebdriver.opera.driver=${path.join(__dirname, './test/bin/operadriver.exe')}`,
            // `-Dwebdriver.opera.driver=${path.join(__dirname,'./node_modules/selenium-standalone/.selenium/chromedriver/2.37-x64-chromedriver')}`
            '-Dwebdriver.opera.driver=C:\\Users\\jlche\\AppData\\Roaming\\npm\\node_modules\\selenium-standalone\\.selenium\\chromedriver\\2.37-x64-chromedriver'
        ]
        // For other opts, see https://github.com/vvo/selenium-standalone/blob/master/lib/start.js#L22
        // seleniumArgs: [],
        // version
        // spawnCb
        // drivers
        // basePath
        // javaPath
    };
    capabilities = [
        // @see https://medium.com/@jlchereau/how-to-configure-webdrivier-io-with-selenium-standalone-and-additional-browsers-9369d38bc4d1
        {
            maxInstances: 1,
            browserName: 'chrome'
            // unexpectedAlertBehaviour: 'ignore' - use it to display an alert that is not seen
        },
        {
            maxInstances: 1,
            browserName: 'firefox',
            // @see https://github.com/vvo/selenium-standalone/issues/237
            // @see http://stackoverflow.com/questions/38125581/how-to-enable-a-firefox-extension-when-testing-with-selenium-webdriverio
            marionette: true
        },
        {
            maxInstances: 1,
            browserName: 'internet explorer'
        },
        {
            maxInstances: 1,
            browserName: 'MicrosoftEdge'
        },
        {
            maxInstances: 1,
            browserName: 'phantomjs',
            // Without the path, phantomJS is not found on Windows
            // 'phantomjs.binary.path': path.join(__dirname, './node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs.exe')
            'phantomjs.binary.path':
                'C:\\Program Files (x86)\\PhantomJS\\bin\\phantomjs.EXE'
        },
        {
            maxInstances: 1,
            browserName: 'operablink',
            chromeOptions: {
                args: [],
                extensions: [],
                // binary: 'C:\\Program Files (x86)\\Opera\\launcher.exe'
                binary:
                    'C:\\Program Files (x86)\\Opera\\47.0.2631.80\\opera.exe'
            }
        }
    ];
}

module.exports.config = {
    // =====================
    // Server Configurations
    // =====================
    // Host address of the running Selenium server. This information is usually obsolete as
    // WebdriverIO automatically connects to localhost. Also, if you are using one of the
    // supported cloud services like Sauce Labs, Browserstack, or Testing Bot you don't
    // need to define host and port information because WebdriverIO can figure that out
    // according to your user and key information. However, if you are using a private Selenium
    // backend you should define the host address, port, and path here.
    //
    // host: '0.0.0.0',
    // port: 4444,
    // path: '/wd/hub',
    //
    // =================
    // Service Providers
    // =================
    // WebdriverIO supports Sauce Labs, Browserstack, and Testing Bot (other cloud providers
    // should work too though). These services define specific user and key (or access key)
    // values you need to put in here in order to connect to these services.
    //
    // user: 'webdriverio',
    // key:  'xxxxxxxxxxxxxxxx-xxxxxx-xxxxx-xxxxxxxxx',
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: ['./test/selenium/**/*.js'],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities, // See above
    //
    // When enabled opens a debug port for node-inspector and pauses execution
    // on `debugger` statements. The node-inspector can be attached with:
    // `node-inspector --debug-port 5859 --no-preload`
    // When debugging it is also recommended to change the timeout interval of
    // test runner (eg. jasmineNodeOpts.defaultTimeoutInterval) to a very high
    // value and setting maxInstances to 1.
    // debug: false,
    //
    // Additional list node arguments to use when starting child processes
    // execArgv: null,
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'verbose',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", then the base url gets prepended.
    baseUrl: 'http://localhost:3000',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    // services: [],//
    services: ['selenium-standalone', 'phantomjs'],
    // selenium-standalone configuration
    // @see http://webdriver.io/guide/services/selenium-standalone.html
    // @see https://www.npmjs.com/package/selenium-standalone
    seleniumArgs,
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    // reporters: ['dot'],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000 // for gremlins
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed once before all workers get launched.
    // onPrepare: function (config, capabilities) {}
    // Start the web application
    onPrepare: () => require('./webapp/server') // eslint-disable-line global-require
    //
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    // before: function (capabilities, specs) {
    // },
    //
    // Hook that gets executed before the suite starts
    // beforeSuite: function (suite) {
    // },
    //
    // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
    // beforeEach in Mocha)
    // beforeHook: function () {
    // },
    //
    // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
    // afterEach in Mocha)
    // afterHook: function () {
    // },
    //
    // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // beforeTest: function (test) {
    // },
    //
    // Runs before a WebdriverIO command gets executed.
    // beforeCommand: function (commandName, args) {
    // },
    //
    // Runs after a WebdriverIO command gets executed
    // afterCommand: function (commandName, args, result, error) {
    // },
    //
    // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
    // afterTest: function (test) {
    // },
    //
    // Hook that gets executed after the suite has ended
    // afterSuite: function (suite) {
    // },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the test.
    // after: function (result, capabilities, specs) {
    // },
    //
    // Gets executed after all workers got shut down and the process is about to exit. It is not
    // possible to defer the end of the process using a promise.
    // onComplete: function(exitCode) {
    // }
};

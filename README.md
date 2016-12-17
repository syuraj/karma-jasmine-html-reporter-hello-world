# karma-jasmine-html-reporter-hello-world
Karma Jasmine Html Reporter Hello World

High level steps involved.

1) npm init  => to initialize your npm

2) npm install jasmine => to install Jasmine testing framework

3) npm install karma –save-dev => to install karma test runner as dev devependency

4) npm install karma-firefox-launcher –save-dev => to run karma in firefox browser

5) npm install karma-jasmine –save-dev => karma adapter for jasmine 

6) npm install karma-jasmine-html-reporter – save-dev => to display test results in a html page. https://www.npmjs.com/package/karma-jasmine-html-reporter

7) jasmine init => to initialize and specify the test files

8) karma init => to setup the runner, set jasmine as test framework, locate the test files, specify browser to Firefox (you can also select different browser but needs different plugin), change reporter to ‘kjhtml’. All these changes can be directly done in ‘karma.conf.js’ generated.

9) karma start => to start the test in firefox, click the debug button to see test results as in screenshot above.

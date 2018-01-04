'use strict';

module.exports.runtest = (event, context, callback) => {

  var npm = require('npm');
  var path = require('path');
  var childProcess = require('child_process');
  var args = ['conf.js'];

  npm.load({}, function() {
    var child = childProcess
    .fork(path.join(npm.root, 'protractor/bin/protractor'), args)
    .on('close', function(errorCode) {
      console.log('error code: ', errorCode);

      // Use this block to have Lambda respond when the tests are done.
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Selenium Test executed on BrowserStack!  Child process Error Code: ${errorCode}`,
        }),
      };
      callback(null, response);
    });
    process.on('SIGINT', child.kill);
  });

  // Use this block to have Lambda respond right away.
  
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Selenium Test executed on BrowserStack!',
  //   }),
  // };

  // callback(null, response);

};

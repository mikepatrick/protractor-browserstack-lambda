exports.config = {
    'specs': ['./index.js'],
    'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
  
    'capabilities': {
      'browserstack.user': '<BROWSERSTACK_USER>',
      'browserstack.key': '<BROWSERSTACK_KEY>',
      'browserName': 'chrome'
    }
  };
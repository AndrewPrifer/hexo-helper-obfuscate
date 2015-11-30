'use strict';

var munge = require('munge');

hexo.extend.helper.register('obfuscate', function(string){
  return munge(string);
});

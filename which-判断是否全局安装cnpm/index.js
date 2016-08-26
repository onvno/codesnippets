var which = require('which');
var npms = ['tnpm', 'cnpm', 'npm'];

function findNpm() {
  for (var i = 0; i < npms.length; i++) {
    try {
      which.sync(npms[i]);
      console.log('use npm: ' + npms[i]);
      return npms[i];
    } catch (e) {

    }
  }
  throw new Error('please install npm');
}

var npm = findNpm();
console.log(npm);

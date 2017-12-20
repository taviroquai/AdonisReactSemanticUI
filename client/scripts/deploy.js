'use strict';
const { exec } = require('child_process');
const os = process.platform;
var cmd = 'cp -R ./build/. ../public';

if (/win/.test(os)) {
    cmd = 'xcopy /s /y build ..\\public';
}

exec(cmd, (err, stdout, stderr) => {
  if (err) console.log(stderr)
  else console.log(stdout);
});
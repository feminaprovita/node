const path = require('./pwd.js');
const dirContents = require('./ls.js');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remove the newline

  path(cmd);
  dirContents(cmd);
});

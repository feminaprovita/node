const fs = require('fs');

const dirContents = command => {
  // logic to return directory contents
  if (command === 'ls') {
    fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err;
      } else {
        process.stdout.write('\n\n');
        process.stdout.write(files.join('\n'));
        process.stdout.write('\n\n');
        process.stdout.write('prompt > ');
      }
    });
  }
};

module.exports = dirContents;

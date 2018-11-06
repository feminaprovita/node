const pwd = command => {
  if (command === 'pwd') {
    console.log(process.cwd());
  } else {
    process.stdout.write('You typed: ' + command);
  }
  process.stdout.write('\nprompt > ');
};

module.exports = pwd;


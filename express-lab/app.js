/* eslint-disable */
//prettier-ignore

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Kittens and Puppies</title>
    </head>
    <body>
      <h1>Kittens and puppies are within!</h1>
    </body>
  </html>
  `);
});

app.get('/kittens', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Kittens and Puppies</title>
    </head>
    <body>
    <p>
                      /^--^\     /^--^\     /^--^\<br>
                      \____/     \____/     \____/<br>
                     /      \   /      \   /      \<br>
                    |        | |        | |        |<br>
                     \__  __/   \__  __/   \__  __/<br>
|^|^|^|^|^|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|^|^|^|^|^|<br>
| | | | | | | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | | | | | | |<br>
########################/ /######\ \###########/ /#######################<br>
| | | | | | | | | | | | \/| | | | \/| | | | | |\/ | | | | | | | | | | | |<br>
|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
  </p>
    </body>
  </html>
  `);
});

app.get('/puppies', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Kittens and Puppies</title>
    </head>
    <body>
      <p>
            /)-_-(\        /)-_-(\
             (o o)          (o o)
     .-----__/\o/            \o/\__-----.
    /  __      /              \      __  \
\__/\ /  \_\ |/                \| /_/  \ /\__/
     \\     ||                  ||      \\
     //     ||                  ||      //
     |\     |\                  /|     /|
      </p>
    </body>
  </html>
  `);
});

const PORT = 1382;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

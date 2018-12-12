const data = require('./data');
const express = require('./express');
const router = express.Router();
//i guess this Router is built in?

router.get('/vegetarian', (req, res) => {
  let puppiesVegNames = data.getVegPuppies();
  res.status(201).json(puppiesVegNames);
});

router.get('/', (req, res) => {
  let puppiesNames = data.getPuppiesNames();
  res.send(puppiesNames);
  //alt: res.json(puppiesNames);
});
// '/' needs to be at the end of 'get' methods, bc most general

router.delete('/:age/deleted', (req, res) => {
  // whatever follows colon is placeholder for key: req.params.textaftercolon
  let age = req.params.age;
  let filteredPups = data.deleteYoungerPuppies(age);
  res.json(filteredPups);
});

router.put('/:color', (req, res) => {
  let color = req.params.color;
  let updatedPups = data.updatePuppyFavColor(color);
  res.send(updatedPups);
});
// put updates; post adds

module.exports = router;

// req === request === what's requested in the params

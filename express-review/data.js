let puppies = [
  { name: 'Siri', age: 8, vegetarian: true },
  { name: 'Jill', age: 2, vegetarian: true },
  { name: 'Jimin', age: 4, vegetarian: false },
];

module.exports = {
  getPuppiesNames: function() {
    let names = [];
    puppies.forEach(puppy => names.push(puppy.name));
    return names;
  },
  getVegPuppies: function() {
    let vegPuppies = [];
    puppies.forEach(puppy => {
      if (puppy.vegetarian) vegPuppies.push(puppy.name);
    });
    return vegPuppies;
  },
  deleteYoungerPuppies: function(age) {
    puppies = puppies.filter(puppy => puppy.age > age);
    return puppies;
  },
  updatePuppyFavColor: function(color) {
    let updatedPups = [];
    puppies.forEach(pup => {
      pup.favorite = color;
      updatedPups.push(pup);
    });
    return updatedPups;
  },
};

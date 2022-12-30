
// *************************************************
const {apartmentHunting} = require('./index')
// import the apartmentHunting function from ./index
// we have block data and request data
let blocks = [
    {
      gym: false,
      school: true,
      store: false,
    },
    {
      gym: true,
      school: false,
      store: false,
    },
    {
      gym: true,
      school: true,
      store: false,
    },
    {
      gym: false,
      school: true,
      store: false,
    },
    {
      gym: false,
      school: true,
      store: true,
    },
  ];
let reqs = ["gym", "school", "store"];
const result = apartmentHunting(blocks,reqs)
// passing the above data as arguments(blocks, reqs) to apartmentHunting function
console.log(result)
// get the final output index nbr the block
  
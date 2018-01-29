const path = require("path");
const fs = require("fs");


let chirpsPath = path.join(__dirname, "../chirps.json");

let chirpArray = [
  {
    author: "Jessica Jones",
    message: "skiiiiiirt"
  },
  {
    author: "Clark Galvin",
    message: "Are you serious game?"
  },
  {
    author: "Rob Spell",
    message: "Dude, it's fine"
  },
  {
    author: "Phil Watson",
    message: "yeeeeeeeeeesssss?"
  },
  {
    author: "Preston Lejeune",
    message: "whats up?"
  }
];

let chirps = JSON.stringify(chirpArray);

fs.writeFile(chirpsPath, chirps, error => {
  if (error) console.log(error);
});

fs.readFile(chirps, {
encoding: 'UTF-8'
}, (error, data) => {
    chirp = chirps.json
    console.log(chirps)
});

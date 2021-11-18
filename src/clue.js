// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    occupation:"accountant",
    age: 35,
    description: "fit",
    image: "cool",
    color: "blue"
  },
  {
    firstName: "Bernardo",
    lastName: "Silva",
    occupation:"teacher",
    age: 28,
    description: "small",
    image: "happy",
    color: "white"
  },
  {
    firstName: "Renato",
    lastName: "Sanches",
    occupation:"police",
    age: 24,
    description: "strong",
    image: "warrior",
    color: "red"
  },
  {
    firstName: "Rui",
    lastName: "Patricio",
    occupation:"waitress",
    age: 30,
    description: "tall",
    image: "hairy",
    color: "yellow"
  },
  {
    firstName: "Ruben",
    lastName: "Dias",
    occupation:"dev",
    age: 23,
    description: "strong",
    image: "bossy",
    color: "green"
  },
  {
    firstName: "Andre",
    lastName: "Almeida",
    occupation:"unemployed",
    age: 32,
    description: "weak",
    image: "bumbling",
    color: "black"
  }

  
];

// Rooms Array

const roomsArray = [
  {name: "Portugal"},
  {name: "Spain"},
  {name: "Ericeira"},
  {name: "England"},
  {name: "Italy"},
  {name: "France"},
  {name: "Brazil"},
  {name: "Germany"},
  {name: "Netherlands"},
  {name: "Sweden"},
  {name: "Greece"},
  {name: "Colombia"},
  {name: "India"},
  {name: "Morocco"},
  {name: "USA"},

];

// Weapons Array

const weaponsArray = [
{name: "hammer",
weight: 3
},
{name: "gun",
weight: 2
},
{name: "knife",
weight: 1
},
{name: "poison",
weight: 0.2
},
{name: "rock",
weight: 2
},
{name: "laptop",
weight: 3
},
{name: "pen",
weight: 0.1
},
{name: "bone",
weight: 1
},
{name: "pillow",
weight: 0.5
},

];


// ITERATION 2

function selectRandom(randomCard) {
  var card = weaponsArray.random() || roomsArray.random() || suspectsArray.random()

  
}

function pickMystery() {}


// ITERATION 3

function revealMystery() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}

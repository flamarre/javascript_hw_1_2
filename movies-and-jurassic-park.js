var movie = {
	title: "Goodfellas",
	actors: ["Robert Deniro", "Ray Liotta", "Joe Pesci"],
	director: "Martin Scorcese",
	movieSetting: "NYC",
	movieType: "mafia classic",
	releaseYear: 1990,
	duration: 120
}
console.log(movie.title)
console.log(movie.director)
console.log(movie.releaseYear)

//Part 1_HW

var snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
}

//Solution 

var guestOfHonor = snakewaterMontana.paleontologist;
console.log(guestOfHonor)

var cleverGirl = snakewaterMontana.specimen;
console.log(cleverGirl)

//Part 2_HW

var nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ]
}

//Solution

var nicaraguanSpecimens = [
	"Tyrannosaurus Rex", 
	"Stegosaurus", 
	"Triceratops", 
	"Velociraptor"

	];

var favoriteSpecimen = "Stegosaurus"
console.log(favoriteSpecimen)

var annual_budget = 1500000 + 250000
console.log(annual_budget)

//Part 3_HW

var hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ]
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ]
  },
  nicaragua: {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
    ]
  }
}

//Solution

var mexicanmineDepth = hammondsMines.mexico.depth;
console.log(mexicanmineDepth)

var buenosAires = hammondsMines.buenos_aires.annual_budget;
console.log(buenosAires)

var dinoSpecimens = hammondsMines.buenos_aires.specimens;
console.log(dinoSpecimens)

var buenosairesBudget = hammondsMines.buenos_aires.annual_budget;
console.log(buenosairesBudget)

var mexicoBudget = hammondsMines.mexico.annual_budget;
console.log(mexicoBudget)

var nicaraguaBudget = hammondsMines.nicaragua.annual_budget;
console.log(nicaraguaBudget)

var totalCost = buenosairesBudget + mexicoBudget + nicaraguaBudget;
console.log(totalCost)

var dinosaur = specimens(Parasaurolophus)
console.log(dinosaur)

//OR

var dinosaur = "Parasaurolophus"
console.log(dinosaur)
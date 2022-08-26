var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.splice(0, 0, "Canis Major");
console.log(constellations);

planets.splice(5, 1);
console.log(planets);

var galaxy = constellations + planets;
console.log(galaxy);

var star = star.toUpperCase();
console.log(star);
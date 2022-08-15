function time(distance, speed) {
  return (time = distance / speed);
}

const prompt = require("prompt-sync")();

var distance = prompt("Type the distance you pretend to go through: ");
var speed = prompt("Type the speed you wish to mantain: ");

var t = time(distance, speed);

console.log(
  `You'll take about ${t} hours to cover ${distance} km at about ${speed} km/h`
);

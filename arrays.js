var distances = [430, 720, 310, 150];
var speed = [80, 110, 75, 95];

function time(distance, speed) {
  return distance / speed;
}

for (var index in distances) {
  var d = distances[index];
  var s = speed[index];

  var t = time(d, s);
}

console.log(`${d} / ${s} = ${t}`);

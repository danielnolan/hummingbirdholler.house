const currentTime = new Date();
const month = currentTime.getMonth();

if ([2, 3, 4].includes(month)) {
  var season = "spring.jpeg";
}
if ([5, 6, 7].includes(month)) {
  var season = "summer.jpeg";
}
if ([8, 9, 10].includes(month)) {
  var season = "fall.jpeg";
}
if ([11, 0, 1].includes(month)) {
  var season = "winter.jpeg";
}

document.addEventListener("DOMContentLoaded",function(){
  document.body.style.backgroundImage = `url(images/${season})`;
});

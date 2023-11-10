const currentTime = new Date();
const month = currentTime.getMonth();

if ([2, 3, 4].includes(month)) {
  var season = "spring.jpg";
}
if ([5, 6, 7].includes(month)) {
  var season = "summer.jpg";
}
if ([8, 9, 10].includes(month)) {
  var season = "fall.jpg";
}
if ([11, 0, 1].includes(month)) {
  var season = "winter.jpg";
}

document.addEventListener("DOMContentLoaded",function(){
  document.body.style.backgroundImage = `url(images/${season})`;
});

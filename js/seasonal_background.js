const currentTime = new Date();
const month = currentTime.getMonth() + 1;

if ([3, 4, 5].includes(month)) {
  var season = "spring.jpg";
}
if ([6, 7, 8].includes(month)) {
  var season = "summer.jpg";
}
if ([9, 10, 11].includes(month)) {
  var season = "fall.jpg";
}
if ([12, 1, 2].includes(month)) {
  var season = "winter.jpg";
}

document.addEventListener("DOMContentLoaded",function(){
  document.body.style.backgroundImage = `url(images/${season})`;
});

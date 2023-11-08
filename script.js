window.onload = function() {
  var projectImages = document.getElementsByClassName("project-image");
  var projectDivs = document.getElementsByClassName("card");
  var coloredPhotos = ["images/project1.png"]
  var blackWhitePhotos = ["images/project1bw.png"];
  
  console.log(projectDivs.length);
  console.log(coloredPhotos[0]);
  
  for (var i = 0; i < projectDivs.length; i++) {
    projectDivs[i].index = i;
    projectDivs[i].addEventListener("mouseover", showColoredPhoto);
    projectDivs[i].addEventListener("mouseout", hideColoredPhoto);
  }
  
  function showColoredPhoto(event) {
    var index = event.currentTarget.index
    projectImages[index].src = coloredPhotos[index];
  }
  
  function hideColoredPhoto(event) {
    var index = event.currentTarget.index
    projectImages[index].src = blackWhitePhotos[index];
  }
}

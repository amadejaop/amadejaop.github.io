window.onload = function() {
  var projectImages = document.getElementsByClassName("project-image");
  var projectDivs = document.getElementsByClassName("card");
  var coloredPhotos = ["images/project1.png", "images/project2.png", "images/project3.png", "images/project4.png"]
  var blackWhitePhotos = ["images/project1bw.png", "images/project2bw.png", "images/project3bw.png", "images/project4bw.png"];
  
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

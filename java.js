function upDate(previewPic) {
  // Log to check if event is triggered
  console.log("Mouse over:", previewPic.alt);

  // Change background image
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

  // Change the text to the image's alt text
  document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
  // Reset background image
  document.getElementById('image').style.backgroundImage = "url('')";

  // Reset text
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

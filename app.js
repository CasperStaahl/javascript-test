const http = require('http');

const hostname = '192.168.0.101';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end("<h1>test<h1>");
    res.end(`<!DOCTYPE html>
    <html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1080px;
  position: relative;
  margin: auto;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
</style>
</head>
<body>

<div class="slideshow-container">

<div class="mySlides fade">
  <img src="https://via.placeholder.com/1080x1920" style="width:100%">
</div>

<div class="mySlides fade">
  <img src="https://via.placeholder.com/720x1280" style="width:100%">
</div>

<div class="mySlides fade">
  <img src="https://via.placeholder.com/2160x3840" style="width:100%">
</div>

</div>

<script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}   
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
</script>

</body>
</html>`);

//     res.end(`
//     <!DOCTYPE html>
//     <html>
//     <script language="JavaScript"> 
// var i = 0; var path = new Array(); 

// // LIST OF IMAGES 
// path[0] = "https://via.placeholder.com/1080x1920"
// path[1] = "https://via.placeholder.com/720x1280"; 
// path[2] = "https://via.placeholder.com/2160x3840"; 

// function swapImage() 
// { 
// document.slide.src = path[i]; 
// if(i < path.length - 1) i++; 
// else i = 0; 
// setTimeout("swapImage()",3000); 
// } 
// window.onload=swapImage; 
// </script> 
// <img height="200" name="slide" src="image_1.gif" width="400" />
// `);
 });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
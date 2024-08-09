document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "/images/prim-1.png",
      "/images/prim-2.png",
      "/images/prim-3.png"
    ];
    let currentIndex = 0;
    const imageElement = document.getElementById("rotating-image");
  
    function rotateImage() {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
    }
  
    setInterval(rotateImage, 3000); // Change image every 3 seconds
  });
  
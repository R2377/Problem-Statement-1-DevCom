document.addEventListener('DOMContentLoaded', function() {
    const images = ['imgE.jpg', 'imgF.jpg', 'imgG.jpg', 'stockImage4.jpg', 'imgCar4.avif', 'imgI.jpg', 'imgJ.jpg'];
    const imageElement = document.getElementById('image');
    let currentIndex = 0;
    function changeImage() {
        imageElement.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }
    setInterval(changeImage, 5000);
});


document.addEventListener("DOMContentLoaded", function () {
    // Get all images
    var images = document.images;
    var imagesLoaded = 0;

    // Function to be called when each image finishes loading
    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            // All images have loaded
            hideLoadingSpinner();
        }
    }

    // Attach the imageLoaded function to the load event of each image
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("load", imageLoaded);
    }
});

function hideLoadingSpinner() {
    // Hide the loading spinner
    var spinner = document.getElementById("loadingSpinner");
    var imageContainer = document.getElementById("image");

    spinner.style.display = "none";
    imageContainer.style.display = "block";
}


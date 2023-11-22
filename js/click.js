
var allImages = document.querySelectorAll('img');

console.log("hello");
allImages.forEach(function (image) {
    image.addEventListener('hover', function (img) {
        console.log("hello2");
    });
});
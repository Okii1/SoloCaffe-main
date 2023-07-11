function showImage(coffee) {
    var image = document.getElementById("coffee-image");
    var overlay = document.getElementById("image-overlay");

    switch (coffee) {
        case "IMG_4323":
            image.src = "IMG_4323.png";
            break;
        case "IMG_4323":
            image.src = "IMG_4323.png";
            break;
        case "IMG_4323":
            image.src = "IMG_4323.png";
            break;
        default:
            image.src = "";
            break;
    }

    overlay.style.display = "block";
}

document.getElementById("image-overlay").addEventListener("click", function () {
    this.style.display = "none";
});

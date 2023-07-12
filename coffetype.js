function showImage(coffee) {
    var image = document.getElementById("coffee-image");
    var overlay = document.getElementById("image-overlay");

    switch (coffee) {
        case "espresso":
            image.src = "espresso.png";
            break;
        case "double-espresso":
            image.src = "double-espresso.png";
            break;
        case "macchiato":
            image.src = "macchiato.png";
            break;
        case "small-macchiato":
            image.src = "small-macchiato.png";
            break;
        case "americano":
            image.src = "americano.png";
            break;
        case "ness-classic":
            image.src = "ness-classic.png";
            break;
        case "ness-vanila":
            image.src = "ness-vanila.png";
            break;
        case "tea":
            image.src = "tea.png";
            break;
        case "latte-macchiato":
            image.src = "latte-macchiato.png";
            break;
        case "hot-chocolate":
            image.src = "hot-chocolate.png";
            break;
        case "uje-natyral":
            image.src = "uje-natyral.png";
            break;
        case "uje-mineral":
            image.src = "uje-mineral.png";
            break;
        case "coca-cola":
            image.src = "coca-cola.png";
            break;
        case "americano":
            image.src = "americano.png";
            break;
        case "ness-classic":
            image.src = "ness-classic.png";
            break;
        case "ness-vanila":
            image.src = "ness-vanila.png";
            break;
        case "tea":
            image.src = "tea.png";
            break;
        case "latte-macchiato":
            image.src = "latte-macchiato.png";
            break;
        case "latte-macchiato":
            image.src = "latte-macchiato.png";
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

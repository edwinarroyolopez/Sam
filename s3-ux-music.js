
const chuuya = document.querySelector(".chuuya");
chuuya.addEventListener("click", () => {
    chuuya.style.transform = "scale(1.1)";
    chuuya.style.transition = "all 0.5s ease-in-out";
    chuuya.style.cursor = "pointer";
    chuuya.style.boxShadow = "0 0 10px rgba(131, 52, 52, 0.611)";
    chuuya.style.borderRadius = "50%";
    chuuya.style.backgroundImage = "url('https://i.pinimg.com/736x/c4/2e/16/c42e162af4c9c891e2687b4646e4beac.jpg')";
});
function mostrarVideo() {
    const video = document.getElementById("videoYT");

    if (video.style.display === "none" || video.style.display === "") {
        video.style.display = "block";
    } else {
        video.style.display = "none";
    }
}
function mostrarImagenes() {
    const imagenes = document.getElementById("imagenes");
    if (imagenes.style.display === "flex") {
        imagenes.style.display = "none";
    } else {
        imagenes.style.display = "flex";
    }
}
const links = [
    "https://www.youtube.com/watch?v=dofR2RTcsvE",
    "https://www.youtube.com/watch?v=JA8NzQo1qH0",
    "https://www.youtube.com/watch?v=2Eu97F-eVsc"
];

let indice = 0;

function rotarLink(event) {
    event.preventDefault();
    window.open(links[indice], "_blank");

    indice++;

    if (indice >= links.length) {
        indice = 0;
    }
}
function mostrarMusica() {
    const spotify = document.getElementById("spotify");

    if (spotify.style.display === "none" || spotify.style.display === "") {
        spotify.style.display = "block";
    } else {
        spotify.style.display = "none";
    }
}


function addVideo() {
    const videoUrl = document.getElementById("videoUrl").value;
    if (videoUrl === "") {
        alert("Por favor, ingresa una URL de video");
        return;
    }

    const videos = JSON.parse(localStorage.getItem("videos")) || [];
    videos.push(videoUrl);
    localStorage.setItem("videos", JSON.stringify(videos));
    listVideos();
}

function listVideos() {
    const videos = JSON.parse(localStorage.getItem("videos")) || [];
    videos.forEach(videoUrl => {
        const video = document.createElement("iframe"); // Crear elemento iframe
        video.src = videoUrl; // Asignar URL del video
        document.getElementById("contenido").appendChild(video); // Agregar video al contenido
    });
}

listVideos();

// https://www.youtube.com/embed/EiS7cKfuf6w


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <link rel="stylesheet" href="/CSS/index.css">
    <title>Invitación a los XV años Brissia Yunuen</title>
</head>

<body>
    <div id="particles-js"></div>
    <div id="particles-js2"></div>
    <div class="principal">
        <div class="titulo">
            <h1 class="principal">MIS XV AÑOS</h1>
        </div>
        <div class="nombre">
            <img src="/Imagenes/Circulo.png" alt="" class="circulo">
            <h1 class="nombreInv">Brissia</h1>
        </div>
        <div class="fecha">
            <h1 class="dia">16</h1>
            <div class="mes-ano">
                <h2 class="mes">NOVIEMBRE</h2>
                <h2 class="ano">2024</h2>
            </div>
        </div>
        <div class="music-player">
            <audio class="custom-audio" controls>
                <source src="/Joji -  Glimpse of Us (1080p_30fps_H264-128kbit_AAC).mp4" type="audio/mpeg">
                Tu explorador no soporta el elemento de Audio
            </audio>
        </div>
        <p class="textoInv">
            Deseo que compartas este día tan especial para mí y mis papás.
            Hoy doy gracias a Dios por ellos, por cuidarme, tenerme paciencia, aconsejarme y guiarme.
            Doy gracias también a toda mi familia por hacer más especial este día.
        </p>
    </div>

    <div class="secundario">
        <h1 class="donde">¿DÓNDE?</h1>
    </div>

    <div class="secundario-Mapa">
        <h1 class="ceremonia">CEREMONIA RELIGIOSA</h1>
        <img class="iglesia" src="/Imagenes/iglesia-(1).gif" alt="">
        <h1 class="hora">19:45 PM</h1>
        <h1 class="parroquia">Parroquia de nuestra señora de Guadalupe </h1>
        <h1 class="direccion">Av Orquídeas Manzana 047, Villa de las Flores, 55710 San Francisco Coacalco, Méx.</h1>
        <div id="map"></div>
        <a href="https://www.google.com/maps/place/Parroquia+de+Nuestra+Se%C3%B1ora+de+Guadalupe/@19.6538708,-99.0963096,19z/data=!4m6!3m5!1s0x85d1f389560891e1:0x7dc0b301ec90e105!8m2!3d19.6538695!4d-99.0963257!16s%2Fg%2F11bbwz3whn?entry=ttu" target="_blank">
            <button class="llegar">
                <span class="icon-container">
                    <img src="/Imagenes/location.png" alt="Icono" class="icono">
                </span>
                COMO LLEGAR
            </button>
        </a>
    </div>

    </div>
    <script src="/JS/Funciones.js"></script>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
</body>

</html>
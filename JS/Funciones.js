particlesJS('particles-js', {
    // Configuración de las partículas
    "particles": {
        // Número total de partículas y su densidad
        "number": {
            "value": 200, // Número total de partículas en la pantalla
            "density": {
                "enable": true, // Habilita la densidad de las partículas
                "value_area": 800 // Área en la que se calcula la densidad de las partículas
            }
        },
        // Color de las partículas y su animación
        "color": {
            "value": "#FF1493", // Color base de las partículas (marrón oscuro)
            "animation": {
                "enable": true, // Habilita la animación del color
                "speed": 1, // Velocidad de la transición de color
                "sync": false, // La animación del color no está sincronizada entre partículas
                "color": {
                    "value": "#FF007F" // Color alternativo (más dorado)
                }
            }
        },
        // Forma de las partículas
        "shape": {
            "type": "circle", // Forma de las partículas (círculos)
            "stroke": {
                "width": 0, // Ancho del borde de las partículas (0 significa sin borde)
                "color": "#FFB6C1" // Color del borde de las partículas (dorado)
            }
        },
        // Opacidad de las partículas y su animación
        "opacity": {
            "value": 0.7, // Opacidad de las partículas
            "random": true, // La opacidad de las partículas puede variar aleatoriamente
            "anim": {
                "enable": true, // Habilita la animación de la opacidad
                "speed": 1, // Velocidad de la animación de la opacidad
                "opacity_min": 0.1, // Valor mínimo de opacidad durante la animación
                "sync": false // La animación de la opacidad no está sincronizada entre partículas
            }
        },
        // Tamaño de las partículas y su animación
        "size": {
            "value": 4, // Tamaño de las partículas
            "random": true, // El tamaño de las partículas puede variar aleatoriamente
            "anim": {
                "enable": false, // La animación del tamaño está deshabilitada
                "speed": 40, // Velocidad de la animación del tamaño (si estuviera habilitada)
                "size_min": 1, // Tamaño mínimo de las partículas (si la animación estuviera habilitada)
                "sync": false // La animación del tamaño no está sincronizada entre partículas
            }
        },
        // Configuración de las conexiones entre partículas
        "line_linked": {
            "enable": false // Las partículas no están conectadas por líneas
        },
        // Movimiento de las partículas
        "move": {
            "enable": true, // Habilita el movimiento de las partículas
            "speed": 2, // Velocidad a la que las partículas se mueven
            "direction": "random", // Dirección del movimiento (aleatorio en cualquier dirección)
            "random": true, // El movimiento es aleatorio
            "straight": false, // Las partículas no se mueven en línea recta
            "out_mode": "out", // Las partículas desaparecen cuando salen del área del canvas
            "bounce": false // Las partículas no rebota cuando alcanzan los bordes
        }
    },
    // Configuración de la interactividad con el canvas
    "interactivity": {
        "detect_on": "canvas", // Detecta interacciones en el canvas
        "events": {
            // Configuración para cuando se pasa el mouse por encima del canvas
            "onhover": {
                "enable": true, // Habilita la interacción en hover
                "mode": "repulse" // Modo de interacción en hover (repulsar partículas)
            },
            // Configuración para cuando se hace clic en el canvas
            "onclick": {
                "enable": false, // La interacción en clic está deshabilitada
                "mode": "push" // Modo de interacción en clic (agregar más partículas si estuviera habilitado)
            },
            // Configuración para ajustar el canvas cuando se redimensiona la ventana
            "resize": true // Habilita el ajuste del canvas cuando se redimensiona la ventana
        },
        // Configuración del modo de repulsión
        "modes": {
            "repulse": {
                "distance": 100, // Distancia desde el puntero del mouse en la que se aplica el efecto de repulsión
                "duration": 0.4, // Duración del efecto de repulsión
                "speed": 1 // Velocidad del efecto de repulsión
            }
        }
    },
    // Habilita la detección de pantalla retina para ajustar la calidad de las partículas
    "retina_detect": true
});

particlesJS('particles-js2', {
    // Configuración de las partículas
    "particles": {
        // Número total de partículas y su densidad
        "number": {
            "value": 200, // Número total de partículas en la pantalla
            "density": {
                "enable": true, // Habilita la densidad de las partículas
                "value_area": 800 // Área en la que se calcula la densidad de las partículas
            }
        },
        // Color de las partículas y su animación
        "color": {
            "value": "#FF1493", // Color base de las partículas (marrón oscuro)
            "animation": {
                "enable": true, // Habilita la animación del color
                "speed": 1, // Velocidad de la transición de color
                "sync": false, // La animación del color no está sincronizada entre partículas
                "color": {
                    "value": "#FF007F" // Color alternativo (más dorado)
                }
            }
        },
        // Forma de las partículas
        "shape": {
            "type": "circle", // Forma de las partículas (círculos)
            "stroke": {
                "width": 0, // Ancho del borde de las partículas (0 significa sin borde)
                "color": "#FFB6C1" // Color del borde de las partículas (dorado)
            }
        },
        // Opacidad de las partículas y su animación
        "opacity": {
            "value": 0.7, // Opacidad de las partículas
            "random": true, // La opacidad de las partículas puede variar aleatoriamente
            "anim": {
                "enable": true, // Habilita la animación de la opacidad
                "speed": 1, // Velocidad de la animación de la opacidad
                "opacity_min": 0.1, // Valor mínimo de opacidad durante la animación
                "sync": false // La animación de la opacidad no está sincronizada entre partículas
            }
        },
        // Tamaño de las partículas y su animación
        "size": {
            "value": 4, // Tamaño de las partículas
            "random": true, // El tamaño de las partículas puede variar aleatoriamente
            "anim": {
                "enable": false, // La animación del tamaño está deshabilitada
                "speed": 40, // Velocidad de la animación del tamaño (si estuviera habilitada)
                "size_min": 1, // Tamaño mínimo de las partículas (si la animación estuviera habilitada)
                "sync": false // La animación del tamaño no está sincronizada entre partículas
            }
        },
        // Configuración de las conexiones entre partículas
        "line_linked": {
            "enable": false // Las partículas no están conectadas por líneas
        },
        // Movimiento de las partículas
        "move": {
            "enable": true, // Habilita el movimiento de las partículas
            "speed": 2, // Velocidad a la que las partículas se mueven
            "direction": "random", // Dirección del movimiento (aleatorio en cualquier dirección)
            "random": true, // El movimiento es aleatorio
            "straight": false, // Las partículas no se mueven en línea recta
            "out_mode": "out", // Las partículas desaparecen cuando salen del área del canvas
            "bounce": false // Las partículas no rebota cuando alcanzan los bordes
        }
    },
    // Configuración de la interactividad con el canvas
    "interactivity": {
        "detect_on": "canvas", // Detecta interacciones en el canvas
        "events": {
            // Configuración para cuando se pasa el mouse por encima del canvas
            "onhover": {
                "enable": true, // Habilita la interacción en hover
                "mode": "repulse" // Modo de interacción en hover (repulsar partículas)
            },
            // Configuración para cuando se hace clic en el canvas
            "onclick": {
                "enable": false, // La interacción en clic está deshabilitada
                "mode": "push" // Modo de interacción en clic (agregar más partículas si estuviera habilitado)
            },
            // Configuración para ajustar el canvas cuando se redimensiona la ventana
            "resize": true // Habilita el ajuste del canvas cuando se redimensiona la ventana
        },
        // Configuración del modo de repulsión
        "modes": {
            "repulse": {
                "distance": 100, // Distancia desde el puntero del mouse en la que se aplica el efecto de repulsión
                "duration": 0.4, // Duración del efecto de repulsión
                "speed": 1 // Velocidad del efecto de repulsión
            }
        }
    },
    // Habilita la detección de pantalla retina para ajustar la calidad de las partículas
    "retina_detect": true
});


var map = L.map('map').setView([19.6327, -99.0926], 15); // Coordenadas aproximadas para Coacalco

// Agrega una capa de mapa desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marca la ubicación en el mapa
L.marker([19.6538695, -99.0963257]).addTo(map)
    .bindPopup('Parroquia de nuestra señora de Guadalupe')
    .openPopup();
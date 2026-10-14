// JavaScript Document 
/* =========================================
   MUSEO VIRTUAL - SALA 1
   VISOR INTERACTIVO DE RECURSOS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ELEMENTOS */

    const viewer = document.getElementById("resourceViewer");

    const closeButton = document.getElementById("viewerClose");

    const buttons = document.querySelectorAll(".resource-open");

    const panels = document.querySelectorAll(".viewer-panel");

    const video = document.getElementById("museumVideo");


    /* COMPROBAR QUE EL VISOR EXISTE */

    if (!viewer) {

        console.error("No se encontró #resourceViewer");

        return;

    }


    /* ABRIR RECURSO */

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const resource = button.getAttribute("data-resource");

            /* Ocultar todos los paneles */

            panels.forEach(function (panel) {

                panel.classList.remove("active");

            });


            /* Buscar el panel correspondiente */

            const selectedPanel =
                document.getElementById("viewer-" + resource);


            if (selectedPanel) {

                selectedPanel.classList.add("active");

            }


            /* Abrir visor */

            viewer.classList.add("active");


            /* Llevar suavemente hacia el visor */

            setTimeout(function () {

                viewer.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }, 150);

        });

    });


    /* CERRAR VISOR */

    if (closeButton) {

        closeButton.addEventListener("click", function () {

            viewer.classList.remove("active");


            /* Detener video */

            if (video) {

                video.pause();

                video.currentTime = 0;

            }

        });

    }


    /* ESC PARA CERRAR */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            viewer.classList.remove("active");


            if (video) {

                video.pause();

            }

        }

    });

	
    /* =========================================
       TARJETA INTERACTIVA: EXPLORAR Y REGRESAR
    ========================================= */

    const interactiveCard = document.getElementById("interactiveCard");
    const exploreButton = document.getElementById("exploreButton");
    const backToImage = document.getElementById("backToImage");

    /* GIRAR LA TARJETA AL PULSAR DESCUBRIR */

    if (interactiveCard && exploreButton) {
        exploreButton.addEventListener("click", function (event) {
            event.stopPropagation();
            interactiveCard.classList.add("open");
        });
    }

    /* REGRESAR A LA IMAGEN */

    if (interactiveCard && backToImage) {
        backToImage.addEventListener("click", function () {
            interactiveCard.classList.remove("open");
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let tareaArrastrada = null;

    // Hacer que todas las cards sean arrastrables
    document.querySelectorAll(".card").forEach(tarea => {
        tarea.setAttribute("draggable", true);

        tarea.addEventListener("dragstart", function (event) {
            tareaArrastrada = tarea;
            event.dataTransfer.effectAllowed = "move";
            setTimeout(() => {
                tarea.style.opacity = "0.5";
            }, 0);
        });

        tarea.addEventListener("dragend", function () {
            tareaArrastrada.style.opacity = "1";
            tareaArrastrada = null;
        });
    });

    // Permitir soltar las tareas en las columnas
    document.querySelectorAll(".card-column").forEach(columna => {
        columna.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        columna.addEventListener("drop", function (event) {
            event.preventDefault();
            if (tareaArrastrada) {
                const nuevaTarea = this.querySelector(".new-card");
                this.insertBefore(tareaArrastrada, nuevaTarea); // Inserta la tarea antes de "+ Nueva"
            }
        });
    });
});

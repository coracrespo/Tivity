document.addEventListener('click', function (event) {

    // Editar tarjeta
    if (event.target && event.target.alt === "Editar") {
        const card = event.target.closest(".card");
        const description = card.querySelector(".description-text");
        const descriptionText = description.textContent;

        // Crear un textarea para editar el contenido
        const textarea = document.createElement("textarea");
        textarea.classList.add("editable-text");
        textarea.style.width = "100%";  // Hacer que el textarea ocupe todo el ancho de la pantalla
        textarea.style.height = "40px";
        textarea.value = descriptionText;

        // Crear el contenedor que va a envolver el textarea y el botón
        const textareaContainer = document.createElement("div");
        textareaContainer.style.display = "flex";
        textareaContainer.style.alignItems = "center";
        textareaContainer.style.justifyContent = "center"; // Centra el contenido

        // Agregar el textarea al contenedor
        textareaContainer.appendChild(textarea);

        // Crear el botón de guardar
        const saveButton = document.createElement("button");
        saveButton.textContent = "Guardar";
        saveButton.classList.add("save-button");
        saveButton.style.marginLeft = "10px"; // Espacio entre el textarea y el botón

        // Agregar el botón de guardar al contenedor
        textareaContainer.appendChild(saveButton);

        // Reemplazar el <p> con el contenedor que tiene el textarea y el botón
        description.innerHTML = "";
        description.appendChild(textareaContainer);

        // Agregar evento al botón de guardar
        saveButton.addEventListener("click", function () {
            const newText = textarea.value;

            // Volver a poner el texto guardado en el <p>
            description.innerHTML = newText;
        });
    }

    // Eliminar tarjeta
    if (event.target && event.target.alt === "Eliminar") {
        const confirmDelete = confirm("¿Estás seguro de que quieres eliminar la card?");
        if (confirmDelete) {
            event.target.closest(".card").remove();
        }
    }

    // Crear una nueva tarjeta al hacer clic en el botón "Nueva"
    if (event.target && event.target.classList.contains("new-card")) {
        const cardColumn = event.target.closest(".card-column");

        // Crear una nueva card
        const newCard = document.createElement("div");
        newCard.classList.add("card");

        // Estructura de la nueva card
        const cardTitle = document.createElement("div");
        cardTitle.classList.add("title");

        const projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title");

        const taskIcon = document.createElement("span");
        taskIcon.classList.add("task-icon");
        taskIcon.textContent = "➜";

        const descriptionText = document.createElement("p");
        descriptionText.classList.add("description-text");
        descriptionText.textContent = "Escribe tu tarea aquí...";

        projectTitle.appendChild(taskIcon);
        projectTitle.appendChild(descriptionText);

        cardTitle.appendChild(projectTitle);

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("info");

        const cardActions = document.createElement("div");
        cardActions.classList.add("card-actions");

        const editIcon = document.createElement("img");
        editIcon.src = "/assets/edit.svg";
        editIcon.alt = "Editar";

        const deleteIcon = document.createElement("img");
        deleteIcon.src = "/assets/delete.svg";
        deleteIcon.alt = "Eliminar";

        cardActions.appendChild(editIcon);
        cardActions.appendChild(deleteIcon);
        cardInfo.appendChild(cardActions);

        newCard.appendChild(cardTitle);
        newCard.appendChild(cardInfo);

        // Encontrar la card .new-card para agregar la nueva card encima
        const newCardContainer = cardColumn.querySelector('.new-card');
        cardColumn.insertBefore(newCard, newCardContainer); // Insertar antes de la card .new-card
    }

    // Editar el título (h1) y la descripción del proyecto
    if (event.target && event.target.classList.contains("btn-primary")) {
        event.preventDefault(); // Evitar que el enlace redirija

        const h1Element = document.querySelector(".project-h1 h1");
        const pElement = document.querySelector(".project-description p");
        const editButton = document.querySelector(".btn-primary");

        // Ocultar el botón de editar proyecto mientras se editan los campos
        editButton.style.display = "none";

        // Convertir el h1 en un textarea
        const h1Text = h1Element.textContent;
        const h1Textarea = document.createElement("textarea");
        h1Textarea.classList.add("editable-text");
        h1Textarea.value = h1Text;
        h1Textarea.style.width = "100%";  // Hacer que el textarea ocupe todo el ancho
        h1Element.innerHTML = "";
        h1Element.appendChild(h1Textarea);

        // Convertir el p en un textarea
        const pText = pElement.textContent;
        const pTextarea = document.createElement("textarea");
        pTextarea.classList.add("editable-text");
        pTextarea.value = pText;
        pTextarea.style.width = "100%";  // Hacer que el textarea ocupe todo el ancho
        pElement.innerHTML = "";
        pElement.appendChild(pTextarea);

        // Crear el botón "Guardar"
        const saveButton = document.createElement("button");
        saveButton.textContent = "Guardar";
        saveButton.classList.add("save-button");
        pElement.appendChild(saveButton);

        // Guardar los cambios
        saveButton.addEventListener("click", function () {
            const updatedH1Text = h1Textarea.value;
            const updatedPText = pTextarea.value;

            h1Element.innerHTML = updatedH1Text;
            pElement.innerHTML = updatedPText;

            // Mostrar el botón de editar proyecto después de guardar los cambios
            editButton.style.display = "inline-block"; // Mostrar el botón de nuevo

            saveButton.remove(); // Eliminar el botón "Guardar"
        });
    }

});

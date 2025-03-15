const app = Vue.createApp({
    data() {
        return {
            proyectos: [] // Array donde se almacenarán los datos del JSON
        };
    },
    methods: {
        cargarProyectos() {
            fetch('../data.json') // Ruta al archivo JSON (verifica que esté en esta ubicación)
                .then(response => response.json()) // Convertir la respuesta a JSON
                .then(data => {
                    this.proyectos = data.proyectos; // Almacenar los datos en la variable `proyectos`
                })
                .catch(error => console.error('Error cargando el JSON:', error));
        }
    },
    mounted() {
        this.cargarProyectos(); // Llamar a la función cuando la app se monte
    }
});

app.mount('#app'); // Montar la instancia de Vue en el div con id="app"

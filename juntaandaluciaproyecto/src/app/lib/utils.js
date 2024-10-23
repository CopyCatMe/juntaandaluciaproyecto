
const menu = [
    {
        title: "1.- Información general: convalidaciones, exenciones y títulos",
        children: [
            {
                title: "1.1.- Convalidaciones en FP",
                children: [
                    { title: "1.1.1.- ¿Qué necesito para poder convalidar?" },
                    { title: "1.1.2.- ¿Qué estudios puedo alegar?" },
                ]
            },
            {
                title: "1.2.- ¿Dónde encontrar qué módulos son convalidables?",
                children: [
                    { title: "1.2.1.- Condiciones para convalidar FOL" },
                    { title: "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora" },
                    { title: "1.2.3.- Condiciones para convalidar Inglés" },
                    { title: "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera" },
                    { title: "1.2.5.- Condiciones para convalidar las Horas de Libre Configuración" },
                    { title: "1.2.6.- Condiciones para convalidar el módulo de Proyecto" },
                    { title: "1.2.7.- Exención de la FCT" },
                ]
            },
            { title: "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?" },
            { title: "1.4.- ¿Qué organismo resuelve las convalidaciones?" },
            { title: "1.5.- ¿Qué documentación debo enviar al centro?" },
            { title: "1.6.- ¿Cómo conseguir el programa de una asignatura universitaria?" },
            { title: "1.7.- ¿Cómo saber si me convalidarán un módulo si he alegado estudios universitarios?" },
            { title: "1.8.- ¿Cuándo tendré noticias sobre si se ha aprobado la convalidación?" },
            { title: "1.9.- ¿Qué efectos tendrá la convalidación en mi expediente?" },
            { title: "1.10.- Enlaces relacionados" },
        ],
    },
    {
        title: "2.- Solicitud del título",
        children: [
            { title: "2.1.- Solicitud" },
            { title: "2.2.- Tramitación y recogida" },
        ],
    },
    { title: "Historial de versiones" },
];

function slug(texto) {
    return texto
        .toLowerCase()
        .replace(/[:,¿?]/g, "")
        .replace("- ", "")
        .replace(/[. ]/g, '_')
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export { menu, slug }
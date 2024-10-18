import Link from "next/link";

const menu = [
    "Información general: convalidaciones, exenciones y títulos",
    "1.- Solicitud de convalidaciones",
    "1.1.- Convalidaciones en FP",
    "1.1.1.- ¿Qué necesito para poder convalidar?",
    "1.1.2.- ¿Qué estudios puedo alegar?",
    "1.2.- ¿Dónde encontrar qué módulos son convalidables?",
    "1.2.1-. Condiciones para convalidar FOL",
    "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora",
    "1.2.3.- Condiciones para convalidar Inglés",
    "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera",
    "1.2.5.- Condiciones para convalidar las Horas de Libre Configuración",
    "1.2.6.- Condiciones para convalidar el módulo de Proyecto",
    "1.2.7.- Exención de la FCT",
    "1.3.- ¿Puedo convalidar un módulo acreditando experiencia laboral?",
    "1.4.- ¿Qué organismo resuelve las convalidaciones?",
    "1.5.- ¿Qué documentación debo enviar al centro?",
    "1.6.- ¿Cómo conseguir el programa de una asignatura universitaria?",
    "1.7.- ¿Cómo saber si me convalidarán un módulo si he alegado estudios universitarios?",
    "1.8.- ¿Cuándo tendré noticias sobre si se ha aprobado la convalidación?",
    "1.9.- ¿Qué efectos tendrá la convalidación en mi expediente?",
    "1.10.- Enlaces relacionados",
    "2.- Solicitud del título",
    "2.1.- Solicitud",
    "2.2.- Tramitación y recogida",
    "Historial de versiones"
]

function slug(texto) {
    return (texto.toLowerCase()
        .replace(/[:,¿?]/g, "")
        .replace("- ", "")
        .replace(/[. ]/g, '_')
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    )
}

const classLink = "block bg-blue-50 mb-1 rounded-2xl"

function MenuPrincipal() {
    return (
        <nav className="bg-blue-500 p-4 text-white">
            <details className="rounded-2xl shadow-lg p-2">
                <summary className="font-bold">Menu</summary>
                <ul className="divide-y divide-gray-300">
                    {menu.map((item, index) => (
                        <li key={index} className="py-2">
                            <Link href={slug(item)} className="block hover:bg-blue-700 rounded-2xl">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </details>
        </nav>
    );

}

export default MenuPrincipal;

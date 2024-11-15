<<<<<<< HEAD
import Image from "next/image";

export const metadata = {
  title: "Junta de Andalucia",
=======
import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "Historial de versiones",
>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a
  description: "Creado por CopyCatMe",
};

export default function Home() {
  return (
<<<<<<< HEAD
    <div>
      <h1 className="text-3xl font-bold underline text-center text-blue-500 py-10 text-5xl font-bold"> 
      Pagina Principal
      </h1>
=======
    <div className="mx-auto px-4 lg:w-11/12">
      <Titulo>  {metadata.title} </Titulo>
      <p className="mb-4 text-justify">
        <b>5.0 Actualización de enlaces en apartados 1.2, 1.27, 1.4, 1.5, 1.7, 1.10, 2.1 y 2.2. Actualización de texto en apartados: Introducción, 1.1, 1.1.1, 1.1.2, 1.2, 1.2.1, 1.2.2, 1.2.3, 1.2.4, 1.2.7 (antiguo 1.2.6), 1.3, 1.4, 1.5, 1.7, 1.9, 2.1 y 2.2. Inclusión del apartado 1.2.6 que desplaza el antiguo a 1.2.7. Eliminación del apartado 1.8.1 (3/03/2022).</b>
      </p>
      <p className="mb-4 text-justify">
        4.0 Actualización de enlaces en apartados 1.1.2, 1.5 y 1.10 (11/09/2020).
      </p>
      <p className="mb-4 text-justify">
        3.2. Modificación en el apartado 1.1. del plazo para recoger las solicitudes de convalidación. Revisión y restauración de enlaces (18/09/2019).
      </p>
      <p className="mb-4 text-justify">
        3.1. Modificación párrafo en apartado &quot;2.1 Solicitud&quot;, para la entrega al centro del modelo 046 (25/01/2019).
      </p>
      <p className="mb-4 text-justify">
        3.0. Actualización del apartado &quot;Convalidaciones en FP&quot; ampliando la información al respecto en nuevos sub-apartados (10/10/2018).
      </p>
      <p className="mb-4 text-justify">
        2.0. Actualización de apartado &quot;Solicitud del título&quot; y su demostración. Creación de una primera sección sobre las convalidaciones (12/06/2017).
      </p>
      <p className="mb-4 text-justify">
        1.0. Versión inicial (16/04/2015).
      </p>
>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a
    </div>
  );
}

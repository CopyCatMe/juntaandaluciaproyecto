import Titulo from "@/components/titulo";
import Image from "next/image";


export const metadata = {
  title: "1.- Solicitud de convalidaciones"
};

export default function Home() {
  return (

    <div className="mx-auto px-4 lg:w-11/12">
      <Titulo>  {metadata.title} </Titulo>
      <div className=" px-4 bg-blue-200 p-10 rounded-3xl shadow-[9px_10px_2px_0px_#E4E5E4] my-10 text-black text-justify">

        <p className=" mx-4 text-justify">
        Aquí encontrarás información acerca de cómo solicitar la convalidación de un módulo profesional y la exención del módulo de Formación en Centros de Trabajo.
        </p>

        <Image className="py-5 mx-auto"
          src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/scales-308063_1280.png"
          width={150}
          height={100}
          alt=""
        />
      </div>
    </div>
  );
}
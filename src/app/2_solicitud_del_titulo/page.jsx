<<<<<<< HEAD
import Image from "next/image";

export const metadata = {
  title: "Junta de Andalucia",
  description: "Creado por CopyCatMe",
=======
import Titulo from "@/components/titulo";
import Image from "next/image";


export const metadata = {
  title: "2.- Solicitud del título"
>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a
};

export default function Home() {
  return (
<<<<<<< HEAD
    <div>
      <h1 className="text-3xl font-bold underline text-center text-blue-500 py-10 text-5xl font-bold"> 
      Pagina Principal
      </h1>
    </div>
  );
}
=======

    <div className=" mx-auto px-4 lg:w-11/12">
      <Titulo>  {metadata.title} </Titulo>
      <div className=" px-4 bg-blue-200 p-10 rounded-3xl shadow-[9px_10px_2px_0px_#E4E5E4] my-10 text-black text-justify">

        <p className=" mx-4 text-justify">
        Aquí encontrarás los pasos a seguir para solicitar el título del ciclo una vez hayas superado todos los módulos formativos que lo conforman.
        </p>

        <Image className="py-5 mx-auto"
          src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/certificate-575526_640.png"
          width={250}
          height={100}
          alt=""
        />
      </div>
    </div>
  );
}
>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a

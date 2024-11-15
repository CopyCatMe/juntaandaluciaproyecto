import Titulo from "@/components/titulo";
import Image from "next/image";


export const metadata = {
  title: "2.- Solicitud del título"
};

export default function Home() {
  return (

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
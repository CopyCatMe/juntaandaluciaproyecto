import Image from "next/image";
import Titulo from "@/components/titulo";
import ItemLista from "@/components/item-lista";

export const metadata = {
  title: "2.2.- Tramitación y recogida",
  description: "Creado por CopyCatMe",
};

export default function Home() {
  return (
    <div className="mx-auto px-4 lg:w-11/12">
      <Titulo>  {metadata.title} </Titulo>

      <div className="flex flex-col gap-4">
        <p>
          Cuando el centro en el que pides el título reciba la documentación, te devolverá el resguardo indicando que el título se encuentra en trámite. Resguardo que deberás guardar junto con el ejemplar para el interesado del impreso 046 hasta la llegada del título. Este puede tardar varios años en llegar al centro, será entonces cuando se te comunicará por correo que ya puedes recogerlo (también podrás recibirlo a través de las Delegaciones Territoriales).
        </p>

        <Image className="py-5 mx-auto float-right mr-5 mt-2 mb-5 block"
        src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/Happy-Girl-.png"
        width={200}
        height={100}
        alt=""
      />

        <div className="p-10 rounded-2xl shadow-[9px_10px_2px_0px_#E4E5E4] text-black bg-blue-200">
          <p>
            Puedes encontrar más información al respecto:
          </p>

          <ItemLista>
            <a href="http://www.juntadeandalucia.es/boja/1996/67/50" target="_blank"  className="text-blue-500 hover:text-blue-700 border-b border-blue-500 mt-4">
              <spa >En el artículo 7 de la ORDEN de 21 de mayo de 1996, por la que se regulan el procedimiento de expedición y la organización y funcionamiento del Registro de los títulos académicos y profesionales correspondientes a las enseñanzas establecidas por la Ley Orgánica 1/1990, de 3 de octubre, de Ordenación General del Sistema Educativo</spa>
            </a>
          </ItemLista>
          <ItemLista>
            <a href="https://www.boe.es/buscar/doc.php?id=BOE-A-2020-342" target="_blank" className="text-blue-500 hover:text-blue-700 border-b border-blue-500">
              <spa >En el Real Decreto 172/2020, de 29 de diciembre, por el que se modifica el Real Decreto 1850/2009, de 4 de diciembre, sobre expedición de títulos académicos y profesionales correspondientes a las enseñanzas establecidas por la Ley Orgánica 2/2006, de 3 de mayo, de Educación, para fijar el formato, el contenido y el soporte documental del Suplemento Europeo al Título de las Enseñanzas Artísticas.</spa>
            </a>
          </ItemLista>
        </div>
      </div>
    </div>
  );
}

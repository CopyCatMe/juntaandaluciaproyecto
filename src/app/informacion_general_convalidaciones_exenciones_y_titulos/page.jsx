import Titulo from "@/components/titulo";
import Image from "next/image";


export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos"
};

export default function Home() {
  return (
    <div className="w-full mx-auto px-4 lg:w-10/12">
      <Titulo>  {metadata.title} </Titulo>
      <p className=" mb-4 text-justify">
        Antes de empezar debemos aclarar la diferencia entre convalidación, exención y traslado de calificación. La convalidación es el procedimiento por el cual se reconoce como superado un módulo que contiene los contenidos del módulo, módulos profesionales, asignatura o unidad de competencia que se aporta. La exención solo se aplica al módulo profesional de formación en centros de trabajo y se debe aportar una experiencia profesional acreditable y de duración definida. El traslado de calificaciones es la calificación que se asigna a un módulo que posee el mismo código y denominación que otro ya cursado y superado.
      </p>
      <p className="mb-4 text-justify">
        A continuación, se muestra información tutorial que esperamos que te sea de utilidad.
      </p>

      <Image className="py-5 mx-auto float-right mr-5 mt-2 mb-5 block" 
        src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/tutor-and-student.png"
        width={120}
        height={100}
        alt="" 
      />
     
      <table class="border border-gray-200 bg-white border-collapse mt-10 mb-9">
        <tbody>
          <tr class="text-gray-800 text-sm leading-tight m-1 ">
            <th class="bg-blue-200 py-3 px-6 text-left font-bold border border-gray-200">Elaborado por:</th>
            <td class="py-3 px-6 hover:bg-blue-200 border border-gray-200">Dirección General de Formación Profesional</td>
          </tr>
          <tr class="text-gray-800 text-sm leading-tight m-1 ">
            <th class="bg-blue-200 py-3 px-6 text-left font-bold border border-gray-200">Versión:</th>
            <td class="py-3 px-6 hover:bg-blue-200 border border-gray-200">5</td>
          </tr>
          <tr class="text-gray-800 text-sm leading-tight m-1 ">
            <th class="bg-blue-200 py-3 px-6 text-left font-bold border border-gray-200">Fecha de publicación:</th>
            <td class="py-3 px-6 hover:bg-blue-200 border border-gray-200">3/03/2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
import Titulo from "@/components/titulo";
<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a


export const metadata = {
  title: "Información general: convalidaciones, exenciones y títulos"
};

export default function Home() {
  return (
<<<<<<< HEAD
    <>
      <div className="w-full mx-auto px-4 lg:w-9/12">
        <Titulo>  {metadata.title} </Titulo>
        <p className="mb-4">
          Antes de empezar debemos aclarar la diferencia entre convalidación, exención y traslado de calificación. La convalidación es el procedimiento por el cual se reconoce como superado un módulo que contiene los contenidos del módulo, módulos profesionales, asignatura o unidad de competencia que se aporta. La exención solo se aplica al módulo profesional de formación en centros de trabajo y se debe aportar una experiencia profesional acreditable y de duración definida. El traslado de calificaciones es la calificación que se asigna a un módulo que posee el mismo código y denominación que otro ya cursado y superado.
        </p>
        <p className="mb-4">
          A continuación, se muestra información tutorial que esperamos que te sea de utilidad.
        </p>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Estándares para</th>
              <th className="py-3 px-6 text-left">Versión</th>
              <th className="py-3 px-6 text-left">Dirección de Formación Profesional</th>
              <th className="py-3 px-6 text-left">Fecha de publicación</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6"></td>
              <td className="py-3 px-6">5</td>
              <td className="py-3 px-6">Dirección General de Formación Profesional</td>
              <td className="py-3 px-6">3/03/2022</td>
=======
    <div className="mx-auto px-4 lg:w-11/12">
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

      <table className="w-[100%] lg:w-[80%] self-center border-separate text-black">
          <tbody>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">Elaborado por:</th>
              <td className="border-2 border-blue-200 p-4 bg-white hover:bg-blue-200 transition-colors duration-200">Dirección General de Formación Profesional</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">Versión:</th>
              <td className="border-2 border-blue-200 p-4 bg-white hover:bg-blue-200 transition-colors duration-200">5</td>
            </tr>
            <tr>
              <th className="border-2 border-blue-200 p-4 text-center bg-blue-200">Fecha de publicación:</th>
              <td className="border-2 border-blue-200 p-4 bg-blue-200 bg-white hover:bg-blue-200 transition-colors duration-200">3/03/2022</td>
>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a
            </tr>
          </tbody>
        </table>
      </div>
<<<<<<< HEAD
    </>
=======
>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a
  );
}
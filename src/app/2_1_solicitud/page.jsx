import Image from "next/image";
<<<<<<< HEAD

export const metadata = {
  title: "Junta de Andalucia",
=======
import Titulo from "@/components/titulo";
import ItemLista from "@/components/item-lista";


export const metadata = {
  title: "2.1.- Solicitud",
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

      <div className="flex flex-col gap-4">
        <p>
          Para solicitar el título <spa className="font-bold">deberás dirigirte al Centro docente donde finalizaste los estudios</spa> conducentes a la obtención del título solicitado. Debe ser solicitados por los alumnos, previo pago de las tasas correspondientes.
        </p>

        <p>
          Debes cumplimentar e imprimir el modelo 046 de autoliquidación de tasas de la Junta de Andalucía disponible en el siguiente enlace: Modelo 046. En el apartado OBLIGADO AL PAGO, se deben cumplimentar los datos personales y de domiciliación del solicitante. En el apartado DATOS GENERALES, se debe marcar la casilla AUTOLIQUIDACIÓN. En el cuadro de texto situado debajo se indica el título que se solicita. Se escribirá la fecha en la que se va a realizar y la liquidación. En el código territorial pueden utilizarse los desplegables y seleccionar en código órgano territorial CONSEJERÍA DE EDUCACIÓN Y DEPORTE, en   Código provincia, la provincia donde se localice el centro y en Código centro, seleccionamos el centro donde superé el último módulo. En concepto de pago se indicará el código 0049 o bien se utilizará el desplegable y se seleccionará TASA POR EXPEDICIÓN DE TÍTULOS ACADÉMICOS Y PROFESIONALES.

        </p>

        <p>
          Se valida el documento, y nos da la opción de imprimirlo para presentarlo en la entidad bancaria y pagar o bien realizar el pago telemático. El pago telemático requiere tener certificado digital.
        </p>

        <p>
          El resto del documento será impreso mecánicamente por la entidad bancaria en el momento de realizar el ingreso si se opta por la impresión y presentación en la oficina bancaria.
        </p>

        <p>
          Una vez realizado el pago, la entidad bancaria se queda con una de las copias del modelo (el talón de cargo); le entregará al solicitante el ejemplar para el interesado y el ejemplar para la Administración. El ejemplar para la Administración se lo quedará el centro docente.  El ejemplar para el interesado se lo devolverá el centro sellado,  sirviéndole de resguardo de solicitud.
        </p>

        <p>
          Se remitirá al centro docente por correo postal (preferiblemente certificado con acuse de recibo) la siguiente documentación:
        </p>

        <ItemLista>
          <spa className="font-bold">Fotocopia DNI por ambas caras.</spa>
        </ItemLista>
        <ItemLista>
          <spa className="font-bold">Impreso de solicitud cumplimentado</spa>. Descargar impreso de solicitud (27155 B)
        </ItemLista>
        <ItemLista>
          <spa className="font-bold">Impreso 046 </spa> (se debe enviar el ejemplar para la administración y también el ejemplar para el interesado, que se devolverá sellado por el centro como resguardo del título).
        </ItemLista>

        <div className="p-10 rounded-3xl shadow-[9px_10px_2px_0px_#E4E5E4] text-black bg-blue-200">
          <p>
            Si deseas recibir la certificación académica con todas las calificaciones obtenidas en el ciclo, has de comunicarlo cuando envíes todos los documentos al centro.
          </p>

          <p>
            Ten en cuenta que la cantidad a ingresar la indica la Ley de Presupuesto de la Comunidad Autónoma de Andalucía que esté en vigor. Pregunta a tu tutor/a el importe que has de abonar teniendo en cuenta que los decimales has de escribirlos empleando la coma.
          </p>
        </div>
      </div>
>>>>>>> a006c7dfdb5dc8d911a809511cc598b7c4401f6a
    </div>
  );
}

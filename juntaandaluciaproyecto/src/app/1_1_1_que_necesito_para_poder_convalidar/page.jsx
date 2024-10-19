import Titulo from "@/components/titulo";
import Image from "next/image";

export const metadata = {
  title: "Junta de Andalucia",
  description: "Creado por CopyCatMe",
};

export default function Home() {
  return (
    <div>
      <Titulo>¿Que necesito para poder convalidar?</Titulo>
    </div>
  );
}

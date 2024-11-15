import { Check, ArrowBigRight } from "lucide-react";

function ItemLista({ children, interior = false }) {
    return (
        <div className="flex mt-3">
            {interior
                ? <ArrowBigRight className="ml-16 mr-2 text-green-500 size-4 shrink-0"/>
                : <Check className="ml-10 mr-2 text-green-500 size-4 shrink-0" />
            }
            <div>{children}</div>
        </div>
    );
}

export default ItemLista;
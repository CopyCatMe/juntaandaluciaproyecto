import Link from "next/link";
import { menu, slug } from '../app/lib/utils.js';
import { ArrowLeft, ArrowRight } from "lucide-react";

function Nav({ pos }) {
    return (
        <div className="mt-4 mb-8 text-right">            
            {pos > 0 &&
                <Link className="px-6 py-3 text-blue-800 bg-blue-100 hover:bg-[#C3DCF7] rounded-l-full" href={slug(menu[pos - 1])}>  <ArrowLeft className="inline size-4"/> Anterior </Link>
            }
            {pos < menu.length - 1 &&
                <Link className="ml-1 px-6 py-3 text-blue-800 bg-blue-100 hover:bg-[#C3DCF7] rounded-r-full" href={slug(menu[pos + 1])}> Siguiente <ArrowRight className="inline size-4"/> </Link>
            }
        </div>
    );
}

export default Nav
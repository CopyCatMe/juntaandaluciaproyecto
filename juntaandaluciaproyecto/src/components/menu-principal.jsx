import Link from "next/link";
import { menu, slug } from '../app/lib/utils.js';


const menuPrincipalClasses = " p-4 rounded-lg shadow-lg text-white max-w-md mx-auto my-6 ";
const detailsClasses = "bg-blue-100 text-blue-900 p-3 rounded-lg shadow-md mb-2 cursor-pointer transition-all ";
const summaryClasses = "font-bold cursor-pointer flex justify-between items-center hover:text-blue-600 transition-all  ";
const ulClasses = "divide-y divide-gray-300 bg-white rounded-lg shadow-lg mt-2 ";
const liClasses = "py-2 px-3 hover:bg-gray-100 transition-all ";
const linkClasses = "block text-blue-600 hover:text-blue-800 transition-all ";

function renderMenuItems(items) {
    return (
        <ul className={ulClasses}>
            {items.map((item, index) => (
                <li key={index} className={liClasses}>
                    {item.children ? (
                        <details className="group">
                            <summary className={summaryClasses}>
                                <Link href={`/${slug(item.title)}`} className={linkClasses}>
                                    {item.title}
                                </Link>
                                <span className="text-xs text-gray-500 group-open:rotate-180 transition-transform">
                                    ▼
                                </span>
                            </summary>
                            {renderMenuItems(item.children)}
                        </details>
                    ) : (
                        <Link href={`/${slug(item.title)}`} className={linkClasses}>
                            {item.title}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
}

function MenuPrincipal() {
    return (
        <nav className={menuPrincipalClasses}>
            <details open className={detailsClasses}>
                <summary className={summaryClasses}>
                    Menú principal
                    <span className="text-xs text-gray-500 transition-transform group-open:rotate-180 ">▼</span>
                </summary>
                {renderMenuItems(menu)}
            </details>
        </nav>
    );
}

export default MenuPrincipal;


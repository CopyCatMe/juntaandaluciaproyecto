'use client';
import Link from "next/link";
import { menu, slug } from '../app/lib/utils.js';
import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const menuPrincipalClasses = "p-4 text-s text-white h-screen lg:fixed lg:top-0 lg:left-0 transition-transform duration-500 ease-in-out transform-gpu";
const detailsClasses = "text-blue-900 p-3 rounded-lg mb-2 cursor-pointer";
const summaryClasses = "font-bold cursor-pointer flex items-center";
const ulClasses = "divide-y divide-gray-300 bg-white rounded-lg shadow-lg mt-2 transition-opacity duration-500 ease-in-out";
const liClasses = "py-3 px-4 hover:bg-gray-100 transition-all duration-500 transform";
const linkClasses = "block text-blue-600 hover:text-blue-800 flex items-center whitespace-normal break-words transition-colors duration-300";

function renderMenuItems(items, menuOpen) {
    return (
        <ul className={`${ulClasses} ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`${liClasses} ${menuOpen ? 'opacity-100 scale-y-100 h-auto' : 'opacity-0 scale-y-0 h-0'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}  // Incremento de retardo
                >
                    {item.children ? (
                        <details className="group">
                            <summary className={summaryClasses}>
                                <span className="flex items-center">
                                    <Link href={`/${slug(item.title)}`} className={linkClasses}>
                                        {item.title}
                                    </Link>
                                    <ChevronDownIcon className="h-4 w-4 text-gray-500 ml-2 group-open:hidden transition-transform duration-300" />
                                    <ChevronUpIcon className="h-4 w-4 text-gray-500 ml-2 hidden group-open:block transition-transform duration-300" />
                                </span>
                            </summary>
                            <div className="transition-all duration-500 ease-in-out ml-4">
                                {renderMenuItems(item.children, menuOpen)}
                            </div>
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
    const [scrolling, setScrolling] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollThreshold = 100;

            if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
                setScrolling(true);
                setMenuOpen(false);
            } else {
                setScrolling(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <aside
            className={`${menuOpen ? "shrink-0 lg:w-1/4 w-full lg:max-w-[360px] overflow-y-auto" : ""}`}
            style={{ height: '50%' }}
        >
            <nav
                className={`${menuPrincipalClasses} ${scrolling ? 'transform -translate-x-full opacity-0' : 'opacity-100'} md:transform-none md:h-auto w-full lg:overflow-y-auto`}
                style={{
                    maxHeight: windowWidth >= 1024 ? '100vh' : 'auto',
                    maxWidth: menuOpen
                        ? `${windowWidth >= 1024 ? '360px' : '100%'}` 
                        : `${windowWidth >= 1024 ? '360px' : '100%'}`,
                }}
            >
                <button
                    className="p-4 flex w-full justify-between items-center transition-all duration-300"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ?
                        <XMarkIcon className="h-6 w-6 hamburguesa-icon transform transition-transform duration-300 rotate-180" /> :
                        <Bars3Icon className="h-6 w-6 hamburguesa-icon transform transition-transform duration-300 rotate-0" />
                    }
                </button>

                <div className={`transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} lg:opacity-100 lg:translate-x-0`}>
                    <details open={menuOpen} className={detailsClasses}>
                        <summary className={summaryClasses}></summary>
                        {renderMenuItems(menu, menuOpen)}
                    </details>
                </div>
            </nav>
        </aside>
    );
}

export default MenuPrincipal;

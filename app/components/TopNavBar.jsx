'use client'
import Link from 'next/link';

export default function TopNavBar() {
  return (
    <nav className="bg-amber-400 shadow-lg z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div>
            <Link href="/">
              <img className="max-h-14 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="flex">
            <Link href="/" className="text-gray-900 hover:text-gray-700 px-3 py-2">
              Home
            </Link>
            <Link href="/services" className="text-gray-900 hover:text-gray-700 px-3 py-2">
              Servicios
            </Link>
            <Link href="/about"className="text-gray-900 hover:text-gray-700 px-3 py-2">
              Acerca de
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-700 px-3 py-2">
              Contacto
            </Link>
            <Link href="/clients" className="text-gray-900 hover:text-gray-700 px-3 py-2 font-bold">
              Clientes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


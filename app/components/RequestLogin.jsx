import Link from "next/link"
export default function RequestLogin() {
    return( 
<div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
          <h2 className="text-xl font-medium mb-2">Atención</h2>
          <p className="text-gray-700">Para acceder a este contenido, debes iniciar sesión.</p>
          <Link href="/clients">
            <button className="mt-4 bg-amber-300 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none">
              Iniciar sesión
            </button>
          </Link>
        </div>
)}
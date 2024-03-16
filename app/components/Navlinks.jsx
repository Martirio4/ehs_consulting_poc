'use client'
import {
    PaperClipIcon,
    HomeIcon,
    DocumentCheckIcon,
    GlobeAltIcon
  } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Mis Archivos', href: '/clients/files', icon: PaperClipIcon  },
  { name: 'Mis Capacitaciones', href: '/clients/tests', icon: DocumentCheckIcon },
  { name: 'inicio', href: '/clients', icon:HomeIcon  },
  { name: 'Volver', href: '/', icon:GlobeAltIcon  },
  
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
          
        );
      })}
    </>
  );
}

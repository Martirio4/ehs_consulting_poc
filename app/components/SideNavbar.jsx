'use client'
import Link from 'next/link';
import NavLinks from '../components/NavLinks';
import AcmeLogo from '../components/AcmeLogo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import firebaseApp from '../firebase'; // Import the initialized Firebase app

export default function SideNav() {
  const router = useRouter();

  function confirm(message) {
    return window.confirm(message); // Replace with your preferred dialog implementation
  }

  const handleLogout = async () => {
    if (confirm('Are you sure you want to log out?')) {
      await signOut(getAuth(firebaseApp)); // Replace with your Firebase app initialization
      router.push('/'); // Replace with your login route
    }
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-amber-50">
      <Link href="/clients" className="mb-2 flex h-20 items-center justify-start rounded-md bg-amber-300 p-4 md:h-40">
        <div className="w-32 text-slate-500 md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex-grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full flex-grow rounded-md bg-gray-50 md:block"></div>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3" onClick={handleLogout}>
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
    </div>
  );
}



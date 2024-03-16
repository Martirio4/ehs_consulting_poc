'use client'
import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from 'firebase/auth';
import Link from 'next/link'; // Import Link from next/link
import firebaseApp from '../../firebase'; // Import the initialized Firebase app
import FileCard from '../../components/FileCard';
import RequestLogin from '../../components/RequestLogin'

export default function ClientsPage() {
  const [content, setContent] = useState([]);
  const db = getDatabase(firebaseApp);
  const dbRef = ref(db, '/archivos');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      }; // Update user state on auth state change
    });
    return () => unsubscribe(); // Cleanup function to remove event listener
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await onValue(dbRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const contentArray = Object.entries(data).map(([id, values]) => ({
              id,
              ...values,
            }));
            setContent(contentArray);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 relative">
      {user && (
        <>
        <div className="flex flex-row items-center bg-slate-300 rounded-lg shadow-md p-4 mb-1 w-[80vw]">
          <h2 className="flex-1 text-xl font-semibold mb-2 flex items-center justify-center">Nombre</h2>
          <p className="flex-1 text-gray-700 mb-2 flex items-center justify-center">Descripcion</p>
          <p className="flex-1 text-gray-700 mb-2 flex items-center justify-center">Fecha subido</p>
          <p className="flex-1 text-gray-700 mb-2 flex items-center justify-center">Codigo archivo</p>
          <p className="flex-1 max-w-16" src="/dw-icon.png" />
        </div>

        {content.map((item) => (
          <FileCard key={item.id} {...item} /> // Render ContentCard component with props
        ))}

        {/* Home Button */}
        <Link href="/" className="absolute bottom-8 right-8 bg-slate-800 rounded-full shadow-md text-white hover:bg-slate-500">
          <img src="/homeicon.png" alt="Home" className="w-16 h-16" />
        </Link>
      </>)}
      {!user &&
        <RequestLogin/>
      }
    </main>
  );
}

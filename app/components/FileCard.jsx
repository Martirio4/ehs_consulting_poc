'use client'
import React, { useState } from 'react';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export default function FileCard({ id, description, fecha, filename }) {
  const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url) {
      setLoading(true);
      try {
        const storage = getStorage();
        const fileRef = ref(storage, `/${filename}`);
        const downloadUrl = await getDownloadURL(fileRef);
        setUrl(downloadUrl);
        window.open(downloadUrl, '_blank');
      } catch (error) {
        console.error('Error getting download URL:', error);
      } finally {
        setLoading(false);
      }
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="flex flex-row items-center bg-white rounded-lg shadow-md p-4 mb-1 w-[80vw]">
      <h2 className="flex-1 text-xl font-semibold mb-2 flex items-center justify-center">{filename}</h2>
      <p className="flex-1 text-gray-700 mb-2 flex items-center justify-center">{description}</p>
      <p className="flex-1 text-gray-700 mb-2 flex items-center justify-center">{fecha}</p>
      <p className="flex-1 text-gray-700 mb-2 flex items-center justify-center">{id}</p>
      <button className="flex-1 max-w-16 cursor-pointer" onClick={handleDownload} disabled={loading}>
        <img src="/dw-icon.png" alt="Download" />
      </button>
      {/* Add more fields as needed */}
    </div>
  );
}







// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div className="md:col-span-2 flex justify-center md:justify-start items-center space-x-4">
            {/* Facebook Icon */}
            <a href="https://www.facebook.com/YourPage" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1.38-11.18h-1.06c-.45 0-.81.39-.81.84v1.06h1.88c-.06.52-.47.89-.97.89h-1.06v2.25h-1.88v-6.19h3.06c.57 0 1.03.46 1.03 1.03v.91c0 .57-.46 1.03-1.03 1.03z"/>
              </svg>
            </a>
            {/* Twitter Icon */}
            <a href="https://twitter.com/YourTwitter" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6.18c-.74.33-1.54.56-2.38.67a4.1 4.1 0 0 0 1.8-2.27c-.79.47-1.67.81-2.6 1a4.1 4.1 0 0 0-7 3.74c-3.42-.17-6.45-1.8-8.48-4.3-.36.62-.57 1.35-.57 2.12 0 1.47.75 2.77 1.89 3.53-.7 0-1.36-.2-1.93-.5v.06c0 2.05 1.45 3.77 3.37 4.16-.35.1-.72.15-1.1.15-.27 0-.53-.02-.78-.07.53 1.62 2.08 2.8 3.9 2.83-1.43 1.13-3.22 1.81-5.17 1.81-.34 0-.68-.02-1.01-.07 1.84 1.18 4.02 1.87 6.36 1.87 7.63 0 11.79-6.31 11.79-11.79v-.54c.82-.58 1.54-1.3 2.1-2.12z"/>
              </svg>
            </a>
            {/* Add more social media icons with appropriate SVG code */}
          </div>
          {/* Copyright */}
          <div className="md:text-right text-center text-gray-400">
            &copy; 2024 Your Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

  
  
  
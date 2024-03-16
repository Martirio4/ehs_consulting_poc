import SideNav from '../components/SideNavbar';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <h1 className='text-6xl text-slate-600'>Seguridad</h1>
        <p className='text-xl text-amber-600 mt-3'>al alcance de tus manos</p>
        {children}
      </div>
    </div>
  );
}

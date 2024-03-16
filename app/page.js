import TopNavBar from ".//components/TopNavBar"
import ServiceCard from ".//components/ServiceCard"
import FooterEhs from ".//components/FooterEhs"
import ContactUsSection from "./components/ContactUs";

export default function Home() {
  return (
    <main>
   <div className="flex justify-center">
    <img
      src="/seguridad.png"
      alt="Vercel Logo"
      className="max-w-full h-full"
    />
</div>
      
     <header className="sticky top-0 z-10">
      <TopNavBar/>
     </header>
     <section className="servicios-container flex flex-col flex-wrap justify-center bg-slate-200 p-12">
      <h1 className="text-5xl text-bermuda font-extrabold">TE OFRECEMOS</h1>
      <div className="flex flex-row flex-wrap justify-center">     
      <ServiceCard title="Analisis" description="asdjk akjndkjan asks akjansdjakn kkj nakjsndkanskjdnakj akjankdjanskjdnasd" imageUrl="/icons8-group-task-64.png"/>
      <ServiceCard title="Auditorias" description="asdjk akjndkjan asks akjansdjakn kkj nakjsndkanskjdnakj akjankdjanskjdnasd" imageUrl="/icons8-contact-us-64.png"/>
      <ServiceCard title="Capácitaciones" description="asdjk akjndkjan asks akjansdjakn kkj nakjsndkanskjdnakj akjankdjanskjdnasd" imageUrl="/icons8-customer-insight-64.png"/>
      <ServiceCard title="Presupuestos" description="asdjk akjndkjan asks akjansdjakn kkj nakjsndkanskjdnakj akjankdjanskjdnasd" imageUrl="/icons8-group-task-64.png"/>
      <ServiceCard title="Gestion" description="asdjk akjndkjan asks akjansdjakn kkj nakjsndkanskjdnakj akjankdjanskjdnasd" imageUrl="/icons8-weak-financial-growth-64.png"/>
      </div>
     </section>
     
     <section className="flex flex-col flex-wrap  items-center bg p-7 bg-[url('/sunset.png')]">
     <div className="flex  flex-grow flex-col items-center bg-slate-200 rounded-lg w-1/3 overflow-hidden shadow-lg min-w-[40vw] mt-6 mb-6 ms-12 me-12">
        <div className="p-6">
          <h2 className=" text-bermuda text-6xl font-bold mb-2 text-center">cosas</h2>
          <p className="text-center">t bibendum viverra risus, nec cursus nunc egestas a. In aliquam augue eget arcu bibendum, non semper orci bibendum. Donec eget velit eleifend, ultrices nisi eu, dignissim turpis. Curabitur id elit lacus. Phasellus porttitor urna quis justo venenatis, sed sagittis sem dictum. Integer placerat purus et augue suscipit, luctus mattis sem condimentum. Mauris molestie enim non metus dapibus vehicula sed a sem. Aenean vitae enim vel mi malesuada lacinia. Etiam auctor lacinia tellus ut dignissim. Proin commodo mollis lectus ac maximus. Nunc nec ultrices diam. Suspendisse quis mi nec magna commodo consectetur non </p>
        </div>
      </div>
      <button
            type="submit"
            className="flex-grow w-96 h-20 rounded-md bg-amber-600 py-2 text-center text-white font-medium hover:bg-amber-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            + cosas
          </button>
          
     </section>
     <section >
      <ContactUsSection/>
     </section>
     <footer>
      <FooterEhs/>
     </footer>
    </main>
  );
}

// components/ContactUsSection.js

export default function ContactUsSection ()  {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-6xl font-semibold mb-4 text-bermuda">Contactanos!</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Nombre</label>
                <input type="text" id="name" name="name" className="form-input w-full mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="form-input w-full mt-1" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700">Asunto</label>
                <input type="text" id="subject" name="subject" className="form-input w-full mt-1" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Mensaje</label>
                <textarea id="message" name="message" rows="4" className="form-textarea w-full mt-1"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Enviar</button>
            </form>
          </div>
          {/* Map */}
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.656548124725!2d-73.99760948479271!3d40.72003317933173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f0c526c571%3A0x4f84c3d167165a52!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1631035293435!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            {/* Example: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.656548124725!2d-73.99760948479271!3d40.72003317933173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f0c526c571%3A0x4f84c3d167165a52!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1631035293435!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};



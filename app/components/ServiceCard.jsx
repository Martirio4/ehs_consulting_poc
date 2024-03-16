export default function Card  ({ title, description, imageUrl }) {
    return (
      <div className="flex flex-col items-center bg-gray-100 rounded-lg w-52 overflow-hidden shadow-lg transform transition-transform hover:scale-105 mt-6 mb-6 ms-12 me-12 hover:bg-amber-50">
        <img className="w-28 mt-5" src={imageUrl} alt={title} />
        <div className="p-6">
          <h2 className=" text-sky-950 text-xl font-bold mb-2 text-center">{title}</h2>
          <p className="text-center">{description}</p>
        </div>
      </div>
    );
  };
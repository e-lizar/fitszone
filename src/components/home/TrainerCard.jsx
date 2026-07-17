import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const PHONE_NUMBER = "254712345678";

const TrainerCard = ({ trainer }) => {
  const message = `Hello FitsZone! I'd like to book a session with ${trainer.name}.`;

  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">

      <img
        src={trainer.image}
        alt={trainer.name}
        className="w-full h-80 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {trainer.name}
        </h3>

        <p className="text-emerald-500 font-medium mt-2">
          {trainer.role}
        </p>

        <p className="text-gray-500 mt-2">
          Experience: {trainer.experience}
        </p>

        <div className="flex gap-4 mt-6 text-xl">

          <FaFacebookF className="cursor-pointer hover:text-blue-600" />

          <FaInstagram className="cursor-pointer hover:text-pink-500" />

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-green-500" />
          </a>

        </div>

      </div>

    </div>
  );
};

export default TrainerCard;
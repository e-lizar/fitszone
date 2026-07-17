import { motion } from "framer-motion";
import {
  FaAward,
  FaBriefcase,
  FaWhatsapp,
} from "react-icons/fa";

const PHONE_NUMBER = "254712345678"; // Replace with your WhatsApp number

const TrainerProfileCard = ({ trainer }) => {
  const message = `Hello FitsZone! I would like to book a session with ${trainer.name}. Can you provide more information?`;

  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl"
    >
      {/* Trainer Image */}
      <img
        src={`http://localhost:5000${trainer.image}`}
        alt={trainer.name}
        className="w-full h-80 object-cover"
      />

      {/* Trainer Details */}
      <div className="p-8">

        <h3 className="text-3xl font-bold">
          {trainer.name}
        </h3>

        <p className="text-emerald-500 font-semibold mt-2">
          {trainer.specialty}
        </p>

        <p className="text-gray-600 mt-5 leading-7">
          {trainer.description}
        </p>

        {/* Experience */}
        <div className="flex items-center gap-3 mt-6">
          <FaBriefcase className="text-emerald-500" />

          <span>
            <strong>Experience:</strong> {trainer.experience}
          </span>
        </div>

        {/* Certification */}
        <div className="flex items-center gap-3 mt-4">
          <FaAward className="text-emerald-500" />

          <span>
            <strong>Certification:</strong> {trainer.certification}
          </span>
        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center gap-3 bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600 transition"
        >
          <FaWhatsapp />

          Book via WhatsApp
        </a>

      </div>
    </motion.div>
  );
};

export default TrainerProfileCard;
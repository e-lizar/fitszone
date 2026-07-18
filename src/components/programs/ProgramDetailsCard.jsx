import { motion } from "framer-motion";
import {
  FaClock,
  FaSignal,
  FaCalendarAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { getImageUrl } from "../../utils/imageUrl";

const PHONE_NUMBER = "+77612345678"; // Replace with your WhatsApp number

const ProgramDetailsCard = ({ program }) => {
  const message = `Hello FitsZone! I'm interested in the ${program.title} program. Could you please provide more information?`;

  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl"
    >
      {/* Program Image */}
      <img
        src={getImageUrl(program.image)}
        alt={program.title}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-8">

        <h3 className="text-3xl font-bold">
          {program.title}
        </h3>

        <p className="text-gray-600 mt-4 leading-7">
          {program.description}
        </p>

        {/* Details */}
        <div className="space-y-4 mt-8">

          <div className="flex items-center gap-3">
            <FaSignal className="text-emerald-500" />
            <span>
              <strong>Level:</strong> {program.level}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaClock className="text-emerald-500" />
            <span>
              <strong>Duration:</strong> {program.duration}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-emerald-500" />
            <span>
              <strong>Schedule:</strong> {program.schedule}
            </span>
          </div>

        </div>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition w-full"
        >
          <FaWhatsapp />
          Join This Program
        </a>

      </div>
    </motion.div>
  );
};

export default ProgramDetailsCard;
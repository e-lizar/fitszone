import { motion } from "framer-motion";

const FacilityCard = ({ facility }) => {
  const Icon = facility.icon;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl"
    >
      <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
        <Icon className="text-emerald-500 text-4xl" />
      </div>

      <h3 className="text-2xl font-bold mt-6">
        {facility.title}
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
        {facility.description}
      </p>
    </motion.div>
  );
};

export default FacilityCard;
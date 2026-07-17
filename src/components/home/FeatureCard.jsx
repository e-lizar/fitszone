import { motion } from "framer-motion";

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg p-8 text-center"
    >
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
        <Icon className="text-emerald-500 text-3xl" />
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {feature.title}
      </h3>

      <p className="text-gray-600 leading-7">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
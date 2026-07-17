import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const MissionVision = () => {
  return (
    <section className="py-24 bg-gray-100">
      <Container>

        <SectionTitle
          subtitle="Mission & Vision"
          title="Driven by Purpose, Focused on Your Success"
          description="Everything we do at FitsZone is guided by our commitment to helping people become healthier, stronger, and more confident."
        />

        <div className="grid md:grid-cols-2 gap-10">

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <FaBullseye className="text-emerald-500 text-3xl" />
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8">
              Our mission is to empower people through fitness by providing
              professional coaching, modern facilities, personalized training,
              and a supportive environment where everyone can achieve their
              health and wellness goals.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <FaEye className="text-emerald-500 text-3xl" />
            </div>

            <h3 className="text-3xl font-bold mb-6">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8">
              We envision FitsZone becoming the leading fitness destination,
              inspiring communities to embrace healthier lifestyles while
              delivering world-class training experiences and lasting results.
            </p>
          </motion.div>

        </div>

      </Container>
    </section>
  );
};

export default MissionVision;
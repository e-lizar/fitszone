import { motion } from "framer-motion";

import Container from "../ui/Container";
import FeatureCard from "./FeatureCard";
import SectionTitle from "../common/SectionTitle";

import features from "../../data/features";

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gray-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            subtitle="Why Choose FitsZone"
            title="Everything You Need To Reach Your Fitness Goals"
            description="We combine professional coaching, modern facilities, and a supportive environment to help you become your best self."
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
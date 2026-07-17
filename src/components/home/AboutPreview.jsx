import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionTitle from "../common/SectionTitle";

import aboutImage from "../../assets/images/about.jpeg";

const AboutPreview = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImage}
              alt="About FitsZone"
              className="rounded-3xl shadow-xl w-full object-contain"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              subtitle="About FitsZone"
              title="More Than a Gym. We're a Fitness Community."
              description="At FitsZone, we believe fitness is a lifestyle. Our experienced trainers, modern equipment, and supportive environment help you achieve your goals whether you're just starting or pushing to the next level."
              center={false}
            />

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                <span>Certified Professional Trainers</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                <span>Modern Fitness Equipment</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                <span>Personalized Workout Programs</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-emerald-500" />
                <span>Nutrition & Wellness Support</span>
              </div>

            </div>

            <div className="mt-10">
                <Link to="/about">
                    <Button>
                        Learn More
                    </Button>
                </Link>
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;
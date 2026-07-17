import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaUsers,
  FaHeart,
  FaAward,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

import gymStory from "../../assets/images/gym-story.jpeg";

const values = [
  {
    icon: FaDumbbell,
    title: "Strength",
    description: "Helping every member become physically and mentally stronger.",
  },
  {
    icon: FaUsers,
    title: "Community",
    description: "A welcoming environment where everyone feels supported.",
  },
  {
    icon: FaHeart,
    title: "Wellness",
    description: "Fitness is about building healthy habits for life.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    description: "Professional coaching and outstanding service every day.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={gymStory}
              alt="FitsZone Gym"
              className="rounded-3xl shadow-xl w-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              subtitle="Who We Are"
              title="Building Stronger Bodies and Stronger Communities"
              description="FitsZone is more than a place to work out. We are a fitness community dedicated to helping people of all ages achieve healthier, happier lives through expert guidance and consistent support."
              center={false}
            />

            <div className="grid grid-cols-2 gap-6 mt-8">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
                  >
                    <Icon className="text-emerald-500 text-3xl mb-4" />

                    <h3 className="font-bold text-lg">
                      {value.title}
                    </h3>

                    <p className="text-gray-600 mt-2 text-sm leading-6">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre;
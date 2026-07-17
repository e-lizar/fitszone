import { motion } from "framer-motion";

import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

import journey from "../../data/journey";

const Journey = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          subtitle="Our Journey"
          title="Growing Stronger Every Year"
          description="Every milestone reflects our commitment to helping people achieve healthier and more confident lives."
        />

        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-emerald-500"></div>

          {journey.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative flex gap-8 mb-12"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Circle */}
              <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold z-10">
                {index + 1}
              </div>

              {/* Content */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-md flex-1 hover:shadow-xl transition">
                <span className="text-emerald-500 font-bold text-lg">
                  {item.year}
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-7">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default Journey;
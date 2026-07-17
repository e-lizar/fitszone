import { motion } from "framer-motion";
import Container from "../ui/Container";

const TrainersHero = () => {
  return (
    <section className="bg-gray-900 text-white py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="uppercase tracking-[5px] text-emerald-400 font-semibold">
            Meet Our Team
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Expert Trainers
            <br />
            Dedicated To Your Success
          </h1>

          <p className="mt-8 text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            Our certified fitness professionals are here to guide, motivate,
            and support you every step of your fitness journey.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default TrainersHero;
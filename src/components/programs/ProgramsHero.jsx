import { motion } from "framer-motion";
import Container from "../ui/Container";

const ProgramsHero = () => {
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
            Our Programs
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Find The Perfect
            <br />
            Fitness Program
          </h1>

          <p className="mt-8 text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            Whether you're beginning your fitness journey or preparing for your
            next challenge, FitsZone has a program designed for your goals.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default ProgramsHero;
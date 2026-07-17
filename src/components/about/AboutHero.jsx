import { motion } from "framer-motion";
import Container from "../ui/Container";

const AboutHero = () => {
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
            About FitsZone
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            More Than a Gym.
            <br />
            A Community Built For Success.
          </h1>

          <p className="mt-8 text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            We inspire people to live healthier, stronger, and more confident
            lives through expert coaching, modern facilities, and a supportive
            fitness community.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutHero;
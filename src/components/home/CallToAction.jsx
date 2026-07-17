import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import Container from "../ui/Container";

const PHONE_NUMBER = "254712345678"; // Replace with your WhatsApp number

const message =
  "Hello FitsZone! I'm interested in joining the gym. Please guide me through the registration process.";

const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
  message
)}`;

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Transform
            <br />
            Your Body?
          </h2>

          <p className="mt-8 text-lg md:text-xl text-emerald-100 leading-8">
            Join the FitsZone family today and start your fitness journey with
            certified trainers, modern equipment, and a community that supports
            your success every step of the way.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
            >
              <FaWhatsapp />
              Join via WhatsApp
            </a>

            <a
              href="/membership"
              className="inline-flex items-center justify-center gap-3 border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-600 transition"
            >
              View Memberships
              <FaArrowRight />
            </a>

          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CallToAction;
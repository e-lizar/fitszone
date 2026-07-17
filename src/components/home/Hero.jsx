import {
  FaArrowRight,
  FaUsers,
  FaDumbbell,
  FaAward,
  FaHeartbeat,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-[90vh] flex items-center">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-emerald-400 font-semibold uppercase tracking-widest">
              Welcome to FitsZone
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-4">
              Transform Your Body
              <br />
              <span className="text-emerald-500">
                Transform Your Life
              </span>
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-8">
              Join our community of fitness enthusiasts and achieve your goals
              with certified trainers, modern equipment, and personalized
              workout programs designed for every fitness level.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8=">
                <Link to="/membership">
                <Button>
                    Join Now
                </Button>
                </Link>
                <Link to="/programs">
                <Button variant="outline">
                    Explore Programs
                    </Button>
                    </Link>
            </div>

            {/* Hero Statistics */}
            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="flex items-center gap-3">
                <FaUsers className="text-emerald-500 text-3xl" />

                <div>
                  <h2 className="text-2xl font-bold">
                    500+
                  </h2>

                  <p className="text-gray-400">
                    Active Members
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaAward className="text-yellow-400 text-3xl" />

                <div>
                  <h2 className="text-2xl font-bold">
                    20+
                  </h2>

                  <p className="text-gray-400">
                    Expert Trainers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaDumbbell className="text-emerald-500 text-3xl" />

                <div>
                  <h2 className="text-2xl font-bold">
                    50+
                  </h2>

                  <p className="text-gray-400">
                    Weekly Classes
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaHeartbeat className="text-red-500 text-3xl" />

                <div>
                  <h2 className="text-2xl font-bold">
                    10+
                  </h2>

                  <p className="text-gray-400">
                    Years Experience
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900"
              alt="Fitness Training"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Hero;
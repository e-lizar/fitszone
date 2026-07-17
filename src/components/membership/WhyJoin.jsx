import {
  FaUsers,
  FaDumbbell,
  FaHeartbeat,
  FaAward,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const reasons = [
  {
    icon: FaUsers,
    title: "Supportive Community",
    description: "Train alongside motivated members who encourage your progress.",
  },
  {
    icon: FaDumbbell,
    title: "Modern Equipment",
    description: "Access high-quality equipment for strength and cardio training.",
  },
  {
    icon: FaHeartbeat,
    title: "Healthy Lifestyle",
    description: "Develop long-term habits that improve your overall well-being.",
  },
  {
    icon: FaAward,
    title: "Expert Coaching",
    description: "Receive guidance from certified trainers committed to your success.",
  },
];

const WhyJoin = () => {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="Why Join?"
          title="Membership That Goes Beyond the Gym"
          description="At FitsZone, membership means becoming part of a community dedicated to helping you succeed."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center">
                  <Icon className="text-emerald-500 text-3xl" />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {reason.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyJoin;
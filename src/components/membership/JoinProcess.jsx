import {
  FaListOl,
  FaWhatsapp,
  FaClipboardCheck,
  FaDumbbell,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const steps = [
  {
    icon: FaListOl,
    title: "Choose a Membership",
    description: "Select the plan that best fits your fitness goals.",
  },
  {
    icon: FaWhatsapp,
    title: "Contact Us on WhatsApp",
    description: "Click 'Join via WhatsApp' and chat with our team.",
  },
  {
    icon: FaClipboardCheck,
    title: "Complete Registration",
    description: "Visit the gym to complete registration and payment.",
  },
  {
    icon: FaDumbbell,
    title: "Start Training",
    description: "Meet your trainer and begin your fitness journey.",
  },
];

const JoinProcess = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          subtitle="How to Join"
          title="Become a FitsZone Member in 4 Simple Steps"
          description="Joining FitsZone is quick and easy."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500 flex items-center justify-center">
                  <Icon className="text-white text-3xl" />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default JoinProcess;
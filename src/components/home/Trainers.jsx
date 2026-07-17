import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";
import TrainerCard from "./TrainerCard";

import trainers from "../../data/trainers";

const Trainers = () => {
  return (
    <section className="py-24 bg-gray-100">
      <Container>

        <SectionTitle
          subtitle="Meet Our Trainers"
          title="Train With Certified Professionals"
          description="Our experienced coaches are here to motivate, guide, and help you achieve your fitness goals."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Trainers;
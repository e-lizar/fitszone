import { useEffect, useState } from "react";

import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";
import TrainerProfileCard from "./TrainerProfileCard";

import { getTrainers } from "../../services/trainerService";

const TrainersGrid = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const data = await getTrainers();
        setTrainers(data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <section className="py-24 bg-gray-100">
      <Container>
        <SectionTitle
          subtitle="Our Trainers"
          title="Meet The Professionals Behind FitsZone"
          description="Our experienced coaches are committed to helping you achieve your fitness goals safely and effectively."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {trainers.map((trainer) => (
            <TrainerProfileCard
              key={trainer._id}
              trainer={trainer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrainersGrid;
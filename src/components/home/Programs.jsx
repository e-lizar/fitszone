import Container from "../ui/Container";
import ProgramCard from "./ProgramCard";
import SectionTitle from "../common/SectionTitle";
import programs from "../../data/programs";

const Programs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <Container>

        <SectionTitle
          subtitle="Our Programs"
          title="Choose Your Perfect Workout"
          description="Discover a variety of fitness programs designed to help you build strength, improve endurance, and achieve your fitness goals."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Programs;
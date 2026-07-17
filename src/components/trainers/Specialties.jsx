import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const specialties = [
  "Strength Training",
  "Weight Loss",
  "Muscle Building",
  "CrossFit",
  "Yoga & Flexibility",
  "Nutrition Coaching",
  "HIIT",
  "Functional Training",
];

const Specialties = () => {
  return (
    <section className="py-24 bg-gray-100">
      <Container>

        <SectionTitle
          subtitle="Training Specialties"
          title="Programs Led By Our Expert Trainers"
          description="Our coaches specialize in different fitness disciplines, ensuring every member receives expert guidance."
        />

        <div className="flex flex-wrap justify-center gap-4">
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="bg-emerald-500 text-white px-6 py-3 rounded-full font-medium"
            >
              {specialty}
            </span>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Specialties;
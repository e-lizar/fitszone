import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const certifications = [
  "NASM Certified Personal Trainer",
  "ACE Certified Fitness Trainer",
  "CrossFit Level 2 Coach",
  "RYT-500 Yoga Instructor",
  "Certified Nutrition Specialist",
  "CPR & First Aid Certified",
];

const Certifications = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          subtitle="Professional Standards"
          title="Certified & Qualified Coaches"
          description="Our trainers hold internationally recognized certifications and continuously update their knowledge."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center font-semibold"
            >
              {certification}
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Certifications;
import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const TrainersIntro = () => {
  return (
    <section className="py-20 bg-white">
      <Container>

        <SectionTitle
          subtitle="Professional Coaches"
          title="Train With Experienced Fitness Experts"
          description="Every trainer at FitsZone is passionate about helping members reach their full potential through personalized coaching and professional guidance."
        />

      </Container>
    </section>
  );
};

export default TrainersIntro;
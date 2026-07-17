import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const ProgramsIntro = () => {
  return (
    <section className="py-20 bg-white">
      <Container>

        <SectionTitle
          subtitle="Train Your Way"
          title="Programs Designed For Every Fitness Level"
          description="Every member has different goals. That's why FitsZone offers specialized training programs led by experienced coaches."
        />

      </Container>
    </section>
  );
};

export default ProgramsIntro;
import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const Map = () => {
  return (
    <section className="py-24 bg-gray-100">
      <Container>

        <SectionTitle
          subtitle="Find Us"
          title="Visit Our Gym"
          description="Locate FitsZone using Google Maps."
        />

        <div className="rounded-3xl overflow-hidden shadow-lg">

          <iframe
            title="FitsZone Location"
            src="https://www.google.com/maps?q=Nairobi&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          ></iframe>

        </div>

      </Container>
    </section>
  );
};

export default Map;
import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";
import FacilityCard from "./FacilityCard";

import facilities from "../../data/facilities";

const Facilities = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          subtitle="Our Facilities"
          title="Everything You Need Under One Roof"
          description="FitsZone provides a modern, comfortable, and motivating environment equipped with everything you need to reach your fitness goals."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <FacilityCard
              key={facility.id}
              facility={facility}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Facilities;
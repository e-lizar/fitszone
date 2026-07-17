import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";
import BenefitCard from "./BenefitCard";

import benefits from "../../data/benefits";

const Benefits = () => {
  return (
    <section className="py-24 bg-gray-100">
      <Container>

        <SectionTitle
          subtitle="Membership Benefits"
          title="Everything Included With Your Membership"
          description="Every FitsZone membership is designed to give you the tools, support, and environment you need to succeed."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Benefits;
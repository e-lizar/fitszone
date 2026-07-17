import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";
import TestimonialCard from "./TestimonialCard";

import testimonials from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          subtitle="Testimonials"
          title="What Our Members Say"
          description="Hear directly from people who have transformed their fitness journey with FitsZone."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Testimonials;
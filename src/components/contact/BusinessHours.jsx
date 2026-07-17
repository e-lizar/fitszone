import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const hours = [
  ["Monday", "6:00 AM - 9:00 PM"],
  ["Tuesday", "6:00 AM - 9:00 PM"],
  ["Wednesday", "6:00 AM - 9:00 PM"],
  ["Thursday", "6:00 AM - 9:00 PM"],
  ["Friday", "6:00 AM - 9:00 PM"],
  ["Saturday", "7:00 AM - 7:00 PM"],
  ["Sunday", "Closed"],
];

const BusinessHours = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          subtitle="Opening Hours"
          title="Visit FitsZone"
          description="Check our operating hours before visiting."
        />

        <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl shadow-lg p-8">

          {hours.map(([day, time]) => (
            <div
              key={day}
              className="flex justify-between border-b last:border-none py-4"
            >
              <span className="font-semibold">{day}</span>
              <span>{time}</span>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
};

export default BusinessHours;
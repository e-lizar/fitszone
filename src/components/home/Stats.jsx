import Container from "../ui/Container";

const stats = [
  {
    number: "500+",
    label: "Active Members",
  },
  {
    number: "20+",
    label: "Professional Trainers",
  },
  {
    number: "50+",
    label: "Weekly Classes",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl p-8 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-4xl font-bold text-emerald-500">
                {stat.number}
              </h2>

              <p className="mt-2 text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
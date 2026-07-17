import Button from "../ui/Button";

const ProgramCard = ({ program }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
      <div className="text-5xl mb-6">
        {program.icon}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {program.title}
      </h3>

      <p className="text-gray-600 mb-6">
        {program.description}
      </p>

      <Button variant="outline">
        Learn More
      </Button>
    </div>
  );
};

export default ProgramCard;
import { useEffect, useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";
import ProgramDetailsCard from "./ProgramDetailsCard";

import { getPrograms } from "../../services/programService";

const ProgramsGrid = () => {
  const [programs, setPrograms] = useState([]);

useEffect(() => {
  const fetchPrograms = async () => {
    try {
      const data = await getPrograms();
      setPrograms(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchPrograms();
}, []);
  return (
    <section className="py-24 bg-gray-100">
      <Container>

        <SectionTitle
          subtitle="Our Programs"
          title="Choose the Program That Fits You"
          description="Explore our professionally designed fitness programs and find the perfect match for your goals."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramDetailsCard
              key={program._id}
              program={program}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default ProgramsGrid;
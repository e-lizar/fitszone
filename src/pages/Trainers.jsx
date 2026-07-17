import TrainersHero from "../components/trainers/TrainersHero";
import TrainersIntro from "../components/trainers/TrainersIntro";
import TrainersGrid from "../components/trainers/TrainersGrid";
import Certifications from "../components/trainers/Certifications";
import Specialties from "../components/trainers/Specialties";

const Trainers = () => {
  return (
    <>
      <TrainersHero />
      <TrainersIntro />
      <TrainersGrid />
      <Certifications />
      <Specialties />
    </>
  );
};

export default Trainers;
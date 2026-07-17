import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Programs from "../components/home/Programs";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import MembershipPlans from "../components/home/MembershipPlans";
import Trainers from "../components/home/Trainers";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <AboutPreview />
      <WhyChooseUs />
      <MembershipPlans />
      <Trainers/>
      <Testimonials/>
      <CallToAction/>
    </>
  );
};

export default Home;
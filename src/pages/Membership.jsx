import MembershipHero from "../components/membership/MembershipHero";
import WhyJoin from "../components/membership/WhyJoin";
import Benefits from "../components/membership/Benefits";
import JoinProcess from "../components/membership/JoinProcess";

// Reuse from Home
import MembershipPlans from "../components/home/MembershipPlans";

const Membership = () => {
  return (
    <>
      <MembershipHero />
      <WhyJoin />
      <MembershipPlans />
      <Benefits />
      <JoinProcess />
    </>
  );
};

export default Membership;
import { useEffect, useState } from "react";

import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";
import MembershipCard from "./MembershipCard";

import { getAllPlans } from "../../services/adminMembershipPlanService";

const MembershipPlans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await getAllPlans();
        setPlans(data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          subtitle="Membership Plans"
          title="Choose the Plan That Fits Your Goals"
          description="Whether you're just getting started or aiming for peak performance, we have a membership designed for you."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <MembershipCard
              key={plan._id}
              membership={plan}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default MembershipPlans;
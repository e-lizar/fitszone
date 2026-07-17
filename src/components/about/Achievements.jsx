import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";
import AchievementCard from "./AchievementCard";

import achievements from "../../data/achievements";

const Achievements = () => {
  return (
    <section className="py-24 bg-gray-100">
      <Container>

        <SectionTitle
          subtitle="Our Achievements"
          title="Numbers That Reflect Our Commitment"
          description="Over the years, FitsZone has grown into a trusted fitness community, helping members achieve healthier and stronger lives."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default Achievements;
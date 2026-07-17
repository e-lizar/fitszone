import weightTraining from "../assets/images/weight-training.jpeg";
import cardio from "../assets/images/cardio.jpeg";
import yoga from "../assets/images/yoga.jpeg";
import personalTraining from "../assets/images/personal-training.jpeg";
import crossfit from "../assets/images/crossfit.jpeg";
import nutrition from "../assets/images/nutrition.jpeg";

const programs = [
  {
    id: 1,
    title: "Weight Training",
    image: weightTraining,
    level: "Beginner - Advanced",
    duration: "60 Minutes",
    schedule: "Monday • Wednesday • Friday",
    description:
      "Build muscle, increase strength, and improve your overall fitness using free weights, resistance machines, and expert coaching.",
  },

  {
    id: 2,
    title: "Cardio Fitness",
    image: cardio,
    level: "All Levels",
    duration: "45 Minutes",
    schedule: "Tuesday • Thursday • Saturday",
    description:
      "Boost endurance, burn calories, and improve heart health through energetic cardio workouts and circuit training.",
  },

  {
    id: 3,
    title: "CrossFit",
    image: crossfit,
    level: "Intermediate - Advanced",
    duration: "60 Minutes",
    schedule: "Monday • Thursday • Saturday",
    description:
      "High-intensity functional training designed to improve strength, agility, endurance, and overall athletic performance.",
  },

  {
    id: 4,
    title: "Yoga",
    image: yoga,
    level: "All Levels",
    duration: "60 Minutes",
    schedule: "Tuesday • Friday",
    description:
      "Improve flexibility, posture, balance, and mental well-being through guided yoga sessions in a relaxing environment.",
  },

  {
    id: 5,
    title: "Personal Training",
    image: personalTraining,
    level: "Personalized",
    duration: "Flexible",
    schedule: "By Appointment",
    description:
      "Receive one-on-one coaching with customized workout plans tailored to your fitness goals and progress.",
  },

  {
    id: 6,
    title: "Nutrition Coaching",
    image: nutrition,
    level: "All Levels",
    duration: "30 Minutes",
    schedule: "Monday - Friday",
    description:
      "Work with our nutrition experts to develop healthy eating habits, personalized meal plans, and sustainable lifestyle changes.",
  },
];

export default programs;
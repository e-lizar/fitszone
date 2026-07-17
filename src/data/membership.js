const memberships = [
  {
    id: 1,
    name: "Basic",
    price: "KES 2,500",
    duration: "/month",
    popular: false,
    features: [
      "Gym Access",
      "Locker Room Access",
      "Free Fitness Assessment",
      "Basic Workout Plan",
    ],
  },
  {
    id: 2,
    name: "Premium",
    price: "KES 5,000",
    duration: "/month",
    popular: true,
    features: [
      "Everything in Basic",
      "Unlimited Classes",
      "Nutrition Guidance",
      "2 Personal Training Sessions",
      "Progress Tracking",
    ],
  },
  {
    id: 3,
    name: "Elite",
    price: "KES 8,000",
    duration: "/month",
    popular: false,
    features: [
      "Everything in Premium",
      "Unlimited Personal Training",
      "Customized Meal Plan",
      "Priority Booking",
      "VIP Support",
    ],
  },
];

export default memberships;
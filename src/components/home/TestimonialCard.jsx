import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

      <div className="flex items-center gap-4">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h3 className="font-bold text-xl">
            {testimonial.name}
          </h3>

          <div className="flex text-yellow-400 mt-1">
            {[...Array(testimonial.rating)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>

      </div>

      <p className="text-gray-600 mt-6 leading-8 italic">
        "{testimonial.review}"
      </p>

    </div>
  );
};

export default TestimonialCard;
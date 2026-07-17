import { FaCheck, FaWhatsapp } from "react-icons/fa";

const PHONE_NUMBER = "254712345678"; // Replace with your WhatsApp number

const MembershipCard = ({ membership }) => {
  const message = `Hello FitsZone! I'm interested in the ${membership.name} Membership (${membership.price}${membership.duration}). Please guide me through the registration process.`;

  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      className={`relative rounded-2xl p-8 shadow-xl transition duration-300 hover:-translate-y-2 ${
        membership.popular
          ? "bg-emerald-500 text-white"
          : "bg-white"
      }`}
    >
      {membership.popular && (
        <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </span>
      )}

      <h3 className="text-3xl font-bold">
        {membership.name}
      </h3>

      <div className="mt-6">
        <span className="text-5xl font-bold">
          {membership.price}
        </span>

        <span className="text-lg">
          {membership.duration}
        </span>
      </div>

         <div className="mt-6">
  {membership.description && (
    <p
      className={`leading-7 ${
        membership.popular
          ? "text-white"
          : "text-gray-600"
      }`}
    >
      {membership.description}
    </p>
  )}

  {membership.features?.length > 0 && (
    <div className="mt-6 space-y-4">
      {membership.features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-3"
        >
          <FaCheck />
          <span>{feature}</span>
        </div>
      ))}
    </div>
  )}
</div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-10 flex items-center justify-center gap-2 rounded-lg py-3 font-semibold transition ${
          membership.popular
            ? "bg-white text-emerald-600 hover:bg-gray-100"
            : "bg-emerald-500 text-white hover:bg-emerald-600"
        }`}
      >
        <FaWhatsapp />
        Join via WhatsApp
      </a>
    </div>
  );
};

export default MembershipCard;
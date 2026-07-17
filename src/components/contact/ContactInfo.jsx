import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const PHONE_NUMBER = "254712345678";

const ContactInfo = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello FitsZone! I would like to get more information."
  );

  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          subtitle="Get In Touch"
          title="We're Here To Help"
          description="Reach us using any of the contact methods below."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
            <FaPhoneAlt className="mx-auto text-4xl text-emerald-500" />
            <h3 className="font-bold text-xl mt-4">Phone</h3>
            <p className="mt-2">+254 712 345 678</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
            <FaEnvelope className="mx-auto text-4xl text-emerald-500" />
            <h3 className="font-bold text-xl mt-4">Email</h3>
            <p className="mt-2">info@fitszone.com</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow">
            <FaMapMarkerAlt className="mx-auto text-4xl text-emerald-500" />
            <h3 className="font-bold text-xl mt-4">Location</h3>
            <p className="mt-2">
              Your Gym Address Here
            </p>
          </div>

          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 text-white rounded-2xl p-8 text-center hover:bg-emerald-600 transition"
          >
            <FaWhatsapp className="mx-auto text-4xl" />
            <h3 className="font-bold text-xl mt-4">
              WhatsApp
            </h3>

            <p className="mt-2">
              Chat With Us
            </p>
          </a>

        </div>

      </Container>
    </section>
  );
};

export default ContactInfo;
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

const SocialLinks = () => {
  return (
    <section className="py-20 bg-white">
      <Container>

        <SectionTitle
          subtitle="Follow Us"
          title="Stay Connected"
          description="Join our community on social media."
        />

        <div className="flex justify-center gap-8 text-5xl">

          <a href="#" className="hover:text-emerald-500 transition">
            <FaFacebook />
          </a>

          <a href="#" className="hover:text-emerald-500 transition">
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-emerald-500 transition">
            <FaTiktok />
          </a>

          <a href="#" className="hover:text-emerald-500 transition">
            <FaYoutube />
          </a>

        </div>

      </Container>
    </section>
  );
};

export default SocialLinks;
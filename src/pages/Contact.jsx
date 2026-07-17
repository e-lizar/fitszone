import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import BusinessHours from "../components/contact/BusinessHours";
import Map from "../components/contact/Map";
import SocialLinks from "../components/contact/SocialLinks";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <BusinessHours />
      <Map />
      <SocialLinks />
    </>
  );
};

export default Contact;
import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";
import Button from "../ui/Button";

const ContactForm = () => {
  return (
    <section className="py-24 bg-gray-100">
      <Container>

        <SectionTitle
          subtitle="Send a Message"
          title="Get In Touch"
          description="Fill out the form below and we'll get back to you as soon as possible."
        />

        <form className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

          </div>

          <div className="mt-6">

            <label className="block mb-2 font-medium">
              Subject
            </label>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

          </div>

          <div className="mt-6">

            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

          </div>

          <div className="mt-8 text-center">
            <Button>
              Send Message
            </Button>
          </div>

        </form>

      </Container>
    </section>
  );
};

export default ContactForm;
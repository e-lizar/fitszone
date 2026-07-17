import Container from "../ui/Container";
import SectionTitle from "../common/SectionTitle";

import schedule from "../../data/schedule";

const Schedule = () => {
  return (
    <section className="py-24 bg-white">
      <Container>

        <SectionTitle
          subtitle="Weekly Schedule"
          title="Find the Perfect Time to Train"
          description="Choose a class that fits your schedule and start your fitness journey with us."
        />

        <div className="overflow-x-auto rounded-2xl shadow-lg">

          <table className="min-w-full border-collapse">

            <thead className="bg-emerald-500 text-white">

              <tr>
                <th className="p-4 text-left">Time</th>
                <th className="p-4">Monday</th>
                <th className="p-4">Tuesday</th>
                <th className="p-4">Wednesday</th>
                <th className="p-4">Thursday</th>
                <th className="p-4">Friday</th>
                <th className="p-4">Saturday</th>
              </tr>

            </thead>

            <tbody>

              {schedule.map((row, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="p-4 font-semibold">
                    {row.time}
                  </td>

                  <td className="p-4 text-center">
                    {row.monday}
                  </td>

                  <td className="p-4 text-center">
                    {row.tuesday}
                  </td>

                  <td className="p-4 text-center">
                    {row.wednesday}
                  </td>

                  <td className="p-4 text-center">
                    {row.thursday}
                  </td>

                  <td className="p-4 text-center">
                    {row.friday}
                  </td>

                  <td className="p-4 text-center">
                    {row.saturday}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </Container>
    </section>
  );
};

export default Schedule;
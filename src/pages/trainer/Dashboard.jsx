import { useEffect, useState } from "react";
import {
  FaUserTie,
  FaDumbbell,
  FaClock,
} from "react-icons/fa";

import { getTrainerDashboard } from "../../services/trainerDashboardService";

const TrainerDashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const data = await getTrainerDashboard(token);

      setDashboard(data);

    } catch (error) {
      console.error(error);
    }
  };

  if (!dashboard) {
    return <p className="p-8">Loading...</p>;
  }

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Welcome, {dashboard.trainer.name} 👋
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white rounded-xl shadow p-6">
          <FaUserTie className="text-4xl text-emerald-500 mb-3" />
          <h3 className="text-gray-500">
            Specialty
          </h3>

          <p className="text-xl font-bold">
            {dashboard.trainer.specialty}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <FaDumbbell className="text-4xl text-blue-500 mb-3" />
          <h3 className="text-gray-500">
            My Programs
          </h3>

          <p className="text-4xl font-bold">
            {dashboard.totalPrograms}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <FaClock className="text-4xl text-purple-500 mb-3" />
          <h3 className="text-gray-500">
            Experience
          </h3>

          <p className="text-xl font-bold">
            {dashboard.trainer.experience}
          </p>
        </div>

      </div>

      {/* Programs */}
      <div className="bg-white rounded-xl shadow p-6">

        <h2 className="text-2xl font-bold mb-5">
          My Programs
        </h2>

        {dashboard.programs.length === 0 ? (
          <p>No programs assigned.</p>
        ) : (
          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Program
                </th>

                <th className="text-left">
                  Level
                </th>

                <th className="text-left">
                  Duration
                </th>

                <th className="text-left">
                  Schedule
                </th>

              </tr>

            </thead>

            <tbody>

              {dashboard.programs.map((program) => (

                <tr
                  key={program._id}
                  className="border-b"
                >
                  <td className="py-4">
                    {program.title}
                  </td>

                  <td>
                    {program.level}
                  </td>

                  <td>
                    {program.duration}
                  </td>

                  <td>
                    {program.schedule}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>
        )}

      </div>

    </div>
  );
};

export default TrainerDashboard;
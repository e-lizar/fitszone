import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDashboard } from "../../services/dashboardService";

const AdminDashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await getDashboard(token);
      setDashboard(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!dashboard) {
    return <p className="p-8">Loading...</p>;
  }

  return (
    <div className="p-8">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm">Members</h2>
          <p className="text-4xl font-bold">
            {dashboard.totalMembers}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm">Programs</h2>
          <p className="text-4xl font-bold">
            {dashboard.totalPrograms}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm">Membership Plans</h2>
          <p className="text-4xl font-bold">
            {dashboard.totalPlans}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm">Trainers</h2>
          <p className="text-4xl font-bold">
            {dashboard.totalTrainers}
          </p>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg">
            Add Member
          </button>

          <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg">
            Add Program
          </button>

          <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg">
            Add Membership Plan
          </button>

        </div>

      </div>

      {/* Dashboard Sections */}
      <div className="mt-12">

        <h2 className="text-2xl font-bold mb-6">
          Management
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Members */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Members
            </h3>

            <p className="text-gray-600 mb-4">
              View, edit, delete and assign membership plans and programs.
            </p>

            <button
                onClick={() => navigate("/admin/members")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
               >
                 Manage Members
             </button>
          </div>

          {/* Programs */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Programs
            </h3>

            <p className="text-gray-600 mb-4">
              Create, edit and manage gym programs.
            </p>

            <button
                 onClick={() => navigate("/admin/programs")}
                 className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  >
                 Manage Programs
                </button>
          </div>

          {/* Membership Plans */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Membership Plans
            </h3>

            <p className="text-gray-600 mb-4">
              Create and update membership plans.
            </p>

             <button
                onClick={() => navigate("/admin/membership-plans")}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
                 >
               Manage Plans
              </button>
          </div>

          {/* Trainers */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Trainers
            </h3>

            <p className="text-gray-600 mb-4">
              Add and manage gym trainers.
            </p>

            <button
                  onClick={() => navigate("/admin/trainers")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
                  >
                  Manage Trainers
              </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;
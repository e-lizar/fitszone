import { useEffect, useState } from "react";
import {
  getAllPlans,
  deletePlan,
} from "../../services/adminMembershipPlanService";
import AddMembershipPlanForm from "../../components/admin/AddMembershipPlanForm";

const MembershipPlans = () => {
  const [plans, setPlans] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPlan, setEditingPlan] = useState(null);

  useEffect(() => {
    loadPlans();
  }, []);

  const loadPlans = async () => {
    try {
      const data = await getAllPlans();
      setPlans(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this plan?"
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      await deletePlan(id, token);

      alert("Plan deleted successfully!");

      loadPlans();
    } catch (error) {
      console.error(error);
      alert("Failed to delete plan.");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold">
        Manage Membership Plans
      </h1>

      <button
        onClick={() => {
          setEditingPlan(null);
          setShowForm(true);
        }}
        className="mt-5 bg-emerald-500 text-white px-5 py-3 rounded-lg"
      >
        + Add Plan
      </button>

      {showForm && (
        <AddMembershipPlanForm
          plan={editingPlan}
          onSuccess={() => {
            loadPlans();
            setShowForm(false);
            setEditingPlan(null);
          }}
          onCancel={() => {
            setShowForm(false);
            setEditingPlan(null);
          }}
        />
      )}

      <table className="w-full mt-8 bg-white shadow rounded-lg">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Duration</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {plans.map((plan) => (
            <tr key={plan._id} className="border-b">
              <td className="p-4">{plan.name}</td>

              <td className="p-4">
                ${plan.price}
              </td>

              <td className="p-4">
                {plan.duration} Days
              </td>

              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    plan.isActive
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {plan.isActive ? "Active" : "Inactive"}
                </span>
              </td>

              <td className="p-4 space-x-2">
                <button
                  onClick={() => {
                    setEditingPlan(plan);
                    setShowForm(true);
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(plan._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MembershipPlans;
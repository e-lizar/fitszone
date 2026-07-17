import { useState, useEffect } from "react";
import {
  createPlan,
  updatePlan,
} from "../../services/adminMembershipPlanService";

const AddMembershipPlanForm = ({
  plan,
  onSuccess,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    duration: "",
    description: "",
    features: "",
    isActive: true,
  });

  useEffect(() => {
    if (plan) {
      setFormData({
        name: plan.name,
        price: plan.price,
        duration: plan.duration,
        description: plan.description,
        features: plan.features
          ? plan.features.join(", ")
          : "",
        isActive: plan.isActive,
      });
    }
  }, [plan]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const payload = {
        ...formData,
        price: Number(formData.price),
        duration: Number(formData.duration),
        features: formData.features
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== ""),
      };

      if (plan) {
        await updatePlan(plan._id, payload, token);
        alert("Membership plan updated successfully!");
      } else {
        await createPlan(payload, token);
        alert("Membership plan created successfully!");
      }

      onSuccess();
    } catch (error) {
      console.error(error);
      alert("Operation failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow mb-8"
    >
      <h2 className="text-2xl font-bold mb-5">
        {plan ? "Edit Membership Plan" : "Add Membership Plan"}
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          name="name"
          placeholder="Plan Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="number"
          name="duration"
          placeholder="Duration (days)"
          value={formData.duration}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          name="features"
          placeholder="Features (comma separated)"
          value={formData.features}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 rounded col-span-2"
          rows="4"
        />

        <label className="flex items-center gap-2 col-span-2">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
          Active Plan
        </label>

      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="submit"
          className="bg-emerald-500 text-white px-5 py-3 rounded-lg"
        >
          {plan ? "Update Plan" : "Save Plan"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-5 py-3 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddMembershipPlanForm;
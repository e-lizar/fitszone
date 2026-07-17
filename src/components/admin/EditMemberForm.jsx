import { useState, useEffect } from "react";
import { updateMember } from "../../services/adminUserService";

const EditMemberForm = ({ member, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipStatus: "inactive",
  });

  useEffect(() => {
    if (member) {
      setFormData({
        name: member.name || "",
        email: member.email || "",
        phone: member.phone || "",
        membershipStatus: member.membershipStatus || "inactive",
      });
    }
  }, [member]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await updateMember(member._id, formData, token);

      alert("Member updated successfully!");

      onSuccess();
    } catch (error) {
      console.error(error);
      alert("Failed to update member.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow mb-8"
    >
      <h2 className="text-2xl font-bold mb-5">
        Edit Member
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-3 rounded"
          required
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-3 rounded"
          required
        />

        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-3 rounded"
        />

        <select
          name="membershipStatus"
          value={formData.membershipStatus}
          onChange={handleChange}
          className="border p-3 rounded"
        >
          <option value="inactive">Inactive</option>
          <option value="active">Active</option>
          <option value="expired">Expired</option>
        </select>

      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="submit"
          className="bg-emerald-500 text-white px-5 py-3 rounded-lg"
        >
          Update Member
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

export default EditMemberForm;
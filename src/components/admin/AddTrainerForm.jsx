import { useState, useEffect } from "react";
import {
  createTrainer,
  updateTrainer,
} from "../../services/adminTrainerService";

const AddTrainerForm = ({
  trainer,
  onSuccess,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    name: trainer?.name || "",
    specialty: trainer?.specialty || "",
    description: trainer?.description || "",
    experience: trainer?.experience || "",
    certification: trainer?.certification || "",
    email: trainer?.email || "",
    phone: trainer?.phone || "",
    isActive: trainer?.isActive ?? true,
    image: null,
  });

  useEffect(() => {
    if (trainer) {
      setFormData({
        name: trainer.name,
        specialty: trainer.specialty,
        description: trainer.description,
        experience: trainer.experience,
        certification: trainer.certification,
        email: trainer.email,
        phone: trainer.phone,
        isActive: trainer.isActive,
        image: null,
      });
    }
  }, [trainer]);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: files
        ? files[0]
        : type === "checkbox"
        ? checked
        : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();

      data.append("name", formData.name);
      data.append("specialty", formData.specialty);
      data.append("description", formData.description);
      data.append("experience", formData.experience);
      data.append("certification", formData.certification);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("isActive", formData.isActive);

      if (formData.image) {
        data.append("image", formData.image);
      }

      if (trainer) {
        await updateTrainer(trainer._id, data, token);
        alert("Trainer updated successfully!");
      } else {
        await createTrainer(data, token);
        alert("Trainer added successfully!");
      }

      onSuccess();

    } catch (error) {
      console.error(error);
      alert(
        trainer
          ? "Failed to update trainer."
          : "Failed to add trainer."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow mb-8"
    >
      <h2 className="text-2xl font-bold mb-5">
        {trainer ? "Edit Trainer" : "Add Trainer"}
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Trainer Name"
          className="border p-3 rounded"
          required
        />

        <input
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          placeholder="Specialty"
          className="border p-3 rounded"
          required
        />

        <input
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Experience"
          className="border p-3 rounded"
          required
        />

        <input
          name="certification"
          value={formData.certification}
          onChange={handleChange}
          placeholder="Certification"
          className="border p-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
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

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows="4"
          className="border p-3 rounded col-span-2"
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="border p-3 rounded col-span-2"
        />

        <label className="flex items-center gap-3 col-span-2">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />

          Active Trainer
        </label>

      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="submit"
          className="bg-emerald-500 text-white px-5 py-3 rounded-lg"
        >
          {trainer ? "Update Trainer" : "Save Trainer"}
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

export default AddTrainerForm;
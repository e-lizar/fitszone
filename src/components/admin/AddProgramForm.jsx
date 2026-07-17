import { useState, useEffect } from "react";
import {
  createProgram,
  updateProgram,
} from "../../services/adminProgramService";
import { getAllTrainers } from "../../services/adminTrainerService";

const AddProgramForm = ({
  program,
  onSuccess,
  onCancel,
}) => {
  const [trainers, setTrainers] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    level: "Beginner",
    duration: "",
    schedule: "",
    trainer: "",
    image: null,
  });

  // Load trainers
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const data = await getAllTrainers();
        setTrainers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrainers();
  }, []);

  // Load program when editing
  useEffect(() => {
    if (program) {
      setFormData({
        title: program.title || "",
        description: program.description || "",
        level: program.level || "Beginner",
        duration: program.duration || "",
        schedule: program.schedule || "",
        trainer: program.trainer?._id || "",
        image: null,
      });
    }
  }, [program]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("level", formData.level);
      data.append("duration", formData.duration);
      data.append("schedule", formData.schedule);
      data.append("trainer", formData.trainer);

      if (formData.image) {
        data.append("image", formData.image);
      }

      console.log("Selected Trainer:", formData.trainer);

      for (let pair of data.entries()) {
        console.log(pair[0], pair[1]);
      }

      if (program) {
        await updateProgram(program._id, data, token);
        alert("Program updated successfully!");
      } else {
        await createProgram(data, token);
        alert("Program created successfully!");
      }

      onSuccess();

    } catch (error) {
      console.error(error);

      console.log(error.response?.data);

      alert(
        program
          ? "Failed to update program."
          : "Failed to create program."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow mb-8"
    >
      <h2 className="text-2xl font-bold mb-6">
        {program ? "Edit Program" : "Add Program"}
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Program Title"
          className="border p-3 rounded"
          required
        />

        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <input
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Duration"
          className="border p-3 rounded"
          required
        />

        <input
          name="schedule"
          value={formData.schedule}
          onChange={handleChange}
          placeholder="Schedule"
          className="border p-3 rounded"
          required
        />

        <select
          name="trainer"
          value={formData.trainer}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        >
          <option value="">Select Trainer</option>

          {trainers.map((trainer) => (
            <option
              key={trainer._id}
              value={trainer._id}
            >
              {trainer.name}
            </option>
          ))}
        </select>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows="5"
          className="border p-3 rounded col-span-2"
          required
        />

      </div>

      <div className="flex gap-4 mt-6">
        <button
          type="submit"
          className="bg-emerald-500 text-white px-5 py-3 rounded-lg"
        >
          {program ? "Update Program" : "Save Program"}
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

export default AddProgramForm;
import { useEffect, useState } from "react";

import {
  getAllTrainers,
  deleteTrainer,
} from "../../services/adminTrainerService";

import AddTrainerForm from "../../components/admin/AddTrainerForm";

const Trainers = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingTrainer, setEditingTrainer] = useState(null);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    loadTrainers();
  }, []);

  const loadTrainers = async () => {
    try {
      const data = await getAllTrainers();
      setTrainers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this trainer?"
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      await deleteTrainer(id, token);

      loadTrainers();

      alert("Trainer deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete trainer.");
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold">
        Manage Trainers
      </h1>

      <button
        onClick={() => setShowForm(true)}
        className="mt-5 bg-emerald-500 text-white px-5 py-3 rounded-lg"
      >
        + Add Trainer
      </button>

      {showForm && (
        <AddTrainerForm
          trainer={editingTrainer}
          onSuccess={() => {
            loadTrainers();
            setShowForm(false);
            setEditingTrainer(null);
          }}
          onCancel={() => {
            setShowForm(false);
            setEditingTrainer(null);
          }}
        />
      )}

      <table className="w-full mt-8 bg-white shadow rounded-lg">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Photo</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Specialty</th>
            <th className="p-4 text-left">Experience</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {trainers.map((trainer) => (
            <tr key={trainer._id} className="border-b">
              <td className="p-4">
                {trainer.image ? (
                  <img
                    src={`http://localhost:5000${trainer.image}`}
                    alt={trainer.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                ) : (
                  "No Image"
                )}
              </td>

              <td className="p-4">{trainer.name}</td>
              <td className="p-4">{trainer.specialty}</td>
              <td className="p-4">{trainer.experience}</td>
              <td className="p-4">{trainer.email}</td>

              <td className="p-4 space-x-3">
                <button
                  onClick={() => {
                    setEditingTrainer(trainer);
                    setShowForm(true);
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(trainer._id)}
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

export default Trainers;
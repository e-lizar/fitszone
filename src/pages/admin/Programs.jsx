import { useEffect, useState } from "react";
import { getAllPrograms } from "../../services/adminProgramService";
import { deleteProgram } from "../../services/adminProgramService";
import AddProgramForm from "../../components/admin/AddProgramForm";


const Programs = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingProgram, setEditingProgram] = useState(null);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      const data = await getAllPrograms();
      setPrograms(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this program?"
  );

  if (!confirmed) return;

  try {
    const token = localStorage.getItem("token");

    await deleteProgram(id, token);

    loadPrograms();

    alert("Program deleted successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to delete program.");
  }
};

  return (
    <>
      <h1 className="text-3xl font-bold">
        Manage Programs
      </h1>

      <button 
           onClick={() => setShowForm(true)}
           className="mt-5 bg-emerald-500 text-white px-5 py-3 rounded-lg">
        + Add Program
      </button>

      {showForm && (
      <AddProgramForm
  program={editingProgram}
  onSuccess={() => {
    loadPrograms();
    setShowForm(false);
    setEditingProgram(null);
  }}
  onCancel={() => {
    setShowForm(false);
    setEditingProgram(null);
  }}
/>
    )}

      <table className="w-full mt-8 bg-white shadow rounded-lg">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Level</th>
            <th className="p-4 text-left">Duration</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {programs.map((program) => (
            <tr key={program._id} className="border-b">
              <td className="p-4">{program.title}</td>
              <td className="p-4">{program.level}</td>
              <td className="p-4">{program.duration}</td>

              <td className="p-4 space-x-3">
                <button
                onClick={() =>{
                    setEditingProgram(program);
                    setShowForm(true);
                }}
                       className="bg-blue-500 text-white px-3 py-1 rounded">
                  Edit
                </button>

                <button
                     onClick={() => handleDelete(program._id)} 
                     className="bg-red-500 text-white px-3 py-1 rounded">
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

export default Programs;
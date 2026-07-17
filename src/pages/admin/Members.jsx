import { useEffect, useState } from "react";
import { getAllMembers,deleteMember, } from "../../services/adminUserService";
import EditMemberForm from "../../components/admin/EditMemberForm";
import {getAllPlans,} from "../../services/adminMembershipPlanService";
import {assignMembershipPlan,} from "../../services/adminUserService";
import { getAllPrograms } from "../../services/adminProgramService";
import { assignPrograms } from "../../services/adminUserService";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [editingMember, setEditingMember] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [plans, setPlans] = useState([]);
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    loadMembers();
    loadPlans();
    loadPrograms();
  }, []);

  const loadMembers = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await getAllMembers(token);
      setMembers(data);
    } catch (error) {
      console.error(error);
    }
  };
    const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this member?"
  );

  if (!confirmed) return;

  try {
    const token = localStorage.getItem("token");

    await deleteMember(id, token);

    alert("Member deleted successfully!");

    loadMembers();
  } catch (error) {
    console.error(error);
    alert("Failed to delete member.");
  }
};
const loadPlans = async () => {
  try {
    const data = await getAllPlans();
    console.log("Plans:", data);
    setPlans(data);
  } catch (error) {
    console.error(error);
  }
};
const handleAssignPlan = async (memberId, planId) => {
  try {
    const token = localStorage.getItem("token");

    await assignMembershipPlan(
      memberId,
      planId,
      token
    );

    alert("Membership assigned!");

    loadMembers();
  } catch (error) {
    console.error(error);
    alert("Failed to assign membership.");
  }
};
const loadPrograms = async () => {
  try {
    const data = await getAllPrograms();
    setPrograms(data);
  } catch (error) {
    console.error(error);
  }
};
const handleAssignProgram = async (
  memberId,
  programId
) => {
  try {
    const token = localStorage.getItem("token");

    await assignPrograms(
      memberId,
      [programId],
      token
    );

    alert("Program assigned!");

    loadMembers();

  } catch (error) {
    console.error(error);
    alert("Failed to assign program.");
  }
};


  return (
    <>
      <h1 className="text-3xl font-bold">
        Manage Members
      </h1>
         {showForm && (
  <EditMemberForm
    member={editingMember}
    onSuccess={() => {
      loadMembers();
      setShowForm(false);
      setEditingMember(null);
    }}
    onCancel={() => {
      setShowForm(false);
      setEditingMember(null);
    }}
  />
)}

      <table className="w-full mt-8 bg-white shadow rounded-lg">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Membership</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Membership Plan</th>
            <th className="p-4 text-left">Programs</th>
            <th className="p-4 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {members.map((member) => (
            <tr key={member._id} className="border-b">
              <td className="p-4">{member.name}</td>
              <td className="p-4">{member.email}</td>
              <td className="p-4">{member.phone || "-"}</td>
              <td className="p-4">{member.membershipStatus}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    member.membershipStatus === "active"
                      ? "bg-green-500"
                      : member.membershipStatus === "expired"
                      ? "bg-red-500"
                      : "bg-gray-500"
                  }`}
                >
                  {member.membershipStatus}
                </span>
              </td>
              <td className="p-4">
  <select
    className="border rounded p-2"
    value={member.membershipPlan?._id || ""}
    onChange={(e) =>
      handleAssignPlan(member._id, e.target.value)
    }
  >
    <option value="">
      Select Plan
    </option>

    {plans.map((plan) => (
      <option
        key={plan._id}
        value={plan._id}
      >
        {plan.name}
      </option>
    ))}
  </select>
</td>
<td className="p-4">
  <select
    className="border rounded p-2"
    onChange={(e) =>
      handleAssignProgram(member._id, e.target.value)
    }
    value=""
  >
    <option value="">Assign Program</option>

    {programs.map((program) => (
      <option
        key={program._id}
        value={program._id}
      >
        {program.title}
      </option>
    ))}
  </select>

  {member.enrolledPrograms?.length > 0 && (
    <div className="mt-2 text-sm text-gray-600">
      {member.enrolledPrograms.map((program, index) => {
        console.log(program); 
        return(       
        <div key={program._id || index}>
          ✓ {program.title}
        </div>
        );
     })}
    </div>
  )}
</td>
                <td className="p-4 space-x-3">
  <button
    onClick={() => {
      setEditingMember(member);
      setShowForm(true);
    }}
    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
  >
    Edit
  </button>

  <button
    onClick={() => handleDelete(member._id)}
    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
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

export default Members;
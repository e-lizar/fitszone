import { useEffect, useState } from "react";
import { getProfile } from "../../services/userService";

const MemberDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await getProfile(token);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Member Dashboard
      </h1>

      <div className="bg-white rounded-lg shadow p-6 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-6">
          Welcome, {user.name} 👋
        </h2>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">Name</p>
            <p className="font-semibold">{user.name}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-semibold">
              {user.phone || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Membership Status</p>
            <span
              className={`px-3 py-1 rounded-full text-white ${
                user.membershipStatus === "active"
                  ? "bg-green-500"
                  : user.membershipStatus === "expired"
                  ? "bg-red-500"
                  : "bg-gray-500"
              }`}
            >
              {user.membershipStatus}
            </span>
          </div>

          <div>
            <p className="text-gray-500">Membership Plan</p>
            <p className="font-semibold">
              {user.membershipPlan?.name || "Not Assigned"}
            </p>
          </div>
             <div>
                 <p className="text-gray-500">Membership Started</p>
                 <p className="font-semibold">
                 {user.membershipStartDate
                  ? new Date(user.membershipStartDate).toLocaleDateString()
                 : "-"}
                </p>
             </div>
                <div>
                     <p className="text-gray-500">Membership Ends</p>
                   <p className="font-semibold">
                   {user.membershipEndDate
                    ? new Date(user.membershipEndDate).toLocaleDateString()
                    : "-"}
                   </p>
                 </div>
                 <div>
                   <p className="text-gray-500">Plan Price</p>
                  <p className="font-semibold">
                 $ {user.membershipPlan?.price || "-"}
                  </p>
                </div>
                <div>
                    <p className="text-gray-500">Plan Duration</p>
                    <p className="font-semibold">
                     {user.membershipPlan?.duration || "-"} Days
                   </p>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
const DashboardCards = ({ dashboard }) => {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-500">Members</h3>
        <p className="text-3xl font-bold">
          {dashboard.totalMembers}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-500">Programs</h3>
        <p className="text-3xl font-bold">
          {dashboard.totalPrograms}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-500">Plans</h3>
        <p className="text-3xl font-bold">
          {dashboard.totalPlans}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-gray-500">Trainers</h3>
        <p className="text-3xl font-bold">
          {dashboard.totalTrainers}
        </p>
      </div>

    </div>
  );
};

export default DashboardCards;
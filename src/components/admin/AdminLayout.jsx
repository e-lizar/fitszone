import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">
          FitsZone Admin
        </h1>

        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block hover:text-emerald-400">
            Dashboard
          </Link>

          <Link to="/admin/programs" className="block hover:text-emerald-400">
            Programs
          </Link>

          <Link to="/admin/memberships" className="block hover:text-emerald-400">
            Memberships
          </Link>

          <Link to="/admin/trainers" className="block hover:text-emerald-400">
            Trainers
          </Link>

          <Link to="/admin/members" className="block hover:text-emerald-400">
            Members
          </Link>

          <Link to="/admin/bookings" className="block hover:text-emerald-400">
            Bookings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
import { Bell, Search, UserCircle } from "lucide-react";

function DashboardNavbar() {
  return (
    <div className="flex justify-between items-center bg-blue-900 p-5 rounded-xl mb-8">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="flex items-center gap-5">

        <div className="flex items-center bg-blue-800 rounded-lg px-3 py-2">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2"
          />
        </div>

        <Bell size={24} className="cursor-pointer" />

        <UserCircle size={35} className="cursor-pointer" />

      </div>

    </div>
  );
}

export default DashboardNavbar;
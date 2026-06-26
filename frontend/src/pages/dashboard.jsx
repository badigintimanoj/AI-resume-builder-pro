import dashboardNavbar from "../components/dashboardNavbar";
import StatCard from "../components/statCard";
import QuickActions from "../components/quickActions";
import RecentResume from "../components/RecentResume";
import RecentATS from "../components/recentATS";

function dashboard() {
  return (
    <div className="bg-blue-950 min-h-screen text-white p-8">

      <dashboardNavbar />

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <StatCard title="Total Resumes" value="12" />

        <StatCard title="ATS Reports" value="8" />

        <StatCard title="Cover Letters" value="5" />

        <StatCard title="AI Credits" value="250" />

      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8">

        <QuickActions />

        <RecentResume />

        <RecentATS />

      </div>

    </div>
  );
}

export default dashboard;
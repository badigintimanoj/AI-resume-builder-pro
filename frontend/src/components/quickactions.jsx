function QuickActions() {
  return (
    <div className="bg-blue-900 rounded-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button className="bg-blue-500 p-4 rounded-xl">
          Create Resume
        </button>

        <button className="bg-blue-500 p-4 rounded-xl">
          ATS Checker
        </button>

        <button className="bg-blue-500 p-4 rounded-xl">
          Cover Letter
        </button>

        <button className="bg-blue-500 p-4 rounded-xl">
          AI Career
        </button>

      </div>

    </div>
  );
}

export default QuickActions;
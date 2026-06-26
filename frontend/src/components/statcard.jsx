function statCard({ title, value }) {
  return (
    <div className="bg-blue-900 rounded-xl p-6 shadow-xl">

      <h2 className="text-blue-300 text-lg">
        {title}
      </h2>

      <h1 className="text-4xl font-bold mt-3">
        {value}
      </h1>

    </div>
  );
}

export default statCard;
const templates = [
  {
    title: "ATS Professional",
    image: "https://placehold.co/350x450?text=ATS+Template",
  },
  {
    title: "Modern Blue",
    image: "https://placehold.co/350x450?text=Modern+Template",
  },
  {
    title: "Executive",
    image: "https://placehold.co/350x450?text=Executive",
  },
];

function Templates() {
  return (
    <section id="templates" className="py-20 px-10 bg-blue-900">

      <h2 className="text-5xl font-bold text-center mb-14">
        Resume Templates
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {templates.map((item, index) => (
          <div
            key={index}
            className="bg-blue-950 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <button className="mt-5 bg-blue-500 px-5 py-3 rounded-lg">
                Use Template
              </button>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Templates;
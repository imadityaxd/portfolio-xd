const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, interactive, and fast user interfaces using React, Tailwind CSS, and modern UI libraries.",
    icon: "🖥️",
  },
  {
    title: "Backend Development",
    description:
      "Creating scalable REST APIs using Node.js, Express, and MongoDB with authentication and data validation.",
    icon: "🛠️",
  },
  {
    title: "Full-Stack Integration",
    description:
      "Bringing frontend and backend together for seamless full-stack applications with clean code and performance in mind.",
    icon: "🌐",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-12">What I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-teal-400/40 transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

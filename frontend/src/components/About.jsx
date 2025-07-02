export default function AboutMe() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4" id="about">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/coding3.jpg"
            alt="About me"
            className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-teal-400 mb-4">About Me</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            I'm a passionate <span className="text-teal-300 font-medium">Computer Science student</span> with a deep
            interest in full-stack web development. I specialize in the{" "}
            <span className="text-teal-400 font-medium">MERN stack</span> — MongoDB, Express.js, React, and Node.js.
          </p>
          <p className="text-gray-400 mb-4">
            I love building scalable web apps and bringing ideas to life through code. I’m continuously learning,
            exploring new technologies, and contributing to projects that solve real-world problems.
          </p>
          <a
            href="#projects"
            className="inline-block mt-4 px-6 py-2 border border-teal-400 text-teal-400 hover:bg-teal-500 hover:text-black transition rounded-md"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

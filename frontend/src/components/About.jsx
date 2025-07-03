import React from 'react';
import profileImage from '/assets/coding3.jpg'; // update the path if needed
import { FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-[#0f172a] text-white py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={profileImage} 
            alt="Aditya Sharma" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-xl object-cover shadow-xl border-4 border-cyan-500"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-200 mb-4">
            About Me
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I’m a passionate Computer Science student with a strong focus on 
            <span className="text-white font-semibold"> full-stack web development</span>, 
            especially using the <span className="text-white font-semibold">MERN stack</span> — MongoDB, Express.js, React, and Node.js.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I love transforming ideas into responsive, scalable web applications and working on projects that solve real-world problems.
          </p>

          <ul className="space-y-3 mb-6">
            {[
              'Strong foundation in JavaScript, React, Node.js, MongoDB',
              'Comfortable with REST APIs, authentication, and database integration',
              'Experience with Git, GitHub, and collaborative workflows',
              'Quick learner — always exploring new frameworks and tools',
              'Open to internships, freelance work, and team collaborations'
            ].map((point, idx) => (
              <li key={idx} className="flex items-start text-gray-200">
                <FaCheckCircle className="text-cyan-400 mt-1 mr-2" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-400 italic">
            “Consistency beats talent.” I code with passion, and I’m always ready to build, learn, and grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

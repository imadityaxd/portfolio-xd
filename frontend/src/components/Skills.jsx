import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaPython, FaFlask, FaPepperHot } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-200" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Database', icon: <FaDatabase className="text-indigo-400" /> },
  { name: 'Python', icon: <FaPython className="text-indigo-600" /> },
  { name: 'Flask', icon: <FaPepperHot className="text-red-600" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-teal-200">My Tech Stack</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          I specialize in full-stack web development using the MERN stack along with modern web tools and best practices.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

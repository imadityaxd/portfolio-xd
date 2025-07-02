export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Brand or Name */}
        <div className="text-lg font-semibold text-white">
          © {new Date().getFullYear()} Aditya Sharma
        </div>

        {/* Center: Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#about" className="hover:text-teal-400 transition">About</a>
          <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
          <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
        </div>

        {/* Right: Socials */}
        <div className="flex space-x-4">
          <a href="https://github.com/imadityaxd" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-github text-xl"></i>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-white">
            <i className="fas fa-envelope text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

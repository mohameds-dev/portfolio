import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <img src="images/mo-hero-1.JPG" alt="Mohamed" className="hero-image" />

      <div className="hero-content">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
          Mohamed Abdelrahman
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          I am a Problem Solver, a Developer, and a Student.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/mohameds-dev/resume/blob/my-resume/Mohamed_Abdelrahman_Resume_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}

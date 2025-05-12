export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <img
        src="mo-hero-1.JPG"
        alt="Mohamed"
        className="absolute top-0 left-0 h-full object-contain opacity-30 pointer-events-none"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, black 50%, transparent 100%)",
          maskImage: "linear-gradient(to right, black 60%, transparent 100%)",
        }}
      />

      <div className="ml-[45%] max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
          Mohamed Abdelrahman
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
          I am a Problem Solver, a Developer, and a Student.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-delay-2">
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
        </div>
      </div>
    </section>
  );
}

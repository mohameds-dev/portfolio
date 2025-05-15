import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Mohamed Abdelrahman. All rights reserved.
          </p>
          <a
            href="https://github.com/mohameds-dev/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
          >
            <FaGithub className="text-xl" />
            <span className="text-sm">Source Code</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

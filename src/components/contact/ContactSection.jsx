import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiHackerrank } from "react-icons/si";
import { MdLocationOn, MdSchool } from "react-icons/md";
import { loadSocialLinks } from "@/utils/utils";

const ContactSection = () => {
  const socialLinks = loadSocialLinks();

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Get in Touch with Me
        </h2>

        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((link) => (
            <div key={link.name} className="group relative">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-600 hover:text-blue-600 transition-colors duration-300"
                aria-label={link.name}
              >
                <link.icon />
              </a>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-10">
                {link.name}
                <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-gray-800 rotate-45" />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <MdLocationOn className="text-2xl text-gray-600" />
            <span className="text-gray-700">Houston, TX</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <MdSchool className="text-2xl text-gray-600" />
            <span className="text-gray-700">
              Computer Science student @ University of Houston
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

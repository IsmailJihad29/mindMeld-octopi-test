import { socials } from "../constants";
import logoUrl from "../assets/logo.png"

const Footer = () => {
  return (
    <div className=" text-white py-16">
      <div className="container flex sm:flex-col md:flex-row justify-between items-center gap-10">
        {/* Logo Section */}
        <div className="flex items-center mb-6 md:mb-0">
          <img
            src={logoUrl} // Assuming logoUrl is the path to your logo image
            alt="Logo"
            className="w-16 h-auto"
          />
          <p className="ml-4 text-2xl font-bold">MindMeld AI</p>
        </div>

        {/* Copyright Section */}
        <p className="caption text-n-4">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* Social Icons Section */}
        <ul className="flex gap-5 flex-wrap justify-center md:justify-end">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-n-7 rounded-full flex items-center justify-center transition-colors hover:bg-n-6 hover:scale-110 transform duration-200"
            >
              <img
                src={item.iconUrl}
                alt={item.title}
                className="w-6 h-6"
              />
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import "./styles.css";
import { Button, IconButton } from "@material-tailwind/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { pages } from "../../helpers/linksHelper";

interface NavLinksProps {
  url: string;
  link_name: string;
}

function NavItem({ url, link_name }: NavLinksProps) {
  return (
    <li>
      <a href={url}>
        <p className="flex items-center gap-2 font-medium">
          {link_name}
        </p>
      </a>
    </li>
  );
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Handle scroll state change
  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full text-white ${
        isScrolling ? "bg-gray-900" : "bg-transparent"
      } transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a
          href="/"
          className="text-lg font-bold text-white font-dancing-script"
        >
          Anne & Lucas
        </a>
        
        <ul
          className={`hidden lg:flex items-center gap-6 ${
            isScrolling ? "text-white-500" : "text-white"
          }`}
        >
          {pages.map(({ id, page, href }) => (
            <NavItem key={id} url={href} link_name={page} />
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="text" color="white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Responder
          </Button>
        </div>
        
        <IconButton
          variant="text"
          onClick={handleToggle}
          className="ml-auto inline-block lg:hidden text-white"
          title="Toggle menu"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {isOpen ? (
            <FaTimes className="h-5 w-5" />
          ) : (
            <FaBars className="h-5 w-5 relative" />
          )}
        </IconButton>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 py-4 px-6 border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4">
            {pages.map(({ id, page, href }) => (
              <NavItem key={id} url={href} link_name={page} />
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
          <Button variant="text" color="white" placeholder="responder" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Responder
          </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import { IconButton } from "@material-tailwind/react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { IoApps } from "react-icons/io5";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <IconButton
        ripple="dark"
        color="white"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        className="h-20 w-20 border-0 rounded-full"
      >
        <AiOutlineMenu size="xl" color="grey" />
      </IconButton>
      <HiDocumentText color="#3696F3" className="h-16 w-16" />
      <h1 className="hidden md:inline-flex ml-2 text-gray-700 text-xl">Docs</h1>

      <div className="md:mx-20 flex flex-grow items-center p-5 py-2 bg-gray-100 text-gray-600 rounded-lg mx-5 focus-within:text-gray-600 focus-within:shadow-md">
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>
      <IconButton
        ripple="dark"
        color="white"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        className="ml-5 md:ml-20 h-20 w-20 border-0 rounded-full"
      >
        <IoApps size="xl" color="grey" />
      </IconButton>

      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src="https://avatars.githubusercontent.com/u/72367851?v=4"
        alt="profile"
      />
    </div>
  );
};

export default Header;

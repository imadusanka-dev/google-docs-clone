import { IoApps } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import { HiDocumentText } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <IconButton
        ripple={true}
        color="white"
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
        ripple={true}
        color="white"
        className="ml-5 md:ml-20 h-20 w-20 border-0 rounded-full"
      >
        <IoApps size="xl" color="grey" />
      </IconButton>

      <Menu>
        <MenuHandler>
          <img
            loading="lazy"
            className="cursor-pointer h-12 w-12 rounded-full ml-2"
            src={session?.user?.image}
            alt="profile"
          />
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={() => signOut()}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </header>
  );
};

export default Header;

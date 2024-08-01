import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "./ui/separator";
import { NavCategory } from "./NavCategory";
import { AvatarNav } from "./AvatarNav";

export default function Navbar() {
  return (
    <nav className="w-full flex px-8 gap-3 items-center justify-between relative">
      <div>
        <Link href="/">
          <img src="/letter-s.png" alt="Home Logo" className="w-10" />
        </Link>
      </div>
      <div className="flex bg-light px-3 rounded-xl w-[80%] fixed z-50 top-4 left-1/2 transform -translate-x-1/2 items-center">
        <div className="flex gap-3 rounded-lg w-[87%] mr-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5" />
          <form id="search-form" className="w-full">
            <input
              type="text"
              name="search_query"
              placeholder="Search Something"
              className="focus:outline-none bg-light py-3 rounded-sm text-sm w-full"
            />
          </form>
        </div>
        <Separator
          orientation="vertical"
          className="bg-gray-300 h-[24px] mx-2"
        />
        <NavCategory />
      </div>
      <div className="ml-2 relative">
        <AvatarNav />
      </div>
    </nav>
  );
}

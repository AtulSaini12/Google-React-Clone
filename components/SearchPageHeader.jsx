import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function SearchPageHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex p-6 w-full items-center">
        <Image
          className="cursor-pointer"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdf3QDiKQyYcy7ZoeHjAouLn6WBsewFezAeg&usqp=CAU"
        />

        <form
          className="flex border border-gray-200 rounded-full
        shadow-lg max-w-3xl flex-grow items-center px-6 py-3 ml-10 mr-5
      "
        >
          <input
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition 
             duration-100 transform hover:scale-125
                sm:mr-3
             "
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />
          <MicrophoneIcon
            className="h-6 mr-3 hidden sm:inline-flex
              text-blue-500 border-l-2 pl-4
               border-gray-300
             "
          />
          <SearchIcon
            className="h-6 text-blue-500 hidden
               sm:inline-flex mr-3
             "
          />

          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar
          url="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
          classname="ml-auto"
        />
      </div>

      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
}

export default SearchPageHeader;

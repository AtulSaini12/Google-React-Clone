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
          src="data:image/jpeg;base64,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"
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

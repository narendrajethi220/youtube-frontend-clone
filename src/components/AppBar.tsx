import { SearchBar } from "./SearchBar";

export const AppBar = () => {
  return (
    <div className="flex justify-between pt-2 p-3">
      <div className="text-md inline-flex items-center pb-2">
        <button>
          <img className="w-15 h-15" src="/logo.png" alt="youtube logo" />
        </button>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="inline-flex items-center border-2 border-zinc-600 rounded-full p-0 px-4 cursor-pointer flex justify-between hover:bg-blue-950 hover:border-blue-950 ">
        <img
          className="rounded-full mb-1 mr-1 h-6 w-6"
          src="/user.svg"
          alt="user"
        />
        <p className="text-sky-400"> Sign in</p>
      </div>
    </div>
  );
};

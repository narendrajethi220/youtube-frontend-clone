export const SearchBar = () => {
  return (
    <div>
      <div className="w-auto flex text-white border border-zinc-800 rounded-3xl pl-3  text-md ">
        <input
          type="search"
          id="default-search"
          className="w-96  bg-black border-none outline-none m-1 "
          placeholder="Search"
          required
        />
        <button
          type="submit"
          className="bg-zinc-800 text-white font-bold py-3 px-6 rounded-r-3xl inline-flex"
        >
          <svg
            className="w-4 h-4 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

import { Search } from "../../assets/images";

const Input = () => {
  return (
    <div className="relative">
      <input
        className="w-full py-2 px-4 rounded-full border border-solid border-slate-400 outline-none"
        type="text"
        placeholder="Serach keywork or part number"
      />
      <span className="absolute right-4 top-2">
        <Search />
      </span>
    </div>
  );
};

export default Input;

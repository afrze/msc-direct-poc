import { Search } from "../../assets/icons";

const Input = () => {
  return (
    <div className="relative">
      <input
        className="w-full p-3 rounded-full border border-solid border-slate-400 outline-none"
        type="text"
        placeholder="Serach keywork or part number"
      />
      <span className="absolute right-1 top-2">
        <Search />
      </span>
    </div>
  );
};

export default Input;

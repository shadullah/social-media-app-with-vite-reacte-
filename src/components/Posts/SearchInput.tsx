import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const SearchInput = ({ searchTerm, onSearch }: SearchBarProps) => {
  return (
    <div className="flex items-center p-4">
      <input
        type="text"
        placeholder=" filter by username.."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 my-4 bg-gray-900 border rounded-lg"
      />
      <div className="w-10 h-10 pl-3 flex items-center bg-gray-800 rounded-lg">
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchInput;

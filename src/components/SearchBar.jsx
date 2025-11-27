const SearchBar = ({ city, setCity }) => (
  <input
    type="text"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    placeholder="Enter city"
  />
);

export default SearchBar;
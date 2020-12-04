export default function SourceFilters({ handleFilter, filteredArray }) {
  return (
    <div>
      <select onChange={handleFilter}>
        {["ALL", ...filteredArray].map((filtered) => (
          <option key={filtered} value={filtered}>
            {filtered}
          </option>
        ))}
      </select>
    </div>
  );
}

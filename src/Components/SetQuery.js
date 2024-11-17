const SetQuery = ({ searchText }) => {
  return (
    <div>
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={searchText}
        />
      </div>
    </div>
  );
};

export default SetQuery;

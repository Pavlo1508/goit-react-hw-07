import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.filters.name);

  const handleSearchChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter name"
        />
      </label>
    </div>
  );
};

export default SearchBox;

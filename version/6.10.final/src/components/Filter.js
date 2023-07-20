import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const filterText = useSelector((state) => state.filter);

  const handleChange = (event) => {
    const text = event.target.value;
    dispatch(setFilterText(text));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} value={filterText} />
    </div>
  );
};

export default Filter;

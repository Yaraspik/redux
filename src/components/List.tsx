import { useDispatch, useSelector } from "react-redux";
import { Item } from "../types/Types";
import { clearUserValue, setUserValue, deleteItem } from "../redux/actionsWrapper";
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { matchSorter } from 'match-sorter';

const Form = () => {
  const list = useSelector((state: { listReducer: Array<Item> }) => state.listReducer);
  const { id } = useSelector((state: { userValueReducer: Item }) => state.userValueReducer);
  const filterValue = useSelector((state: { searchReducer: string }) => state.searchReducer);
  const dispatch = useDispatch();

  const removeHandler = (item: Item) => {
    dispatch(deleteItem(item));
    if (id === item.id) {
      dispatch(clearUserValue());
    }
  }

  return (
    <ListGroup>
      {matchSorter(list, filterValue, { keys: ['title', 'price'] }).map((item) =>
        <ListGroup.Item key={item.id} className="list-item">
          <div>
            {`${item.title} ${item.price}₽`}
          </div>
          <ButtonGroup>
            <Button variant="light" onClick={() => dispatch(setUserValue(item))}>✎</Button>
            <Button variant="light" onClick={() => removeHandler(item)}>✕</Button>
          </ButtonGroup>
        </ListGroup.Item>)}
    </ListGroup>
  );
}

export default Form;
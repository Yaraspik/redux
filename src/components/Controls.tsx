import { useDispatch, useSelector } from "react-redux";
import { Item } from "../types/Types";
import { clearUserValue, editItem, addItem, setUserValue, setSearchValue, clearSearchValue } from "../redux/actionsWrapper";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Controls = () => {
  const item = useSelector((state: { userValueReducer: Item }) => state.userValueReducer);
  const searchValue = useSelector((state: { searchReducer: string }) => state.searchReducer);
  const dispatch = useDispatch();

  const changeHandler = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
    dispatch(setUserValue({
      ...item,
      [name]: value,
    }));
  }

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (item.id) {
      dispatch(editItem(item));
    } else {
      dispatch(addItem(item));
    }
    dispatch(clearUserValue());
  }

  const searchHandler = ({ target: { value } }: { target: { value: string } }) => {
    dispatch(setSearchValue(value));
  }

  return (
    <Form onSubmit={submitHandler}>
      <InputGroup className="mb-3">
        <FloatingLabel
          label="Название"
        >
          <Form.Control
            type="text"
            value={item.title}
            onChange={changeHandler}
            name="title"/>
        </FloatingLabel>
        <FloatingLabel
          label="Стоимость"
        >
          <Form.Control
            type="text"
            value={item.price}
            onChange={changeHandler}
            name="price"/>
        </FloatingLabel>
          {item.title !== "" || item.price !== "" ?
            <>
              <ButtonGroup className="ms-2">
              <Button
                variant="success"
                type="submit">
                Сохранить
              </Button>
              <Button
                variant="danger"
                className="form__cancel"
                onClick={() => dispatch(clearUserValue())}
                type='button'>
                Отмена
              </Button>
              </ButtonGroup>
            </> :
            null}
      </InputGroup>
      <InputGroup className="mb-3">
        <FloatingLabel
          label="Поиск"
        >
          <Form.Control
            type="text"
            value={searchValue}
            onChange={searchHandler}
            name="search"/>
        </FloatingLabel>
        {searchValue !== "" ? <Button
          onClick={() => dispatch(clearSearchValue())}
          variant="light"
          type="button">
          ✕
        </Button> : null}
      </InputGroup>
    </Form>
  );
}

export default Controls;
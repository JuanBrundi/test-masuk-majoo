import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

//ACTIONS
import { getData } from "../store/actions";

//COMPONENTS
import TableList from "./reusable/TableList";
import RenderCreateButton from "./CreateButton";

const TodoList = () => {
  const dispatch = useDispatch();
  const { loading, data, error, editedData, finishedList, unfinishedList } = useSelector(state => state.todoList)

  useEffect(() => {
    dispatch(getData())
  }, []);

  return (
    <Container>
      <TableList titleHeader={"Unfinished Todo List"} loading={loading} list={unfinishedList} />
      <TableList titleHeader={"Finished Todo List"} loading={loading} list={finishedList} />
      <RenderCreateButton />
    </Container>
  )
}

export default TodoList;

import FormModalWrapper from "./modal/FormModalWrapper";
import { createNewList } from "../store/actions";

const RenderCreateButton = () => {
  return (
    <FormModalWrapper
      actionName="Create"
      modalTitle="Add new todo"
      text="Create this todo list?"
      actions={createNewList}
    />
  )
}

export default RenderCreateButton;
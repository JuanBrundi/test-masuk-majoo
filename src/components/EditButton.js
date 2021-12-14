import FormModalWrapper from "./modal/FormModalWrapper";
import { editTodo } from "../store/actions";

const RenderEditButton = ({ id }) => {
  return (
    <FormModalWrapper
      modalTitle="Edit todo"
      text="Edit this list?"
      actions={editTodo}
      id={id}
      actionName={"Edit"}
      idEdit={true}
    />
  )
}

export default RenderEditButton;
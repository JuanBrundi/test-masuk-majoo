import { useDispatch } from "react-redux";

import ConfirmationButton from "./modal/ConfirmationModal";

import { removeList } from "../store/actions";

const RenderDeleteButton = ({ id }) => {
  const dispatch = useDispatch()

  const deleteBList = () => {
    dispatch(removeList(id))
  }

  return (<ConfirmationButton actionName="Delele" text="Are you sure you want to delete this?" onClick={() => deleteBList()} />)
}

export default RenderDeleteButton;
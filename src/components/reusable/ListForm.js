import { useState, useEffect } from "react";
import { Button, Form, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";

import InputText from "./InputText";
import SelectForm from "./SelectForm";

import { createNewList } from "../../store/actions";

const RenderListForm = ({ onHide }) => {
  const dispatch = useDispatch()
  const { editedData } = useSelector(state => state.todoList)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("")

  const handleSetTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleSetDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleSetStatus = (e) => {
    setStatus(e.target.value === null ? e.target.value : Number(e.target.value))
  }

  const isFulfilled = () => {
    let fulfilled = true;

    if (!title) (fulfilled = false)
    if (!description) (fulfilled = false)
    if (status === null) (fulfilled = false)

    return fulfilled
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = {
      createdAt: new Date(),
      description,
      status,
      title,
      id: Math.round(Math.random() * 1000)
    }
    dispatch(createNewList(newList))

    onHide && onHide()
  }

  useEffect(() => {
    if (editedData.length > 0) {
      const { title, description, status } = editedData[0] || {}
      setTitle(title)
      setDescription(description)
      setStatus(status)
    }
  }, [editedData])

  return (
    <Form>
      <Col className="mb-2 mt-2">
        <InputText type={"text"} onChangeText={handleSetTitle} value={title} text={"title"} />
        <InputText type={"textarea"} onChangeText={handleSetDescription} value={description} text={"description"} />
        <SelectForm type={"number"} onChangeText={handleSetStatus} value={status} text={"status"} />
      </Col>
      <Button onClick={handleSubmit} disabled={!isFulfilled()} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default RenderListForm;
